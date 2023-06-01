/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const PDFPrinter = ({ file }) => {
    const print = () => {
        const pdfFrame = document.createElement('iframe');
        pdfFrame.style.visibility = 'hidden';
        pdfFrame.src = file;

        document.body.appendChild(pdfFrame);

        pdfFrame.contentWindow.focus();
        pdfFrame.contentWindow.print();
    };
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    return <i className="fas fa-print clickable" onClick={print} title="print" />;
};

export default PDFPrinter;
