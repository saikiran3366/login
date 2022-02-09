import React,{useState} from 'react';
import image from '../assets/image.jpg'
import googlIcon from '../assets/google.png';
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom';

const Home = () =>{
    

    return(
        <div style={{display:'flex',flexDirection:'row',height:750}}>
            <div style={{width:'50%',backgroundColor:'red',background: `url(${image})`}}>
            </div>

            <div style={{width:'50%',backgroundColor:'red',alignItems:'center',display:'flex',flexDirection:'column'}}>
                <div style={{marginTop:50,display:'flex',flexDirection:'column',width:'50%'}}>
                    <h1 style={{margin:5}}>Login
                    </h1>
                    <p style={{margin:0,marginLeft:3}}>See your growth and get consulting support!
                    </p>
                        <div style={{height:50,width:'100%',backgroundColor:'white',cursor:'pointer',border:'2px solid black',borderRadius:30,marginTop:50,justifyContent: 'center',alignItems:'center',display:'flex'}}>
                            <img style={{height:30,width:30,marginRight:30}} src={googlIcon}/>
                            <h4 >Sign in with Google</h4>
                        </div>
                        <div style={{width:'100%',height:1,backgroundColor:'black',marginTop:50,justifyContent: 'center',display:'flex',alignItems:'center'}}>
                            <p style={{backgroundColor:'white',paddingBottom:5,paddingLeft:10,paddingRight:10}}>
                                or Sign in with Email
                            </p>
                        </div>
                </div>

                <div style={{width:'50%',marginTop:40}}>
                    <h1 style={{margin:10}}>
                        Email*
                    </h1>
                    <TextField  id="outlined-basic" type="text"  size="small" label="mail@website.com" style={{marginLeft:7,width:'95%'}} />
                        <h1 style={{margin:10,}}>
                            Password
                        </h1>
                    <TextField id="outlined-basic" type="text"  size="small" label="min 8 characters" style={{marginLeft:7,width:'95%'}} />

                    <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                        <h4 style={{margin:10,}}>
                            Remember me
                        </h4>

                        <h4 style={{margin:10, textDecoration:'underline',cursor:'pointer'}}>
                            Forget password?
                        </h4>
                    </div>
                    <Link to = "/welcomeScreen" style={{textDecoration:'none'}} >
                        <div style={{height:50,width:'100%',backgroundColor:'Blue',border:'2px solid #5C66F3',borderRadius:30,marginTop:70,cursor:'pointer',justifyContent: 'center',alignItems:'center',display:'flex',marginTop:40,textDecoration:'none'}}>
                                <h4 style={{color:'#FFF'}}>Login</h4>
                        </div>
                    </Link>
                    <div style={{marginLeft:7, textDecoration:'underline',cursor:'pointer'}}>
                            <h4>Not registered yet? Create an Account</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;