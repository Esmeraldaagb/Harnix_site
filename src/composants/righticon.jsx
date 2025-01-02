import React from 'react';
import { MdAccountCircle, MdNotifications, MdSearch } from 'react-icons/md'; // Material Icons



export default function RightIcon() {
    return (
        <div className='parent-container'>
              <div className='icon-right'>


                   <MdNotifications size={24} color="black" /> 
                        <MdSearch size={24} color="black" /> 
                    <MdAccountCircle size={24} color="black" /> 

              </div>
        
             
        </div>
);
}