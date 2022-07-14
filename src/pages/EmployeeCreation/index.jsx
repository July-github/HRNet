import Header from '../../components/Header';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import React, { useState } from 'react';

function EmployeeCreation(){
    const [value, onChange] = useState(new Date())

    return(
        <div className='employee_creation'>
            <Header />
            <h2>Create Employee</h2>
            <form className='create_form'>
                <label>
                    Firstname
                    <input type='text' id='firstname'/>
                </label>
                <label>
                    Lastname
                    <input type='text' id='lastname'/>
                </label>
                <label>
                    Date of Birth
                    <DatePicker onChange={onChange} value={value} locale='en-EN'/>
                </label>
                <label>
                    Start Date
                    <DatePicker onChange={onChange} value={value} locale='en-EN'/>
                </label>
                <div id='adress'>
                    <p>Adress</p>
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
                    <label>
                        Zip Code
                        <input type='number' id='zip_code'/>
                    </label>
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