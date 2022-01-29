import React from 'react';

import './AddPlaces.css';


const AddPlaces = () => {
    return(
       
        <div className='container'>
            <div className='sub_container'>
                <div className='text_lebel'>
                    <label className='lebel_text'>Add Picture & Description</label>
                </div>
                <div className='each-div' >   
                    <input type='file' className='file_upload'></input>
                </div> 
                <div>
                    <textarea className='textarea'>
                        Description
                    </textarea>
                </div>

                <div className='button_div'>
                    <button type='submit' className='button' >Submit</button>
                </div>
            </div>
        </div>
       
    );
};

export default AddPlaces;