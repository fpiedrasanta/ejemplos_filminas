class App {
    static toAdd = () => {
        let numberOne = IO.requestNumber("Ingrese el primer valor");
        let numberTwo = IO.requestNumber("Ingrese el segundo valor");

        IO.output(Math.addition(numberOne, numberTwo));
    }

    static toSubstract = () => {
        let numberOne, numberTwo;
        do {
            numberOne = IO.requestNumber("Ingrese el primer valor");
            numberTwo = IO.requestNumber("Ingrese el segundo valor");

            if(numberOne >= numberTwo)
                IO.output(Math.subtraction(numberOne, numberTwo));
            else
                IO.output("El primer valor debe ser mayor o igual al primero");
        } while (numberOne < numberTwo);
    }

    static execute = (option) => {
        switch(option) {
            case 1:
                App.toAdd();
                break;
            case 2:
                App.toSubstract();
                break;
            case 3:
                IO.output("Hasta luego!");
                break;
        }
    }

    static show = () => {
        let option;
       
        do {
            option = IO.requestIntegerInRange(
                "Seleccione una opción:\n1 - Sumar\n2 - Restar\n3 - Salir",
                1,
                3);

            App.execute(option);
        } while(option != 3);
    }
}

App.show();