import React from 'react';
import './Content.scss';

const Content = ({ title, children }) => (
  <main className="content">
    <h1 className="content__heading">{title}</h1>
    {children}
  </main>
);

export default Content;
