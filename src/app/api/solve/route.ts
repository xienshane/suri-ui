import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

export async function POST(req: NextRequest) {
  const { expression } = await req.json();

  if (!expression || typeof expression !== "string") {
    return NextResponse.json({ error: "No expression provided" }, { status: 400 });
  }

  // mathsteps-runner is inside /app, so path is app/mathsteps-runner/runner.js
  const runnerPath = path.join(process.cwd(), "src", "app", "mathsteps-runner", "runner.js");

  return new Promise<NextResponse>((resolve) => {
    const child = spawn("node", [runnerPath, expression]);

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data: Buffer) => { stdout += data.toString(); });
    child.stderr.on("data", (data: Buffer) => { stderr += data.toString(); });

    child.on("close", (code: number) => {
      if (code !== 0) {
        try {
          resolve(NextResponse.json({ error: JSON.parse(stderr).error ?? "Runner failed" }, { status: 500 }));
        } catch {
          resolve(NextResponse.json({ error: stderr || "Runner failed" }, { status: 500 }));
        }
        return;
      }
      try {
        resolve(NextResponse.json(JSON.parse(stdout)));
      } catch {
        resolve(NextResponse.json({ error: "Failed to parse runner output" }, { status: 500 }));
      }
    });
  });
}