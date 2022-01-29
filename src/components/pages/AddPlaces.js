import React from 'react';

import './AddPlaces.css';


const AddPlaces = () => {
    return(
       <div className='cardss'>
            <div className='container'>
                <div className='sub_container'>
                    <div className='text_lebel'>
                        <label className='lebel_text'>Add Picture & Description</label>
                    </div>
                    <div className='each-div' >
                        <div className='radio_formatter'>  
                            <input type="radio" id="travel" name="fav_language" value="HTML"/>
                              <label for="html">Travel</label>
                              <input type="radio" id="travel" name="fav_language" value="CSS"/>
                              <label for="css">Story</label>
                              <input type="radio" id="sci-fic" name="fav_language" value="JavaScript"/>
                              <label for="javascript">Sci-fic</label>
                        </div>
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
        </div>
    );
};

export default AddPlaces;