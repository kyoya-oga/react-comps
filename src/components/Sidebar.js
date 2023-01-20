import React from 'react';
import Link from './Link';

function Sidebar() {
  const links = [
    { path: '/', label: 'Dropdown' },
    { path: '/accordion', label: 'Accordion' },
    { path: '/button', label: 'Button' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start space-y-3">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
