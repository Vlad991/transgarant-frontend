export const getDateString = (date, separator) => {
    return (date.getDate() > 9 ? date.getDate() : ('0' + date.getDate()))
        + separator
        + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))
        + separator
        + date.getFullYear();
}

export const getYear = (date) => {
    return date.getFullYear();
}

export const getMonth = (date) => {
    return date.getMonth();
}

export const range = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}