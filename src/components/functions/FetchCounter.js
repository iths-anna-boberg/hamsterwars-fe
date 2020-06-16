const fetchCounter = async ()=>{

    try{
        const resp = await fetch('/api/hamsters/hamstercount');
        const json = await resp.json();
        console.log(json)
        return json;
    }catch(err){
        console.log(err);
        return null;
    }
}

export default fetchCounter;