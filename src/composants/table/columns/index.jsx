import React from 'react';
import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Start Date',
        accessor: 'startDate',

        //on change the format of date
        Cell: ({ value }) => {
            return format(new Date(value), 'MM/dd/yyy');
        },
    },
    {
        Header: 'Department',
        accessor: 'department',
    },
    {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',

        //on change the format of date
        Cell: ({ value }) => {
            return format(new Date(value), 'MM/dd/yyy');
        },
    },
    {
        Header: 'Street',
        accessor: 'street',
    },
    {
        Header: 'City',
        accessor: 'city',
    },

    {
        Header: 'State',
        accessor: 'state',
    },

    {
        Header: 'Zip Code',
        accessor: 'zipCode',
    },
];
