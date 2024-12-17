import { Button, Textarea, TextInput } from "@mantine/core";
import React from "react";

function NewIssuePage() {
  return (
    <div className="max-w-xl space-y-3">
      <TextInput placeholder="Title" />
      <Textarea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
}

export default NewIssuePage;
