class discount{



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

        // var i = this.percentIn / this.divisor;


        // this.earnings = this.intialCap * (1 + i * this.time);
        // return this.earnings;

    }

    // calculateInitialCap() {

    //     var i = this.percentIn / this.divisor;
    //     var a = i * this.time;
    //     a = a+1;
    //     this.intialCap = this.earnings / a;

    //     return this.intialCap;
    // }

    // calculateInterest() {

    //     var a = this.intialCap * this.time;
    //     var b = this.earnings - this.intialCap;
        
    //     var c=  b / a;

    //     this.percentIn = c * 100;
        
    //     return this.percentIn;
    // }


    // calculateTime() {

    //     var i = this.percentIn / this.divisor;
    //     var a = this.earnings - this.intialCap;
    //     var b= this.intialCap * i;
    //     this.time = a / b;
    //     return this.time;


    // }

}