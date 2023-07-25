// PdfViewer.js

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumeNew from '../resources/resumeNew.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

const PdfViewer = () => {

  return (
    <div>
      <div style={{ width: 700, height:100}}>
        <Document file={resumeNew} height={100}>
          <Page pageNumber={1} width={700} renderTextLayer={false} renderAnnotationLayer={false} height={100}/>
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
