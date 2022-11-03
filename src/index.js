import React from 'react';
import ReactDOM from 'react-dom/client';
import { PlantsContext } from './Context/Plants';
import './index.css'
import { Root } from './root';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlantsContext>
      <Root />
    </PlantsContext>
  </React.StrictMode>
);