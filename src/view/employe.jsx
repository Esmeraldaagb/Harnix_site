import React from 'react';
import Tableau1 from '../composants/tableau1'
import RightIcon from '../composants/righticon';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa'; // Font Awesome icons
import { MdDelete, MdAdd } from 'react-icons/md'; // Material Icons



export default function Employee() {
    return (
        <div className='div-employe'>
    
            <div className='style-title'>
            <h2 >Employés</h2>
                <div>
                    <MdDelete size={24} color="black" /> 
                    <MdAdd size={24} color="black" /> 
                </div>

                <div>
                   <RightIcon/>
                </div>
             
            </div>
        

          


     
        
<Tableau1/>
</div>
);
}