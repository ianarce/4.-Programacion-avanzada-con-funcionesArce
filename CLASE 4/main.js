
function calcularMonto (total,meses){
    switch(meses){
        case "4":
            return total/4;
            break;
        case "6":
            return total/6;
            break;
        case "8":
            return total/8;
            break;
        case "12":
            return total/12;
            break;
        case "24":
            return total/24;
            break;
        default:
            return "MESES NO DISPONIBLES"
    }
}

let montoTotal = parseFloat(prompt("Ingresa el monto total a pagar $"))
let mesesSinIntereses=prompt("MESES SIN INTERESES DISPONIBLES:\n 4 meses\n 6 meses\n 8 meses\n 12 meses \n 24 meses \n INGRESA EL NUMERO DE MESES: ")
let resultado=calcularMonto(montoTotal,mesesSinIntereses)
if (resultado=="MESES NO DISPONIBLES"){
    alert("ERROR MESES NO DISPONIBLES")
}
else{
    alert("El monto a pagar por mes sin interes es " + resultado + "$")}
