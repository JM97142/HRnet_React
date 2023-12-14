import './form.css'

import { useDispatch } from 'react-redux'
import { allEmployee } from '../../redux/action/employeeSlice'

import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import ReactDropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import { Modal } from '@jmtaret/react-modal'

import { data } from '../../data/data'
import { useState } from 'react'

function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setbirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')
    const [activeModal, setActiveModal] = useState('')

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })
        return newDate
    }

    const option = data.states.map((el) => ({
        label: el.name,
        value: el.abbreviation,
    }))

    const dispatch = useDispatch()

    const createEmployee = (e) => {
        e.preventDefault()
        const employee = {
            firstName,
            lastName,
            department,
            startDate: dateParser(startDate),
            birthDate: dateParser(birthDate),
            street,
            city,
            state,
            zipCode,
        }

        dispatch(allEmployee(employee))
        setActiveModal(true)
    }

    const closeModal = () => {
        setActiveModal(false)
    }

    return (
        <section className='create-employee-section'>
            <form action='#' id='create-employee-form'>
                <label htmlFor='first-name'>First Name</label>
                <input id='first-name' type='text' placeholder='John' onChange={(e) => setFirstName(e)} />

                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name' type='text' placeholder='Doe' onChange={(e) => setLastName(e)} />

                <label htmlFor='date-of-birth'>Date of Birth</label>
                <ReactDatePicker
                    selected={birthDate}
                    name='birthdate'
                    dateFormat={'dd/MM/yyyy'}
                    onChange={(date) => setbirthDate(date)}
                />

                <label htmlFor='start-date'>Start Date</label>
                <ReactDatePicker
                    selected={startDate}
                    name='startdate'
                    dateFormat={'dd/MM/yyyy'}
                    onChange={(date) => setStartDate(date)}
                />
                <fieldset className='adress'>
                    <legend>Adress</legend>
                    <label htmlFor='street'>Street</label>
                    <input id='street' type='text' onChange={(e) => setStreet(e)} />

                    <label htmlFor='city'>City</label>
                    <input id='city' type='text' onChange={(e) => setCity(e)} />

                    <label htmlFor=''>State</label>
                    <ReactDropdown
                        controlClassName='form-dropdown'
                        options={option}
                        onChange={(e) => setState(e.value)}
                        placeholder={'Select a state'}
                    />

                    <label htmlFor='zip-code'>Zip Code</label>
                    <input id='zip-code' type='number' onChange={(e) => setZipCode(e)} />
                </fieldset>

                <label htmlFor='department'>Department</label>
                <ReactDropdown
                    options={data.departments}
                    onChange={(e) => setDepartment(e.value)}
                    placeholder={'Select a department'}
                />
            </form>
            <button className='save-button' onClick={createEmployee}>Save</button>
            {activeModal && (
                <Modal message={'Employee created !'} close={closeModal} />
            )}
        </section>
    )
}

export default Form