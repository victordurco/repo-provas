/* eslint-disable no-restricted-globals */
/* eslint-disable no-useless-escape */
const URL_PATTERN = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

const isFormValid = (body) => {
  const {
    url, year,
  } = body;

  if (!URL_PATTERN.test(url)) return false;
  if (isNaN(year) || Number(year) > 2100 || Number(year) < 1940) return false;

  return true;
};

export { isFormValid };
