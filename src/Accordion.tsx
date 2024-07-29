import { useState } from 'react';

const Accordion = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible_panel ${isOpen ? 'open' : ''}`}>
      <div className='panel_header' onClick={togglePanel}>
        <button className='panel_button'>{isOpen ? '-' : '+'}</button>
        {title}
      </div>
      <div className='panel_content'>{children}</div>
    </div>
  );
};

export default Accordion;
