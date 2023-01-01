import { useState } from "react";
function Todo(props) {
  const [modalShowing, setModalShowing] = useState(false);
  function deleter() {
    
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleter}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
