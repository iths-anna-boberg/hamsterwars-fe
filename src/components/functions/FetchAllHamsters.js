const fetchAllHamsters = async (setState)=>{

    try{
        const resp = await fetch('/api/hamsters');
        const json = await resp.json();
        setState(json); 
        return json
    }catch(err){
        console.log(err);
        return null;
    }
}

export default fetchAllHamsters;