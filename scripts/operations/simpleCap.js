class simpleCap {



    initialCap;//capital inicial
    time;//periodo en el cual estaremos invirtiendo o tiempo que paso, es en años
    perceivedIn;//intereses percibidos
    earnings;//ganancias obtenidas
    divisor;//si es anual por cien
    ret = 'Error de cálculo, uno de los datos ingresados no es un número';




    constructor(initialCap, time, percentIn, earnings) {

        this.initialCap = initialCap;
        this.time = time;
        this.percentIn = percentIn;
        this.divisor = 100;
        this.earnings = earnings;


    }


    calculateEarnedEarnings() {


        var i = this.percentIn / this.divisor;
        this.earnings = this.initialCap * (1 + i *this.time);
        if(!isNaN(this.earnings)){

            this.ret = 'La ganancia total es de ' + this.earnings;
        }
        return this.ret;
    }

    calculateInitialCap() {

        var i = this.percentIn / this.divisor;
        var a = i * this.time;
        a = a + 1;
        var initialCap = this.earnings / a;

        if (!isNaN(initialCap)) {
            this.ret= 'El capital inicial es de ' + initialCap;

        }
        return this.ret;

    }

    calculateInterest() {

        var a = this.initialCap * this.time;
        var b = this.earnings - this.initialCap;

        var c = b / a;

        var percentIn = c * 100;
        if(!isNaN(percentIn)){

            this.ret = 'El porcentaje anual es de' + percentIn;
        }

        return this.ret;
    }


    calculateTime() {

        var i = this.percentIn / this.divisor;
        var a = this.earnings - this.initialCap;
        var b = this.initialCap * i;
        var time = a / b;
        if(!isNaN(time)){

            this.ret = 'El tiempo es de ' + time + 'años';

        }
        return this.ret;

    }



}