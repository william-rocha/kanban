import React from 'react';

import Title from './Title';
import Card from '../Card';
import AddCardOrColumn from '../Input/AddCardOrColumn';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import "./style.css"

export default function Column({ list, index }) {
  const backColor = [
    '#5CC4FF', '#945AD1', '#59D090','#5CC4FF', '#945AD1', '#59D090'
  ]
  return (
    <Draggable draggableId={list.id} index={index} >
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef} className="container-column">
          <div className="content-column rounded-border" style={{background: backColor[index]}} {...provided.dragHandleProps}>
            <Title title={list.title} listId={list.id} />
            {/* cards */}
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="container-cards"
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <AddCardOrColumn listId={list.id} type="card" />
          </div>
        </div>
      )}
    </Draggable>
  );
}
