import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Article = (props) => {
  
  return (
    <div className="entry">
      <div className="article-title">{props.attributes.title}</div>
      <div className="article-content">{props.attributes.content}</div>
      <div className="article-image">
        <img src={props.attributes.image_url} />
      </div>
      <div className="Article-link">
        <Link to  ={`/articles/${props.attributes.id}`}> View Post </Link>
      </div>

    </div>
    
  )
}

export default Article