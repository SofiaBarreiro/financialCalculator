var operationSelected;
var inputs;

window.addEventListener('load', function(){


    var idForm = document.getElementById('form1');
    var form1 = document.createElement('form');
    form1.setAttribute('id', 'formOpen');

    idForm.appendChild(form1);

    var table1 = document.createElement('table');
    form1.appendChild(table1);

    addTittle(table1);

    addSelectOperation(table1);
    console.log('paso por load');
});




//parts

function addSelects(table) {

    var tr0 = document.createElement('tr');
    var td0 = document.createElement('td');
    td0.setAttribute('colspan', '3');
    var txtTd0 = document.createTextNode('¿Cuál es la variable que desea Calcular?');
    td0.appendChild(txtTd0);
    tr0.appendChild(td0);

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

    table.appendChild(tr0);
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
        var text1 = document.createTextNode(namesButton[i]);

        tr2.appendChild(td);
        td.appendChild(button);
        button.appendChild(text1);



    }
    table.appendChild(tr2);

    var buttonBorrar = document.getElementById('Borrar');

    var buttonCalcular = document.getElementById('Calcular');



    buttonCalcular.addEventListener('click',function () {

        calcularCapitalizacionSimple(operationSelected);

    });

    window.removeEventListener("load", function(){});
    buttonBorrar.addEventListener('click', function () {
        

        
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
    var namesVar = ['', 'Capitalización Simple', 'Capitalización compuesta', 'Tasa nominal', 'Descuento'];


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



        formIntro.setAttribute('class', 'hidden');

        addFormCapSimple();


    };



}
function addTittle(table) {

    var tr0 = document.createElement('tr');
    var td0 = document.createElement('td');
    td0.setAttribute('colspan', '3');
    var txtTd0 = document.createTextNode('Bienvenido a la Calculadora Financiera');
    td0.appendChild(txtTd0);
    tr0.appendChild(td0);
    table.appendChild(tr0);

    var tr1 = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.setAttribute('colspan', '3');
    var txtTd1 = document.createTextNode('¿Qué es lo que desea cacular?');
    td1.appendChild(txtTd1);
    tr1.appendChild(td1);
    table.appendChild(tr1);



}


function addFormCapSimple() {



    var idForm = document.getElementById('form2');
    var form1 = document.createElement('form');

    idForm.appendChild(form1);

    var table1 = document.createElement('table');

    form1.appendChild(table1);

    addSelects(table1);

    addInputs(table1);

    addButons(table1);

 



}


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


function calcularCapitalizacionSimple(operationSelected) {



    var iniCap = document.getElementById('Cap. Inicial');
    var time = document.getElementById('Tiempo');
    var porc = document.getElementById('Porc. Int.');
    var earning = document.getElementById('Ganancias');
    var operation1 = new operation(iniCap.value, time.value, porc.value);
    operation1.earnings = earning.value;
    var resultado = 'error de calculo';
    switch (operationSelected) {
        case ('Ganancias'):
            resultado = operation1.calculateEarnedEarnings();
            break;
        case ('Cap. Inicial'):
            resultado = operation1.calculateInitialCap();
            break;
        case ('Porc. Int.'):
            resultado = operation1.calculateInterest();
            break;
        case ('Tiempo'):
            resultado = operation1.calculateTime();
            break;
        default:
            break;

    }
    alert(resultado);
    return resultado;

}
