class simpleCap{



    intialCap;//capital inicial
    time;//periodo en el cual estaremos invirtiendo o tiempo que paso, es en años

    perceivedIn;//intereses percibidos
    earnings;//ganancias obtenidas
    divisor;//si es anual por cien


    constructor(intialCap, time, percentIn, earnings) {

        this.intialCap = intialCap;
        this.time = time;
        this.percentIn = percentIn;
        this.divisor = 100;
        this.earnings = earnings;


    }


    calculateEarnedEarnings() {

        var i = this.percentIn / this.divisor;
        this.earnings = this.intialCap * (1 + i * this.time);
        return this.earnings;
    }

    calculateInitialCap() {

        var i = this.percentIn / this.divisor;
        var a = i * this.time;
        a = a+1;
        var intialCap = this.earnings / a;

        return intialCap;
    }

    calculateInterest() {

        var a = this.intialCap * this.time;
        var b = this.earnings - this.intialCap;
        
        var c=  b / a;

        var percentIn = c * 100;
        
        return percentIn;
    }


    calculateTime() {

        var i = this.percentIn / this.divisor;
        var a = this.earnings - this.intialCap;
        var b= this.intialCap * i;
        var time = a / b;
        return time;


    }



}