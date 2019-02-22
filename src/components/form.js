import React from 'react';
import '../css/App.css';

const Form = (props) => {
    return (
      <div className='form'>
        <form onSubmit={props.makeSearch}>
            <input type='text' name='request'></input>
            
            <button>Submit</button>
        </form>
      </div>
    );
}

export default Form;
