import React, { useState } from 'react'
import './Home.css'
import { WebcamCapture} from '../Webcam/Webcam'


const Home = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');


    const submitForm = () => {
        alert("Form submitted");
        setName('');
        setEmail('');
    }

    return (
        <article class="br3 ba dark-gray b--black-10 mv4 w-150 w-50-m w-25-l mw9 shadow-5 center">
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Register</h1>
                    <form className="form">
                        <WebcamCapture/>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </article>
    )
}
export default Home