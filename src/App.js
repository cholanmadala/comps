import './index.css';
import Button from "./components/Button";
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';

function App() {

	const primaryButtonClickHandler = ev => {
		console.log(ev, 'primary button handler');
	}
	const secondaryButtonClickHandler = ev => {
		console.log(ev, 'secondary button handler');
	}

	return (
		<>
			<h2 className='text-5xl p-5 m-3'>Button</h2>
			<div className='grid gap-1 grid-cols-4 grid-rows-1 p-5'>

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
			<h2 className='text-5xl  p-5 m-3'>Accordion</h2>
			<div className='p-5'>
				<Accordion data={[
					{
						'heading': 'Vegetables', 'content': `Brinjal, Tomato, Ladies Finger, Cucumber etc.
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},
					{
						'heading': 'Heroes', 'content': `Chiranjeevi, Balakrishna, Nagarjuna, Venkatesh etc.

				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

				The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
				`},
					{
						'heading': 'Colors', 'content': `Red, Blue, White etc.

				"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
				`},
					{
						'heading': 'Places', 'content': `Vinukonda, Vizag, Bangalore etc.
				"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
				`}
				]} />
			</div>
			<h2 className='text-5xl  p-5 m-3'>Dropdown</h2>
			<div className='p-5 flex'>
				<Dropdown
					description='Select a Color'
					initialOption="Choose..."
					options={[
						{ label: '1', value: 1 },
						{ label: '2', value: 2 },
						{ label: '3', value: 3 },
						{ label: '4', value: 4 },
						{ label: '5', value: 5 },
						{ label: '6', value: 6 },
						{ label: '7', value: 7 }
					]}
				// options= {['Cow', 'Buffalo', 'Hen', 'Monkey', 'Parrot', 'Fish', 'Dog', 'Cat']}
				/>
			</div>
		</>
	);
}

export default App;
