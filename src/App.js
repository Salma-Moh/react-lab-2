import React from 'react';
import Counter from './components/counter.js';
import FAQ from './components/FAQ.js';
import CounterWithEffect from './components/CounterWithEffect.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Counter />
        <CounterWithEffect />
        <FAQ />
      </div>
    </Router>
  );
}

export default App;
