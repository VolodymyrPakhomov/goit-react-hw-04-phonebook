import React from 'react';

export const Filter = ({filter, onFilterChanged}) => {

  return  (
    <>
    <label style={{display: "flex",alignItems: "center",flexDirection: "column",}}
      className="" >
            Find contacts by name
            <input
              className=""
              type="text"
              name="name"
              value={filter}
              onChange={(e) => onFilterChanged(e.target.value)}
            />
          </label>
    </>
  );
}
