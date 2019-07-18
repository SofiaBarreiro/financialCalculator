class compoudCap {


    intialCap;//capital inicial
    time;//periodo en el cual estaremos invirtiendo o tiempo que paso, es en años

    perceivedIn;//intereses percibidos
    percentIn;//porcentajes de interes
    earnings;//ganancias obtenidas
    divisor;//si es anual por cien


    constructor(intialCap, time, percentIn) {

        this.intialCap = intialCap;
        this.time = time;
        this.percentIn = percentIn;
        this.divisor = 100;

    }

    calculateEarnedEarnings() {

        var i = this.percentIn / this.divisor;
        var a = 1 + i;
        var b = Math.pow(a, this.time);
        var earnings = this.intialCap * b;

        return "La ganancia total es de " + earnings;

    }



    calculateInitialCap() {

        var i = this.percentIn / this.divisor;
        var a = 1 + i;
        var res = Math.pow(a, this.time);
        var initialCap = this.earnings / res;
        return 'El capital inicial es de' + initialCap;
    }

    calculateInterest() {

        var a = this.earnings / this.intialCap;
        var exp = 1 / this.time
        var res = Math.pow(a, exp);
        this.percentIn = (res - 1);
        var percentIn = this.percentIn * 100;
        return 'El porcentajes anual es de ' + percentIn;
    }


    // calculateTime() {

    //     var i = this.percentIn / this.divisor;
    //     var a = this.earnings - this.intialCap;
    //     var b= this.intialCap * i;
    //     this.time = a / b;
    //     return this.time;


    // }





}