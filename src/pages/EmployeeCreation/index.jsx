import Header from '../../components/Header';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import React, { useState } from 'react';

function EmployeeCreation(){
    const [birthValue, setBirthValue] = useState(new Date())
    const [startValue, setStartValue] = useState(new Date())
    const [isValidZip, setIsValidZip] = useState(true)

    function checkZipCode(e){
        const zipCode = /(^[0-9]{5}$)/;
        const testZip = zipCode.test(e.target.value)
        console.log(isValidZip) 

        if (testZip===false) return setIsValidZip(false)

        setIsValidZip(true)
    }

    return(
        <div className='employee_creation'>
            <Header />
            <h2>Create Employee</h2>
            <form className='create_form'>
                <label>
                    Firstname
                    <input type='text' id='firstname' />
                </label>
                <label>
                    Lastname
                    <input type='text' id='lastname' />
                </label>
                <label>
                    Date of Birth
                    <DatePicker onChange={setBirthValue} value={birthValue} locale='en-EN'/>
                </label>
                <label>
                    Start Date
                    <DatePicker onChange={setStartValue} value={startValue} locale='en-EN'/>
                </label>
                <div id='address'>
                    <p>Address</p>
                    <label>
                        Street
                        <input type='text' id='street'/>
                    </label>
                    <label>
                        City
                        <input type='text' id='city'/>
                    </label>
                    <label>
                        State
                        <input type='text' id='state'/>
                    </label>
                    <label id='zip'>
                        Zip Code
                        <input type='number' id='zip_code' onChange={checkZipCode}/>
                    </label>
                    {!isValidZip? <div className='invalid_field'>Invalid Zip Code</div> : null}
                </div>
                    <label>
                        Department
                        <input type='text' id='department'/>
                    </label>
                <input type='submit' value='Save' id='save_button'></input>
            </form>
        </div>
    )
}

export default EmployeeCreation