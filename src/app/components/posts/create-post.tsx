"use client";
import * as z from "zod";
import { createPost } from "@/app/actions/post";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface CreatePostProps {
  userId: string;
}

const formSchema = z.object({
  postText: z.string().min(10, {
    message: "Post has to be atleast a sentence ",
  }),
});
const CreatePost: React.FC<CreatePostProps> = ({ userId }) => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postText: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (userId) {
        await createPost(userId, values.postText);

        toast.success("Post created successfully");
        form.reset();
        router.push("/")
      }
    } catch (error) {
      console.log("[POST_CREATION_ERROR]", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <article className="mt-3 lg:w-3/5 sm:w-full border shadow-md  h-[28rem] rounded-xl bg-[#161616] p-5 relative">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full ring-2 ring-white relative overflow-hidden">
          <Image
            src={"https://api.dicebear.com/7.x/avataaars/svg?seed=1"}
            fill
            alt="profile"
            className="object-cover"
          />
        </div>
        <div className="text-sm flex items-center gap-1 text-neutral-100 px-2 cursor-pointer py-1 bg-neutral-800 rounded-full">
          <Globe size={15} /> Public{" "}
          <span>
            <ChevronDown size={15} />
          </span>
        </div>
      </div>
      <form className="mt-6" onSubmit={form.handleSubmit(onSubmit)}>
        <textarea
          className="resize-none placeholder-gray-400 bg-[#161616] focus:outline-none w-full text-xl h-72 p-3"
          placeholder="Say something ...."
          {...form.register("postText")}
        />
        <button
          type="submit"
          className="absolute bottom-5 flex items-center gap-2  right-5  border px-3 cursor-pointer py-1 rounded-full bg-purple-700"
        >
          Post
        </button>
      </form>
    </article>
  );
};

export default CreatePost;
