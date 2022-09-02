import Table from '../../components/Table';
import { selectEmployees } from '../../redux/selector';
import { useSelector } from 'react-redux';

function Employees(){

    const getDatas = useSelector(selectEmployees).dataEmployees
    console.log(getDatas)
    const datas = getDatas.map(el => ({...el}))
        
    return(
        <div>
            <h2>Employees List</h2>
            <Table 
                datas={datas}
            />
        </div>
    )
}

export default Employees