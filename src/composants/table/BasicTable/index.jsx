import React, { useContext, useMemo } from 'react';
import { Context } from '../../../constants/context';
import {
    useTable,
    usePagination,
    useGlobalFilter,
    useSortBy,
} from 'react-table';
// import MOCK_DATA from '../../../MOCK_DATA/MOCK_DATA.json';
import MOCK_DATA from '../../../MOCK_DATA/MOCK_STATE.json';

import BodyGroup from '../bodyGroup';
import { COLUMNS } from '../columns';
import FooterGroup from '../footerGroup';
import HeaderGroup from '../headerGroup';
import TitleGroup from '../titleGroup';

const BasicTable = () => {
    const { listEmployees, setListEmployees } = useContext(Context);

    const columns = useMemo(() => COLUMNS, []);
    //here we should to call API GET axios  list of emplyees and memorize the result
    // const data = useMemo(() => MOCK_DATA, []);
    const data = useMemo(() => listEmployees, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
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
