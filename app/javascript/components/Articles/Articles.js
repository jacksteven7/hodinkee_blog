import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Article from './Article'

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
      <div className="home">
        <div className="header">
          <h1>Local Articles</h1>
        </div>
        <div className="article_list">
          {articles_list}
        </div>
      </div>
    </Fragment>
    
  )
}

export default Articles