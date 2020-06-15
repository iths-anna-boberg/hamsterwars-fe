const fetchHamsterId = async (url, setState)=>{

    try{
        console.log('FetchHamster url:', url);
        const resp = await fetch(url);
        const json = await resp.json();
        console.log(json.id)
        setState(json); 
    }catch(err){
        console.log(err);
        return null;
    }
}

export default fetchHamsterId;