"use client";
import { Button, TextInput } from "@mantine/core";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";


const SimpleMDEEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

function NewIssuePage() {
  return (
    <div className="max-w-xl space-y-3">
      <TextInput placeholder="Title" />
      <SimpleMDEEditor placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
}

export default NewIssuePage;
