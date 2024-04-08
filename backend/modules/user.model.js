import {Schema, model} from "mongoose"

const alumnos_esquema = new Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        estado:{
            type:String
        }
    }
)

export const alumnos = new model('Tabla de registro de CURP', alumnos_esquema)