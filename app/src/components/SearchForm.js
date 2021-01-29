import React, {useState} from 'react';
import { connect } from 'react-redux';
import { searchGifs } from './../actions';

const SearchForm = (props) => {
    const [ values, setValues ] = useState({
      term:"",
      submission:"",
      category:""
    });

    const {searchGifs} = props;

    const handleSubmit = (e)=> {
      e.preventDefault();
      searchGifs(values.term + ' ' + values.category);    
    }

    const handleChange = (e)=> {
      console.log(e.target.name);
      console.log(e.target.value);

      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }

    console.log(values);

    return(<form onSubmit={handleSubmit}>
        <label>
          search term:<input name="term" value={values.term} onChange={handleChange}/> 
        </label>

        <label>
          date of submission:<input name="submission" value={values.submission} onChange={handleChange}/> 
        </label>

        <label>
          category:<input name="category" value={values.category} onChange={handleChange}/> 
        </label>

        <button>Search for gifs</button>
      </form>);
}

export default connect(null, { searchGifs })(SearchForm);