import MaterialTable from 'material-table';
import { data } from '../../data';
import { ThemeProvider, createTheme } from '@mui/material';
import SortIcon from '../SortIcon';
import { useState } from 'react';

function Table(){
    const theme = createTheme();

    const columns = [
        { title: 'First Name', field: 'firstname' },
        { title: 'Last Name', field: 'lastname' },
        { title: 'Start Date', field: 'startDate', type:'date', customSort: ((a,b) => { 
            if(new Date(b.startDate) > new Date(a.startDate)){
                console.log('d', new Date(b.startDate), new Date(a.startDate))
                return 1
            }
            if(new Date(b.startDate) < new Date(a.startDate)){
                console.log('e')
                return -1
            }
            console.log('f')
            return 0
        }) },
        { title: 'Department', field: 'department' },
        { title: 'Date of Birth', field: 'dateBirth', type:'date' },
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
                            data={data} 
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