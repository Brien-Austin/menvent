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
  const { data: session } = useSession();
  useEffect(() => {
    async function fetchUser() {
      const user = await getUserId();
      setCurrentUser(user);
    }

    fetchUser();
  }, [session]);

  console.log("Session", session);
  console.log(likedData);
  console.log(currentUser);
  const isLiked = likedData?.some((like) => like.userId === currentUser);

  useEffect(() => {
    const updateTime = () => {
      setTime(timePosted(postedTime.toString()));
    };
    updateTime();
    const interval = setInterval(updateTime, 6000);
    return () => clearInterval(interval);
  }, [postedTime]);
  return (
    <article className="border border-gray-200 dark:border-gray-800 p-4 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full overflow-hidden relative">
          <Image
            src={profileUrl}
            alt={username}
            width={40}
            height={40}
            className="object-cover"
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
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
          {postText}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-6">
          <button
            onClick={() => toggleLike(id)}
            className={`flex items-center gap-2 ${
              isLiked
                ? "text-pink-500 dark:text-pink-400"
                : "text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            } transition-colors`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            <span className="text-sm">{likes}</span>
          </button>

          {/* Comments */}
          <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-300 dark:hover:text-purple-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{comments}</span>
          </button>
        </div>

        {/* Share */}
        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
};

export default PostCard;
