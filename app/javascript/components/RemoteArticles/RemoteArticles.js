import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import RemoteArticle from './RemoteArticle'
import styled from 'styled-components'

const RemoteArticles = () => {
  
  const [ articles, setArticles ] = useState(null)
  const remote_url = "http://newsapi.org/v2/everything?q=watches&from=2021-01-04&sortBy=publishedAt&apiKey=16a0ae7b925a499f913a50740e4173e5" 
                
  useEffect(()=>{
    axios.get(remote_url)
    .then( resp => {
      setArticles(resp.data.articles)
    })
    .catch( resp => console.log(resp) )
  }, [ articles ])

  return (
    <Fragment>
      <Home>
        <Title>
          <h1>Remote Articles</h1>
        </Title>
        <Grid>
          { articles && articles.map( (article, idx) => { return <RemoteArticle key={idx} attributes={article} /> }) }
        </Grid>
      </Home>
    </Fragment>
  )
}

const Home = styled.div`
  padding: 100px 300px 100px 300px;
`
const Grid = styled.div`  
`
const Title = styled.div`
  text-align: center;
`

export default RemoteArticles