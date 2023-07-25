import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumeNew from '../resources/resumeNew.pdf';

// Import the worker separately (ES modules version)


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PdfViewer = () => {
  return (
    <div>
      <div style={{ width: 700 }}>
        <Document file={resumeNew}>
          <Page pageNumber={1} width={700} renderTextLayer={false} renderAnnotationLayer={false}  />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
