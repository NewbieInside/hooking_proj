import React, { Fragment } from 'react';


import Accordion from './Components/Accordion/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend JS library'
  },
  {
    title: 'How many types in JS',
    content: 'JS has 8 different types whicn you can find in MDN'
  },
  {
    title: 'What is CSS',
    content: 'CSS refers to Cascading Style Sheets and plays a pivotal role in styling your website'
  }
]

const App = () => {
  return (
    <Fragment>
      <Accordion items={items}/>
    </Fragment>
  )
}

export default App;

