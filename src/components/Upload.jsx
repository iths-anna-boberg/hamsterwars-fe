import React, { useState } from 'react';
import uploadFile from './functions/UploadFile';
import postHamster from './functions/PostHamster';
import './forms.css';


const Upload = ()=>{

    const [name, setName] = useState('');
    const [favFood, setFavFood] = useState('');
    const [age, setAge] = useState(0);
    const [loves, setLoves] = useState('');
    const [file, setFile] = useState(null);

    const clickHandler = (e)=>{
        e.preventDefault()

        let imgName = file.name;
        uploadFile(file)
        postHamster(name, favFood, age, loves, imgName)
    }


    return(
        <div className="content">
            <h1>Upload a new hamster for future battles!</h1>

            <p className="preamble">
                Want to see if your own little 
            furry friend can compete with the other hamsters?
            </p>
            <section className="form-group">
            <form encType="multipart/form-data">
                <div className="form-row">
                    <div className="input-area">
                        <label htmlFor="name">Name of hamster:</label>
                        <input type="text" name="name" id="name" onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="age">Age of hamster:</label>
                        <input type="text" name="age" id="age" onChange={e=>setAge(Number(e.target.value))}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-area">
                        <label htmlFor="favFood">Favourite food:</label>
                        <input type="text" name="favFood" id="favFood" onChange={e=>setFavFood(e.target.value)}/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="loves">Hobby:</label>
                        <input type="text" name="loves" id="loves" onChange={e=>setLoves(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="photo">Upload a pic of your furry friend:</label>
                    <input type="file" name="photo" id="photo-upload" onChange={e=>setFile(e.target.files[0])} />
                </div>
                <div className="button-row">
                    <button className="new-hamster-btn" onClick={e=>clickHandler(e)}>ADD HAMSTER</button>
                </div>
            </form>
            </section>
        </div>
    )
}
export default Upload;