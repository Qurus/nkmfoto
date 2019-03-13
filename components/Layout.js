import React from 'react';
import Head from "next/head"
import Meta from "../components/Meta"
import Header from "../components/Header"
import Footer from "../components/Footer"


class Layout extends React.Component {

    render() {
        return (
<Head>
<Meta />

<body>
    <div id="page" class="hfeed site">
        
    <Header />
        <div id="main" class="site-main">
{this.props.children}
</div>

        <Footer/>  
        
	</div>
    
    
    

</body>

</Head>
  )
}
}

export default Layout