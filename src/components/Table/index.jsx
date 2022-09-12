import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import SortIcon from '../SortIcon';
import { sortStartDates, sortBirthDates } from './helpers';
import PropTypes from 'prop-types'

function Table({datas}){
    const theme = createTheme();
 
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
                                    backgroundColor: 'rgba(69, 77, 102, 0.6)',
                                    color: '#FFF',
                                    fontSize: '25px',
                                    fontWeight: '600',
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

Table.propTypes = {
    datas: PropTypes.array.isRequired,
}

export default Table