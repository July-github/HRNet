/**
 * Format a date to render
 * @param {date} date 
 * @returns formatted date to render
 */

export function formatDate(date){
    const dateNew = new Date (date)
    const dateISO = dateNew.toISOString().split('T')[0]
    const [year, month, day] = dateISO.split("-")

    return [month, day, year].join("/")
}