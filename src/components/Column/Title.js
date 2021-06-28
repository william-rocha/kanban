import React, { useState, useContext } from 'react';

import storeApi from '../../utils/storeApi';

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);

  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };
  return (
    <section className="container-column-title">
      {open ? (
        <div>
          <input onChange={handleOnChange}
            autoFocus
            value={newTitle}
            className="input-title-column"
            fullWidth
            onBlur={handleOnBlur}/>
        </div>
      ) : (
        <div 
        className="container-title-column"
        >
          <p
            onClick={() => setOpen(!open)}
          >
            {title}
          </p>
        </div>
      )}
    </section>
  );
}
