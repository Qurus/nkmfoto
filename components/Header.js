import {Link} from '../routes'
const Header = (props) => (
<header id="masthead" class="site-header" role="banner">
                
               
                <div class="site-logo">
                	
             
                    <h1 class="site-title">
                        <Link route='/'><a rel="home">
                            <img src={require("../static/images/site/logo.png")} alt="nkm logo" />
                        </a></Link>
                    </h1>
                   
                    <h1 class="site-title">
                        <a href="/" rel="home">
                            NKM Mediengestaltung UG
                        </a>
                    </h1>
                    <p class="site-description">a wedding photographer.</p>
                   
                    
                    
                </div>
             
                         
                
 				
              
                <nav id="primary-navigation" class="site-navigation primary-navigation" role="navigation">
                    
                    <a class="menu-toggle"><span class="lines"></span></a>
                    
                 
                    <div class="nav-menu">
                        <ul>
                            <li><Link route='gallery'><a>GALLERY</a></Link></li>
                            <li><Link route='about'><a>ÜBERUNS</a></Link></li>
                            <li><Link route='contact'><a>CONTACT</a></Link></li>
                        </ul>
                    </div>

                  
                </nav>

                
        </header>
)

export default Header