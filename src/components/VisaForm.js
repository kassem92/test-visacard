import React,{useState} from "react";
import Cards from 'react-credit-cards-2';

export default function VisaForm() {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    const changePropertyValue = (property, newValue) => {
        const newState = Object.assign({...state}, {[property]: newValue})
        setState(newState)
    }
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }


    return(
        <>
            <div className={'card-waper'}>
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />
                <form >

                    <ul className={'vertical-ul-list'}>
                        <li>
                            <label className={'input-styled'}>
                                Name of credit card owner
                                <input
                                    type="text"
                                    name="card-name"
                                    placeholder=""
                                    value={state.name}
                                    onChange={(event)=>changePropertyValue('name',event.target.value)}
                                    onFocus={handleInputFocus}
                                />
                            </label>
                        </li>
                        <li>
                            <label className={'input-styled'}>
                                card number
                                <input
                                    type="text"
                                    name="number"
                                    placeholder=""
                                    value={state.number}
                                    onChange={(event)=>changePropertyValue('number',event.target.value)}
                                    onFocus={handleInputFocus}
                                />
                            </label>

                        </li>
                        <li>
                            <label className={'input-styled'}>
                                expiration date
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="Card Number"
                                    value={state.expiry}
                                    onChange={(event)=>changePropertyValue('expiry',event.target.value)}
                                    onFocus={handleInputFocus}
                                />
                            </label>

                        </li>
                        <li>
                            <label className={'input-styled'}>
                                cvc
                                <input
                                    type="number"
                                    name="cvc"
                                    value={state.cvc}
                                    onChange={(event)=>changePropertyValue('number',event.target.value)}
                                    onFocus={handleInputFocus}
                                />
                            </label>

                        </li>
                        <>
                            <div className={'pay-now-btn'}>
                                <button style={{backgroundColor:'rgba(66, 187, 255, 1)'}}>Pay Now</button>
                            </div>

                        </>
                    </ul>
                </form>
            </div>

        </>
    )

}