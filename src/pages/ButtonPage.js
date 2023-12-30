import './index.css';
import Button from "./components/Button";

function App() {

  const primaryButtonClickHandler = ev => {
    console.log(ev, 'primary button handler');
  }
  const secondaryButtonClickHandler = ev => {
    console.log(ev, 'secondary button handler');
  }

  return (
    <div className='grid gap-1 grid-cols-4 grid-rows-8'>
      <section>
      <div><Button>Plain</Button></div>
      <div><Button primary onClick={primaryButtonClickHandler}>Primary</Button></div>
      <div><Button secondary onClick={secondaryButtonClickHandler}>Secondary</Button></div>
      <div><Button success>Success!!</Button></div>
      <div><Button warning>Warning</Button></div>
      <div><Button danger>Danger!!</Button></div>
      </section>
      <section>
      <div><Button rounded>Plain</Button></div>
      <div><Button primary rounded onClick={primaryButtonClickHandler}>Primary</Button></div>
      <div><Button secondary rounded onClick={secondaryButtonClickHandler}>Secondary</Button></div>
      <div><Button success rounded>Success!!</Button></div>
      <div><Button warning rounded>Warning</Button></div>
      <div><Button danger rounded>Danger!!</Button></div>
      </section>
      <section>
      <div><Button rounded outlined>Plain</Button></div>
      <div><Button primary rounded outlined>Primary</Button></div>
      <div><Button secondary rounded outlined>Secondary</Button></div>
      <div><Button success rounded outlined>Success!!</Button></div>
      <div><Button warning rounded outlined>Warning</Button></div>
      <div><Button danger rounded outlined>Danger!!</Button></div>
      </section>
      <section>
      <div><Button outlined>Plain</Button></div>
      <div><Button primary outlined>Primary</Button></div>
      <div><Button secondary outlined>Secondary</Button></div>
      <div><Button success outlined>Success!!</Button></div>
      <div><Button warning outlined>Warning</Button></div>
      <div><Button danger outlined>Danger!!</Button></div>
      </section>
    </div>
  );
}

export default App;
