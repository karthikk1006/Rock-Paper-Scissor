import React from 'react';
const Header=({score})=>{
    return(
        <div id='container'>
        <div className='Header'>
            <h1>YET ANOTHER...</h1>
            <h2>Rock-Paper-Scissor</h2>
        </div>
        <div id='score' className='Header'>
            <h1>Score:{score}</h1>
        </div>
        </div>
    );
}
export default Header;