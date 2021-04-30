
function onclic() {   
    let placa = document.getElementById('placa').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value
    /*
    placa = 'abc1230'
    fecha = '01-05'
    hora = '09-00'*/
    //alert(placa + fecha + hora);
    console.log(placa, fecha, hora)
    //Validamos Inputs
    Validar(placa, fecha, hora);

    //Colocamos los valores del input en formato fecha/hora
    let fechaCompleta = FormatoHora(fecha, hora);

    //Falso -> hora de restriccion
    let boolHora = VerificaHora(fechaCompleta);

    //Falso -> Dia de restriccion por placa
    let boolDiaPlaca = VerificaDiaYPlaca(fechaCompleta, placa);
    console.log('diaplaca'+boolDiaPlaca + 'hora'+boolHora)
    //Comparacion restricciones
    if (boolDiaPlaca == false && boolHora == false){
        console.log('No Puede Circular');
    }
    else{
        console.log('Puede Circular');
    }
}

function Validar(p,f,h){
    if(p.length !== 7 ) alert('Placa Incorrecta');
    if(f.length !==5) alert('Fecha Incorrecta');
    if(h.length !==5) alert('Hora Incorrecta');
}

function FormatoHora(f,h){
    let hora = h.substring(0,2);
    let minutos = h.substring(3,5);
    console.log(hora + ' ' + minutos);
    let mes = f.substring(3,5);
    let dia = f.substring(0,2);
    console.log(dia + ' ' + mes);
    let anio = new Date().getFullYear();
    let fecha = new Date(anio, (mes-1), dia, hora, minutos);
    console.log(fecha);
  
    return fecha    
}

function VerificaDiaYPlaca(fechaCompleta, placa) {
    
    console.log(fechaCompleta);
    let ultimoDigito = placa.substring(6,7)
    console.log('ultimodig'+ultimoDigito)
    let diaSemana = fechaCompleta.getDay();
    console.log('diasemana'+diaSemana);
    let resultado //Bool
    if(diaSemana == 0 || diaSemana == 6){
        resultado=true;
    } 
    else {
        console.log(ultimoDigito);
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

    console.log('diaplaca'+resultado);
    return resultado;
}

function VerificaHora(fecha){
    console.log(fecha.getHours() + ':' + fecha.getMinutes());
    
    let resultado = true
    if(fecha.getHours()>=7 && fecha.getHours()<=9){
        (fecha.getHours()==9 && fecha.getMinutes()>=31) ? resultado = true:resultado =  false;
        }
    else{
        if(fecha.getHours()>=16 && fecha.getHours()<=19){
            (fecha.getHours()==19 && fecha.getMinutes()>=31)? resultado = true: resultado =  false;
            
        }
        
    }
    console.log('hora'+' '+resultado)
    return resultado;
}

