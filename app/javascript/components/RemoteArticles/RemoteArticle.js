import React from 'react' 
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const RemoteArticle = (props) => {

  const { title, description, urlToImage, url } = props.attributes

  return (
  
        <Art>
      <table>
        <tbody>
          <tr>
            <td>
              <Title>
                <Link to ={url}> <h2>{title}</h2></Link>
                <div>{description}</div>
              </Title>
            </td>
            <td>
              <Image>
                <Link to  ={url}> 
                  <div className="article-image">
                    <img src={urlToImage} /> 
                  </div>
                </Link>
              </Image>
            </td>
          </tr>
        </tbody>
      </table>
    </Art>
  )
}

const Art = styled.div`
  padding: 50px;
  border-bottom: 1px solid #eaeaea;
`

const Title = styled.div`
  max-width: 500px;
`

const Image = styled.div`
  
  img {
    max-width: 500px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`

export default RemoteArticle
