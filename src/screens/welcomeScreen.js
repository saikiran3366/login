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
    const and = "&"

    const imgGallery =[
        {key: built1},
        {key: built2},
        {key: built3},
        {key: built4}
    ]
    
    return(
       <div >
           <div style={{height:60,backgroundColor:'black',display:'flex',flexDirection:'row',alignItems:'center'}}>
              <div style={{width:'80%',height:60,backgroundColor:'black',display:'flex',flexDirection:'row',justifyContent: 'space-around',width:'30%'}}>
              <Link to="/TodoApp" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Todo App</h4></Link>
              <Link  to="/RegisterForm" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Register Form</h4></Link>
               <Link to ="/Calculator" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Calculator</h4></Link>
               <Link to ="/Movies" style={{textDecoration: 'none'}}><h4 style={{color:'white'}}>Search App</h4></Link>
              </div>
              <div style={{height:60,width:'70%',backgroundColor:'black',display:'flex',justifyContent: 'flex-end',paddingRight:20}}>
                  <h4 style={{color:'white',color:'grey'}}>Nice to meet you...</h4>
              </div>
           </div>
          
           <div style={{height:400,backgroundColor:'white',display:'flex',flexDirection:'row',paddingTop:20}}>
               <div style={{height:400,width:'50%',backgroundColor:'white',display:'flex',flexDirection:'column',justifyContent: 'center',paddingLeft:50}}>
                    <h1 style={{color:'black',margin:0}}>Hi,I'm Sai.<br/> I love to build amazing apps. </h1>
                    <p style={{marginTop:5,color:'black'}}>lorem ipsum dolor sit amet, consectetur adipiscing<br/>lorem ipsum dolor sit amet, consectetur adip<br/>lorem ipsum dolor sit amet, consectetur adip</p>
                    <div >
                    <Button  
                        variant="contained" 
                        style={{textDecoration: 'none',marginTop:20,marginRight:20}}>
                         <a href="https://www.linkedin.com/"  target="_blank" style={{textDecoration: 'none',color:'white'}}>LinkedIn</a>
                    </Button>

                    <Button  
                        variant="contained" 
                        style={{textDecoration: 'none',marginTop:20,background:'green'}}>
                        <a href="https://github.com/"   target="_blank" style={{textDecoration: 'none',color:'white'}}>GitHub</a>
                    </Button>
                    </div>
               </div>

               <div style={{height:400,width:'50%',backgroundColor:'white'}}>
                    <img src={PersonImg} width='100%' height='100%'/>
               </div>
           </div>

           <div style={{height:200,backgroundColor:'white',display:'flex',alignItems:'center',flexDirection:'column',paddingTop:50}}>
               <h1 style={{margin:0}}>{sym}</h1>
               <h1 style={{margin:5}}>Apps I've Built</h1>
               <p style={{margin:0}}>lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip</p>
               <p style={{margin:0}}>lorem ipsum dolor lorem ipsum dolor sit am</p>
           </div>

           <div style={{display:'flex',justifyContent: 'center',marginTop:0}}>
                   
                   <div style={{height:730,width:'75%',background:'linear-gradient(yellow,lightgreen)',justifyContent: 'space-around',alignItems: 'center',display:'flex',flexDirection:'row',flexWrap:'wrap',borderRadius:15}}>
                   {imgGallery.map((item)=>{
                       return(
                        <img src={item.key} width='500' height='300' style={{borderRadius:15}}/> 
                    )
                    })}
                   </div>
           </div>

           <div>
               <div style={{height:750,backgroundColor:'black',display:'flex',flexDirection:'column',alignItems:'center'}}>
                   <h1 style={{color:'white'}}>
                       Skills {and} Technologies
                   </h1>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <p style={{margin:0,color:'white'}}>lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip</p>
                        <p style={{margin:0,color:'white'}}>lorem ipsum dolor lorem ipsum dolor sit am</p>
                    </div>
                    <div style={{height:300,width:'60%',backgroundColor:'black',marginTop:60,justifyContent: 'center',display:'flex',flexDirection:'column'}}>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <h4 style={{color:'white'}}>JavaScript</h4>
                        </div>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <h4 style={{color:'white'}}>React</h4>
                        </div>
                        </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:30}}>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <h4 style={{color:'white'}}>JavaScript</h4>
                        </div>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <h4 style={{color:'white'}}>React</h4>
                        </div>
                        </div>

                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:30}}>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <h4 style={{color:'white'}}>JavaScript</h4>
                        </div>
                        <div style={{height:50,width:400,backgroundColor:'grey',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <h4 style={{color:'white'}}>React</h4>
                        </div>
                        </div>

                    </div>
               </div>
               
           </div>
       </div>

    )
}

export default WelcomeScreen