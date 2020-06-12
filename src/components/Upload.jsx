import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import uploadFile from './functions/UploadFile';
import postHamster from './functions/PostHamster';
import validateField from './functions/FormVal';
import validateAge from './functions/AgeVal';
import './forms.css';



const Upload = ()=>{

    const [name, setName] = useState('');
    const [favFood, setFavFood] = useState('');
    const [age, setAge] = useState(0);
    const [loves, setLoves] = useState('');
    const [file, setFile] = useState(null);

    const [nameTouched, setNameTouched] = useState(false);
    const [favFoodTouched, setFavFoodTouched] = useState(false);
    const [ageTouched, setAgeTouched] = useState(false);
    const [lovesTouched, setLovesTouched] = useState(false);

    let [nameClass, nameError] = nameTouched ? validateField(name) : ['',''];
    let [foodClass, foodError] = favFoodTouched ? validateField(favFood) : ['',''];
    let [ageClass, ageError] = ageTouched ? validateAge(age) : ['',''];
    let [lovesClass, lovesError] = lovesTouched ? validateField(loves) : ['',''];

    let inputFieldsTouched = nameTouched && favFoodTouched && ageTouched && lovesTouched && (file !== null);
    let noErrors = (nameError === '') && (foodError === '') && (ageError === '') && (lovesError === '');

    let formIsValid = inputFieldsTouched && noErrors;

    const [hamsterAdded, setHamsterAdded] = useState(false);
    const [fileAdded, setFileAdded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{

        if(fileAdded && hamsterAdded){
            setShowModal(true);
        }
    }, [hamsterAdded, fileAdded])

    
    const clickHandler = (e)=>{
        e.preventDefault()

        let imgName = file.name;
        uploadFile(file, setFileAdded)
        postHamster(name, favFood, age, loves, imgName, setHamsterAdded)
    }

    const hideModal = ()=>{
        setShowModal(false);
        window.location.reload();
    }


    return(
        <div className="content">
            {showModal
            ?<>
            <Modal show={showModal} handleClose={hideModal}>
                <div>
                    <h2>{name} was added to the hoard of hamsters!</h2>
                    <p className="preamble">
                    <img className="winner-hamster" src={`/assets/${file.name}`} alt={name}/>
                    </p>
                </div>
	        </Modal>
            </>
            :null
            }


            <h1>Upload a new hamster for future battles!</h1>

            <p className="preamble">
                Want to see if your own little 
            furry friend can compete with the other hamsters?
            </p>
            <section className="form-group">
            <form encType="multipart/form-data">
                    <div className="input-area">
                        <label htmlFor="name">Name of hamster:</label>
                        <input className={nameClass}
                        type="text" 
                        name="name" id="name" 
                        onBlur={()=> setNameTouched(true)}
                        onChange={e=>setName(e.target.value)}/>
                        <div className="error">{nameError}</div>
                    </div>
                    <div className="input-area">
                        <label htmlFor="age">Age of hamster:</label>
                        <input className={ageClass}
                        type="text" 
                        name="age" id="age" 
                        onBlur={()=> setAgeTouched(true)}
                        onChange={e=>setAge(Number(e.target.value))}/>
                        <div className="error">{ageError}</div>
                    </div>
                    <div className="input-area">
                        <label htmlFor="favFood">Favourite food:</label>
                        <input className={foodClass}
                        type="text" 
                        name="favFood" id="favFood" 
                        onBlur={()=> setFavFoodTouched(true)}
                        onChange={e=>setFavFood(e.target.value)}/>
                        <div className="error">{foodError}</div>
                    </div>
                    <div className="input-area">
                        <label htmlFor="loves">Hobby:</label>
                        <input className={lovesClass}
                        type="text" 
                        name="loves" id="loves" 
                        onBlur={()=> setLovesTouched(true)}
                        onChange={e=>setLoves(e.target.value)}/>
                        <div className="error">{lovesError}</div>
                </div>
                <div className="form-row">
                    <label htmlFor="photo">Upload a pic of your furry friend:</label>
                    <input type="file" name="photo" id="photo-upload" onChange={e=>setFile(e.target.files[0])} />
                </div>
                <div className="button-row">
                    <button disabled={!formIsValid} className="new-hamster-btn" onClick={e=>clickHandler(e)}>ADD HAMSTER</button>
                </div>
            </form>
            </section>
        </div>
    )
}
export default Upload;