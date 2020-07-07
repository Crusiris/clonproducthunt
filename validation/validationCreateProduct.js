export default function validationCreateProduct(values) {
    
    let errors = {};

    //Validar el nombre del usuario
    if(!values.name){
        errors.name = "El Nombre es Obligatorio";
    }
    
    //Validar empresa
    if(!values.business){
        errors.business = "El nombre de la empresa es obligatorio"
    }

    //Validar empresa
    if(!values.business){
        errors.business = "El nombre de la empresa es obligatorio"
    }

    //Validar URL
    if(!values.url){
        errors.url="La url del producto es obligatoria"
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)){
        errors.url="La url no es valida"
    }

    // Validar descripción.
    if(!values.description) {
        errors.description = "Agrega una descripción de tu producto"
    }

    return errors;
}