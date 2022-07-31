import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import React, { useState, useEffect } from 'react';
import PureModal from 'react-pure-modal';
import './modal.scss';
import {data} from '../../data';
import { useDispatch } from 'react-redux';
import DropDown from '../../components/Dropdown/index';
// import { isValidForm, isInvalidForm, keyEmployee, resetForm } from '../../utils/store';

function EmployeeCreation(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthValue, setBirthValue] = useState(new Date())
    const [startValue, setStartValue] = useState(new Date())
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState()
    const [department, setDepartment] = useState('')
    const [key, setKey] = useState(data.length)
    const [isValidZip, setIsValidZip] = useState(true)
    const [formIsValid, setFormIsValid] = useState(true)
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('Array of employees', JSON.stringify(data))
    },[])

    const newEmployee = {
        'key' : data.length,
        'firstname' : firstName,
        'lastname' : lastName,
        'dateBirth' : birthValue,
        'startDate' : startValue,
        'street' : street,
        'city' : city,
        'state' : state,
        'zip Code' : zipCode,
        'department' : department,
    }

    function checkZipCode(e){
        const zipCodeEntry = /(^[0-9]{5}$)/;
        const testZip = zipCodeEntry.test(e.target.value)

        if (testZip===false) return setIsValidZip(false)

        setIsValidZip(true)
        setZipCode(e.target.value)
    }

    function checkForm(){
        
        if(firstName === ''){ 
            alert('the FirstName is required')
            dispatch(setFormIsValid(false))
        }
        if(lastName === ''){ 
            alert('the LastName is required')
            dispatch(setFormIsValid(false))
        }

        else{
            dispatch(setFormIsValid(true))
            dispatch(setKey(key+1))
        }
        return
    }

    function storeNewData(){

        if(localStorage.getItem('Array of employees') === null){
            localStorage.setItem('Array of employees', [])
        }

        const dataReceived = JSON.parse(localStorage.getItem('Array of employees'))
        dataReceived.push(newEmployee)
        localStorage.setItem('Array of employees', JSON.stringify(dataReceived))
        setModal(true)
    }

    function validForm(e){
        e.preventDefault()
        checkForm()
        if(formIsValid){
            storeNewData()
            // dispatch(resetForm())
        }
    }

    return( 
        <div className='employee_creation'>
            <Header />
            <h2>Create Employee</h2>
            {formIsValid ? null : <div>'invalid form :( !</div>}
            <form className='create_form' onSubmit={validForm}>
                <FormInput
                    label='Firstname'
                    type='text'
                    id='firstname'
                    setValue={e => setFirstName(e.target.value)}
                />
                <FormInput
                    label='Lastname'
                    type='text'
                    id='lastname'
                    setValue={e => setLastName(e.target.value)}
                />             
                <label className='input-wrapper'>
                    Date of Birth
                    <DatePicker onChange={setBirthValue} value={birthValue} locale='en-EN' />
                </label>
                <label className='input-wrapper'>
                    Start Date
                    <DatePicker onChange={setStartValue} value={startValue} locale='en-EN' />
                </label>
                <div id='address'>
                    <p>Address</p>
                    <FormInput
                        label='Street'
                        type='text'
                        id='street'
                        setValue={e => setStreet(e.target.value)}
                    />   
                    <FormInput
                        label='City'
                        type='text'
                        id='city'
                        setValue={e => setCity(e.target.value)}
                    />  
                    <FormInput
                        label='State'
                        type='text'
                        id='state'
                        setValue={e => setState(e.target.value)}
                    />  
                    <FormInput
                        label='Zip Code'
                        type='text'
                        id='zip_code'
                        setValue={e => checkZipCode(e)}
                    />  
                    {!isValidZip? <div className='invalid_field'>Invalid Zip Code</div> : null}
                </div>
                <label id='department'>Department</label>
                    <DropDown 
                        setValue={setDepartment}
                        list={['Sales', 'Marketing', 'Engineering', 'Human Ressources', 'Legal']}
                    />
                <button id='save_button' >Save</button>
            </form>
            <PureModal className='pureModal'
                header=""
                footer=''
                isOpen={modal}
                closeButton="X"
                closeButtonPosition="header"
                onClose={() => {
                    setModal(false);
                    return true;
                }}
                >
                <p>Employee successfully created!</p>
            </PureModal>;
        </div>
    )
}

export default EmployeeCreation