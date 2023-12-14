import './table.css'

import { MaterialReactTable } from "material-react-table";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Table() {
    // Stockage de l'ensemble du store
    const employeeList = useSelector((state) => state.employee.employees)

    // Data static
    const columns = useMemo(
        () => [
            {
                header: 'First Name',
                accessorKey: 'firstName',
            },
            {
                header: 'Last Name',
                accessorKey: 'lastName',
            },
            {
                header: 'Start Date',
                accessorKey: 'startDate',
            }, {
                header: 'Department',
                accessorKey: 'department',
            }, {
                header: 'Date of Birth',
                accessorKey: 'birthDate',
            }, {
                header: 'Street',
                accessorKey: 'street',
            }, {
                header: 'City',
                accessorKey: 'city',
            }, {
                header: 'State',
                accessorKey: 'states',
            }, {
                header: 'Zip Code',
                accessorKey: 'zipCode',
            },
        ],
        [],
    )

    return (
        <div className='table'>
            <MaterialReactTable
                data={employeeList}
                columns={columns}
            />
        </div>
    )
}

export default Table