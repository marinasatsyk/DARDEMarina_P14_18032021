//@ts-check
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import {
    useTable,
    usePagination,
    useGlobalFilter,
    useSortBy,
} from 'react-table';
import MOCK_DATA from '../../../MOCK_DATA/MOCK_DATA.json';
//import MOCK_DATA from '../../../MOCK_DATA/MOCK_STATE.json';

import BodyGroup from '../bodyGroup';
import { COLUMNS } from '../columns';
import FooterGroup from '../footerGroup';
import HeaderGroup from '../headerGroup';
import TitleGroup from '../titleGroup';

/**
 *Table component is based on the react-table library
 * @returns {React.ReactElement} component table
 */
const BasicTable = () => {
    //global state for show the list of the employees saved  into.
    const { listEmployees, isLoading, error } = useSelector(
        //@ts-ignore
        (store) => store.list
    );

    const columns = useMemo(() => COLUMNS, []);
    //here we should to call API GET axios  list of emplyees and memorize the result
    // const data = useMemo(() => MOCK_DATA, []);
    const data = useMemo(() => listEmployees, []);

    //we destructure the table-react components for use it
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        //@ts-ignore
        page,
        //@ts-ignore
        nextPage,
        //@ts-ignore
        previousPage,
        //@ts-ignore
        canNextPage,
        //@ts-ignore
        canPreviousPage,
        //@ts-ignore
        pageOptions,
        //@ts-ignore
        gotoPage,
        //@ts-ignore
        pageCount,
        //@ts-ignore
        setPageSize,
        state,
        //@ts-ignore

        setGlobalFilter,
        prepareRow,
    } = useTable(
        {
            //@ts-ignore
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );
    //@ts-ignore
    const { pageIndex, pageSize, globalFilter } = state;

    return (
        <>
            <TitleGroup
                pageSize={pageSize}
                setPageSize={setPageSize}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table {...getTableProps()}>
                <HeaderGroup headerGroups={headerGroups} />

                <BodyGroup
                    getTableBodyProps={getTableBodyProps}
                    page={page}
                    prepareRow={prepareRow}
                />
            </table>
            <div className="table-footer">
                {/**pagination */}
                <FooterGroup
                    dataLength={data.length}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    previousPage={previousPage}
                    canPreviousPage={canPreviousPage}
                    pageOptions={pageOptions}
                    nextPage={nextPage}
                    canNextPage={canNextPage}
                    pageCount={pageCount}
                    gotoPage={gotoPage}
                />
            </div>
        </>
    );
};

export default BasicTable;
