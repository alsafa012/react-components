
// import {useState} from 'react';
// import {DndContext} from '@dnd-kit/core';
// import {Draggable} from './Draggable';
// import {Droppable} from './Droppable';

// export default function Example() {
//   const [parent, setParent] = useState(null);
//   const draggable = (
//     <Draggable id="draggable">
//       Go ahead, drag me.
//     </Draggable>
//   );

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {!parent ? draggable : null}
//       <Droppable id="droppable">
//         {parent === "droppable" ? draggable : 'Drop here'}
//       </Droppable>
//     </DndContext>
//   );

//   function handleDragEnd({over}) {
//     setParent(over ? over.id : null);
//   }
// }
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';
const initialItems = [
  {"id": 1, "name": "John"},
  {"id": 2, "name": "Alice"},
  {"id": 3, "name": "Bob"},
  {"id": 4, "name": "Emily"},
  {"id": 5, "name": "David"},
  {"id": 6, "name": "Sara"},
  {"id": 7, "name": "Michael"},
  {"id": 8, "name": "Grace"},
  {"id": 9, "name": "Daniel"},
  {"id": 10, "name": "Olivia"}
];

function Example() {
  const [parent, setParent] = useState(null);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {initialItems.map(item => (
        <Draggable key={item.id} id={`draggable-${item.id}`}>
          {item.name}
        </Draggable>
      ))}
      <Droppable id="droppable">
        {parent === "droppable" ? 'Drop here' : null}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default Example;
