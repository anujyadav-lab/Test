import React from 'react';

const Dropdown2 = ({ quantity, setQuantity }) => {
  return (
    <select 
      value={quantity} 
      onChange={(e) => setQuantity(e.target.value)} 
      className="border p-2"
      style={{ width: '200px' }}
    >
      {[...Array(99).keys()].map(i => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  );
};

export default Dropdown2;