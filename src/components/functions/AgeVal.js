function validateAge(input){

    if(!isNaN(input)){

        return ['valid', '']
    }else{
        return ['invalid', "Age should be a number."]
    }
}

export default validateAge;