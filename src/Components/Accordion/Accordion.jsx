import React, { useState } from 'react';

import styles from './Accordion.module.css'

const Accordion = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(null);


  const onTitleClick = (idx) => {
    setActiveIdx(idx)
  }

  const renderedItems = items.map((item, idx) => {
    return (
      <div key={idx} className={styles.accContainer} onClick={() => onTitleClick(idx)}>
        {item.title}
        <div className={styles.accInfo}>{item.content}</div>
      </div>
    );
  });

  return <div>
    {renderedItems}
    <h1>{activeIdx}</h1>
    </div>
};

export default Accordion;
