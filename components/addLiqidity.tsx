'use client'
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';


export const AddLiqidity = () => {

    const [liq, setliq] = useState(0);
    const [base, setBase] = useState(1);
    const [tick, setTick] = useState(1);
    const mod = 1e9 + 7;

    useEffect(() => {

        let launchPrice = base / tick
        // launchPrice = (launchPrice % mod + mod) % mod; 
        const launchPriceStr = launchPrice.toFixed(10); // Get more decimal places for splitting
        const truncatedLaunchPrice = launchPriceStr.split('.')[0] + '.' + launchPriceStr.split('.')[1].slice(0, 5);

         setliq(parseFloat(truncatedLaunchPrice));
     }, [base, tick]);
    
     

    

    const handleBaseChange = (event : any) => {
        setBase(event.target.value)
    }

    const handleTickChange = (event : any) => {
        setTick(event.target.value)
    }

    return <div className="pt-8">

        <div>
            <p className="font-bold text-lg">Add liqidity</p>
        </div>
        <div>
            <p className="text-sm">Once we set the OpenBook Market we just need to add liquidity</p>
        </div>

        <div className="grid  grid-cols-1  md:grid-cols-3 pt-8">
               <div className="w-full h-full bg-zinc-900 p-2 rounded"> 
                  <div className="flex justify-between">
                       <div>
                          <div>
                            <input
                             type="number"
                             value={base}
                             min="0"
                             inputMode="numeric"
                             onChange={handleBaseChange}
                             className="bg-transparent border border-zinc-900 -webkit-none"
                             />
                          </div>
                          <div>
                            <p className="text-sm">Balance: 1.00 </p>
                          </div>
                       </div>

                       <div className="flex">
                          <div className="px-4 ">
                             <div className="flex justify-center w-full border-2 border-cyan-800 rounded-full  ">
                                <button className="text-sm px-2">
                                min
                                </button>
                             </div>
                             <div className="flex justify-center w-12 border-2 border-cyan-800 rounded-full ">
                                <button className=" text-sm px-2">
                               half
                                </button>
                             </div>
                          </div>
                          <div className="flex justify-center">
                            <p className="flex justify-center">Base</p>
                          </div>
                       </div>
                  </div>
               </div>

               <div className='flex justify-center p-4'>
                <AddIcon  className='bg-cyan-800 rounded'/>
               </div>

               <div className="w-full h-16 bg-zinc-900 p-2 rounded"> 
                  <div className="flex justify-between">
                       <div>
                          <div>
                          <input
                             type="number"
                             value={tick}
                             min="0"
                             inputMode="numeric"
                             onChange={handleTickChange}
                             className="bg-transparent border border-zinc-900 "
                             /> 
                          </div>
                          <div>
                            <p className="text-sm">Balance: 1.00 </p>
                          </div>
                       </div>

                       <div className="flex">
                          <div className="px-4 ">
                             <div className="flex justify-center w-full border-2 border-cyan-800 rounded-full  ">
                                <button className="text-sm px-2">
                                min
                                </button>
                             </div>
                             <div className="flex justify-center w-12 border-2 border-cyan-800 rounded-full ">
                                <button className=" text-sm px-2">
                               half
                                </button>
                             </div>
                          </div>
                          <div className="flex justify-center">
                            <p className="flex justify-center">Base</p>
                          </div>
                       </div>
                  </div>
               </div>
        </div>


    <div className='flex pt-4'>
    Launch Price: <p className='font-bold pl-2'> {liq} Base / Quote</p>
    </div>


    <div className='flex justify-center pt-8'>
    <button className=' rounded-2xl text-sm bg-cyan-800 hover:bg-cyan-600  p-4'>
       Create Liqidity Pool
    </button>
   </div>
   
   
    </div>
}