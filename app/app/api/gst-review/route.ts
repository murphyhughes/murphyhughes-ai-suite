import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

interface GSTReviewResponse {
  status: string;
  entity?: string;
  period?: string;
  gstPayable?: number;
  risk?: string;
  summary?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Validate OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;

    // If there's no real API key (for example a placeholder), return a demo JSON immediately
    if (!apiKey || !apiKey.startsWith("sk-")) {
      const demo: GSTReviewResponse = {
        status: "success",
        entity: "Demo Client Ltd",
        period: "May 2026",
        gstPayable: 12500,
        risk: "Low",
        summary: "Demo response from OpenAI",
      };
      return NextResponse.json(demo);
    }

    // Initialize OpenAI client
    const openai = new OpenAI({ apiKey });

    // Call OpenAI Responses (chat) API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: `Generate a GST review response in JSON format. Return ONLY valid JSON with no additional text or markdown formatting.\n{\n  "status": "success",\n  "entity": "Demo Client Ltd",\n  "period": "May 2026",\n  "gstPayable": 12500,\n  "risk": "Low",\n  "summary": "Demo response from OpenAI"\n}`,
        },
      ],
      temperature: 0.0,
    });

    // Extract response text
    const responseText = completion.choices?.[0]?.message?.content || "";

    // Parse JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No JSON found in OpenAI response");
    }

    const gstReview: GSTReviewResponse = JSON.parse(jsonMatch[0]);
    return NextResponse.json(gstReview);
  } catch (error) {
    console.error("Error generating GST review:", error);

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid JSON in response",
        },
        { status: 500 }
      );
    }

    // Handle OpenAI API errors
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        {
          status: "error",
          message: `OpenAI API error: ${error.message}`,
        },
        { status: 500 }
      );
    }

    // Generic error handling
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to generate GST review",
      },
      { status: 500 }
    );
  }
}
