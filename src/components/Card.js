import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


export default function Card({ card, index }) {
  const Tags = ({tag}) => {
    return <div className="tags">{tag}</div>
  }
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <section
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="card-container"
        >
          <div className="card shadow rounded-border">
            <p>{card.title}</p>
            <div style={{display: 'flex'}}>{card.tags && card.tags.map(item => <Tags tag={item}/>)}</div>
            </div>
        </section>
      )}
    </Draggable>
  );
}
