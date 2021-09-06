import React, { useState } from "react";
import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";
import ListComponent from "./components/List";

function App() {

  const [expanded, setExpanded] = useState(false);

  // Mocked list itmes to do in Bergen
  const list = [
    { title: 'Bryggen' },
    { title: 'Hanseatic Museum and Schøtstuene' },
    { title: 'St Mary’s Church' },
    { title: 'Fløyen and the Fløibanen Funicularm' },
    { title: 'Troldhaugen, Home of Edvard Grieg' },
  ]

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(!isExpanded ? panel : false);
  }

  // add improvement to generate Items dinamically
  return (
    <div className="container my-5">
      <div className="row">
        <Accordion id={'accordion'}>
          {/* add improvement to separate the Accordion Item into maybe two sections eg: AccordionItemHeader and AccordionItemDetails */}
          <AccordionItem
            title={'Item 1'}
            id={'item1'}
            expanded={expanded === 'item1'}
            onToggle={handleChange('item1')}
            defaultExpanded={true} // this can be a property to have one item opened by default
          >
            <strong>This is the first item's accordion body.</strong>
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default variables.
            It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
          <AccordionItem
            title={'Item 2'}
            id={'item2'}
            expanded={expanded === 'item2'}
            onToggle={handleChange('item2')}
          >
            <img src="https://www.fjordtours.com/media/old/1178/bryggen-girish-chouhan-visitbergen_com.jpg"
              className="img-fluid"
              alt="Bryggen"
            />
            <ListComponent
              title={'Things to do in Bergen :)'}
              items={list}
            />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
