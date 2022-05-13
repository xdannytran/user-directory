import React,{useEffect, useState} from 'react'
import Data from './data'
import PersonDisplay from './PersonDisplay'

function MainDisplay () {
    const [indexNum, setIndexNum] = useState(0);


    function prevClick(e) {
        if (indexNum > 0) {
            setIndexNum((prevNum)=> prevNum -1);
        }
    }

    function nextClick(e) {
        if (indexNum <24) {
            setIndexNum((prevNum) => prevNum +1);
        }
    }
    
    
    
    return (
        <div className="main-display">
        <PersonDisplay indexNum={indexNum} />

        <div className='nav'>
        <span className='prev' onClick={prevClick}>
            </span>
            <div className='inner-buttons'>
                <span className='blue-button'>Edit</span>
                <span className='blue-button'>Delete</span>
                <span className='blue-button'>New</span>
            </div>
            <span className='next' onClick={nextClick}>

            </span>
            </div>
        </div>
        
    );
}


export default MainDisplay;