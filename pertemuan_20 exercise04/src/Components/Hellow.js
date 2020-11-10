import React from 'react';
import { Year, Day } from  '../Utils/waktu';


const Hellow = () =>{
    return(
      <>
      <p>Hello, welcome to to Webpro Class</p>
      <p>Tahun sekarang adalah {Year()}</p>
      <p>Tanggal sekarang adalah {Day()}</p>
      </>
    );
  };

export default Hellow;