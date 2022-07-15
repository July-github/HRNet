import MaterialTable from 'material-table';
import { data } from '../../data';
import { ThemeProvider, createTheme } from '@mui/material';

function Table(){
    const defaultMaterialTheme = createTheme();

    const columns = [
        { title: 'First Name', field: 'firstname' },
        { title: 'Last Name', field: 'lastname' },
        { title: 'Start Date', field: 'startDate' },
        { title: 'Department', field: 'department' }
      ]

    return (
        <div style={{ width: '90%', height: '100%', margin: 'auto' }}>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <ThemeProvider theme={defaultMaterialTheme}>
                <MaterialTable columns={columns} data={data} title='Employees' />
            </ThemeProvider>
        </div>
      )
}

export default Table