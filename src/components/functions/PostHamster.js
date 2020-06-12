
const postHamster = async (name, favFood, age, loves, imgName)=>{

    let body = {
        name,
        favFood,
        age,
        loves,
        imgName,
        games : 0,
        wins : 0,
        defeats: 0
    }

    try{

        let resp = await fetch(`/api/hamsters/`, {
            method: 'POST',
            headers: {
                'Authorization' : 'a77f22d7-3661-43aa-8fbe',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(body)
        })

        let json = await resp.json()
        console.log(json.msg)

    }catch(err){
        console.log(err);
        return err;
    }
}

export default postHamster;