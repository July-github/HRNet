import FormInput from '../../components/FormInput';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import './modal.scss';
import { states } from '../../states'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployees } from '../../redux/selector'
import Dropdown from 'react-ddown';
import 'react-ddown/dist/index.scss';
import { submitForm, validForm, unvalidForm, checkValid } from '../../redux/actions'
import { CgDanger } from 'react-icons/cg';
import { formatDate } from './helpers';

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
    const [isValidZip, setIsValidZip] = useState(true)
    const [isValidFirst, setIsValidFirst] = useState(true)
    const [isValidLast, setIsValidLast] = useState(true)
    const [formIsValid, setFormIsValid] = useState(true)
    const [modal, setModal] = useState(false)
    const [resetDrop, setResetDrop] = useState(false)

    const dispatch = useDispatch()

    const getCountEmployees = useSelector(selectEmployees).dataEmployees.length

    const newEmployee = {
        id : getCountEmployees+1,
        firstname : firstName,
        lastname : lastName,
        dateBirth : formatDate(birthValue),
        startDate : formatDate(startValue),
        street : street,
        city : city,
        state : state,
        zip_code : zipCode,
        department : department,
    }

    //Render the list of the states in the dropdown
    const statesNames = []
    states.map(state => (statesNames.push(state.name)))

    function checkZipCode(e){
        const zipCodeEntry = /(^[0-9]{5}$)/;
        const testZip = zipCodeEntry.test(e.target.value)

        if (testZip===false) return setIsValidZip(false)

        setIsValidZip(true)
        setZipCode(e.target.value)
    }

    function checkState(){
        if(state === "- Select -") {
            return null
        }
        else { return setState }
    }

    function checkDepartment(){
        if(department === "- Select -") {
            return null
        }
        else { return setDepartment}
    }

    function checkForm(){
        setIsValidFirst(true)
        setIsValidLast(true)  

        if(firstName === ''){ 
            setIsValidFirst(false)
            dispatch(unvalidForm())
        }
        if(lastName === ''){ 
            setIsValidLast(false)
            dispatch(unvalidForm())
        }
        if((firstName === '') || (lastName === '')){
            dispatch(unvalidForm())
        }

        else {
            dispatch(validForm()) 
        }
    }

    function validateForm(e){
        e.preventDefault()
        checkForm()
        const submission = dispatch(checkValid())

        if(submission){
            dispatch(submitForm(newEmployee))
            setFormIsValid(true)
            setBirthValue(new Date())
            setStartValue(new Date())
            setModal(true)
            setResetDrop(true)    
        }
        else{
            setFormIsValid(false)
        }
    }

    function resetFields(){
        setResetDrop(false)
        setBirthValue(new Date())
        setStartValue(new Date())
        setFirstName('')
        setLastName('')
        setStreet('')
        setCity('')
        setState('')
        setZipCode()
        setDepartment('')    
        document.getElementById("form").reset()
    }

    return( 
        <div className='employee_creation'>
            <h1>Create Employee</h1>
            <form id='form' className='create_form' onSubmit={validateForm}>
                <FormInput
                    label='Firstname'
                    type='text'
                    setValue={e => setFirstName(e.target.value)}
                />
                {isValidFirst? null : <div className='invalidField'>INVALID FIELD <div className='invalidIcon'><CgDanger/></div></div>}
                <FormInput
                    label='Lastname'
                    type='text'
                    setValue={e => setLastName(e.target.value)}
                />  
                {isValidLast? null : <div className='invalidField'>INVALID FIELD <div className='invalidIcon'><CgDanger/></div></div>}
                <div className='input-wrapper date_picker'>
                    <label className='birth_Date'>Date of Birth</label>
                    <DatePicker onChange={setBirthValue} value={birthValue} locale='en-EN' />
                </div>
                <div className='input-wrapper date_picker'>
                    <label className='start_Date'>Start Date</label>
                    <DatePicker onChange={setStartValue} value={startValue} locale='en-EN' />
                </div>
                <div id='address'>
                    <p>Address</p>
                    <div className="input-wrapper">
                        <label htmlFor='Street'>Street</label>
                        <textarea 
                            type='text'
                            id='Street'
                            onChange={e => setStreet(e.target.value)}
                        />
                    </div>
                    <FormInput
                        label='City'
                        type='text'
                        setValue={e => setCity(e.target.value)}
                    />  
                    <div className='dropWrap'>
                        <label id='state'>State</label>
                        <Dropdown 
                            setValue={checkState}
                            list={statesNames}
                            resetDrop={resetDrop}
                        />
                    </div>
                    <FormInput
                        label='Zip Code'
                        type='text'
                        setValue={e => checkZipCode(e)}
                    />  
                    {isValidZip? null : <div className='invalidField'>INVALID FIELD <div className='invalidIcon'><CgDanger/></div></div>}
                </div>
                <div className='dropWrap'>
                    <label id='department'>Department</label>
                    <Dropdown 
                        setValue={checkDepartment}
                        list={['Sales', 'Marketing', 'Engineering', 'Human Ressources', 'Legal']}
                        resetDrop={resetDrop}
                    />
                </div>
                {formIsValid ? null : <div className='invalidForm'>INVALID FORM <div className='invalidIcon'><CgDanger/></div></div>}
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
                    resetFields()
                    return true;
                }}
                >
                <p>Employee successfully created!</p>
            </PureModal>
        </div>
    )
}

export default EmployeeCreation