import React from 'react';
import Head from "next/head"
import Meta from "../components/Meta"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import {Link} from '../routes'

export default () => (
<Head>
<Meta />

<body>
    <div id="page" class="hfeed site">
        
    <Header />
        <div id="main" class="site-main">
        
        
    
        	<div id="primary" class="content-area">
            	
                <div id="content" class="site-content" role="main">
                	<div class="layout-full"> 
                        <div class="home-wrap">

                           <Slider />
                        
                            <div class="intro">
                            
                                
                            
                                <h2>	
                                    
                                    NKM Fotostudio<br/>
                                    &nbsp;We capture&nbsp;
    
                                    <span class="rotate-words" data-interval="3000">
                                        <span>life.</span>
                                        <span>moments.</span>
                                        <span>happiness.</span>
                                        <span>emotions.</span>
                                        <span>action.</span>
                                        <span>impression.</span>
                                        <span>beauty.</span>
                                    </span>
    
                                </h2>
                                <Link route='about'>
                                    <a class="button">Discover</a>
                                </Link>   
    	
                            </div>
                          
                                
                            
                        </div>
                       
                        
                        
                        
                    </div>
                 
                    
                    
                    
                
                	
                	
                
                </div>

                
            </div>
            
            
            
               
        
        
        
        
        </div>

        <Footer/>  
	</div>
    
    
    

</body>
</Head>
)