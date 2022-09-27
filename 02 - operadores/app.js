'use strict'

//Hay dos tipos de operadores en JS los aritméticos y los de asignación

//Los Operadores aritmeticos toman valores numéricos como sus operandos y retornan un valor numérico único.

// Los operadores de asignación asignan un valor al operando de la izquierda basado en el valor del operando de la derecha

    // asignación      -> x = y      resultado x = y
    // adicción        -> x += y     resultado x = x + y;
    // multiplicación  -> x *= y     resultado x = x * y;
    // division        -> x /= y     resultado x = x / y;
    // resto           -> x %= y     resultado x = x % y;
    // exponenciacion  -> x **= y    resultado x = x ** y;
    // AND             -> x &=y      resultado x = x & y;
    // OR              -> x |= y     resultado x = x | y;
    // XOR             -> x ^= y     resultado x = x ^ y;

    const addiction = (x,y)=>{
        x += y;
        console.log(`Resultado adicción: ${x}`);
    
    }

    const multiplicacion = (x,y)=>{
        x *= y
        console.log(`Resultado multiplicación ${x}`);

    }

    
    addiction(2,4);
    multiplicacion(2,4);