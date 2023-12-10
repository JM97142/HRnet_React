import './form.css'

import { states } from '../../data/data'

function Form() {
    // $( function() {
    //     const stateSelect = document.getElementById('state');
    //     states.forEach(function(state) {
    //         const option = document.createElement('option');
    //         option.value = state.abbreviation;
    //         option.text = state.name;
    //         stateSelect.appendChild(option);
    //     });

    //     $( "#department" ).selectmenu();
    //     $( "#state" ).selectmenu();

    //     $('#date-of-birth').datetimepicker({
    //         timepicker: false,
    //         format: 'm/d/Y'
    //     });
    //     $('#start-date').datetimepicker({
    //         timepicker: false,
    //         format: 'm/d/Y'
    //     });
    // });

    // const saveEmployee = () => {
    //     const firstName = document.getElementById('first-name');
    //     const lastName = document.getElementById('last-name');
    //     const dateOfBirth = document.getElementById('date-of-birth');
    //     const startDate = document.getElementById('start-date');
    //     const department = document.getElementById('department');
    //     const street = document.getElementById('street');
    //     const city = document.getElementById('city');
    //     const state = document.getElementById('state');
    //     const zipCode = document.getElementById('zip-code');

    //     const employees = JSON.parse(localStorage.getItem('employees')) || [];
    //     const employee = {
    //         firstName: firstName.value,
    //         lastName: lastName.value,
    //         dateOfBirth: dateOfBirth.value,
    //         startDate: startDate.value,
    //         department: department.value,
    //         street: street.value,
    //         city: city.value,
    //         state: state.value,
    //         zipCode: zipCode.value
    //     };
    //     employees.push(employee);
    //     localStorage.setItem('employees', JSON.stringify(employees));
    //     $('#confirmation').modal();
    // }

    return (
        <section>
            <form action='#' id='create-employee'>
                <label htmlFor='first-name'>First Name</label>
                <input id='first-name' type='text' />

                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name' type='text' />

                <label htmlFor='date-of-birth'>Date of Birth</label>
                <input id='date-of-birth' type='text' />

                <label htmlFor='start-date'>Start Date</label>
                <input id='start-date' type='text' />

                <fieldset className='adress'>
                    <legend>Adress</legend>
                    <label htmlFor='street'>Street</label>
                    <input id='street' type='text' />

                    <label htmlFor='city'>City</label>
                    <input id='city' type='text' />

                    <label htmlFor=''>State</label>
                    <select name='state' id='state'></select>

                    <label htmlFor='zip-code'>Zip Code</label>
                    <input id='zip-code' type='number' />
                </fieldset>

                <label htmlFor='department'>Department</label>
                <select name='department' id='department'></select>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </form>
            <button>Save</button>
        </section>
    )
}

export default Form