// main.js
import { usuarios, registrarUsuario, listarUsuarios } from "./usuarios.js";
import { libros, registrarLibro, listarLibros, listarLibrosDisponibles,listarLibrosAutor} from "./libros.js";
import { prestarLibro, devolverLibro } from "./prestamos.js";

// USUARIOS
listarUsuarios();
registrarUsuario("Carlos Gómez", "carlos.gomez@gmail.com");
listarUsuarios();

// LIBROS
listarLibros();
registrarLibro("La Sombra del Viento", "Carlos Ruiz Zafón");
listarLibrosDisponibles();
listarLibrosAutor("Gabriel García Márquez")

// PRÉSTAMOS
prestarLibro("Cien años de soledad", "William Donado");
prestarLibro("Don Quijote de la Mancha", "Deiver Guerra"); // ya estaba prestado
devolverLibro("Don Quijote de la Mancha");
