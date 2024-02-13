let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/pro-wireless-carbon-gallery-1.png") {
    miImage.setAttribute("src", "images/raton-gaming-logitech-pro-x-superlight-imageMain-f6b90987e16124382af5efe50ac758.png");
  } else {
    miImage.setAttribute("src", "images/pro-wireless-carbon-gallery-1.png");
  }
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "LogitechG," + " " + miNombre;
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "LogitechG," + " " + nombreAlmacenado;
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};
