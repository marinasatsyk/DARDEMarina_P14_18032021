/**
 * * @param {string} v string expression for unify the format
 * @returns {string}
 */

export const unifyString = (v) => {
    return v.trim().toLowerCase();
};
//func for do not take into consideration the time
export function convertDate(d) {
    const D = new Date(d).toISOString().slice(0, 10);
    return D;
}

//VALIDATION PART
/**
 * @param {string} v_stringVerif string expression for firstName, lastName, city, state, street
 * @param {Object} d_Birth string expression for date of birth
 * @param {Object} d_Start string expression for date of  start day
 * @param {number} v_zipCode number expression for zip code
 * @return {boolean}
 */

export const Validator = {
    stringVerif: (v_stringVerif) => {
        let regEx = /^[a-zA-Z ]*$/gm;
        return regEx.test(v_stringVerif);
    },

    zipCode: (v_zipCode) => {
        let regEx = /^\d{5}(?:[-\s]\d{4})?$/;
        if (!v_zipCode.match(regEx)) return false; // Invalid format
        if (v_zipCode.match(regEx)) return true;
    },
    validDateBirth: (d_Birth) => {
        //date submited into the form
        const date_to_valide = new Date(convertDate(d_Birth));

        //today date
        const start = new Date();

        //date of majority. for this exemple is 18
        //retun the date of previous day => day +1
        const majorDate = new Date(
            convertDate(
                new Date(
                    `${start.getFullYear() - 18}-${start.getMonth() + 1}-${
                        start.getDate() + 1
                    }`
                )
            )
        );
        //comparing submited date of birh and date of majority
        return date_to_valide - majorDate <= 0 ? true : false;
    },
    validDateStart: (d_Start) => {
        const date_to_valide = new Date(convertDate(d_Start));
        const start = new Date();
        const startDate = new Date(
            convertDate(
                new Date(
                    `${start.getFullYear()}-${start.getMonth() + 1}-${
                        start.getDate() + 1
                    }`
                )
            )
        );
        return startDate - date_to_valide <= 0 ? true : false;
    },
};
