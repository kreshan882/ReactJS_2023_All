import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <main className="App">
      <Counter />
      <p>*********************************</p>
      <AddTodo/>
      <Todos/>
    </main>
  );
}

export default App;
