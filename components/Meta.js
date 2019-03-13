import React from 'react';
import NextSeo from 'next-seo';
const Meta = (props) => (

        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="CrowDev" />
            
            <NextSeo
                config={{
                    title: 'NKM Fotostudio Gallus',
                    description: 'Foto studio. Pass bild. Hochzeit fotografie und video',
                    openGraph: {
                        type: 'website',
                        locale: 'de_DE',
                        url: 'https://www.nkmfotostudio.de',
                        site_name: 'NKM Fotostudio Gallus Frankfurt am Main',
                      },
                }}
            />
            
            
                      
        </head>
    

)

export default Meta
