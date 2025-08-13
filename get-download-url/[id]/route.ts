import { NextRequest, NextResponse } from "next/server";

// This stays server-side only - users cannot see this
const downloadMappings: Record<string, string> = {
  "Raidin-Pro": "https://digitservz.dz/downloads/RaidinPro.apk",
  Raidin: "https://digitservz.dz/downloads/Raidin.apk",
  // Add more mappings here
};

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Get the actual download URL (server-side only)
    const actualUrl = downloadMappings[id];

    if (!actualUrl) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Log download attempt
    console.log(`Download URL requested for: ${id}`);

    // Return the actual URL to the client
    return NextResponse.json({
      downloadUrl: actualUrl,
      filename: `${id}.apk`,
    });
  } catch (error) {
    console.error("Download URL error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
