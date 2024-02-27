import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./app.css";


function App() {

  return (
    <main>
     
        <div className='gradient' />
      
    <div  >
      <SignedOut>
     
<div className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <p className="text-5xl font-bold">WELCOME TO ELEVATE EZ</p>
    <span class="bg-black text-white px-2 py-1 rounded-md absolute top-50 right-1000 mt-6">
    <SignInButton />
    </span>
  </div>
</div>

      </SignedOut>
      <SignedIn>
     
      <div class="relative z-2  justify-between items-left flex-col max-w-7xl mt-2 mx-auto sm:px-10 px-2">
        <UserButton afterSignOutUrl="/" />
        </div>
        <div className="app">
        
        <Hero />
        <Demo />
        </div>
    
      </SignedIn>
    </div>
     </main>
  )
}

export default App
