import React, { useState } from "react";
import * as XLSX from 'xlsx';
import { format } from 'date-fns';
import { RightCorner } from "./styledComponents/StyledComponents";
import Card from "./Card";
import { Upload } from "./styledComponents/StyledComponents";

export default function GetUserData() {

    const [userData, setUserData] = useState([]);
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        readFromExcel(file);
    };

    const readFromExcel = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const result = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          console.log(result);
          const transformedData = result.slice(1).map(row => {
            return {
              date: formatExcelDate(row[0]),
              quote: row[1],
              author: row[2],
            };
          });
      
          // Update the component state with the parsed data
          setUserData(transformedData);
        };
        reader.readAsArrayBuffer(file);
      };

      const formatExcelDate = (serial) => {
        if (!serial || isNaN(serial)) {
          return null;
        }
      
        // Convert Excel serial number to milliseconds
        const excelEpoch = new Date('1899-12-31').getTime();
        const milliseconds = (serial - 1) * 24 * 60 * 60 * 1000 + excelEpoch;
      
        if (isNaN(milliseconds)) {
          return null;
        }
      
        // Format the date as "MM/DD/YYYY"
        const formattedDate = format(new Date(milliseconds), 'MM/dd/yyyy');
        
        return formattedDate;
      };

      return(
        <>
            <RightCorner>
                <Upload 
                    type="file" 
                    onChange={handleFileChange} 
                />
            </RightCorner>
            { userData && <Card userData={userData} />}
        </>
      )
};