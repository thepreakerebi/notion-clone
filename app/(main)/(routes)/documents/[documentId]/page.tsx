"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useParams } from "next/navigation";
import React from "react";
import Toolbar from "@/components/toolbar";

// Remove the DocumentIdPageProps interface if it exists

const DocumentIdPage = () => {
  const params = useParams();
  const documentId = params.documentId as string;

  const document = useQuery(api.documents.getByID, {
    documentId: documentId as Id<"documents">,
  });

  if (document === undefined) {
    return <div>Loading...</div>;
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40 ">
      <div className="h-[35vh]" />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
