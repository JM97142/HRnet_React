import './form.css'

import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import ReactDropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { data } from '../../data/data'
import { useState } from 'react'

function Form() {
    const [birthDate, setbirthDate] = useState('')
    const [startDate, setStartDate] = useState('')

    const option = data.states.map((el) => ({
        label: el.name,
        value: el.abbreviation,
    }))

    return (
        <section>
            <form action='#' id='create-employee'>
                <label htmlFor='first-name'>First Name</label>
                <input id='first-name' type='text' placeholder='John' />

                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name' type='text' placeholder='Doe' />

                <label htmlFor='date-of-birth'>Date of Birth</label>
                <ReactDatePicker
                    selected={birthDate}
                    name='birthdate'
                    dateFormat={'dd/MM/yyyy'}
                />

                <label htmlFor='start-date'>Start Date</label>
                <ReactDatePicker
                    selected={startDate}
                    name='startdate'
                    dateFormat={'dd/MM/yyyy'}
                />
                <fieldset className='adress'>
                    <legend>Adress</legend>
                    <label htmlFor='street'>Street</label>
                    <input id='street' type='text' />

                    <label htmlFor='city'>City</label>
                    <input id='city' type='text' />

                    <label htmlFor=''>State</label>
                    <ReactDropdown
                        options={option}
                        placeholder={'Select a state'}
                    />

                    <label htmlFor='zip-code'>Zip Code</label>
                    <input id='zip-code' type='number' />
                </fieldset>

                <label htmlFor='department'>Department</label>
                <ReactDropdown
                    options={data.departments}
                    placeholder={'Select a department'}
                />
            </form>
            <button>Save</button>
        </section>
    )
}

export default Form