//@ts-check
import React from 'react';
import PropTypes from 'prop-types';

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

    //for show first, last, active pages
    const ShowP = (pageIndex) => {
        const count = [];
        for (let i = 1; i <= pageCount; i++) {
            count.push(i);
        }
        const ar = [];

        if (count.length <= 5) {
            count.map((item) => ar.push(item));
        } else if (
            count.length > 5 &&
            pageIndex > 1 &&
            pageIndex < count[count.length - 3]
        ) {
            console.log('first');
            console.log(pageIndex);
            ar.push(
                count[0],
                pageIndex,
                pageIndex + 1,
                pageIndex + 2,
                count[count.length - 1]
            );
        } else if (count.length > 5 && pageIndex <= 1) {
            console.log('sec');
            ar.push(count[0], 2, 3, 4, count[count.length - 1]);
        } else if (count.length > 5 && pageIndex >= count[count.length - 3]) {
            console.log('fird');

            ar.push(
                count[0],
                count[count.length - 4],
                count[count.length - 3],
                count[count.length - 2],
                count[count.length - 1]
            );
        }

        return ar.map((item) => (
            <div
                key={item}
                className={isActive(item) ? 'active numbOfPage' : 'numbOfPage'}
                onClick={() => gotoPage(item - 1)}
            >
                {item}
            </div>
        ));
    };

    // console.log(ShowP(pageIndex));

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
                        <div className="page-counter">{ShowP(pageIndex)}</div>

                        <button
                            className="btn next"
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                        >
                            Next
                        </button>
                    </div>
                </div>
                {/* <div className="page-counter">{ShowP(pageIndex)}</div> */}
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
