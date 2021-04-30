
function onclic() {   
    let placa = document.getElementById('placa').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value
    //alert(placa + fecha + hora);
    console.log(placa, fecha, hora)
    Validar(placa, fecha, hora);
    let fechaCompleta = FormatoHora(fecha, hora);
    VerificaCircula(fechaCompleta, placa)

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
    let anio = 2021;
    let fecha = new Date(anio, (mes-1), dia, hora, minutos);
    console.log(fecha);
  
    return fecha    
}

function VerificaCircula(fechaCompleta, placa) {
    
    console.log(fechaCompleta);
    let ultimoDigito = placa.substring(6,7)
    console.log(ultimoDigito)
    let diaSemana = fechaCompleta.getDay();
    console.log(diaSemana);
}


