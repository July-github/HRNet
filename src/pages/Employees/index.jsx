import Table from '../../components/Table';
import { selectEmployees } from '../../redux/selector';
import { useSelector } from 'react-redux';

function Employees(){

    const getDatas = useSelector(selectEmployees).dataEmployees

    //copying the array of datas 'getDatas' so that it can be edited by material-table
    const datas = getDatas.map(el => ({...el}))
        
    return(
        <div className='employees_list'>
            <h1>Employees List</h1>
            <Table 
                datas={datas}
            />
        </div>
    )
}

export default Employees