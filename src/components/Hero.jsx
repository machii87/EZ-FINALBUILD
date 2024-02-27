import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        

    
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com", "_blank")
          }
          class='absolute top-0 right-0 mb-2000000000 rounded-full bg-black text-white py-2 px-4 hover:bg-white hover:text-black'
        >
          GitHub
        </button>
       
        
      </nav>

      <h1 className='head_text'>
        ELEVATE EZ <br className='max-md:hidden' />
        <span className='orange_gradient '>Rapid API</span>
      </h1>
      <h2 className='desc'>
        Summarize articles, essays, and more with the power of AI
      </h2>
    </header>
  );
};

export default Hero;