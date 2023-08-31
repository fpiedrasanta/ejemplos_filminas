class IO {
    static input = body => prompt(body);
    static output = body => alert(body);

    static requestValue = (
        message, 
        failureMessage, 
        checkFunction
    ) => {

        let request;
        do {
            request = IO.input(message);
           
            if(!checkFunction(request)) {
                IO.output(failureMessage);
            }
        } while(!checkFunction(request));
   
        return request;

    }

    static requestNumber = message => {
        let number = IO.requestValue(
            message,
            "El valor ingresado no es un número válido",
            (value) => NumberCheck.isNumber(value));
       
        return parseFloat(number);
    }

    static requestInteger = message => {
        let number = IO.requestValue(
            message,
            "El valor ingresado no es un número entero",
            (value) => NumberCheck.isNumber(value));
       
        return parseFloat(number);
    }

    static requestIntegerInRange = (message, from, to) => {
        let number = IO.requestValue(
            message,
            `El valor ingresado debe ser mayor o igual a ${from}` +
            `y menor o igual a ${to}`,
            (value) => {
                return NumberCheck.isInteger(value) && 
                        parseInt(value) >= from && 
                        parseInt(value) <= to;
            });

        return parseInt(number);
    }

    static requestPositiveNumber = (message) => {
        let number = IO.requestValue(
            message,
            `El valor ingresado debe ser mayor o igual a 0`,
            (value) => NumberCheck.isNumber(value) && parseFloat(value) >= 0
        );

        return parseFloat(number);
    }
}