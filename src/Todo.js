import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalShowing, setModalShowing] = useState(false);
  function deleter() {
    setModalShowing(true);
    console.log("clicked!");
  }
  function closeModalHandler() {
    setModalShowing(false);
  }
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleter}>
          Delete
        </button>
      </div>
      {modalShowing && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {
        //^ If the first is true, the second is outputted
      }
      {modalShowing && <Backdrop onCancel={closeModalHandler} />}
      {
        //onCancel here can really be named whatever we want - it's just
        //pointing back to the real onClick in our Backdrop.js file.
      }
    </div>
  );
}

export default Todo;
