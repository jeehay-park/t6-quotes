import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import { format } from 'date-fns';
import { RightCorner } from "./styledComponents/StyledComponents";
import CardReadExcel from "./CardReadExcel";
import { Upload } from "./styledComponents/StyledComponents";
import CardFetchJson from "../src/CardFetchJson";

export default function GetQuote() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            try {
                const response = await fetch('data.json', {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
                  }
                
                );
              
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
          
                const data = await response.json();

                setUserData(data.quotes);

            } catch (error) {
                console.error('Error fetching quotes:', error);
               

            }
        }

        fetchData();


    }, [])


  
      return(
        <>
           { userData && <CardFetchJson userData={userData} />}
        </>
      )
};