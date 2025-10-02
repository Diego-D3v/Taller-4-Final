 const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", estado: "disponible" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", estado: "prestado" },
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", estado: "disponible" }
];

function Registrarlibro(titulo,autor,estado) {
    libros.push({ titulo, autor, estado });
    console.log(`Libro "${titulo}" registrado exitosamente.`);
}

Registrarlibro("La Sombra del Viento", "Carlos Ruiz Zafón", "disponible");

function listarLibros() {
    foreach (listarLibros.filter(libro => libro.estado === "disponible")) {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Estado: ${libro.estado}`);
    }
    

}

