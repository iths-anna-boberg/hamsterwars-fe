function validateAge(input){

    if(input.length > 0){

        let age = Number(input);
        if(!isNaN(age)){
    
            return ['valid', '']
        }
    }else{
            return ['invalid', "Age should be a number."]
        }

}

export default validateAge;