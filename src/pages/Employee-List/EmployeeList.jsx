import './employeeList.css'

import Table from '../../components/Table/Table'

function EmployeeList() {
    return (
        <div id="employee-div" className="contenair">
            <a href="/">Create Employee</a>
            <h1>Current Employees</h1>
            <Table />
        </div>
    )
}

export default EmployeeList