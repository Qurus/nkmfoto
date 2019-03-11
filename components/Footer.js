const today = new Date();
const Footer = (props) => (
<footer id="colophon" class="site-footer" role="contentinfo">
    
    
    <div class="layout-medium">
        
      
        <div class="footer-social">
            
            <ul class="social">
                <li><a class="facebook" href="#"></a></li>
                <li><a class="twitter" href="#"></a></li>
                <li><a class="instagram" href="#"></a></li>
                <li><a class="fivehundredpx" href="#"></a></li>
                <li><a class="vine" href="#"></a></li>
                <li><a class="vimeo" href="#"></a></li>
            </ul>
            
        </div>
        
        <div class="site-info">
            
            <p>Copyright &copy; {today.getFullYear()} NKM Mediagestaltung UG</p>

        </div>

    
    </div>
        
    
</footer>
)

export default Footer