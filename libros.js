const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", estado: "disponible" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", estado: "prestado" },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", estado: "disponible" }
];

function Registrarlibro(titulo, autor, estado = "disponible") {
    libros.push({ titulo, autor, estado });
    console.log(`Libro "${titulo}" registrado exitosamente.`);
}

Registrarlibro("La Sombra del Viento", "Carlos Ruiz Zafón", "disponible");

function listarLibros() {
    console.log("Listado de libros:");
    libros.forEach((libro, i) => {
        console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} [${libro.estado}]`);
    });
}

function listarLibrosDisponibles() {
    console.log("Libros disponibles:");
    libros.filter(libro => libro.estado === "disponible")
        .forEach((libro, i) => {
            console.log(`${i + 1}. ${libro.titulo} - ${libro.autor}`);
        });
}

export { libros, Registrarlibro, listarLibros, listarLibrosDisponibles };
