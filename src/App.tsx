import './styles/App.css';
import { FC } from 'react';
import FQA from './views/fqa/FQA';

const App: FC = () => (
  <div className="app">
    <h1 style={{ width: 700 }}>Most Frequently Questions Answers</h1>
    <FQA />
  </div>
);

export default App;
