import React, { useState } from "react";
import { CenterWrapper, QuoteBox, Button } from "./styledComponents/StyledComponents";
import bg0 from "../src/bg/bg0.jpeg"
import bg1 from "../src/bg/bg1.jpeg"
import bg2 from "../src/bg/bg2.jpeg"
import bg3 from "../src/bg/bg3.jpeg"
import bg4 from "../src/bg/bg4.jpeg"
import bg5 from "../src/bg/bg5.jpeg"
import bg6 from "../src/bg/bg6.jpeg"
import bg7 from "../src/bg/bg7.jpeg"
import bg8 from "../src/bg/bg8.jpeg"
import bg9 from "../src/bg/bg9.jpeg"
import bg10 from "../src/bg/bg10.jpeg"
import bg11 from "../src/bg/bg11.jpeg"
import bg12 from "../src/bg/bg12.jpeg"
import bg13 from "../src/bg/bg13.jpeg"
import bg14 from "../src/bg/bg14.jpeg"
import bg15 from "../src/bg/bg15.jpeg"


export default function Card({userData}) {

    const images = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14, bg15];
  
    const [index, setIndex] = useState(0);
    const [num, setNum] = useState(0);
          
    const handleRefresh = (event) => {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * userData.length);
        const randomNum = Math.floor(Math.random() * images.length);

        setIndex(randomIndex);
        setNum(randomNum);

    }

    console.log("UserData : ")
    console.log(userData)
    console.log("userData[0]", userData[0]?.quote)
    console.log("userData[0]", userData[0]?.author)
    

   
    return(
        <>
            <CenterWrapper>
                <QuoteBox>
                    <h1 style={{width : '350px', height : '430px', padding : '0.5rem 0.5rem'}}>{userData[index]?.quote}</h1>
                    <p style={{width : '350px', height : '20px', padding : '1rem 0.5rem'}}>{userData[index]?.author}</p>
                    { userData[index]?.quote && <div style={{width : '350px', height : '200px', padding : '0 0.5rem'}}>
                        <img src={images[num]} style={{width : '350px', height : '200px'}} alt="positive-images"/>
                    </div>
                    }
                    
                </QuoteBox>
                <div style={{textAlign : 'center', margin : '1rem 1rem'}}>

                <Button
                    onClick={handleRefresh}>Get another quote!
                </Button>
                </div>
             
                
                
            </CenterWrapper>
            
        </>
    )
};