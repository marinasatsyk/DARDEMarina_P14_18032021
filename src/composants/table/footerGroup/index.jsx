//@ts-check
import React from 'react';
import PropTypes from 'prop-types';
import { ShowPage } from './pagination';

/**
 *Footer component of the table
 * @returns {React.ReactElement} component combines the elements of the lower part of the table
 */
const FooterGroup = ({
    dataLength,
    pageIndex,
    pageSize,
    previousPage,
    canPreviousPage,
    pageOptions,
    canNextPage,
    nextPage,
    pageCount,
    gotoPage,
}) => {
    console.log(pageIndex);
    console.log(pageCount);

    /**
     *component contains  block pagination  & counter of pages
     */
    const isActive = (item) => {
        return item === pageIndex + 1 ? true : false;
    };

    return (
        <>
            <div className="table-footer">
                <div className="top-group">
                    <div className="count_entries">
                        Showing {(pageIndex + 1) * pageSize - pageSize + 1}{' '}
                        to&nbsp;
                        {(pageIndex + 1) * pageSize} from {dataLength} entries
                    </div>{' '}
                    <div className="right-side">
                        <button
                            className="btn previous"
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                        >
                            Previous
                        </button>
                        <div className="page-counter">
                            {
                                <ShowPage
                                    pageIndex={pageIndex}
                                    pageCount={pageCount}
                                    isActive={isActive}
                                    gotoPage={gotoPage}
                                />
                            }
                        </div>

                        <button
                            className="btn next"
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="total-cont-pages">
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </div>
            </div>
        </>
    );
};

FooterGroup.propTypes = {
    dataLength: PropTypes.number.isRequired,
    pageIndex: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    previousPage: PropTypes.func.isRequired,
    canPreviousPage: PropTypes.bool.isRequired,
    pageOptions: PropTypes.array.isRequired,
    canNextPage: PropTypes.bool.isRequired,
    nextPage: PropTypes.func.isRequired,
    pageCount: PropTypes.number.isRequired,
    gotoPage: PropTypes.func.isRequired,
};

export default FooterGroup;
