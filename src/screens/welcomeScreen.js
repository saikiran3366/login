import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import PersonImg from '../assets/codePerson.jpg';
import built1 from '../assets/todoImg.JPG';
import built2 from '../assets/regForm.JPG';
import built3 from '../assets/calcu.JPG';
import built4 from '../assets/searchApp.JPG';


const WelcomeScreen = () =>{
    const sym = "</>"

    const imgGallery =[
        {key: built1},
        {key: built2},
        {key: built3},
        {key: built4}
    ]
    
    return(
       <div style={{height:1500,backgroundColor:'green'}}>
           <div style={{height:60,backgroundColor:'grey',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{width:'80%',height:60,backgroundColor:'grey',display:'flex',flexDirection:'row',justifyContent: 'space-around',width:'30%'}}>
              <Link to="/TodoApp" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Todo App</h4></Link>
              <Link  to="/RegisterForm" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Register Form</h4></Link>
               <Link to ="/Calculator" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Calculator</h4></Link>
               <Link to ="/Movies" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Search App</h4></Link>
              </div>
              <div style={{height:60,width:'70%',backgroundColor:'grey',display:'flex',justifyContent: 'flex-end',paddingRight:20}}>
                  <h4 style={{color:'white',color:'blue'}}>Nice to meet you...</h4>
              </div>
           </div>
           
           <div style={{height:400,backgroundColor:'white',display:'flex',flexDirection:'row'}}>
               <div style={{height:400,width:'50%',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent: 'center',paddingLeft:50}}>
                    <h1 style={{color:'black',margin:0}}>Hi,I'm Sai.<br/> I love to build amazing apps. </h1>
                    <p style={{marginTop:5,color:'black'}}>lorem ipsum dolor sit amet, consectetur adipiscing<br/>lorem ipsum dolor sit amet, consectetur adip<br/>lorem ipsum dolor sit amet, consectetur adip</p>
                    <div >
                    <Button  
                        variant="contained" 
                        style={{textDecoration: 'none',marginTop:20,marginRight:20}}>
                        Work With Me
                    </Button>

                    <Button  
                        variant="contained" 
                        style={{textDecoration: 'none',marginTop:20,background:'grey'}}>
                        See My Past Work
                    </Button>
                    </div>
               </div>

               <div style={{height:400,width:'50%',backgroundColor:'white'}}>
                    <img src={PersonImg} width='100%' height='100%'/>
               </div>
           </div>

           <div style={{height:200,backgroundColor:'white',display:'flex',alignItems:'center',flexDirection:'column'}}>
               <h1 style={{margin:0}}>{sym}</h1>
               <h1 style={{margin:5}}>Apps I've Built</h1>
               <p style={{margin:0}}>lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip</p>
               <p style={{margin:0}}>lorem ipsum dolor lorem ipsum dolor sit am</p>
           </div>

           <div style={{display:'flex',justifyContent: 'center',marginTop:100}}>
                   
                   <div style={{height:730,width:'75%',background:' linear-gradient(lightgreen,black)',justifyContent: 'space-around',alignItems: 'center',display:'flex',flexDirection:'row',flexWrap:'wrap',borderRadius:15}}>
                   {imgGallery.map((item)=>{
                       return(
                        <img src={item.key} width='500' height='300' style={{borderRadius:15}}/> 
                    )
                    })}
                   </div>
           </div>
       </div>

    )
}

export default WelcomeScreen