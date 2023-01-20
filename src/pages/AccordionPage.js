import React from 'react';
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'dgsgafui34',
      label: 'What is React?',
      content: 'React is a front end javascript framework',
    },
    {
      id: 'fgergtu234',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use React on any project',
    },
    {
      id: 'dgsgtrwjio238',
      label: 'How do I use React?',
      content: 'You use React by creating components',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
