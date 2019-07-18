class simpleCap {



    initialCap;//capital inicial
    time;//periodo en el cual estaremos invirtiendo o tiempo que paso, es en años

    perceivedIn;//intereses percibidos
    earnings;//ganancias obtenidas
    divisor;//si es anual por cien
    ret = 'Error de calculo, uno de los datos ingresados no es un número';








    constructor(initialCap, time, percentIn, earnings) {

        this.initialCap = initialCap;
        this.time = time;
        this.percentIn = percentIn;
        this.divisor = 100;
        this.earnings = earnings;


    }




    isNumberO(number) {

        if (isNumber(number)) {

            return number;

        } else {

            return 0;

        }

    }


    calculateEarnedEarnings() {

        var ret = ''
        this.percentIn=this.isNumber0(this.percentIn);

        var i = percentIn / this.divisor;
        console.log(i);
        this.earnings = isNumber0(this.initialCap) * (1 + i * isNumber0(this.time));
        if(earnings != 0){

            ret = 'La ganancia total es de ' + this.earnings;
        }
        return ret;
    }

    calculateInitialCap() {

        var i = this.percentIn / this.divisor;
        var a = i * this.time;
        a = a + 1;
        var initialCap = this.earnings / a;

        if (initialCap != 0) {
            return 'El capital inicial es de ' + initialCap;

        }

    }

    calculateInterest() {

        var a = this.initialCap * this.time;
        var b = this.earnings - this.initialCap;

        var c = b / a;

        var percentIn = c * 100;

        return 'El porcentaje anual es de' + percentIn;
    }


    calculateTime() {

        var i = this.percentIn / this.divisor;
        var a = this.earnings - this.initialCap;
        var b = this.initialCap * i;
        var time = a / b;
        return 'El tiempo es de ' + time + 'años';


    }



}