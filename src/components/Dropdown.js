import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Dropdown = ({ description, options, initialOption }) => {

	const [openDD, setOpenDD] = useState(false);
	const [selectionValue, setSelectionValue] = useState(''); // value of the option
	const [selection, setSelection] = useState(initialOption || 'Select...'); // option

	const handleSelection = (value, text) => {
		if (value) {
			setSelection(text);
			setSelectionValue(value);
			setOpenDD(false);
			// use selectionValue here
		}
	}

	const generateOptions = () => options.map((option, index) =>
		<option
			className="cursor-pointer p-4"
			onClick={(ev) => handleSelection(ev.target.value, ev.target.innerText)}
			key={`${option}${index}`}
			value={option.value}
		>
			{option.label}
		</option>);

	const handleClick = () => setOpenDD(!openDD);

	return (
		<div className="border-solid border-2">
			<h1 className="text-xl border-solid border-2 p-6 pl-0">{description}</h1>
			<div 
				className="cursor-pointer p-4 flex justify-between bg-red-400"
				onClick={() => handleClick()}
			>
				{openDD ? initialOption : selection}
				<span className="text-4xl">{openDD ? <GoChevronDown /> : <GoChevronRight /> }</span>
			</div>
			<div className="border-dotted border-sky-500 border-2">
				{(openDD &&
					<div
						className="border-solid border-2 border-red-500">
						{generateOptions()}
					</div>
				)}
			</div>
		</div>
	);
};

export default Dropdown;