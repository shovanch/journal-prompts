/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Select.scss';
import Content from 'components/Content/Content';
import MenuButton from 'components/MenuButton/index';

const Select = ({ history }) => (
  <Content title="Get a prompt">
    <div className="select-container">
      <MenuButton title="gratitude" promptId="gratitude" history={history} />
      <MenuButton title="dreams" promptId="dreams" history={history} />
      <MenuButton title="self-discovery" promptId="self-discovery" history={history} />
      <MenuButton title="fun" promptId="fun" history={history} />
      <MenuButton title="creativity" promptId="creativity" history={history} />
      <MenuButton title="life" promptId="life" history={history} />
    </div>
  </Content>
);

export default withRouter(Select);
