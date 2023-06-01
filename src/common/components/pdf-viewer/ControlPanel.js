/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PDFPrinter from './PDFPrinter';
import { useMediaQuery } from 'react-responsive';

const ControlPanel = (props) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const { file, pageNumber, numPages, setPageNumber, scale, setScale } = props;

    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === numPages;

    const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
    const lastPageClass = isLastPage ? 'disabled' : 'clickable';

    const goToFirstPage = () => {
        if (!isFirstPage) setPageNumber(1);
    };
    const goToPreviousPage = () => {
        if (!isFirstPage) setPageNumber(pageNumber - 1);
    };
    const goToNextPage = () => {
        if (!isLastPage) setPageNumber(pageNumber + 1);
    };
    const goToLastPage = () => {
        if (!isLastPage) setPageNumber(numPages);
    };

    const onPageChange = (e) => {
        const { value } = e.target;
        setPageNumber(Number(value));
    };

    const isMinZoom = scale < 0.6;
    const isMaxZoom = scale >= 2.0;

    const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
    const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

    const zoomOut = () => {
        if (!isMinZoom) setScale(scale - 0.1);
    };

    const zoomIn = () => {
        if (!isMaxZoom) setScale(scale + 0.1);
    };

    const style = {
        pdfControl: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexDirection: isMobile ? 'column' : 'row',
            backgroundColor: '#f1f1f1',
            padding: '10px'
        }
    };
    return (
        <div className="control-panel" style={style.pdfControl}>
            <div className="d-flex justify-content-between align-items-baseline">
                <i className={`fas fa-fast-backward mx-3 ${firstPageClass}`} onClick={goToFirstPage} />
                <i className={`fas fa-backward mx-3 ${firstPageClass}`} onClick={goToPreviousPage} />
                <span>
                    Page{' '}
                    <input
                        name="pageNumber"
                        type="number"
                        min={1}
                        max={numPages || 1}
                        className="p-0 pl-1 mx-2"
                        value={pageNumber}
                        onChange={onPageChange}
                    />{' '}
                    of {numPages}
                </span>
                <i className={`fas fa-forward mx-3 ${lastPageClass}`} onClick={goToNextPage} />
                <i className={`fas fa-fast-forward mx-3 ${lastPageClass}`} onClick={goToLastPage} />
            </div>
            {isMobile ? (
                <>
                    <div className="d-flex justify-content-around align-items-baseline mt-4 w-100">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <i className={`fas fa-search-minus mx-3 ${zoomOutClass}`} onClick={zoomOut} />
                            <span>{(scale * 100).toFixed()}%</span>
                            <i className={`fas fa-search-plus mx-3 ${zoomInClass}`} onClick={zoomIn} />
                        </div>
                        <a href={file} download={true} title="download">
                            <i className="fas fa-file-download clickable" />
                        </a>
                    </div>
                </>
            ) : (
                <>
                    <div className="d-flex justify-content-between align-items-baseline">
                        <i className={`fas fa-search-minus mx-3 ${zoomOutClass}`} onClick={zoomOut} />
                        <span>{(scale * 100).toFixed()}%</span>
                        <i className={`fas fa-search-plus mx-3 ${zoomInClass}`} onClick={zoomIn} />
                    </div>
                    <div className="mx-3">
                        <a href={file} download={true} title="download">
                            <i className="fas fa-file-download clickable" />
                        </a>
                    </div>
                    <div className="mx-3">
                        <PDFPrinter file={file} />
                    </div>
                </>
            )}
        </div>
    );
};

export default ControlPanel;
