import React, {useState} from 'react';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

//items for the accordion
const items = [
  { 
    title : 'What is a Bicho?',
    content : 'A Bicho is an awesome being'
  }, 
  { 
    title : 'Is a Bicho human?',
    content : 'A Bicho is not considered human'
  }, 
  { 
    title : 'How do you deal with a Bicho?',
    content : 'You need to handle a Bicho with extreme care'
  }
];

//options for the dropdown

const optionsColor = [
  {
    label : "The Color Green",
    value : "green"
  },
  {
    label : "The Color Red",
    value : "red"
  },
  {
    label : "The Color Blue",
    value : "blue"
  }
];

function App() {
  const [selectedColor, setSelected] = useState(optionsColor[0]);
  return (
    <div>
      <Header/>
    <Route path="/">
      {/*This will show up as a prop children in the Route component*/}
      <Accordion items={items}/>
    </Route>
    <Route path="/list">
     <SearchBar/>
    </Route>
    <Route path="/dropdown">
      <Dropdown label="Select a color" options={optionsColor} selected={selectedColor} onSelectedChange={setSelected} />
    </Route>
    <Route path="/translate">
      <Translate/>
    </Route>
  </div>
  );
}

export default App;
