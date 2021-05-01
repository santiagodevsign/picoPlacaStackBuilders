//RevisionCompleta toma los 3 inputs solicitados
function RevisionCompleta() {   
    let placa = document.getElementById('placa').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value

    //Validamos Inputs
    ValidarInputFecha(fecha, hora);
    ValidarInputPlaca(placa)
    //Colocamos los valores del input en formato fecha/hora
    let fechaCompleta = FormatoHora(fecha, hora);

    //Falso -> hora de restriccion
    let boolHora = VerificaHora(fechaCompleta);

    //Falso -> Dia de restriccion por placa
    let boolDiaPlaca = VerificaDiaYPlaca(fechaCompleta, placa);

    //Comparacion restricciones
   ComparoRestricciones(boolDiaPlaca,boolHora);
}

//RevisionHoy toma la fecha y hora del instante que se aplasta el boton
function RevisionHoy(){
    let hoy = new Date();
    let placa = document.getElementById('placa').value
    ValidarInputPlaca(placa)
    //Falso -> hora de restriccion
    let boolHora = VerificaHora(hoy);
    //Falso -> Dia de restriccion por placa
    let boolDiaPlaca = VerificaDiaYPlaca(hoy, placa);
    //Comparacion restricciones
    ComparoRestricciones(boolDiaPlaca,boolHora);
   

}
function ComparoRestricciones(boolDiaPlaca,boolHora){
    if (boolDiaPlaca == false && boolHora == false){
        alert('Gracias por usar Predictor\n\nNo puede circular en este momento\nEspere a que el horario de restricción termine, por favor');
    }
    else{
        if(boolDiaPlaca == true)(alert('Gracias por usar Predictor\n\nPuede Circular Todo el día'))
        if(boolDiaPlaca == false && boolHora == true)alert('Gracias por usar Predictor\n\nSu auto tiene restricción, pero puede circular en este momento\nTenga en cuenta los horarios de restricción');
    }
}

function ValidarInputPlaca(p){
    if(p.length !== 7 ) alert('Verifique el valor ingresado\nLa Placa debe constar de 3 letras y 4 números');
    if(isNaN(p.substring(3,7)))alert('Verifique el valor ingresado\nEn los 4 dígitos de la placa se detectó un error de ingreso');
}

function ValidarInputFecha(f,h){
    if(f.length !==5) alert('Fecha Incorrecta, escríbala con el formato indicado, por favor');
    if(h.substring(0,2)>24 || h.substring(3,5)>59) alert('Hora Incorrecta, escríbala con el formato indicado, por favor')
    if(f.substring(0,2)>31 || f.substring(3,5)>12) alert('Fecha Incorrecta, escríbala con el formato indicado, por favor')
    if(h.length !==5) alert('Hora Incorrecta, escríbala con el formato indicado, por favor');
}
function FormatoHora(f,h){
    let hora = h.substring(0,2);
    let minutos = h.substring(3,5);
    let mes = f.substring(3,5);
    let dia = f.substring(0,2);
    let anio = new Date().getFullYear();
    let fecha = new Date(anio, (mes-1), dia, hora, minutos);
    return fecha    
}

function VerificaDiaYPlaca(fechaCompleta, placa) {
    let ultimoDigito = placa.substring(6,7)
    let diaSemana = fechaCompleta.getDay();
    let resultado //Bool
    if(diaSemana == 0 || diaSemana == 6){
        resultado=true;
    } 
    else {
        if (ultimoDigito == 1 || ultimoDigito == 2)
        (diaSemana == 1)? resultado= false: resultado=true;
        if (ultimoDigito == 3 || ultimoDigito == 4)
        (diaSemana == 2)? resultado= false: resultado=true;
        if (ultimoDigito == 5 || ultimoDigito == 6)
        (diaSemana == 3)? resultado= false: resultado=true;
        if (ultimoDigito == 7 || ultimoDigito == 8)
        (diaSemana == 4)? resultado= false: resultado=true;
        if (ultimoDigito == 9 || ultimoDigito == 0)
        (diaSemana == 5)? resultado= false: resultado=true;
    }
    return resultado;
}

function VerificaHora(fecha){    
    let resultado = true
    if(fecha.getHours()>=7 && fecha.getHours()<=9){
        (fecha.getHours()==9 && fecha.getMinutes()>=31) ? resultado = true:resultado =  false;
        }
    else{
        if(fecha.getHours()>=16 && fecha.getHours()<=19){
            (fecha.getHours()==19 && fecha.getMinutes()>=31)? resultado = true: resultado =  false;
        }     
    }
    return resultado;
}

