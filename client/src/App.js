import "./App.scss";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Home from './pages/Home';
// import Seasons from './pages/Seasons'
import Round from './pages/Round'
import SingleRound from "./pages/SingleRound";
import Competitors from "./pages/Competitors";
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Round: {
        fields: {
          qualifiers: {
            merge: false,
          },
        },
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Nav />
          <div className="pages">
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route exact path="/seasons">
              <Seasons />
            </Route> */}
            <Route exact path="/round">
              <Round />
            </Route>
            <Route exact path="/round/:roundId">
              <SingleRound />
            </Route>
            <Route exact path="/competitors">
              <Competitors />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
