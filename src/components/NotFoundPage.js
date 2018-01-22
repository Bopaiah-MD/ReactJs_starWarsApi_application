import React from 'react';
import { Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
      <div className="App">
        <h1 className="no-page-here">No page Found here ! 404 - error </h1>
        <Link to="/" >Go To Login Page</Link> 
      </div>
    )
  }

  export default NotFoundPage;