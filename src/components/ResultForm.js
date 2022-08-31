
const ResultForm = ({resetForm}) => {
    return (
        <main className="main">
           <div className="card">
                <img src="assets/icon-complete.svg" alt="icon complete"/>
                <h2 className="title">Thank you!</h2>
                <p className="info">We've added your card details</p>
                <button className="btn" onClick={resetForm}>Continue</button>
           </div>
        </main>
    )
}

export default ResultForm;