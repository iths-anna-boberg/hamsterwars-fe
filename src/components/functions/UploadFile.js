
const uploadFile = async (file)=>{

    let formData = new FormData();

           
    formData.append('photo', file);

    try{

        let resp = await fetch('/assets', {
            method: 'POST',
            headers: {
                'Authorization' : 'a77f22d7-3661-43aa-8fbe'
            },
            body: formData
        })
        let json = await resp.json()
        console.log(json.msg)
    }catch(err){
        console.log(err)
    }

    

}

export default uploadFile;