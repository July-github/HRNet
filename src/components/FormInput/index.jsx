import PropTypes from 'prop-types'

function FormInput({label, id, setValue, type}){
    // console.log('input')

    return(
        <div className="input-wrapper">
            <label htmlFor={label}>
                {label}
                </label>
            <input 
                type={type} 
                id={id} 
                onChange={setValue}
            />
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    setValue: PropTypes.func,
}

export default FormInput