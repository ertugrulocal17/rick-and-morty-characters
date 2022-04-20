import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search />
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <Card />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
