/*
  Javascript de apoyo para el proyecto SALUD A LA MESA
  Veu, CSS3, Html5, NodeJs, MongoDB
  Grupo 61 - Ciclo 3
  Grupo de trabajo 8
*/

// carga el html en los elementos comunes para todas las páginas
const loadHtml = async function (parentElementId, filePath) {
  const init = {
    method: "GET",
    headers: { "Content-Type": "text/html" },
    mode: "cors",
    cache: "default"
  };
  const req = new Request(filePath, init);
  const construc = await fetch(req)
    .then((response) => {
      return response.text();
    })
    .then( (body) => {
      // reemplazar `#` por si es jQuery
      if (parentElementId.startsWith("#")) {
        parentElementId.replace("#", "");
      }
      document.getElementById(parentElementId).innerHTML = body;
      
      if (parentElementId === "nav") {
        // si ya el usuario ingresó a la plataforma se presenta el menu de administración
        if (window.sessionStorage && window.sessionStorage.getItem('credenciales') !== null) {
          if(document.getElementById("menu__ingresar").classList.contains("d-block")){
            document.getElementById("menu__ingresar").classList.remove("d-block")
            document.getElementById("menu__ingresar").classList.add("d-none")
          }
          if(document.getElementById("menu__administrar").classList.contains("d-none")){
            document.getElementById("menu__administrar").classList.remove("d-none")
            document.getElementById("menu__administrar").classList.add("d-block")
          }
        }
        // evento click ingresar a la plataforma limpiar formulario
        document.getElementById("menu__ingresar").addEventListener("click", () => {
          limpiarModalIngreso();
        })
        // configuración para que cierren (colapsen) los navs en moviles: bug bootstrap
        const navLinks = document.querySelectorAll('.bugCollapse')
        const menuToggle = document.getElementById('navbarSupportedContent')
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
        navLinks.forEach((l) => {            
          l.addEventListener('click', () => { bsCollapse.toggle() })            
        })
      }else if (parentElementId === "modal_ingresar"){
        // click en el botón ingresar del modal
        document.getElementById("sendIngresar").addEventListener("click", () => {
          let usr = document.getElementById("usr").value
          let pwd = document.getElementById("pwd").value
          let btoaString = btoa(usr + pwd)
          window.sessionStorage.setItem('credenciales', pwd)
          document.getElementById('cerrarModalIngresar').click()          
          document.getElementById('menu__ingresar').classList.remove("d-block")
          document.getElementById('menu__ingresar').classList.add("d-none")
          document.getElementById('menu__administrar').classList.remove("d-none")
          document.getElementById('menu__administrar').classList.add("d-block")
        })
        // click en el botón registrarse del modal
        document.getElementById("sendRegistrarse").addEventListener("click", () => {
          let usr = document.getElementById("usrNuevo").value
          let pwd = document.getElementById("pwdNuevo").value
          let btoaString = btoa(usr + pwd)
          window.sessionStorage.setItem('credenciales', pwd)
          document.getElementById('cerrarModalIngresar').click()          
          document.getElementById('menu__ingresar').classList.remove("d-block")
          document.getElementById('menu__ingresar').classList.add("d-none")
          document.getElementById('menu__administrar').classList.remove("d-none")
          document.getElementById('menu__administrar').classList.add("d-block")
        })
        // evento click ingresar al tab ingresar: limpiar formulario
        document.getElementById("ingresarTab").addEventListener("click", () => {
          limpiarModalIngreso();
        })
        // evento click ingresar al tab registrarse: limpiar formulario
        document.getElementById("registrarseTab").addEventListener("click", () => {
          limpiarModalIngreso();
        })
      }
    });
};

// se carga el menu superior, pie de pagina y modal de ingreso a la plataforma
loadHtml("head", "partialViews/head.html")
loadHtml("nav", "partialViews/menusuperior.html")
loadHtml("footer", "partialViews/piedepagina.html")
loadHtml("modal_ingresar", "partialViews/modalingresarplataforma.html")

// resetea los formularios dentro del modal
const limpiarModalIngreso = () => {
  document.getElementById("usr").val = ""
  document.getElementById("pwd").val = ""
  document.getElementById("usrNuevo").val = ""
  document.getElementById("pwdNuevo").val = ""
  document.getElementById("pwdNuevoRepite").val = ""
}