import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import SortIcon from '../SortIcon';

function Table(){
    const theme = createTheme();
 
    function sortStartDates(a,b){
        if(new Date(b.startDate) > new Date(a.startDate)){
            return 1
        }
        if(new Date(b.startDate) < new Date(a.startDate)){
            return -1
        }
        return 0
    }

    function sortBirthDates(a,b){
        if(new Date(b.dateBirth) > new Date(a.dateBirth)){
            return 1
        }
        if(new Date(b.dateBirth) < new Date(a.dateBirth)){
            return -1
        }else{
            return 0
        }
    }

    const columns = [
        { title: 'First Name', field: 'firstname' },
        { title: 'Last Name', field: 'lastname' },
        { title: 'Start Date', field: 'startDate', type:'date', customSort: sortStartDates },
        { title: 'Department', field: 'department' },
        { title: 'Date of Birth', field: 'dateBirth', type:'date', customSort: sortBirthDates },
        { title: 'Street', field: 'street' },
        { title: 'City', field: 'city' },
        { title: 'State', field: 'state' },
        { title: 'Zip Code', field: 'zipCode' },
      ]

    const datas = JSON.parse(localStorage.getItem('Array of employees'))

    return (
        <div className='tableBack'>
            <div className='tableContainer'>
                <div className='tableWrap'>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <ThemeProvider theme={theme}>
                        <MaterialTable 
                            columns={columns} 
                            data={datas} 
                            title='Employees'
                            options={{
                                headerStyle: {
                                    backgroundColor: 'rgba(129, 160, 20, 0.5)',
                                    color: '#FFF',
                                    fontSize: '20px',
                                },
                                defaultSort: true,
                                sorting: true,
                                showTitle: false,
                            }}
                            icons={{
                                SortArrow: SortIcon,
                                textAlign: 'left',
                            }}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
      )
}

export default Table