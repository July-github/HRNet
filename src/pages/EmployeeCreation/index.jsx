import FormInput from '../../components/FormInput';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import './modal.scss';
import { datas } from '../../data';
import { states } from '../../states'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployees } from '../../redux/selector'
import Dropdown from 'react-ddown';
import 'react-ddown/dist/index.scss';
import { submitForm, validForm, unvalidForm, checkValid } from '../../redux/actions'
import { CgDanger } from 'react-icons/cg';


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

    function formatDate(date){
        const dateNew = new Date (date)
        const dateISO = dateNew.toISOString().split('T')[0]
        const [year, month, day] = dateISO.split("-")

        return [month, day, year].join("/")
    }

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

    function checkZipCode(e){
        const zipCodeEntry = /(^[0-9]{5}$)/;
        const testZip = zipCodeEntry.test(e.target.value)

        if (testZip===false) return setIsValidZip(false)

        setIsValidZip(true)
        setZipCode(e.target.value)
    }

    const statesNames = []
    states.map(state => (statesNames.push(state.name)))

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
            <h2>Create Employee</h2>
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
                        setValue={e => setStreet(e.target.value)}
                    />   
                    <FormInput
                        label='City'
                        type='text'
                        setValue={e => setCity(e.target.value)}
                    />  
                    <div className='dropDepartment'>
                        <label id='state'>State</label>
                            <Dropdown 
                                setValue={setState}
                                list={statesNames}
                                resetDrop={resetDrop}
                            />
                    </div>
                    <FormInput
                        label='Zip Code'
                        type='text'
                        setValue={e => checkZipCode(e)}
                    />  
                    {!isValidZip? <div className='invalid_field'>Invalid Zip Code</div> : null}
                </div>
                <div className='dropDepartment'>
                    <label id='department'>Department</label>
                        <Dropdown 
                            setValue={setDepartment}
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
            </PureModal>;
        </div>
    )
}

export default EmployeeCreation