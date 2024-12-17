import { Issues } from "@/app/entities/issues";
import { AppDataSource } from "@/app/data-source"; // Update this path as per your project structure
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description } = await request.json();

    console.log("Received issue:", { title, description });

    const issueRepository = AppDataSource.getRepository(Issues);

    const newIssue = issueRepository.create({ title, description });

    const savedIssue = await issueRepository.save(newIssue);

    return NextResponse.json({ savedIssue });
  } catch (error) {
    console.error("Error creating issue:", error);
    return NextResponse.json(
      { message: "Failed to create issue", error },
      { status: 500 },
    );
  }
}
