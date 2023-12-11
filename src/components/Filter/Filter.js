import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
};

export default Filter;
