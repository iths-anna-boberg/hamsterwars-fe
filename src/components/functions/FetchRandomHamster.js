const fetchRandomHamster = async (url, setState)=>{

    try{

        const resp = await fetch(url);
        const json = await resp.json();
        console.log(json.id)
        setState(json); 
    }catch(err){
        console.log(err);
        return null;
    }
}

export default fetchRandomHamster;