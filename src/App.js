import './App.css';
import DisplayAll from './components/DisplayAll'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1 className="mainTitle">GRAPHQL</h1>
      <h3 className="mainSub">Rick & Morty API</h3>
      <DisplayAll />
    </div>
    </ApolloProvider>
  );
}

export default App;
