import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Article from './Article'
import styled from 'styled-components'
import { PlusCircleFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Articles = () => {

  const [ articles, setArticles ] = useState([])

  useEffect(()=>{
    axios.get('/api/v1/articles.json')
    .then( resp => {
      setArticles(resp.data.data)
    })
    .catch( resp => console.log(resp) )
  }, [ articles.length ])

  const articles_list = articles.map( item => {
    return (
      <Article 
        key={item.id} 
        attributes={item.attributes}
      />
    )
  })

  return (
    <Fragment>
      <Home>
        <Title>
          <h1>Local Articles <Link to="/add_article"><PlusCircleFill color="#add8e6"/></Link></h1>
        </Title>
        <Grid>
          {articles_list}
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


export default Articles