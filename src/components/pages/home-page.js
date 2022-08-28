import React, {useState} from 'react';

function HomePage() {
  return (
    <div>

      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '20vh'
        }}>
        <h1>Welcome to Shokuyoku</h1> 
      </div>
      
      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '30vh'
        }}>
        <img src={require('../../images/shokuyoku.png')} alt="shokuyoku"/> 
      </div>

    </div>
  )
}

export default HomePage