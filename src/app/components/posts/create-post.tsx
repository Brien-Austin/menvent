"use client";
import * as z from "zod";
import { createPost } from "@/app/actions/post";
import { ChevronDown, Globe, UserCircle2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

interface CreatePostProps {
  userId: string;
}

const formSchema = z.object({
  postText: z.string().min(10, {
    message: "Post has to be at least a sentence",
  }),
  isPublic: z.boolean(),
});

const CreatePost: React.FC<CreatePostProps> = ({ userId }) => {
  const router = useRouter();
  const [isPublic, setIsPublic] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postText: "",
      isPublic: true,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (userId) {
        await createPost(userId, values.postText, values.isPublic);
        toast.success("Post created successfully");
        form.reset();
        router.push("/");
      }
    } catch (error) {
      console.log("[POST_CREATION_ERROR]", error);
      toast.error("Something went wrong");
    }
  };

  const toggleVisibility = (newVisibility: boolean) => {
    setIsPublic(newVisibility);
    form.setValue("isPublic", newVisibility);
    setIsDialogOpen(false);
  };

  return (
    <article className="mt-3 lg:w-3/5 sm:w-full border shadow-md lg:-[28rem] sm:h-full rounded-xl bg-[#161616] p-5 relative">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full ring-2 ring-white relative overflow-hidden">
          <Image
            src={"https://api.dicebear.com/7.x/avataaars/svg?seed=1"}
            fill
            alt="profile"
            className="object-cover"
          />
        </div>

        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger>
            <div className="text-sm flex items-center gap-1 text-neutral-100 px-2 cursor-pointer py-1 bg-neutral-800 rounded-full">
              {isPublic ? (
                <>
                  <Globe size={15} /> Public
                </>
              ) : (
                <>
                  <UserCircle2 size={15} /> Anonymous
                </>
              )}
              <span>
                <ChevronDown size={15} />
              </span>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Choose Post Visibility</AlertDialogTitle>
              <AlertDialogDescription>
                Select how you want to share your post
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <Button
                variant={isPublic ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => toggleVisibility(true)}
              >
                <Globe size={15} />
                Public
                <span className="text-sm text-neutral-400">
                  - Visible to everyone
                </span>
              </Button>
              <Button
                variant={!isPublic ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => toggleVisibility(false)}
              >
                <UserCircle2 size={15} />
                Anonymous
                <span className="text-sm text-neutral-400">
                  - Your name won &apos; t be shown
                </span>
              </Button>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <form className="mt-6" onSubmit={form.handleSubmit(onSubmit)}>
        <textarea
          autoComplete="on"
          autoFocus
          className="resize-none placeholder-gray-400 bg-[#161616] focus:outline-none w-full text-xl h-72 p-3"
          placeholder="Say something ...."
          {...form.register("postText")}
        />
        <button
          type="submit"
          className="absolute bottom-5 flex items-center gap-2 right-5 border px-3 cursor-pointer py-1 rounded-full bg-purple-700"
        >
          Post
        </button>
      </form>
    </article>
  );
};

export default CreatePost;