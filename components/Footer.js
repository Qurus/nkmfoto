import {Link} from '../routes'
const today = new Date();
const Footer = (props) => (
<footer id="colophon" class="site-footer" role="contentinfo">
    
    
    <div class="layout-medium">
        
      
        <div class="footer-social">
            
            <ul class="social">
                <li><a class="facebook" href="https://www.facebook.com/NKM-Fotostudio-Gallus-868219403243090/" target="_blank"></a></li>
                <li><a class="instagram" href="https://www.instagram.com/explore/locations/868219403243090/germany/frankfurt-germany/nkm-fotostudio-gallus/?hl=de" target="_blank"></a></li>
                <li><a class="youtube" href="https://www.youtube.com/channel/UCIAl2bSPtIzLpebe0lbGJag" target="_blank"></a></li>
            </ul>
            
        </div>
        
        <div class="site-info">
            
            <p>Copyright &copy; {today.getFullYear()} NKM Mediagestaltung UG</p>
            <Link route='impressum'><a>Impressum</a></Link>

        </div>

    
    </div>
        
    
</footer>
)

export default Footer