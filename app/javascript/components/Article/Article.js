import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
//import { Post, Title, Content, Image } from '../Style/Style'

const Article = (props) => {
  
  const [article, setArticle] = useState({})
  const [loaded, setLoaded ] = useState(false)

  useEffect(() => {
    const article_id = props.match.params.id
    const article_url = `/api/v1/articles/${article_id}`

    axios.get(article_url)
    .then( resp => {
      setArticle(resp.data.data)
      setLoaded(true)
    })
    .catch( err => console.log(resp))
    
  }, [])
  
  return (
    <Post>
      {
        loaded && <div>
          <Title>{article.attributes.title}</Title>
          <Content>{article.attributes.content}</Content>
          <Image><img src={article.attributes.image_url} /></Image>
        </div>
        
      }
      
    </Post>
  )
}

const Post = styled.div`
  padding: 100px;
  text-align: center;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 80px;
`
const Content = styled.div`
  padding: 100px;
`

const Image = styled.div`
  img{
    width: 600px;
  }
`

export default Article
