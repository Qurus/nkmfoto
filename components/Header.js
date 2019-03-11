const Header = (props) => (
<header id="masthead" class="site-header" role="banner">
                
               
                <div class="site-logo">
                	
             
                    <h1 class="site-title">
                        <a href="index.html" rel="home">
                            <img src={require("../static/images/site/logo.png")} alt="logo" />
                        </a>
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
                            <li><a href="index.html">HOME</a>
                            	
                                <ul>
                                    <li><a href="home-landing.html">Home Landing Photowall</a></li>
                                    <li><a href="home-landing-image.html">Home Landing Image</a></li>
                                    <li><a href="home-landing-slides.html">Home Landing Slides</a></li>
                                    <li><a href="home-landing-fades.html">Home Landing Fades</a></li>
                                    <li><a href="home-landing-video.html">Home Landing Video</a></li>
                                    <li><a href="home-alt.html">Home Alternate</a></li>
                                    <li><a href="home-alt-2.html">Home Alternate 2</a></li>
                                </ul>
                               
                            </li>
                            <li><a href="work.html">WORK</a>
                            
                                <ul>
                                    <li><a href="gallery-single.html">Gallery with zoom</a></li>
                                    <li><a href="gallery-single-mfp.html">Gallery without zoom</a></li>
                                    <li><a href="gallery-single-view.html">Gallery view.js</a></li>
                                    <li><a href="gallery-single-video.html">Simple Gallery</a></li>
                                </ul>
                             
                            </li>
                            <li><a href="pricing.html">PRICING</a></li>
                            <li><a href="blog.html">BLOG</a>
                            
                                <ul>
                                    <li><a href="blog-with-sidebar.html">Blog with sidebar</a></li>
                                    <li><a href="category.html">Blog Category</a></li>
                                    <li><a href="blog-simple.html">Blog Simple</a></li>
                                </ul>
                             
                            </li>
                            <li><a href="about.html">ABOUT ME</a>
                            
                                <ul>
                                    <li><a href="typo.html">Typography</a></li>
                                    <li><a href="shortcodes.html">Shortcodes</a></li>
                                </ul>
                            
                            </li>
                            <li><a href="contact.html">CONTACT</a></li>
                        </ul>
                    </div>

                  
                </nav>

                
        </header>
)

export default Header