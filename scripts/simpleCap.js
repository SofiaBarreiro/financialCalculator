class operation {



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
        this.earnings = this.intialCap * (1 + i * this.time);
        return this.earnings;

    }

    calculateInitialCap() {

        var i = this.percentIn / this.divisor;
        this.intialCap = this.earnings / [1 + (i * 10)];
        return this.intialCap;
    }

    calculateInterest() {

        this.percentIn = this.earnings - this.intialCap / (this.intialCap * this.time);
        return this.percentIn;
    }


    calculateTime() {

        var i = this.percentIn / this.divisor;
        this.time = (this.earnings - this.intialCap) / (this.intialCap * i);
        return this.time;


    }



}