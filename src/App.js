import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from './Context';
// css
import './App.css';

// Components
import Header from './Components/Header/Header';
import Index from './Components/Index/Index';


// apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4567/graphql'
});

class App extends Component {
  render() {
    return (
      <Provider>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <header>
                <Header />
              </header>
              <Route exact path="/" component={Index} />
            </div>
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;