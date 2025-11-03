function StarSreen({numQuestions,dispatch}) {
    
    return (
        <div className="start">
            <h2> Prove your gamer skills and claim the crown 👑</h2>
            <p className="description">🧠 {numQuestions}🧩 15 fun questions to test how much you really know about the gaming world.</p>
            <button className="btn btn-ui" onClick={() =>  dispatch({type:"start"})}> Let’s start the game</button>
        </div>
    )
}

export default StarSreen
