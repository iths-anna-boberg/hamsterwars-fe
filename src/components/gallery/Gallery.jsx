import React, { useState, useEffect } from 'react';
import fetchAllHamsters from '../functions/FetchAllHamsters';
import '../Battle.css';
import './Gallery.css'

const Gallery = ()=>{

    const [hamsters, setHamsters] = useState(null);
    const [index, setIndex] = useState(0);
    // let index = 0;

    useEffect(()=>{

        fetchAllHamsters(setHamsters)
    }, [])

    

    const next = ()=>{
        if(index === hamsters.length-1){
            return setIndex(0)
        }
        setIndex(index+1)
    }

    const previous = ()=>{
        if(index === 0){
            return setIndex(hamsters.length -1)
        }
        setIndex(index-1)
    }

    return(
        <div className="content">
            <h1>All the lovely hamsters</h1>

        {hamsters
        ?
        <div className="slide-container">
            <div className="btn-container">
                <button onClick={previous}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" fill="#2A4759"/></svg></button>
            </div>
                <section className="hamster-display">

                    <header className="hamster-name z-index">
                        <h2>{hamsters[index].name}</h2>
                    </header>
                    <img className="slide-img" src={`/assets/${hamsters[index].imgName}`} alt={hamsters[index].name}/>
                    <footer className="gallery-info">
                        <ul>
                            <li>Age: {hamsters[index].age}</li>
                            <li>Games: {hamsters[index].games}</li>
                            <li>Wins: {hamsters[index].wins}</li>
                            <li>Defeats: {hamsters[index].defeats}</li>
                        </ul>
                        <article className="facts">
                            {hamsters[index].name} loves {hamsters[index].loves} and eating {hamsters[index].favFood}.
                        </article>
                    </footer>

                </section>
            <div className="btn-container">
                <button onClick={next}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" fill="#2A4759"/></svg></button>
            </div>

            

        </div>
        : null}
        </div>
    )
}

export default Gallery;