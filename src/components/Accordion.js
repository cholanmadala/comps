import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const AccordionItem = ({ heading, content, isOpen, onClick }) => {
	return (
		<div onClick={onClick}>
			<div className="w-500 p-4 bg-gray-300 border-b flex items-center cursor-pointer justify-between" >
				<h1 className="font-bold text-4xl">
					{heading}
				</h1>
				<span className="text-4xl">{isOpen ? <GoChevronDown /> : <GoChevronRight /> }</span>
			</div>
			{
				isOpen &&
				<div className={`${isOpen ? '' : 'hidden'} border-b p-5`}>
					<p>
						{content}
					</p>
				</div>}
		</div>
	);
}

const Accordion = ({ data }) => {
	const [openItem, setOpenItem] = useState(0);

	const handleClick = (index) => {
		setOpenItem(currentOpenItem => {
			console.log('currentOpenItem ::: ', currentOpenItem);
			console.log('index ::: ', index);
			if (currentOpenItem === index) {
				return -1;
			} else {
				return index;
			}
		});
	};

	const renderAccordionItems = data.map(
		({ heading, content }, index) =>
			<AccordionItem
				key={Math.random()}
				heading={heading}
				content={content}
				isOpen={openItem === index}
				onClick={() => handleClick(index)}
			/>
	);

	return (
		<div className="border-x border-t round">{renderAccordionItems}</div>
	);
};

export default Accordion;