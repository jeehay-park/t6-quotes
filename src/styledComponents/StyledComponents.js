import styled from "styled-components";

export const CenterWrapper = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
   
    
`


export const RightCorner = styled.div`
    
    display : flex;
    justify-content : end;
    margin-top : 2rem;
    margin-right : 1rem;

`


export const QuoteBox = styled.div`

    border : 1px solid #397a4c;
    padding : 1rem 1rem;
    dispaly : flex;
    flex-direction: column;
    justify-content : space-around;

` 

export const Button = styled.button`

    padding : 0.5rem 0.5rem;
    border : 1px solid #397a4c;
    background-color : white;
    color : #397a4c;
    font-weight :  bold;
    border-radius : 0.5rem;
    cursor : pointer;


`

export const Upload = styled.input`

    padding : 0.5rem 0.5rem;
    border : 1px solid #397a4c;
    background-color : white;
    color : #397a4c;
    font-weight :  bold;
    border-radius : 0.5rem;
    cursor : pointer;



`