import './Flight.scss';

import {AiOutlineSearch} from "react-icons/ai";
import { useState } from 'react';

const Flight = ()=>{

    const [flight, setFlight] = useState('')
    return(
        <section>
    
            <h1 className='logo'><img src="src/Resources/Images/logo.png"/> Radien</h1>
                
            <div className="query">
                <label>Find your Flight</label>
                <div className='search'>
                    <AiOutlineSearch/>
                    <input 
                    placeholder='Flight Number'
                    value={flight}
                    onChange={(e)=>setFlight(e.target.value)}
                    />
                </div>
            </div>
            <img className='background' src="src/Resources/Images/background.svg"/>
        </section>
    );

    
};

export default Flight;