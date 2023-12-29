import Proptypes from 'prop-types';
import className from 'classnames';

function Button({rounded, children, outlined, primary, secondary, success, warning, danger}) {    
        
    const classes = className(
        'w-full', 'md:w-auto',
        'px-14', 'py-8',
        'mx-2', 'my-2', 
        'text-zinc-50', 'text-2xl',
        'border','border-black',
        {
            'bg-blue-700': primary,
            'bg-blue-300': secondary,
            'bg-green-700': success,
            'bg-yellow-400': warning,
            'bg-red-600': danger,
            'outline': outlined,
            'rounded-lg': rounded
        },
        );

    return (
        <button className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkVariationValue : ({primary, secondary, success, warning, danger}) => {
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