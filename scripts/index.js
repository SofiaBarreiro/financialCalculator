

window.onload = function showIndexForm() {

    var idForm = document.getElementById('form');
    var form1 = document.createElement('form');
    form1.setAttribute('id', 'formOpen');

    idForm.appendChild(form1);

    var table1 = document.createElement('table');
    form1.appendChild(table1);

    addTittle(table1);

    var tr0 = document.createElement('tr');
    var td0 = document.createElement('td');
    td0.setAttribute('colspan', '3');
    var txtTd0 = document.createTextNode('¿Qué es lo que desea cacular?');
    td0.appendChild(txtTd0);
    tr0.appendChild(td0);
    table1.appendChild(tr0);

    addSelectOperation(table1);

}

function addTittle(table) {

    var tr0 = document.createElement('tr');
    var td0 = document.createElement('td');
    td0.setAttribute('colspan', '3');
    var txtTd0 = document.createTextNode('Bienvenido a la Calculadora Financiera');
    td0.appendChild(txtTd0);
    tr0.appendChild(td0);
    table.appendChild(tr0);



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

    selectVar.onchange = function () {

        // var inputs = document.getElementById(selectVar.value);


        switch (selectVar.value) {

            case 'Capitalización Simple':
                var form1 = document.getElementById('formOpen');
                console.log(form1);
                form1.setAttribute('class', 'hidden');
                showSimpleCapForm();


                var buttonCalcular = document.getElementById('Calcular');
                console.log(buttonCalcular);

                buttonCalcular.addEventListener('click', function () {

                    var capIn = document.getElementById('Cap. Inicial');
                    var child = capIn.childNodes;

                    alert(child);
                    

                calcular();

                });
                break;
            default:
                break;

        }



    };






}




function calcular(){





}



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

                    var textIn = document.createTextNode('99');

                    input.setAttribute('id', namesVar[i]);
                    
                    input.appendChild(textIn);
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


}

function blockInputs(inputs) {

    var inputs1 = document.querySelectorAll("input");

    for (i = 0; i < inputs1.length; i++) {
        inputs1[i].disabled = false;
        inputs1[i].style.backgroundColor = 'white';
    }
    inputs.setAttribute('disabled', 'true');
    inputs.style.backgroundColor = 'grey';

}


function showSimpleCapForm() {


    var idForm = document.getElementById('form');
    var form1 = document.createElement('form');

    idForm.appendChild(form1);

    var table1 = document.createElement('table');

    form1.appendChild(table1);

    addSelects(table1);

    addInputs(table1);

    addButons(table1);


    var selectVar = document.getElementById('selectVar1');

    selectVar.onchange = function () {

        var inputs = document.getElementById(selectVar.value);
        blockInputs(inputs);

    };




    // var inputs = document.getElementById(selectVar.value);
    // blockInputs(inputs);

    // operation = new operation();
    // calcular();



}