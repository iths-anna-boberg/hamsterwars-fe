const fetchRandomHamster = async (url, setState)=>{

    try{
        console.log('FetchRandomHamster url:', url);
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