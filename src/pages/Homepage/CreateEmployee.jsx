import './createEmployee.css';

import Form from '../../components/Form/Form';

function CreateEmployee() {
  return (
    <div className='contenair'>
      <a href='/employee-list'>View Current Employees</a>
      <h2>Create Employee</h2>
      <Form />
    </div>
  )
}

export default CreateEmployee
