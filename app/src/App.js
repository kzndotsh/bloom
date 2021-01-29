import { connect } from 'react-redux';

import SearchForm from './components/SearchForm';
import GifList from './components/GifList';

import { searchGifs } from './actions';

import './App.css';
import { useEffect } from 'react';

const App = (props) => {
  const { gifs, isLoading, err, searchGifs } = props;

  console.log(gifs);

  useEffect(()=> {
    searchGifs('happy thursday');
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Gif Search</h1>
      </header>
      <SearchForm />
      {isLoading ? <h3>Loading</h3> : <GifList gifs={gifs}/>}
      {err && <h3>{err}</h3>}
    </div>
  );
}

const mappingFunc = (state) => {
  return {
    gifs: state.gifs,
    isLoading: state.isLoading,
    err: state.err
  }
}

export default connect(mappingFunc, { searchGifs })(App);
