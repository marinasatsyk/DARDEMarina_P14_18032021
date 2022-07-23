/**
 * * @param {string} v string expression for unify the format
 * @returns {string}
 */

export const unifyString = (v) => {
    return v.trim().toLowerCase();
};

//VALIDATION PART
/**
 * @param {string} v_stringVerif string expression for firstName, lastName, city, state, street
 * @param {date} v_date string expression for date of birth, start day
 * @param {number} v_zipCode number expression for zip code
 * @return {boolean}
 */

export const Validator = {
    stringVerif: (v_stringVerif) => {
        let regEx = /^[a-zA-Z ]*$/gm;
        return regEx.test(v_stringVerif);
    },
    date: (v_date) => {
        let regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!v_date.match(regEx)) return false; // Invalid format
        let d = new Date(v_date);
        let dNum = d.getTime();
        if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
        return d.toISOString().slice(0, 10) === v_date;
    },

    zipCode: (v_zipCode) => {
        let regEx = /^\d{5}(?:[-\s]\d{4})?$/;
        if (!v_zipCode.match(regEx)) return false; // Invalid format
        if (v_zipCode.match(regEx)) return true;
    },
};
