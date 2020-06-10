import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './Battle.css';


const Battle = ()=>{

    const randomHamster = '/api/hamsters/random';
    const [hamsterOne, setHamsterOne] = useState(null);
    const [hamsterTwo, setHamsterTwo] = useState(null);
    const [winner, setWinner] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchHamsterOne = async ()=>{
        const resp = await fetch(randomHamster);
        const json = await resp.json();
        setHamsterOne(json); 
    }
    const fetchHamsterTwo = async ()=>{
        const resp = await fetch(randomHamster);
        const json = await resp.json();
        setHamsterTwo(json); 
    }

    useEffect(()=>{

        fetchHamsterOne();

        fetchHamsterTwo();

    },[])

    useEffect(()=>{

        if(winner !==null){
            setShowModal(true);
        }

    },[winner])

    useEffect(()=>{
        if(!showModal){
            fetchHamsterOne();

            fetchHamsterTwo();
        }
    }, [showModal])

    const hideModal = ()=>{
        setShowModal(false);
    }


    return(
        <div className="content">

            {showModal
            ?<>
            <Modal show={showModal} handleClose={hideModal}>
                <h1>The winner is {winner.name}!</h1>
            </Modal>
            </>
            :null
            }

            <h1>Battle</h1>
            <p className="preamble">
                It's battle time! Choose the cutest hamster by voting below. You have the power to select the winner!
            </p>
            <section className="contestants">
                <article className="hamster-display">
                        {hamsterOne
                        ?<>
                        <div className="hamster-name"><h2>{hamsterOne.name}</h2></div>
                        <img className="battle-hamster" src={`/assets/${hamsterOne.imgName}`} alt={hamsterOne.imgName}/>
                        <button className="bt-vote" onClick={()=>setWinner(hamsterOne)}>Vote for {hamsterOne.name}</button>
                        </>
                        : 'no data'}
                </article>
                <article className="hamster-display">
                        {hamsterTwo
                        ?<>
                        <div className="hamster-name"><h2>{hamsterTwo.name}</h2></div>
                        <img className="battle-hamster" src={`/assets/${hamsterTwo.imgName}`} alt={hamsterTwo.imgName}/>
                        <button className="bt-vote" onClick={()=>setWinner(hamsterTwo)}>Vote for {hamsterTwo.name}</button>
                        </>
                        : 'no data'}

                </article>
            </section>

        </div>
    )
}
export default Battle;