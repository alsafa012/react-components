
// import React from 'react';
// import {useDraggable} from '@dnd-kit/core';
// import {CSS} from '@dnd-kit/utilities';

// export function Draggable(props) {
//   const {attributes, listeners, setNodeRef, transform} = useDraggable({
//     id: props.id,
//   });
//   const style = {
//     // Outputs `translate3d(x, y, 0)`
//     transform: CSS.Translate.toString(transform),
//   };

//   return (
//     <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
//       {props.children}
//     </button>
//   );
// }
// Draggable.jsx

import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

function Draggable({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${id}`,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default Draggable;


