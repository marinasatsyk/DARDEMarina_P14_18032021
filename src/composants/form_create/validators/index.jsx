export const unifyString = (v) => {
    return v.trim().toLowerCase();
};

//VALIDATION PART

export const Validator = {
    stringVerif: (v_stringVerif) => {
        let regEx = /^[a-zA-Z ]*$/gm;
        return regEx.test(v_stringVerif);
    },
    date: (v_dateString) => {
        let regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!v_dateString.match(regEx)) return false; // Invalid format
        let d = new Date(v_dateString);
        let dNum = d.getTime();
        if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
        return d.toISOString().slice(0, 10) === v_dateString;
    },

    zipCode: (v_zipCode) => {
        let regEx = /^\d{5}(?:[-\s]\d{4})?$/gm;
        if (!v_zipCode.match(regEx)) return false; // Invalid format
        if (v_zipCode.match(regEx)) return true;
    },
};
