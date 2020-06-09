import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './Battle.css';


const Battle = ()=>{

    const randomHamster = '/hamsters/random';
    const [hamsterOne, setHamsterOne] = useState(null);
    const [hamsterTwo, setHamsterTwo] = useState(null);
    const [winner, setWinner] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
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

        fetchHamsterOne();

        fetchHamsterTwo();

    },[])

    if(winner !==null){
        setShowModal(true);
    }

    return(
        <div className="content">

            {showModal
            ?<>
            <Modal show={showModal}>
                <h1>The winner is {winner.name}!</h1>
            </Modal>
            </>
            :''
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
                        <button className="bt-vote" onClick={()=>setWinner(hamsterOne)}>Vote for {hamsterTwo.name}</button>
                        </>
                        : 'no data'}

                </article>
            </section>

        </div>
    )
}
export default Battle;