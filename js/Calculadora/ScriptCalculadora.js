function llamarCalculadora() {

    document.getElementById("h2TopOperarcion").innerHTML = ""
    document.getElementById("metodosh2").innerHTML = ""
    const BotonGenerar = document.getElementById("botonGenerar")
    const TablaGMatriz = document.getElementById("tablaGMatriz")
    BotonGenerar.style.display = "none"
    TablaGMatriz.style.display = "none"

    const headerOperacion = document.getElementById("headerOperacion")
    headerOperacion.style.justifyContent = "center"


    const H2Calculadora = document.getElementById("h2Calculadora")
    H2Calculadora.style.display = "block"
    contenedorPrincipal.innerHTML = ""
    contenedorGuardar.style.display = "none"
    document.getElementById("output").innerHTML = ""
}