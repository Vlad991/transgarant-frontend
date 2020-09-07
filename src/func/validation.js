export const required = value => value ? undefined : 'Обязательно';

export const requiredAddress = value => value && value.string ? undefined : 'Обязательно';

const maxLength = max => value => value && value.length > max ? `Максимум ${max} символа` : undefined;

export const maxLength3 = maxLength(3);

export const number = value => value && isNaN(Number(value)) ? 'Должно быть число' : undefined;

export const phoneNumber = value => value && (value.indexOf('_') !== -1) ? 'Не заполнен' : undefined;

const minLength = min => value => value && value.length < min ? `Минимум ${min} символа` : undefined;

export const minLength3 = minLength(3);

const length = length => value => value && value.length !== length ? `${length} символа` : undefined;

export const length5 = length(5);
export const length6 = length(6);
export const length7 = length(7);

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Неверный формат email' : undefined;

export const tooOld = value => value && value > 65 ? 'You might be too old for this' : undefined;

export const aol = value => value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined