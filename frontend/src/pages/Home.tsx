import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
    return (
      <div>
        <Navbar cartQuantity={0}/>
        <p>Home</p>
      </div>
    );
}

export default Home;