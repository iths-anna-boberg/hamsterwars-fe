
async function gameHandler(winnerID, loserID){

    try{

        let resp = await fetch('/api/games', {
            method: 'POST',
            headers: {
                'Authorization' : 'a77f22d7-3661-43aa-8fbe',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"hamsterOne" : winnerID, "hamsterTwo": loserID, "winner": winnerID})
        })

        // console.log(resp)

        let json = await resp.json()

        console.log(json.msg)

        hamsterUpdate(winnerID, 'wins');
        hamsterUpdate(loserID, 'defeats');



    }catch(err){
        console.log(err);
        return err;
    }


};

async function hamsterUpdate(id, gameInfo){

    let body='';

    if(gameInfo === 'wins'){

        body = {'wins' : 1}
    }
    if(gameInfo === 'defeats'){

        body = {'defeats' : 1}
    }

    



    try{

        let resp = await fetch(`/api/hamsters/${id}/results`, {
            method: 'PUT',
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

export default gameHandler;