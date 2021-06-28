import React, { useState } from 'react';
import InputCard from './InputCard';
import "./style.css"

export default function AddCardOrColumn({ listId, type }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{width: '300px', marginTop: '8px'}}>
      <div className={`collapse-transition ${open? 'collapse-open': 'collapse-close'}`}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </div>
      <div className={`collapse-transition ${open?  'collapse-open': 'collapse-close'}`}
      >
      </div>
        <div
          className={`container-add ${type === 'card' ? 'add-card' : 'add-column'}`}
          onClick={() => setOpen(!open)}
        >
          <div >
            {type === 'card' ? '+ Adicionar outro cartão' : '+ Adicione outra Coluna'}
          </div>
        </div>
    </div>
  );
}
