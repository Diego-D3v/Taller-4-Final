import { libros } from "./libros.js";
import { usuarios } from "./usuarios.js";

// Función para prestar un libro
function prestarLibro(titulo, usuario) {
  const libro = libros.find(l => l.titulo === titulo);

  if (!libro) {
    console.log(`El libro "${titulo}" no existe.`);
    return;
  }

  if (libro.estado === "prestado") {
    console.log(`El libro "${titulo}" ya está prestado.`);
    return;
  }

  // Cambiar estado
  libro.estado = "prestado";
  console.log(`El libro "${titulo}" fue prestado a ${usuario}.`);
}

//Función para devolver un libro
function devolverLibro(titulo) {
  const libro = libros.find(l => l.titulo === titulo);

  if (!libro) {
    console.log(`El libro "${titulo}" no existe.`);
    return;
  }

  if (libro.estado === "disponible") {
    console.log(`El libro "${titulo}" ya estaba disponible.`);
    return;
  }

  // Cambiar estado
  libro.estado = "disponible";
  console.log(`El libro "${titulo}" ha sido devuelto.`);
}

export { prestarLibro, devolverLibro};
