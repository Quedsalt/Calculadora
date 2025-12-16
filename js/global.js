let subMenu = document.querySelector(".submenu")
let openSubMenu = document.querySelector(".open_submenu")

openSubMenu.addEventListener("click", function(){
  subMenu.classList.toggle('show')
})

document.addEventListener("click", function(e){
  if(subMenu.classList.contains('show')
  && !subMenu.contains(e.target)
  && !openSubMenu.contains(e.target)){
    subMenu.classList.remove('show')
  }
})
//Mostrar matriz
document.getElementById("botonGenerar").addEventListener("click", mostrarMatriz)
document.getElementById('GuardarBoton').addEventListener('click', () => {
  botonGuardarF()
  document.getElementById('output').scrollIntoView({ behavior: 'smooth' })
})

function mostrarMatriz() {
  const NumFilas = parseInt(document.getElementById("filasInput").value)
  const NumColumnas = parseInt(document.getElementById("columnasInput").value)

  contenedorPrincipal.innerHTML = ""

  for (let i = 0; i < NumFilas; i++) {
    const filaDiv = document.createElement("div")
    filaDiv.style.display = "flex"
    filaDiv.style.gap = "8px"
    filaDiv.style.margin = "5px 0"

    for (let j = 0; j < NumColumnas; j++) {
      const inputNumber = document.createElement("input")
      inputNumber.type = "number"
      inputNumber.id = `input_${i}_${j}`
      inputNumber.style.textAlign = "center"
      filaDiv.appendChild(inputNumber)
    }

    contenedorPrincipal.appendChild(filaDiv)
  }

  contenedorGuardar.style.display = "block"
}


function botonGuardarF() {
  if (botonGuardar) {
    const metodosh2 = document.getElementById("metodosh2").textContent.trim()
    if (metodosh2 === "Cramer") {
      guardarMatriz()
    } else if (metodosh2 === "Gauss Jordan"){
      resultado()
    }else if(metodosh2 === "Producto Cruz"){
      calcularProductoCruz()
    }
  } else {
    document.getElementById("output").innerHTML = "NO hay seleccionada un metodo disponible"
  }
}

//Actualiza el diseño de la pagina
function subHeaderStyle(){
  contenedorPrincipal.innerHTML = ""
  contenedorGuardar.style.display = "none"
  document.getElementById("output").innerHTML = ""
  document.getElementById("h2TopOperarcion").innerHTML = "Matriz"
  //Muestra el boton y tabla de matriz
  const BotonGenerar = document.getElementById("botonGenerar")
  const TablaGMatriz = document.getElementById("tablaGMatriz")
  BotonGenerar.style.display = "block"
  TablaGMatriz.style.display = "block"
  const headerOperacion = document.getElementById("headerOperacion")
  headerOperacion.style.justifyContent = "space-between"
  //Muestra el contenido de matrices
  const H2MatrizContent = document.getElementById("H2MatrizContent")
  H2MatrizContent.style.display = "block"
  //Oculta Calculadora
  const MostrarCalculadora = document.querySelector(".calculadora")
  MostrarCalculadora.style.display = "none"
  const contentMatriz = document.querySelector(".contentMatriz")
  contentMatriz.style.justifyContent = "flex-start"
  //Ocuta Producto Cruz
  const ProdtCruz = document.querySelector(".productoCruz")
  ProdtCruz.style.display = "none"
  //Oculta Grafica
  const canvas = document.getElementById("canvas3D")
    if (canvas) {
    canvas.style.display = "none"
  }
  if (contentMatriz) contentMatriz.style.height = "500px"
}

function OcultarMatrices(){
  document.getElementById("h2TopOperarcion").innerHTML = ""
    const BotonGenerar = document.getElementById("botonGenerar")
    const TablaGMatriz = document.getElementById("tablaGMatriz")
    BotonGenerar.style.display = "none"
    TablaGMatriz.style.display = "none"

    const headerOperacion = document.getElementById("headerOperacion")
    headerOperacion.style.justifyContent = "center"

    contenedorPrincipal.innerHTML = ""
    contenedorGuardar.style.display = "none"
    document.getElementById("output").innerHTML = ""

    const H2MatrizContent = document.getElementById("H2MatrizContent")
    H2MatrizContent.style.display = "none"
}

//Llama los metodos
const botones = document.querySelectorAll(".boton-operacion")

botones.forEach(boton => {
  boton.addEventListener("click", function(e) {
    e.preventDefault()

    const metodo = this.getAttribute("data-metodo")
    
    switch(metodo) {
      case "calculadora":
        llamarCalculadora()
        break
      case "gauss":
        GaussJordan()
        break
      case "cramer":
        cramer()
        break
      case "ProductoCruz":
        llamarProductoCruz()
        break
      case "Grafica3D":
        llamarGrafica3D()
        break
    }
  })
})

// Estilos de la pagina Noche/Dia

const themeToggleBtn = document.getElementById('theme-toggle')
const modeToggleCheckbox = document.getElementById('modeToggle')
const body = document.body

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
        if (savedTheme === 'day') {
            body.classList.add('day-theme')
            modeToggleCheckbox.checked = true
        } else {
            body.classList.remove('day-theme')
            modeToggleCheckbox.checked = false
        }
    } else {
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

        if (!prefersDarkMode) {
            body.classList.add('day-theme')
            modeToggleCheckbox.checked = true
            localStorage.setItem('theme', 'day')
        } else {

            body.classList.remove('day-theme')
            modeToggleCheckbox.checked = false
            localStorage.setItem('theme', 'night')
        }
    }
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('day-theme')

    const currentTheme = body.classList.contains('day-theme') ? 'day' : 'night'
    localStorage.setItem('theme', currentTheme)
})

//boton dia/noche
const swith = document.querySelector(".switch")
swith.addEventListener("click", e => {
  swith.classList.toggle("active")
})
//Oculta la opcion de generar la grafica 3D y la graifica3D

const mediaQuery = window.matchMedia('(max-width: 900px)')

function handleTabletChange(e) {
  const canvasById = document.getElementById('canvas3D')
  const elementsWithClass = document.querySelectorAll('.canvas3D')

  if (e.matches) {
    GaussJordan()

    if (canvasById) {
      // Usamos setProperty para forzar !important en el ID
      canvasById.style.setProperty('display', 'none', 'important')
    }

    elementsWithClass.forEach(el => {
        el.style.setProperty('display', 'none', 'important')
    })
  }else {
    elementsWithClass.forEach(el => {
        el.style.setProperty('display', 'block', 'important')
    })
  }
}

mediaQuery.addEventListener('change', handleTabletChange)

handleTabletChange(mediaQuery)