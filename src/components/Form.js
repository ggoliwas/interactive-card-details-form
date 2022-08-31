
const Form = ({handleInput, handleSubmit}) => {
    
    return( 
        <main className="main">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <label className="form__label" for="owner">cardholder name</label>
                    <input className="form__input" type="text" required pattern="[a-zA-Z0-9\s]+"name="owner" placeholder="e.g Jane Applessed" onChange={handleInput} />     
                </div>
            <div className="form__row">
                    <label className="form__label" for="number">card number</label>
                    <input className="form__input" type="text" inputMode="numeric" required pattern="[0-9 ]+" name="number" maxLength="19" placeholder="e.g. 1234 5678 9123 0000" onChange={handleInput}/>   
            </div>
            <div className="form__row">
                    <label className="form__label" for="mm">exp. date (mm/yy)</label>
                    <input className="form__input" type="text" inputMode="numeric" required pattern="\d*" name="mm" maxLength="2" placeholder="MM" onChange={handleInput} />    
                    <input className="form__input" type="text" inputMode="numeric" required pattern="\d*" name="yy" maxLength="2" placeholder="YY" onChange={handleInput} />
                </div>
                <div className="form__row">
                    <label className="form__label" for="cvc">cvc</label>
                    <input className="form__input" required type="text" pattern="\d*" name="cvc" maxLength="3" placeholder="cvc" onChange={handleInput} />         
                </div> 
                <div className="form__row">
                    <button className="btn">confirm</button>
                </div>
            </form>   
        </main>
    )
}

export default Form;