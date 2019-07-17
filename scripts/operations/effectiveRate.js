class effectiveRate {


    time;//periodo en el cual estaremos invirtiendo o tiempo que paso, es en años
    percentIn;//porcentajes de interes
    divisor;//si es anual por cien


    constructor(time, percentIn) {

        this.time = time;
        this.percentIn = percentIn;
        this.divisor = 100;

    }

    calculateEffectiveRate(){

        var a = this.percentIn /this.divisor;
        var b = 1+ a;
        var c = Math.pow(b, this.time);
        return c -1;

    }





}
