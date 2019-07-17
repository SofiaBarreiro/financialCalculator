class effectiveRate {


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


}
