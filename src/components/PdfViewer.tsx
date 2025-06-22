"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Loader from "./Loader";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log("PDF Document Loaded Successfully!");
    setNumPages(numPages);
  }

  function onDocumentLoadProgress() {
    return <div className="flex flex-col items-center w-full">Loading Resume...<Loader /></div>;
  }

  return (
    <div className="flex flex-col items-center w-full md:overflow-visible overflow-x-auto px-0">
      <div className="min-w-0 w-full">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={onDocumentLoadProgress}
          className="w-full flex justify-center"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} className="w-full flex justify-center mb-4">
              <Page
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                scale={1.5} // Adjust scale as needed for optimal viewing
                className="shadow-lg"
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
} 