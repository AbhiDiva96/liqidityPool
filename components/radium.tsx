// toggleButton.tsx

import React from 'react';

interface ToggleProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const ToggleButton: React.FC<ToggleProps> = ({ isOpen, setIsOpen }) => {

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (

        <div className='grid grid-cols-1 md:grid-cols-2'>
            
          <div className='flex gap-4'>
          <div>
            Radium v2
        </div>
        <div>
           Radium v3
        </div>
        
          </div>

          <div className='font-bold text-slate-400'>
          <button onClick={handleToggle}>
        {isOpen ? 'I already have an OpenBook Market' : "I don't have an OpenBook Market"}
      </button>
          </div>
     

      </div>
    );
};
