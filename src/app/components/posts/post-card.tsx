"use client";
import { Post } from "@/app/types/post";
import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { timePosted } from "@/app/utils/time-posted";
import { useEffect, useState } from "react";
import { toggleLike } from "@/app/actions/post";
import { useSession } from "next-auth/react";
import { getUserId } from "@/app/actions/profile";

const PostCard: React.FC<Post> = ({
  username,
  id,
  postText,
  profileUrl,
  postedTime,
  likedData,
  likes,
  comments,
}) => {
  const [time, setTime] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<string>();
  const [optimisticallyLiked, setOptimisticallyLiked] = useState<boolean>(false);
  const [optimisticLikeCount, setOptimisticLikeCount] = useState<number>(likes || 0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: session, status } = useSession();


  useEffect(() => {
    async function fetchUser() {
      if (status === "authenticated") {
        try {
          const user = await getUserId();
          setCurrentUser(user);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    }

    fetchUser();
  }, [status]);


  useEffect(() => {
    const isLiked = likedData?.some((like) => like.userId === currentUser);
    setOptimisticallyLiked(isLiked || false);
  }, [currentUser, likedData]);

  
  useEffect(() => {
    const updateTime = () => {
      setTime(timePosted(postedTime.toString()));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); 
    return () => clearInterval(interval);
  }, [postedTime]);

  const handleLikeClick = async () => {
    if (!session || isLoading) return;
  
    setIsLoading(true);
  
  
    const newLikeState = !optimisticallyLiked;
    setOptimisticallyLiked(newLikeState);
    setOptimisticLikeCount((prev) => newLikeState ? prev + 1 : prev - 1);
  
    try {
   
      await toggleLike(id);
    } catch (error) {
      console.error("Error toggling like:", error);
  
      
      setOptimisticallyLiked(!newLikeState);
      setOptimisticLikeCount((prev) => newLikeState ? prev - 1 : prev + 1);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Post by ${username}`,
        text: postText,
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <article className="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full overflow-hidden relative">
          <Image
            src={profileUrl}
            alt={`${username}'s profile picture`}
            width={40}
            height={40}
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 dark:text-gray-100">
            {username}
          </h2>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap break-words">
          {postText}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-6">
          <button
            onClick={handleLikeClick}
            disabled={!session || isLoading}
            className={`flex items-center gap-2 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            } ${
              optimisticallyLiked
                ? "text-pink-500 dark:text-pink-400"
                : "text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            } transition-colors`}
          >
            <Heart
              className={`w-5 h-5 ${optimisticallyLiked ? "fill-current" : ""}`}
            />
            <span className="text-sm">{optimisticLikeCount}</span>
          </button>

          <button 
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-300 dark:hover:text-purple-400 transition-colors"
            aria-label="Comments"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{comments}</span>
          </button>
        </div>

        <button 
          onClick={handleShare}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          aria-label="Share post"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
};

export default PostCard;