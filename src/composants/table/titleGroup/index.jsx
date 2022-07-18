import GlobalFilter from '../globalFilter';

const TitleGroup = ({
    pageSize,
    setPageSize,
    globalFilter,
    setGlobalFilter,
}) => {
    return (
        <div className="header-table">
            <div className="select_wrapper">
                Show{' '}
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10, 25, 50, 100].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                entries
            </div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
    );
};
export default TitleGroup;
