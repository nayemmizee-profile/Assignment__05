import Navbar from "./components/navbar";
import Hero from "./components/herosection";

import TechCard from "./components/TechCard";

import { Suspense } from "react";
import Footer from "./components/footer";



 const userfetch = async () : Promise<any[]> => {
        const responce = await fetch("/apidata.json")
        const data =await responce.json();
            return data ;
      }

       const usersPromise = userfetch();

const App = () => {

       





  return (
    <>
      <Navbar />
      <Hero />
  
     
     <Suspense fallback={<p>Loading...</p>}>
          
            <TechCard usersPromise={usersPromise} />

        </Suspense>

      <Footer/>





    </>
  );
  }

export default App;
