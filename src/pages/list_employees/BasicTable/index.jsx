import React, { useMemo } from 'react';
import {
    useTable,
    usePagination,
    useColumnOrder,
    useGlobalFilter,
    useSortBy,
} from 'react-table';
import MOCK_DATA from '../../../MOCK_DATA/MOCK_DATA.json';
import { COLUMNS } from '../columns';
import GlobalFilter from '../globalFilter';

const BasicTable = () => {
    /**
     * simple table
     */
    const columns = useMemo(() => COLUMNS, []);
    /**
     *  table with header groups
     */
    // const columns = useMemo(() => GROUPED_COLUMNS, []);

    const data = useMemo(() => MOCK_DATA, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        //on change rows to page for pagination
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },

        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { pageIndex, pageSize, globalFilter } = state;

    return (
        <>
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
                    {console.log(pageIndex)}
                    {console.log(pageSize)}
                    entries
                </div>
                <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                />
            </div>

            <table {...getTableProps()}>
                {/**HEADER*/}
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '🔽'
                                                : '🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="table-footer">
                <div className="count_entries">
                    Showing {(pageIndex + 1) * pageSize - pageSize + 1} to
                    {(pageIndex + 1) * pageSize} from {data.length}
                    entries
                </div>
                <div>
                    {/**pagination */}
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    {/* <span>
                    | Go to page:
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            gotoPage(pageNumber);
                        }}
                        style={{ width: '50px' }}
                    />
                </span> */}

                    {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button> */}

                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </button>
                    {/* <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {'>>'}
                </button> */}
                </div>
            </div>
        </>
    );
};

export default BasicTable;
