"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

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
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" /> Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
