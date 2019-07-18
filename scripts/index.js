var operationSelected;
var inputs;
var numbOperation;
var resultado = 'error de calculo';
var retorno;

window.addEventListener('load', function () {

    var idForm = document.getElementById('form1');
    var form1 = document.createElement('form');
    form1.setAttribute('id', 'formOpen');

    idForm.appendChild(form1);

    var table1 = document.createElement('table');
    form1.appendChild(table1);

    addTittle(table1);

    addSelectOperation(table1);
    numbOperation = 0;



});

//parts

function addText(text) {

    var tr0 = document.createElement('tr');
    var td0 = document.createElement('td');
    td0.setAttribute('colspan', '3');
    var txtTd0 = document.createTextNode(text);
    td0.appendChild(txtTd0);
    tr0.appendChild(td0);
    return tr0;


}

function addSelects(table) {

    table.appendChild(addText(retorno));

    table.appendChild(addText('¿Cuál es la variable que desea calcular?'));


    var trS = document.createElement('tr');
    var tdS = document.createElement('td');
    tdS.setAttribute('colspan', '3');
    trS.appendChild(tdS);
    var selectVar = document.createElement('select');
    selectVar.setAttribute('id', 'selectVar1');
    var namesVar = ['', 'Cap. Inicial', 'Tiempo', 'Porc. Int.', 'Ganancias'];


    for (var i = 0; i < 5; i++) {

        var op1 = document.createElement('option');
        op1.setAttribute('value', namesVar[i]);
        op1.setAttribute('label', namesVar[i]);
        selectVar.appendChild(op1);
    }

    tdS.appendChild(selectVar);

    table.appendChild(trS);


    selectVar.onchange = function () {
        var inputs = document.getElementById(selectVar.value);

        blockInputs(inputs);

    };



}
function addInputs(table) {

    var namesVar = ['Cap. Inicial', 'Tiempo', 'Porc. Int.', 'Ganancias'];
    for (var i = 0; i < 4; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
            var td1 = document.createElement('td');

            switch (j) {

                case 0:
                    var text1 = document.createTextNode(namesVar[i]);
                    td1.appendChild(text1);
                    break;
                case 1:
                    var input = document.createElement('input');
                    input.setAttribute('id', namesVar[i]);
                    td1.appendChild(input);
                    break;
                default:
                    break;
            }
            tr.appendChild(td1);
        }
        table.appendChild(tr);
    }
}

function addInputsEffectiveRate(table) {


    table.appendChild(addText(retorno));

    var namesVar = ['Tiempo', 'Porc. Int.'];
    for (var i = 0; i < 2; i++) {

        var tr = document.createElement('tr');

        for (var j = 0; j < 2; j++) {
            var td1 = document.createElement('td');

            switch (j) {

                case 0:
                    var text1 = document.createTextNode(namesVar[i]);
                    td1.appendChild(text1);
                    break;
                case 1:
                    var input = document.createElement('input');
                    input.setAttribute('id', namesVar[i]);
                    td1.appendChild(input);
                    break;
                default: break;
            }

            tr.appendChild(td1);


        }
        table.appendChild(tr);

    }


}

function addButons(table) {


    var tr2 = document.createElement('tr');
    var namesButton = ['Calcular', 'Borrar', 'Volver'];


    for (var i = 0; i < 3; i++) {


        var td = document.createElement('td');

        var button = document.createElement('button');
        button.setAttribute('id', namesButton[i]);
        addText(namesButton[i]);

        var text1 = document.createTextNode(namesButton[i]);

        tr2.appendChild(td);
        td.appendChild(button);
        button.appendChild(text1);



    }
    table.appendChild(tr2);

    var buttonBorrar = document.getElementById('Borrar');

    var buttonCalcular = document.getElementById('Calcular');

    buttonCalcular.addEventListener('click', function (load) {
        load.preventDefault();
        makeCal(operationSelected);
        borrarInputs();
        addFormResults();



    });



    buttonBorrar.addEventListener('click', function (load) {
        load.preventDefault();
        borrarInputs();
    });


}

