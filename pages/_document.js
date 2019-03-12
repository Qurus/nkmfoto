import Document, {Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html class="home-landing">
        <Head>
            <link rel="stylesheet" type="text/css" href="../static/css/fonts/montserrat/montserrat.css" />
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic' rel='stylesheet' type='text/css' />
            <link rel="stylesheet" type="text/css" href="../static/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="../static/css/fonts/fontello/css/fontello.css" />
            <link rel="stylesheet" type="text/css" href="../static/js/jquery.uniform/uniform.default.css" />
            <link rel="stylesheet" type="text/css" href="../static/js/jquery.fluidbox/fluidbox.css" />
            <link rel="stylesheet" type="text/css" href="../static/js/owl-carousel/owl.carousel.css" />
            <link rel="stylesheet" type="text/css" href="../static/js/photo-swipe/photoswipe.css" />
            <link rel="stylesheet" type="text/css" href="../static/js/photo-swipe/default-skin/default-skin.css" />
            <link rel="stylesheet" type="text/css" href="../static/js/jquery.magnific-popup/magnific-popup.css" />
            <link rel="stylesheet" type="text/css" href="../static/js/slippry/slippry.css" />
            <link rel="stylesheet" type="text/css" href="../static/css/style.css" />
            <link rel="stylesheet" type="text/css" href="../static/css/main.css" />
            <link rel="stylesheet" type="text/css" href="../static/css/768.css" />
            <link rel="stylesheet" type="text/css" href="../static/css/992.css" />
            <script src="../static/js/jquery-1.11.2.min.js"></script>
            <script src="../static/js/jquery-migrate-1.2.1.min.js"></script>
            <script src="../static/js/modernizr.min.js"></script>
            <script src="../static/js/fastclick.js"></script>
            <script src="../static/js/jquery.fitvids.js"></script>
            <script src="../static/js/jquery.validate.min.js"></script>
            <script src="../static/js/jquery.uniform/jquery.uniform.min.js"></script>
            <script src="../static/js/imagesloaded.pkgd.min.js"></script>
            <script src="../static/js/jquery.fluidbox/jquery.fluidbox.min.js"></script>
            <script src="../static/js/socialstream.jquery.js"></script>
            <script src="../static/js/jquery.collagePlus/jquery.collagePlus.min.js"></script>
            <script src="../static/js/photo-swipe/photoswipe.min.js"></script>
            <script src="../static/js/photo-swipe/photoswipe-ui-default.min.js"></script>
            <script src="../static/js/photo-swipe/photoswipe-run.js"></script>
            <script src="../static/js/jquery.gridrotator.js"></script>
            <script src="../static/js/slippry/slippry.min.js"></script>
            <script src="../static/js/jquery.magnific-popup/jquery.magnific-popup.min.js"></script>
            <script src="../static/js/masonry.pkgd.min.js"></script>
            <script src="../static/js/view.min.js?auto"></script>
            <script src="../static/js/main.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}