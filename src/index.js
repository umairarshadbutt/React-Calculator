import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Greeting() {
  return (
    <div>
      <Book />
    </div>
  );
}

const Book = () => (
  <article className="book">
    <h1>Hello World</h1>
  </article>
);
ReactDom.render(<Greeting />, document.getElementById('root'));
