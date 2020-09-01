export const getDateString = (date, separator) => {
    return (date.getDate() > 9 ? date.getDate() : ('0' + date.getDate()))
        + separator
        + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))
        + separator
        + date.getFullYear();
}