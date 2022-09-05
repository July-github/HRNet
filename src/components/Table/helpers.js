//functions sorting dates from the material-table

export function sortStartDates(a,b){
    if(new Date(b.startDate) > new Date(a.startDate)){
        return 1
    }
    if(new Date(b.startDate) < new Date(a.startDate)){
        return -1
    }
    return 0
}

export function sortBirthDates(a,b){
    if(new Date(b.dateBirth) > new Date(a.dateBirth)){
        return 1
    }
    if(new Date(b.dateBirth) < new Date(a.dateBirth)){
        return -1
    }else{
        return 0
    }
}
