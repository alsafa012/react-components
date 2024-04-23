
// import React from 'react';
// import {useDroppable} from '@dnd-kit/core';

// export function Droppable(props) {
//   const {isOver, setNodeRef} = useDroppable({
//     id: props.id,
//   });
//   const style = {
//     opacity: isOver ? 1 : 0.5,
//   };

//   return (
//     <div ref={setNodeRef} style={style}>
//       {props.children}
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

function Droppable() {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const [droppedItem, setDroppedItem] = useState(null);

  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {droppedItem ? `Dropped: ${droppedItem}` : 'Drop here'}
    </div>
  );
}

export default Droppable;

