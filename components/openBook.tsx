'use client'

import { useState } from 'react';
import { CreateOpenBook } from './createOpenBook';
import { AlreadyOpenBook } from './alreadyOpenBook';
import { ToggleButton } from './radium'; // Import the ToggleButton component
import { Token } from './token';

export const OpenBook: React.FC = () => {
  // isOpen state to control the toggle behavior
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      

      {/* Use the ToggleButton component and pass the required props */}
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <div>
        <p className='text-2xl font-bold pt-4'>Create OpenBook Market</p>
      </div>

      <div>
        <Token/>
      </div>
      {/* Conditional rendering based on isOpen */}
      <div className='pt-8'>
        {isOpen ? <AlreadyOpenBook/> : <CreateOpenBook /> }
      </div>
    </div>
  );
};
