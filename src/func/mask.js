export const passportNumberMask = value => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length < 2) return onlyNums;
    if (onlyNums.length >= 2 && onlyNums.length <= 4) return onlyNums.slice(0, 2) + " " + onlyNums.slice(2, 4);
}

export const passportSeriesMask = value => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 6) return onlyNums;
}

export const passportDepartmentMask = value => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length < 3) return onlyNums;
    if (onlyNums.length >= 3 && onlyNums.length <= 6) return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3, 6);
}

export const carPassportNumberMask = value => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, '');
    const onlyLetters = value.replace(/[^\a-zA-Z]/g, '');
    if (onlyNums.length < 2) return onlyNums;
    if (onlyNums.length === 2 && onlyLetters.length === 0) return onlyNums + " ";
    if (onlyNums.length === 2 && onlyLetters.length > 0 && onlyLetters.length <= 2) return onlyNums + " " + onlyLetters;
}

export const carPassportSeriesMask = value => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 6) return onlyNums;
}