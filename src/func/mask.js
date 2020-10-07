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
    if (onlyNums.length <= 2) return onlyNums;
}

export const carPassportSeriesMask = value => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 3) return onlyNums;
}

export const carVinMask = value => {
    if (!value) return value;
    const template = value.replace(/[^\a-zA-Z\d]/g, '');
    if (template.length <= 17) return template;
}

export const sizeMask = value => {
    if (!value) return value;
    const template = value.replace(/[^\d.]/g, '');
    if (template) return template;
}