import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'


function Dropdown({list, setValue}){
    const [show, setShow] = useState(false)
    const [selectedValue, setSelectedValue] = useState('- Select -')

    useEffect(()=>{
        setValue(selectedValue)
    }, [selectedValue, setValue])

    const datas=[]

    for (let i=0; i<list.length; i++){
        const datasDropdown = {
            index: 0,
            select: ''
        }

        datasDropdown.index = i
        datasDropdown.select = list[i]
        
        datas.push(datasDropdown)
    }

    function show_hide(){
        return show? setShow(false) : setShow(true)
    }

    function selectItem(el){
        setShow(false)
        setSelectedValue(el.select)
    }

    return (
        <div className="dropDown">
            <div className="list" >
                <div className='list_element first'>{selectedValue}</div>
                {show?
                    (<ul>
                        {datas.map(data => (
                            <li key={data.index} className='list_element' onClick={() => selectItem(data)}>
                                {data.select}
                            </li>))}
                    </ul>)
                : null }
            </div>
            <div className="icon_list" onClick={show_hide}>{show? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
        </div>
    )
}

Dropdown.propTypes = {
    setValue: PropTypes.func,
    list: PropTypes.array.isRequired
}

export default Dropdown