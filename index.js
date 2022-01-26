// RETO 2 FICHERO INDEX CON LAS FUNCIONES DE LA CALCULADORA POR SEPARADO


    function sumCalculadora(op1, op2) 
    {

        let resultado = op1 + op2;
        return resultado
    }


    function subsCalculadora(op1, op2) 
    {

        let resultado = op1 - op2;
        return resultado
    }


    function multCalculadora(op1, op2) 
    {

        let resultado = op1 * op2;
        return resultado
    }


    function divCalculadora(op1, op2) 
    {

        let resultado = op1 / op2;
        return resultado
    }

    function cuadradoCalculadora(op1)
    {

        let resultado = op1**2
        return resultado
    }

    

module.exports = { sumCalculadora, subsCalculadora, multCalculadora, divCalculadora, cuadradoCalculadora}
