"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable = true }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Initialize the editor with the initial content if available
  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
  });

  // Set up the onChange handler
  useEffect(() => {
    if (!editor) return;

    const handleChange = () => {
      const jsonContent = JSON.stringify(editor.document);
      onChange(jsonContent);
    };

    // Add the change listener
    editor.onEditorContentChange(handleChange);

    // Return cleanup function - for this version we don't need to explicitly remove the listener
    // as the editor will be destroyed when the component unmounts
    return () => {
      // Cleanup will happen automatically when component unmounts
    };
  }, [editor, onChange]);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="pt-4">
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
