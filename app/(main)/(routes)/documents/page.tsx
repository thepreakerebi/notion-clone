"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = async () => {
    try {
      const promise = create({
        title: "Untitled",
      });

      await toast.promise(promise, {
        loading: "Creating a new note...",
        success: "New note created!",
        error: "Failed to create new note.",
      });
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src="/empty-light.svg"
        alt="illustration of people writing"
        height={"300"}
        width={"300"}
        className="dark:hidden object-contain"
      />
      <Image
        src="/empty-dark.svg"
        alt="illustration of people writing"
        height={"300"}
        width={"300"}
        className="hidden dark:block object-contain"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion!
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" /> Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
