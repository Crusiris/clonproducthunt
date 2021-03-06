export default function validationLogin(values) {
    
    let errors = {};
    
    //Validar email
    if(!values.email){
        errors.email = "El email es obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
        errors.email = "Introduzca un email válido";
    }

    //Validar password
    if(!values.password){
        errors.password = "El password es obligatorio";
    } else if (values.password.length < 6 ){
        errors.password="El password debe ser de al menos 6 caracteres";
    }

    return errors;
}