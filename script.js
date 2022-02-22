class Persona {
    constructor(nombre, apellido, edad, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nota = nota; 
    }
} 

const alumno1 = new Persona ("Santiago", "Lazarec", 21, parseInt(prompt("Ingrese una nota")))
const alumno2 = new Persona ("Ivan", "Vallejo", 22, parseInt(prompt("Ingrese una nota")))
const alumno3 = new Persona ("Juan", "Gimenez", 21, parseInt(prompt("Ingrese una nota")))


if(nota >= 1 && nota <= 5) {
    console.log("Esta desaprobado")
} else if(nota === 6 || nota === 7) {
    console.log("Esta aprobado, bien")
} else if (nota === 8 || nota === 9) {
    console.log("Esta aprobado, muy bien")
} else if(nota === 10) {
    console.log("Esta aprobado, excelente")
} else {
    console.log("Nota no valida")
}

let arrayPersonas =[alumno1, alumno2, alumno3]

console.log(arrayPersonas.sort((alumno1, alumno2) => {
    if(alumno1.apellido < alumno2.apellido) {
        return -1 
    } 
    if (alumno1.apellido > alumno2.apellido) {
        return 1
    }
    return 0
}))