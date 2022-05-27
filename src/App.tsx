import React from 'react';
import { Link, useLocation, useRoutes } from 'react-router-dom';
import TestDemo from './demos/TestDemo';
import './App.css';

const DEMOS = [
  {
    path: 'test-component',
    element: <TestDemo />,
  },
];

const Home = () => (
  <div className='demo-links'>
    {DEMOS.map(({ path }) => (
      <Link to={path} key={path}>
        {path}
      </Link>
    ))}
  </div>
);

const  App = () => {
  const routes = useRoutes([...DEMOS, { path: '/', element: <Home /> }]);
  const location = useLocation();

  return (
    <div className='App'>
      {location.pathname !== '/' && (
        <div className='back-link-container'>
          <Link to='/'>Home</Link>
        </div>
      )}
      <div className='routes-container'>{routes}</div>
    </div>
  );
}

export default App;
