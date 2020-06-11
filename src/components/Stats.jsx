import React, { useState, useEffect } from 'react';

const Stats = ()=>{

    const [totalGames, setTotalGames] = useState(null);
    const [top5Winners, setTop5Winners] = useState(null);
    const [top5Losers, setTop5Losers] = useState(null);
    const [championDiet, setChampionDiet] = useState(null);

    const fetchTotalGames = async(setState)=>{

        try{
            const resp = await fetch('/api/stats/total');
            const json = await resp.json();
            setState(json);

        }catch(err){
            console.log(err);
            return null;
        }
    }

    const fetchWinners = async(setState)=>{

        try{
            const resp = await fetch('/api/charts/top');
            const json = await resp.json();
            setState(json);

        }catch(err){
            console.log(err);
            return null;
        }
    }

    const fetchLosers = async(setState)=>{

        try{
            const resp = await fetch('/api/charts/bottom');
            const json = await resp.json();
            setState(json);

        }catch(err){
            console.log(err);
            return null;
        }
    }

    const fetchDiet = async(setState)=>{

        try{
            const resp = await fetch('/api/stats/breakfastofchampions');
            const json = await resp.json();
            setState(json);

        }catch(err){
            console.log(err);
            return null;
        }
    }

    useEffect(()=>{
        fetchTotalGames(setTotalGames);
        fetchWinners(setTop5Winners);
        fetchLosers(setTop5Losers);
        fetchDiet(setChampionDiet);
    }, [])

    // useEffect(()=>{
    //     console.log(
    //         `Winner: ${top5Winners[0].name}`
    //     )
    // }, [top5Winners])

    return(
        <div className="content">
            <h1>Battle stats</h1>
            <section className="wrap-container">

                {
                    top5Winners
                    ?<article className="bg-golden flex-column">
                        <h2>Top five winners</h2>
                        <ol>
                        {top5Winners.map(hamster => (
                            <li key={hamster.id}>
                                <span className="bold">{hamster.name}</span><br/> games: {hamster.games} wins: {hamster.wins}
                            </li>
                        ))}
                        </ol>
                    </article>
                    : null
                }
                {
                    top5Losers
                    ?<article className="bg-blush flex-column">
                        <h2>Top five losers</h2>
                        <ol>
                        {top5Losers.map(hamster => (
                            <li key={hamster.id}>
                                <span className="bold">{hamster.name}</span><br/> games: {hamster.games} defeats: {hamster.defeats}
                            </li>
                        ))}
                        </ol>
                    </article>
                    : null
                }
            
            
            </section>
            <section className="wrap-container">

                {
                    totalGames
                    ?<article className="bg-blue flex-column">
                    <h2>Total number of games played:</h2>
                    <p className="preamble">{totalGames.games}</p>
                    </article>
                    : null
                }

                {
                    championDiet
                    ?<article className="bg-golden flex-column">
                    <h2>Breakfast of Champions:</h2>
                        <p>Most common diet of winners.</p>
                    <ol>
                        {championDiet.winnersEat.map(foodItem => (
                            <li key={foodItem}>
                                {foodItem}
                            </li>
                        ))}
                        </ol>
                    </article>
                    : null
                }
            </section>

        </div>
    )
}
export default Stats;