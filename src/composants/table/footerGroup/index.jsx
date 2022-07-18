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
    /**
     * block pagination counter
     */
    const isActive = (item) => {
        return item === pageIndex + 1 ? true : false;
    };
    //return btn
    const pageCounter = () => {
        const count = [];
        for (let i = 1; i <= pageCount; i++) {
            // return <div className="numbOfPage">{i}</div>;
            count.push(i);
        }
        return count.map((item) => (
            <div
                className={isActive(item) ? 'active numbOfPage' : 'numbOfPage'}
                onClick={() => gotoPage(item - 1)}
            >
                {item}
            </div>
        ));
    };
    return (
        <>
            <div className="table-footer">
                <div className="top-group">
                    <div className="count_entries">
                        Showing {(pageIndex + 1) * pageSize - pageSize + 1} to
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
                        <div className="total-cont-pages">
                            Page{' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
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
                <div className="page-counter">{pageCounter()}</div>
            </div>
        </>
    );
};
export default FooterGroup;
