"use strict";
/*valida que cantidad sea un numero*/
function cantidad() {
  let cantidad;
  do {
    cantidad = Number(prompt("Ingrese la cantidad"));
    if (cantidad >= 0) {
    } else {
      alert("Ingrese un numero");
    }
  } while (isNaN(cantidad));
  return cantidad;
}
/*multiplica las cantidades por su precio*/
function totalProduct(cant, price) {
  let total = cant * price;
  return total;
}

let res;

let totalPan = 0;
let totalQueso = 0;
let totalCoca_cola = 0;

let cantPan = 0;
let cantQueso = 0;
let cantCoca_cola = 0;

do {
  let producto = prompt(
    "Que producto desea comprar?  \n1- pan   \n2- queso   \n3- cocacola "
  );
  /* Suma el total de los articulos*/
  let totalCompra;
  function totalCompras(totalPan, totalQueso, totalCoca_cola) {
    totalCompra = totalPan + totalQueso + totalCoca_cola;
    return totalCompra;
  }
  /*Calcula el iva de la compra*/
  let baseIva;
  function calBaseIva(totalCompra) {
    /*Impuesto es de 12% */
    baseIva = totalCompra * 0.12;
    return baseIva;
  }

  let iva;
  function calIva(totalCompra) {
    /*Impuesto es de 12% */
    let impuesto = 1.12;
    iva = totalCompra * impuesto;
    return iva;
  }

  switch (producto) {
    case "1":
      let precioPan = 2;
      cantPan += cantidad();
      totalPan = totalProduct(cantPan, precioPan);

      alert(
        "El total Pan: \n" +
          " cant: " +
          cantPan +
          "\n precio: " +
          precioPan +
          "\n subTotal = " +
          totalPan
      );

      break;
    case "2":
      let precioQueso = 1;
      let cantQueso = cantidad();
      cantQueso = cantQueso++;
      totalQueso += totalProduct(cantQueso, precioQueso);

      alert(
        "El total Queso: \n" +
          " cant: " +
          cantQueso +
          "\n precio: " +
          precioQueso +
          "\n subTotal = " +
          totalQueso
      );

      break;
    case "3":
      let precioCoca_cola = 4;
      let cantCoca_cola = cantidad();
      cantCoca_cola = cantCoca_cola++;
      totalCoca_cola += totalProduct(cantCoca_cola, precioCoca_cola);

      alert(
        "El total Coca_cola: \n" +
          " cant: " +
          cantCoca_cola +
          "\n precio: " +
          precioCoca_cola +
          "\n subTotal = " +
          totalCoca_cola
      );

      break;

    default:
      break;
  }
  res = prompt("Desea agregar otro producto? (s/n)");

  if (res === "n") {
    alert(
      "\nCantidad Pan: " +
        cantPan +
        "\nCantidad Queso: " +
        cantQueso +
        "\nCantidad Coca_cola: " +
        cantCoca_cola +
        "\n------------------------------------------------" +
        "\nEl total de compra es: " +
        totalCompras(totalPan, totalQueso, totalCoca_cola) +
        "\n                          + IVA: " +
        calBaseIva(totalCompra) +
        "\n                            Total: " +
        calIva(totalCompra)
    );
  }
} while (res === "s");
