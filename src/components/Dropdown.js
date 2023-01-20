import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedOption) => {
    setIsOpen(false);
    onChange(selectedOption);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <li
        onClick={() => handleOptionClick(option)}
        key={option.value}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </li>
    );
  });

  const commonClasses = 'border rounded p-3 shadow bg-white w-full';
  return (
    <div ref={divEl} className="w-48 relative">
      <button
        className={classNames(
          commonClasses,
          'flex justify-between items-center'
        )}
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </button>
      {isOpen && (
        <ul className={classNames(commonClasses, 'absolute top-full')}>
          {renderedOptions}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
