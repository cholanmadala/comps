import './index.css';
import Button from "./Button";

function App() {
  return (
    <div>
      <div><Button primary outlined>Primary</Button></div>
      <div><Button secondary rounded>Secondary</Button></div>
      <div><Button success rounded outlined>Success!!</Button></div>
      <div><Button warning>Warning</Button></div>
      <div><Button danger rounded outlined>Danger!!</Button></div>
    </div>
  );
}

export default App;
