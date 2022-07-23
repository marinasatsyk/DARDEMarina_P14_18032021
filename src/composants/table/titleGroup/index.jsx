import React from 'react';
import GlobalFilter from '../globalFilter';
import PropTypes from 'prop-types';
/**
 * React component, creates title + global filter of table
 * @returns {React.ReactElement} component title + filter + display mode
 */
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

TitleGroup.propTypes = {
    pageSize: PropTypes.number.isRequired,
    setPageSize: PropTypes.func.isRequired,
    globalFilter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    setGlobalFilter: PropTypes.func.isRequired,
};
export default TitleGroup;
