import React from 'react';
import Tableau2 from '../composants/tableau2'
import RightIcon from '../composants/righticon';

import { MdFilterAlt, MdDelete } from 'react-icons/md'; // Material Icons



export default function Permissions() {
    return (
        <div className='div-employe'>
    
            <div className='style-title'>
            <h2 >Permissions</h2>
                <div>
                    <MdFilterAlt size={24} color="black" /> 
                    <MdDelete size={24} color="black" /> 
                </div>

                <div>
                   <RightIcon/>
                </div>
             
             
            </div>
        

          


     
        
<Tableau2/>
</div>
);
}