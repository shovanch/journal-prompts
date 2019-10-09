import React from 'react';

const MenuButton = ({ promptId, title, history }) => (
  <button
    className="select-button"
    onClick={() => history.push(`/${promptId}`)}
  >
    {title}
  </button>
);

export default MenuButton;
