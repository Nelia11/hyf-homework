import todos from "../todos.json"
import '../App.css';
import Heading from './Heading';
import Subheading from "./Subheading";
import TableTitle from "./TableTitle";
import TableList from "./TableLIst";

function App() {
  return (
    <div className="App">
      <Heading />
      <Subheading todos={todos} />
      <TableTitle />
      <TableList  todos={todos}/>
    </div>
  );
};

export default App;