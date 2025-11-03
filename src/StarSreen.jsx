function StarSreen({numQuestions,dispatch}) {
    
    return (
        <div className="start">
            <h2>Welcome to My Quiz</h2>
            <p className="description">🧠 {numQuestions} question to test your React mastery</p>
            <button className="btn btn-ui" onClick={() =>  dispatch({type:"start"})}>Let start</button>
        </div>
    )
}

export default StarSreen
