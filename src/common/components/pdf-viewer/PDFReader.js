import React, { useState } from 'react';
// import Loader from './Loader';
import { useMediaQuery } from 'react-responsive';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = ({ pdfFile }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [scale, setScale] = useState(isMobile ? 0.8 : 1.0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    // const [isLoading, setIsLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        // setIsLoading(false);
    }

    return (
        <div>
            {/* <Loader isLoading={isLoading} /> */}
            <section id="pdf-section" className="d-flex flex-column align-items-center w-100">
                <ControlPanel
                    scale={scale}
                    setScale={setScale}
                    numPages={numPages}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    file={pdfFile}
                />
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        customTextRenderer={false}
                        pageNumber={pageNumber}
                        scale={scale}
                    />
                </Document>
            </section>
        </div>
    );
};

export default PDFReader;
