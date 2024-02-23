import Proptypes from 'prop-types';
import className from 'classnames';

function Button({ rounded, children, outlined, primary, secondary, success, warning, danger, ...rest }) {
	
	const classes = className(
		rest.className,
		'w-full', 'md:w-auto',
		'px-10', 'py-4',
		'mx-2', 'my-2', 'text-2xl',
		'border-4',
		{
			'bg-blue-700 border-blue-700': primary,
			'bg-gray-600 border-gray-600': secondary,
			'bg-green-500 border-green-500 ': success,
			'bg-yellow-400 border-yellow-400 ': warning,
			'bg-red-500 border-red-500 ': danger,
			'rounded-full': rounded,
			'bg-white outline': outlined,
			'text-blue-500': outlined && primary,
			'text-gray-900': outlined && secondary,
			'text-green-500': outlined && success,
			'text-yellow-400': warning && outlined,
			'text-red-500': outlined && danger
		}
	);

	return (
		<button 
			{...rest}
			className={classes}	
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count = Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger)

		if (count > 1) {
			return new Error('Only one among primary, secondary, success, warning and danger need to be true.');
		}
	},
	rounded: Proptypes.bool,
	outlined: Proptypes.bool
};
export default Button;