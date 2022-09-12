import Image from 'next/image'
import { useState } from 'react'
import dollar from '../../images/icon-dollar.svg'
import person from '../../images/icon-person.svg'
import logo from '../../images/logo.svg'

export default function HomeCalc(){
    const [tip,setTip]= useState(0);
    const [bill,setBill]= useState(0);
    const [people, setPeople]= useState(0);
    const [percent,setPersent]= useState(0);

    const total=  people !== 0 ? percent * bill / 100 /people :  0;
    const totalAmount= people !== 0 ? percent * bill / 100  :  0;

    
    function Reset(){
        setBill(0);
        setPeople(0);
        setPersent(0)
    }


    return(
    <div className="container">
        <div className="contTitle">
        <h1>SPLI<br/>TTER</h1>
        </div>


        <div className="calcCont">
        

        <div className='calcNumberDiv'>

        <div className="Bill">
        <p>Bill</p>
        <div className='billInput'>
        <input  onChange={(e)=> setBill(e.target.value)} />
        <Image src={dollar} className='imagen'/>
        </div>
        </div>

        <div className="typeOfTips">
            <p>Select Tip %</p>

            <div className="grids">
            <button  value={5} onClick={(e)=>setPersent(e.target.value)} id={percent == 5? 'change': '#'}>5%</button>
            <button  id={percent == 10? 'change': '#'}  value={10} onClick={(e)=>setPersent(e.target.value)}>10%</button>
            <button  id={percent == 15? 'change': '#'}  value={15} onClick={(e)=>setPersent(e.target.value)}>15%</button>
            <button  id={percent == 25? 'change': '#'}  value={25} onClick={(e)=>setPersent(e.target.value)}>25%</button>
            <button  id={percent == 50? 'change': '#'}  value={50} onClick={(e)=>setPersent(e.target.value)}>50%</button>
          
            </div>
        </div>


        <div className="numberPeople">
            <p>Number of People</p>
            <div className='people'>
            <input  onChange={(e)=>setPeople(e.target.value)}/>
            <Image src={person}/>
            </div>
        </div>

        </div>

        

        <div className='greenDiv'>
            
            <div className='greenC'>
                <div id='cont'>
                    <div>
                    <p>Tip Amount</p>
                    <p id='person'>/ person</p>
                    </div>
                <h2>${totalAmount === NaN? 0 : totalAmount}</h2>
                </div>

                <div id='cont2'>
                <div>
                <p>Total</p>
                <p id='person2'>/ person</p>
                </div>    
                <h2>${total === NaN? 0 : total}</h2>
                </div>
                </div>
                <button id='reset' onClick={Reset}>RESET</button>
            </div>
       

        </div>


        <style jsx>{`



        .greenC{
            width:95%;
        }
        .calcNumberDiv{
            
            width:50%;
        }

        #change{
            background-color:#26c2ad;
            color:#024c4b;
        }

        #person{
            color: #629096;
            font-size:.9em;
            margin-top: -.8em;
        }

        #person2{
            color: #629096;
            font-size:.9em;
            margin-top: -.8em;
        }

        #reset{
            width:70%;
            margin-bottom: 1.5em;
            border-radius: 10px;
            padding:1em;
            color: white;
            border:none;
            background-color:#26c2ad;

        }
        .greenDiv{
            margin-top: 1em;
            margin-bottom: 1em;
            width:50%;
            height:30em;
            background-color:#00474b;
            border-radius:15px;
            color:white;
            display:flex;
            align-items:center;
            justify-content: space-between;
            flex-direction: column;
        }

        h2{
            color:#2fae9f;
        }

        #cont{
           
            width:93%;
            display:flex;
            align-items:center;
            justify-content: space-between;
        }

        #cont2{
           
            width:93%;
            display:flex;
            align-items:center;
            justify-content: space-between;
        }

        .billInput{
           
            display:flex;
            align-items:center;
            justify-content:space-between;
            flex-direction: row-reverse;
            background-color: #f3f8fb;


        }
        

        .numberPeople{
            
            width: 90%;
            color:#687878;
        
            display:flex;
            align-items:flex-start;
            justify-content:space-between;
            flex-direction: column;
        }
        .numberPeople .people{
            
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            flex-direction: row-reverse;
            background-color: #f3f8fb;
            
        }

        .grids{
            
            width: 100%;
            height:10em;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
        }

        .grids button{
            background-color:#00474b;
            border:none;
            color: white;
            font-size: 1em;
            width: 82%;
            height: 2.7em;
            border-radius: 5px;
            margin-bottom:.5em;

           
        }

        .grids .custom{
           background-color: #f3f8fb;
           color:#556b6e;
        }
        .typeOfTips{
            
            width:91%;
            color:#687878;
            margin-left: 1.5em;
            
        }
        .typeOfTips p{
            margin-left: -1em;
        }

        .Bill .imagen{
            margin-left: 10em;
        }
        
        .Bill{
           
            width:90%;

            color:#687878;
        }

        .imagen{
            position: absoulte;
            margin-top: -1em;
        }

        input{
           background-color: #f3f8fb;
           width:50%;
           color:#164b4b;
           padding:1em;
           border: none;
           font-size:1em;

           display:flex;
           align-items: center;
           justify-content: flex-end;

        }

        .calcCont{
            width: 70%;
            padding:1em;
            min-height: 80vh;
            background-color: white;
            border-radius: 20px;
            margin-top: -2em;
            display:flex;
            align-items:center;
            justify-content: space-around;
            
        }

        h1{
            color: #426264;
        }

        .contTitle{
            width:100%;
            height: 10em;
            background-color: #c5e4e7;

             
            display:flex;
            align-items:center;
            justify-content: center;
           

        }

        .container{
          
            width: 100%;
            min-height: 100vh;
            font-family: 'Space Mono', monospace;
            display:flex;
            align-items:center;
            justify-content: center;
            flex-direction: column;
        }

    
          




        @media screen and (max-width:802px){        

        .greenC{
            
            
        }    

        .calcNumberDiv{
            width:100%;
        }

        #change{
            background-color:#26c2ad;
            color:#024c4b;
        }

        #person{
            color: #629096;
            font-size:.9em;
            margin-top: -.8em;
        }

        #person2{
            color: #629096;
            font-size:.9em;
            margin-top: -.8em;
        }

        #reset{
            width:70%;
            margin-bottom: 1.5em;
            border-radius: 10px;
            padding:1em;
            color: white;
            border:none;
            background-color:#26c2ad;

        }
        .greenDiv{
            margin-top: 1em;
            margin-bottom: 1em;
            width:80%;
            height:15em;
            background-color:#00474b;
            border-radius:15px;
            color:white;
            display:flex;
            align-items:center;
            justify-content: space-between;
            flex-direction: column;
        }

        h2{
            color:#2fae9f;
        }

        #cont{
           
            width:93%;
            display:flex;
            align-items:center;
            justify-content: space-between;
        }

        #cont2{
           
            width:93%;
            display:flex;
            align-items:center;
            justify-content: space-between;
        }

        .billInput{
           
            display:flex;
            align-items:center;
            justify-content:space-between;
            flex-direction: row-reverse;
            background-color: #f3f8fb;


        }
        

        .numberPeople{
            
            width: 90%;
            color:#687878;
        
            display:flex;
            align-items:flex-start;
            justify-content:space-between;
            flex-direction: column;
        }
        .numberPeople .people{
            
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            flex-direction: row-reverse;
            background-color: #f3f8fb;
            
        }

        .grids{
            
            width: 100%;
            height:10em;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
        }

        .grids button{
            background-color:#00474b;
            border:none;
            color: white;
            font-size: 1em;
            width: 82%;
            height: 2.7em;
            border-radius: 5px;
            margin-bottom:.5em;

           
        }

        .grids .custom{
           background-color: #f3f8fb;
           color:#556b6e;
        }
        .typeOfTips{
            
            width:91%;
            color:#687878;
            margin-left: 1.5em;
            
        }
        .typeOfTips p{
            margin-left: -1em;
        }

        .Bill .imagen{
            margin-left: 10em;
        }
        
        .Bill{
           
            width:90%;

            color:#687878;
        }

        .imagen{
            position: absoulte;
            margin-top: -1em;
        }

        input{
           background-color: #f3f8fb;
           width:50%;
           color:#164b4b;
           padding:1em;
           border: none;
           font-size:1em;

           display:flex;
           align-items: center;
           justify-content: flex-end;

        }

        .calcCont{
            width: 99%;
            min-height: 80vh;
            background-color: white;
            border-radius: 20px;
            margin-top: -2em;
            display:flex;
            align-items:center;
            justify-content: space-around;
            flex-direction: column;
        }

        h1{
            color: #426264;
        }

        .contTitle{
            width:100%;
            height: 10em;
            background-color: #c5e4e7;

             
            display:flex;
            align-items:center;
            justify-content: center;
           

        }

        .container{
          
            width: 100%;
            min-height: 100vh;
            font-family: 'Space Mono', monospace;
            display:flex;
            align-items:center;
            justify-content: center;
            flex-direction: column;
        }


    }
      
        
        `}</style>
    </div>
    )
}