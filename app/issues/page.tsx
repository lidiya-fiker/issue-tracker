"use client";
import React from "react";
import { Button } from "@mantine/core";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
