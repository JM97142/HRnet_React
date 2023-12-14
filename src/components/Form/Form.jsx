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
import { useNavigate } from 'react-router-dom'

function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setbirthDate] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [states, setStates] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')
    const [activeModal, setActiveModal] = useState(false)

    // Format des dates
    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        })
        return newDate
    }

    // Boucle data states
    const option = data.states.map((el) => ({
        label: el.name,
        value: el.abbreviation,
    }))

    // Soumission formulaire / Création employee / Affiche modal
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
            states,
            zipCode,
        }
        dispatch(allEmployee(employee))
        setActiveModal(true)
    }

    // Fermeture modal / Redirection
    const closeModal = () => {
        setActiveModal(false)
        navigate('/employee-list')
    }

    return (
        <section className='create-employee-section'>
            <form onSubmit={createEmployee} id='create-employee-form'>
                <label htmlFor='first-name'>First Name</label>
                <input id='first-name' type='text' placeholder='John' onChange={(e) => setFirstName(e.target.value)} required />

                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name' type='text' placeholder='Doe' onChange={(e) => setLastName(e.target.value)} required />

                <label htmlFor='date-of-birth'>Date of Birth</label>
                <ReactDatePicker
                    selected={birthDate}
                    name='birthdate'
                    dateFormat={'dd/MM/yyyy'}
                    onChange={(date) => setbirthDate(date)}
                    required
                />

                <label htmlFor='start-date'>Start Date</label>
                <ReactDatePicker
                    selected={startDate}
                    name='startdate'
                    dateFormat={'dd/MM/yyyy'}
                    onChange={(date) => setStartDate(date)}
                    required
                />
                <fieldset className='adress'>
                    <legend>Adress</legend>
                    <label htmlFor='street'>Street</label>
                    <input id='street' type='text' onChange={(e) => setStreet(e.target.value)} required />

                    <label htmlFor='city'>City</label>
                    <input id='city' type='text' onChange={(e) => setCity(e.target.value)} required />

                    <label htmlFor=''>State</label>
                    <ReactDropdown
                        controlClassName='form-dropdown'
                        options={option}
                        onChange={(e) => setStates(e.label)}
                        placeholder={'Select a state'}
                        required
                    />

                    <label htmlFor='zip-code'>Zip Code</label>
                    <input id='zip-code' type='number' onChange={(e) => setZipCode(e.target.value)} required />
                </fieldset>

                <label htmlFor='department'>Department</label>
                <ReactDropdown
                    options={data.departments}
                    onChange={(e) => setDepartment(e.value)}
                    placeholder={'Select a department'}
                    required
                />
                <button type='submit' className='save-button'>Save</button>
            </form>
            {activeModal && (
                <Modal message={'Employee created!'} close={closeModal} />
            )}
        </section>
    )
}

export default Form