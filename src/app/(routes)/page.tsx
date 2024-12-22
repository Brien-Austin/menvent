"use client";
import React, { useEffect, useState } from "react";

import PostCard from "../components/posts/post-card";

import { getPosts } from "../actions/post";
import { PostType } from "../types/post";
import Hero from "../components/layout/hero";

const App = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const newPosts = await getPosts();
    setPosts(newPosts);
  };



  const POLLING_INTERVAL = 3000;


  useEffect(() => {
    fetchPosts();

    const interval = setInterval(fetchPosts, POLLING_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (posts.length === 0) {
    return (
      <main className="p-5">
        <div className="flex flex-col w-full gap-5">
          <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
          <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
          <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
          <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
          <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
          <div className="h-32 w-full animate-pulse bg-[#161616] rounded-lg"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="  flex flex-col mt-20 gap-4 mb-20 sm:p-5 lg:p-0">
      <div className="sm:fixed lg:hidden top-0 z-50 left-0 h-20 w-full backdrop-blur-lg  bg-[#161616] bg-opacity-40">
  <div className="pt-6 px-5">
    <Hero text="Terovent" />
  </div>
</div>

      {posts.map((p, i) => (
        <PostCard
        isAnonymous= {p.isAnonymous}
          likedData={p.likes}
          key={i}
          id={p.id}
          userId={p.userId}
          postedTime={p.createdAt}
          username={p.user.name!}
          profileUrl={p.user.image!}
          postText={p.postText!}
          likes={p.likes?.length}
          comments={p.comments?.length}
        />
      ))}
    </main>
  );
};

export default App;
