import { alumnos } from "../modules/user.model.js"

export const test = () => {
    console.log('Llamando la funcion desde conrolador')
}

alumnos.create(
    {
        name:'Josue',
        apepat:'Gurrola',
        apemat:'Gomez',
        estado:'Aguascalientes'
    }
)