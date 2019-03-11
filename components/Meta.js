import React from 'react';
import NextSeo from 'next-seo';
const Meta = (props) => (

        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="CrowDev" />
            
            <NextSeo
                config={{
                    title: 'NKM Fotostudio Gallus',
                    description: 'Foto studio. Pass bild. Hochzeit fotografie',
                    openGraph: {
                        type: 'website',
                        locale: 'de_DE',
                        url: 'https://www.nkmfotostudio.de',
                        site_name: 'NKM Fotostudio Gallus Frankfurt am Main',
                      },
                }}
            />
            
            <link rel="shortcut icon" href="images/ico/favicon.ico" />
            <link rel="apple-touch-icon" href="images/ico/apple-touch-icon.png"/>           
        </head>
    

)

export default Meta
