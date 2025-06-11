import { NextResponse } from 'next/server';
import { siteConfig } from '../../../content';

export async function GET() {
  try {
    const pdfUrl = siteConfig.about.resumeUrl_pdf;
    if (!pdfUrl) {
      return new NextResponse("Resume PDF URL not configured.", { status: 404 });
    }

    const response = await fetch(pdfUrl);

    if (!response.ok) {
      console.error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
      return new NextResponse(`Failed to fetch PDF: ${response.statusText}`, { status: response.status });
    }

    // Ensure the content type is application/pdf
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/pdf');

    // Return the PDF directly as a stream
    return new NextResponse(response.body, { status: 200, headers });
  } catch (error) {
    console.error("Error proxying PDF:", error);
    return new NextResponse("Internal Server Error proxying PDF.", { status: 500 });
  }
} 