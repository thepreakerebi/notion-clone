"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useParams } from "next/navigation";
import React from "react";
import Toolbar from "@/components/toolbar";
import Cover from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";

// Remove the DocumentIdPageProps interface if it exists

const DocumentIdPage = () => {
  const params = useParams();
  const documentId = params.documentId as string;

  const document = useQuery(api.documents.getByID, {
    documentId: documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="w-[50%] h-14" />
            <Skeleton className="w-[80%] h-4" />
            <Skeleton className="w-[40%] h-4" />
            <Skeleton className="w-[60%] h-4" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40 ">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
