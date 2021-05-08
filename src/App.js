import React, { Component } from 'react';
import { AuthorsList } from './Components/AuthorsList';


class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">One Word</h1>
            <p className="lead">At this moment in time, what is your One Word?</p>
          </div>
          <div>
            <AuthorsList />
          </div>
        </div> 
      </div> 
    )
  }
}

export default App;
