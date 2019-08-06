import React from 'react';
import './Content.scss';

export const Content = props => (
  <main className="content">
    <h1 className="content__heading">Get a prompt</h1>
    {props.children}
  </main>
);

export default Content;
