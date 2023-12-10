import './employeeList.css'

import Table from '../../components/Table/Table'

function EmployeeList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Table />
            <a href="/">Home</a>
        </div>
    )
}

export default EmployeeList