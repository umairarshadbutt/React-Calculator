import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <div>
      <Book />
    </div>
  );
}



const Book = (props) => {
  return (
    <article className='book'>
      <h1>Hello World</h1>
    </article>
  );
}
ReactDom.render(<Greeting/>, document.getElementById('root'));