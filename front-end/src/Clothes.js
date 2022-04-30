import React, { Component,useState ,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import customers from './customer_3fields.js';

export default function Clothes() {

	const [Array,updateArray] = useState(' new array');
  //  const [Cust,updateCust] = useState(onecust);
    const [Cust,updateCust] = useState('mmmmm');
    const [Filtered,setFiltered] = useState([]);


	useEffect(()=>{
        console.log('customers array ');


		const promise1=fetch('https://customersmigrate.herokuapp.com/api/email/camendez51@gmail.com'
, {
    method: 'Get',
       mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', 
  });
       
       const result = promise1.then((res)=> res.json())
       .then((json)=>{
       	updateArray(JSON.stringify(json));
        
       });
      

 
 // updateArray(promise1.json());
  });

    useEffect(()=>{

       setFiltered(customers.filter((obj)=>{ return obj.email=="camendez51@gmail.com";})
        );

    },[Array]);

    return (
        <div>
        <p className="App-intro">
        hello there {Array}
        </p>
        <p className="App-intro">
         skmksmsk {JSON.stringify(Filtered)}
        </p>
        </div>
    );
 

}
