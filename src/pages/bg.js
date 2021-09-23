import  React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"

const BgBridge = () =>{
    const { bgimage123 } = useStaticQuery(
        graphql`
        query{
            bgimage123 : file(relativePath: {eq: "bg.jpg"}) {
                childImageSharp {
                  gatsbyImageData(width: 1920,
                    quality: 50,
                    webpOptions: {quality: 70}
                  )
                }
              }
        }
        `
    )

    const pluginImage = getImage(bgimage123)

    return(
        <BgImage
        image={pluginImage}
        className={"masthead"}
        >
        
        </BgImage>

    )
}


export default BgBridge