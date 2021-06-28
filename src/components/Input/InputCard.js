import React, { useState, useContext } from 'react';
import storeApi from '../../utils/storeApi';


export default function InputCard({ setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    }
  };

  return (
    <section>
      <div>
        <div className="container-input rounded-border shadow">
          <div className="container-textarea">
            <textarea
            onChange={handleOnChange}
            onBlur={() => setOpen(false)}
            value={title}
            placeholder={
              type === 'card'
                ? 'Adicione o titulo do Cartão..'
                : 'Adicione o nome da coluna...'
            }
            ></textarea>
          </div>
        </div>
      </div>
      <div className="container-btn-add">
        <button className="btn-add" onClick={handleBtnConfirm}>
          {type === 'card' ? 'Adicione Cartão' : 'Adicione Coluna'}
        </button>
        <div className="close-input" onClick={() => setOpen(false)}>
          x
        </div>
      </div>
    </section>
  );
}
