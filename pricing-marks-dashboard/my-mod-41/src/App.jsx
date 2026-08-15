
import { Suspense } from 'react'
import './App.css'
import DasisyNav from './components/DaisyNac/DasisyNav'
import NavVar from './components/DaisyNac/NavVar/NavVar'
import PricingOptions from './components/DaisyNac/PricingOptions/PricingOptions'
import ResultCahrt from './components/DaisyNac/DaisyPricing/ResultChart/ResultCahrt'
import axios from 'axios'
import MarksChart from './components/DaisyNac/MarksChart/MarksChart'


const pricePromise = fetch('PricingData.json').then(res => res.json())//fetch always needs to ve putted outside the function


//fetch using Axios...fetching using axios doesnt require then.(res => res.json())
const marksPromise = axios.get('marksData.json');



function App() {

  return (
    <>

      <header>
        <NavVar></NavVar>
        {/* <DasisyNav></DasisyNav> */}
      </header>

      <main>
        {/* I always forget avout suspense component */}
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

          <PricingOptions pricePromise={pricePromise}></PricingOptions>
        </Suspense>


        {/* Suspense can ve used multiple times in one file */}
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

        <MarksChart marksPromise={marksPromise}></MarksChart>


        </Suspense>

        <ResultCahrt></ResultCahrt>

      </main>


    </>
  )
}

export default App
