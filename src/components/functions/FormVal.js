function validateField(input){

    if(input.length > 0){

        return ['valid', '']
    }else{
        return ['invalid', "Don't leave this field empty."]
    }
}

export default validateField;