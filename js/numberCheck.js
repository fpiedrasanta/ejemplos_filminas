class NumberCheck {
    static isNumber = (number) => !isNaN(number) && !isNaN(parseFloat(number));
    static isInteger = (value) => NumberCheck.isNumber(value) && Number.isInteger(parseFloat(value));
    static isFloat = (value) => NumberCheck.isNumber(value) && !this.isInteger(value);
}