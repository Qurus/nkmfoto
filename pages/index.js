import {Link} from '../routes'
import Layout from "../components/Layout"
import Slider from "../components/Slider"


export default () => (
    
<Layout>
       
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
                                <Link route='gallery'>
                                    <a class="button">Discover</a>
                                </Link>   
    	
                            </div>

                        </div>
 
                    </div>

                </div>

                
            </div>
            
</Layout>

)