

var rezultat = '0';
var levi_operand = 0;
var desni_operand = 0;
var operacija = '';
document.getElementById('ekran').innerHTML = rezultat;

function upisiBroj(br) {
    if (operacija === '') {
        levi_operand = parseFloat(levi_operand.toString() + br.toString());
    } else {
        desni_operand = parseFloat(desni_operand.toString() + br.toString());
    }

    //alert(typeof(levi_operand));
    osveziEkran();

}

function upisiBrojElementId(id_elementa) {
    if (operacija === '') {
        levi_operand = parseFloat(levi_operand.toString() + document.getElementById(id_elementa).innerHTML);
    } else {
        desni_operand = parseFloat(desni_operand.toString() + document.getElementById(id_elementa).innerHTML);
    }

    osveziEkran();
}

function dodajNulu() {
    
    if (operacija === '') {
        levi_operand = parseFloat(levi_operand.toString() + '0');
    } else {
        desni_operand = parseFloat(desni_operand.toString() + '0');
    }
    
    osveziEkran();
}


function postaviOperaciju(op) {

    operacija = op;
    osveziEkran();

}


function osveziEkran() {


    if (rezultat !=='0') {
        document.getElementById('ekran').innerHTML = rezultat;
        levi_operand = rezultat;
        desni_operand = 0;
        operacija = '';
        rezultat = '0';
        return;
    }


    if(operacija === '') {
        document.getElementById('ekran').innerHTML = levi_operand + operacija;
        
    }else{
       
        if (desni_operand != 0)
        {
            document.getElementById('ekran').innerHTML = levi_operand + operacija + desni_operand;
        } else {
            document.getElementById('ekran').innerHTML = levi_operand + operacija;
        }
    }
}

function ocistiEkran(){
    operacija = '';
    rezultat = '0';
    levi_operand = 0;
    desni_operand = 0;
    document.getElementById('ekran').innerHTML = rezultat;

}

function izracunaj() {
    switch (operacija) {
        case "+":
        {
            rezultat = levi_operand + desni_operand;
            break;
        }
        case "-":
        {
            rezultat = levi_operand - desni_operand;
            break;
        }
        case "/":
        {
            rezultat = levi_operand / desni_operand;
            break;
        }
        case "*":
            {
                rezultat = levi_operand * desni_operand;
                break;
            }

            

        default:
            
            break;
    }
    osveziEkran();
}