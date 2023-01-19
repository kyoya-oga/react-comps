import className from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

function Button({
  children,
  primary,
  secondary,
  danger,
  warning,
  success,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    'px-3 py-1.5 border flex items-center space-x-1',
    {
      'border-blue-600 bg-blue-500 text-white': primary,
      'border-gray-600 bg-gray-500 text-white': secondary,
      'border-red-600 bg-red-500 text-white': danger,
      'border-yellow-600 bg-yellow-500 text-white': warning,
      'border-green-600 bg-green-500 text-white': success,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-500': outline && secondary,
      'text-red-500': outline && danger,
      'text-yellow-500': outline && warning,
      'text-green-500': outline && success,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error('Only one variation can be used at a time');
    }
  },
};

export default Button;
