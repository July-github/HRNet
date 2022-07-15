import MaterialTable from 'material-table';
import { data } from '../../data';

function Table(){

    const columns = [
        { title: 'First Name', field: 'firstname' },
        { title: 'Last Name', field: 'lastname' },
        { title: 'Start Date', field: 'startDate' },
        { title: 'Department', field: 'department' }
      ]

    return (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable columns={columns} data={data} title='Books Directory' />
        </div>
      )
}

export default Table