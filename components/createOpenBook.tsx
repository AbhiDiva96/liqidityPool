'use client'

import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export const CreateOpenBook = () => {

    const [minOrder, setMinOrder] = useState(0);
     const [tickSize, setTickSize] = useState(0);

    const handleIncrement = () => {
           setMinOrder(minOrder + 1)
    }
    const handleTickIncrement = () => {
        setTickSize(tickSize+1)
 }

    const handleDecrement = () => {
        setMinOrder(minOrder - 1);
        setTickSize(tickSize-1)
    }

    
    const handleTickDecrement = () => {
        setTickSize(tickSize-1)
    }

    return <div>

        <div className="font-bold">
        Create OpenBook Market
        </div>


        <div className="flex justify-between gap-4 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="">
                <div className="pb-4">
                <p className="text-sm">Min Order Size (Minimum Buy):</p>
                </div>
                <div className="w-full p-16  flex justify-between  border border-slate-400 rounded bg-zinc-900">
                    <div>

                    <button
                    className="bg-cyan-800 p-2 rounded"
                     onClick={handleIncrement}>
                            <AddIcon/>
                    </button>
                    </div>
                    <div>{minOrder}.00</div>
                   <div>

                    <button 
                    className="bg-cyan-800 p-2 rounded"
                    onClick={handleDecrement}>
                        <RemoveIcon/>
                    </button>
                   </div>
                </div>
             </div>


             <div>
                <div className="pb-4">
                <p className="text-sm ">Tick Size (Minimum Price Change):</p>
                </div>
                <div className="w-full p-16 flex justify-between p-8 border border-slate-400 rounded bg-zinc-900 gap-8">
                  <div>

                    <button
                    className="bg-cyan-800 p-2 rounded"
                     onClick={handleTickIncrement}>
                            <AddIcon/>
                    </button>
                  </div>
                    <div>00.000{tickSize}000000</div>
                   <div>

                    <button 
                    className="bg-cyan-800 p-2 rounded"
                    onClick={handleTickDecrement}>
                        <RemoveIcon/>
                    </button>
                   </div>
                </div>
          </div>
           
         </div>
        </div>
    </div>
}