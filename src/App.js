import Todo from "./Todo";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function App() {
  return (
    <div>
      <h1>Todos</h1>
      <Todo text="1" />
      <Todo text="2" />
      <Todo text="3" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
