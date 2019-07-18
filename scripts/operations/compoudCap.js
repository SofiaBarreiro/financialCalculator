class compoudCap {


    initialCap;//capital inicial
    time;//periodo en el cual estaremos invirtiendo o tiempo que paso, es en años
    percentIn;//porcentajes de interes
    earnings;//ganancias obtenidas
    divisor;//si es anual por cien
    ret = 'Error de cálculo, uno de los datos ingresados no es un número';

    constructor(initialCap, time, percentIn) {

        this.initialCap = initialCap;
        this.time = time;
        this.percentIn = percentIn;
        this.divisor = 100;

    }

    calculateEarnedEarnings() {

        var i = this.percentIn / this.divisor;
        var a = 1 + i;
        var b = Math.pow(a, this.time);
        var earnings = this.initialCap * b;
        if(!isNaN(earnings)){
            ret = "La ganancia total es de " + earnings;
        }

        return ret;

    }



    calculateInitialCap() {

        var i = this.percentIn / this.divisor;
        var a = 1 + i;
        var res = Math.pow(a, this.time);
        var initialCap = this.earnings / res;
        if(!isNaN(initialCap)){
            ret = 'El capital inicial es de' + initialCap;
        }
        return ret;
    }

    calculateInterest() {

        var a = this.earnings / this.initialCap;
        var exp = 1 / this.time
        var res = Math.pow(a, exp);
        this.percentIn = (res - 1);
        var percentIn = this.percentIn * 100;
        if(!isNaN(percentIn)){
            ret = 'El porcentajes anual es de ' + percentIn;
        }
        return ret;
    }


    // calculateTime() {

    //     var i = this.percentIn / this.divisor;
    //     var a = this.earnings - this.intialCap;
    //     var b= this.intialCap * i;
    //     this.time = a / b;
    //     return this.time;


    // }





}