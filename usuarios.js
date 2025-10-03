// usuarios.js
// Array inicial de usuarios para pruebas
const usuarios = [
  {  nombre: "William Donado", email: "william.donado@gmail.com" },
  {  nombre: "Deiver Guerra", email: "deiver.guerra@gmail.com" },
];
 
// Función para registrar un nuevo usuario
function registrarUsuario(nombre, email) {
  const nuevoUsuario = {
  
    nombre,
    email,
  };
  usuarios.push(nuevoUsuario);
  console.log(`Usuario registrado: ${nombre}`);
  return nuevoUsuario;
}
 
// Función para listar todos los usuarios
function listarUsuarios() {
  console.log("Lista de usuarios:");
  usuarios.forEach((u) => console.log(`${u.nombre} (${u.email})`));
  return nuevoUsuario;
}
 
// Exportar funciones y array usuarios
module.exports = {
  usuarios,
  registrarUsuario,
  listarUsuarios,
};