function addSelectOperation(table) {

    var trS = document.createElement('tr');
    var tdS = document.createElement('td');
    tdS.setAttribute('colspan', '3');
    trS.appendChild(tdS);
    var selectVar = document.createElement('select');
    selectVar.setAttribute('id', 'selectVar');
    var namesVar = ['', 'Capitalización Simple', 'Capitalización compuesta', 'Descuento', 'Tasa nominal'];


    for (var i = 0; i < 5; i++) {

        var op1 = document.createElement('option');
        op1.setAttribute('value', namesVar[i]);
        op1.setAttribute('label', namesVar[i]);
        selectVar.appendChild(op1);
    }

    tdS.appendChild(selectVar);

    table.appendChild(trS);


    var selectVar = document.getElementById('selectVar');
    var formIntro = document.getElementById('form1');

    selectVar.onchange = function () {

        retorno = selectVar.value;
        formIntro.setAttribute('class', 'hidden');
        switch (selectVar.value) {
            case ('Capitalización Simple'):
                numbOperation = 1;
                addFormCalculator();
                break;
            case ('Capitalización compuesta'):
                numbOperation = 2;
                addFormCalculator();
                break;
            case ('Descuento'):
                numbOperation = 3;
                addFormCalculator();
                break;
            case ('Tasa nominal'):
                numbOperation = 4;
                addFormCalculator(1);
                break;
            default:
                break;


        }


    };

    return retorno;

}
function addTittle(table) {

    table.appendChild(addText('Bienvenido a la Calculadora Financiera'));
    table.appendChild(addText('Seleccione una operación'));
}


function addFormCalculator(efecctiveR) {



    var idForm = document.getElementById('form2');
    var form2 = document.createElement('form');

    idForm.appendChild(form2);

    var table1 = document.createElement('table');

    form2.appendChild(table1);


    if (efecctiveR) {

        addInputsEffectiveRate(table1);
    } else {

        addSelects(table1);
        addInputs(table1);


    }

    addButons(table1);


}

function addFormResults() {



    var idForm = document.getElementById('form2');
    idForm.setAttribute('class', 'hidden');


    var idForm3 = document.getElementById('form3');
    idForm3.setAttribute('class', 'show');

    if (document.getElementById('form3').firstChild == null) {


        var form1 = document.createElement('form');
        form1.setAttribute('id', 'form1');
        idForm.appendChild(form1);

        var table1 = document.createElement('table');
        form1.appendChild(table1);
        table1.appendChild(addText(resultado));

        var idForm3 = document.getElementById('form3');
        idForm3.appendChild(form1);

        addButtonResults(table1);

    }


}




function addButtonResults(table) {

    var tr2 = document.createElement('tr');
    var namesButton = ['Volver a Calcular', 'Salir'];


    for (var i = 0; i < 2; i++) {


        var td = document.createElement('td');

        var button = document.createElement('button');
        button.setAttribute('id', namesButton[i]);
        addText(namesButton[i]);
        var text1 = document.createTextNode(namesButton[i]);
        tr2.appendChild(td);
        td.appendChild(button);
        button.appendChild(text1);



    }
    table.appendChild(tr2);


    var buttonVolver = document.getElementById('Volver a Calcular');

    buttonVolver.addEventListener('click', function (load) {
        load.preventDefault();
        var idForm3 = document.getElementById('form3');
        idForm3.setAttribute('class', 'hidden');
        var idForm2 = document.getElementById('form2');
        idForm2.setAttribute('class', 'show');


    });

}

//events

function borrarInputs() {

    var inputs1 = document.querySelectorAll("input");

    for (i = 0; i < inputs1.length; i++) {
        inputs1[i].value = '';

    }


}

function blockInputs(inputs) {

    var inputs1 = document.querySelectorAll("input");

    for (i = 0; i < inputs1.length; i++) {
        inputs1[i].disabled = false;
        inputs1[i].style.backgroundColor = 'white';
    }
    inputs.setAttribute('disabled', 'true');
    inputs.style.backgroundColor = 'grey';
    operationSelected = inputs.id;
}

//functions

function makeCal(operationSelected) {

    var iniCap = document.getElementById('Cap. Inicial');
    console.log(iniCap.value);
    var time = document.getElementById('Tiempo');
    var porc = document.getElementById('Porc. Int.');
    var earning = document.getElementById('Ganancias');
    var operation;

    switch (numbOperation) {
        case (1):

            operation = new simpleCap(iniCap.value, time.value, porc.value, earning.value);
            resultado = SimpCap_CompoudCap_discount(operationSelected, operation);
            break;
        case (2):
            operation = new compoudCap(iniCap.value, time.value, porc.value, earning.value);
            resultado = SimpCap_CompoundCap_discount(operationSelected, operation)
            break;
        case (3):
            operation = new discount(iniCap.value, time.value, porc.value, earning.value);
            resultado = SimpCap_CompoudCap_discount(operationSelected, operation)
            break;
        case (4):
            operation = new effectiveRate(time.value, porc.value);
            resultado = operation.calculateEffectiveRate();
            break;
        default:
            break;
    }

}

function SimpCap_CompoudCap_discount(operationSelected, operation) {


    switch (operationSelected) {
        case ('Ganancias'):
            resultado = operation.calculateEarnedEarnings();
            break;
        case ('Cap. Inicial'):
            resultado = operation.calculateInitialCap();
            break;
        case ('Porc. Int.'):
            resultado = operation.calculateInterest();
            break;
        case ('Tiempo'):
            resultado = operation.calculateTime();
            break;
        default:
            break;

    }
    alert(resultado);
    return resultado;

}




