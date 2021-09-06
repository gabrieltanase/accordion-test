import React from "react"

function AccordionItem(props) {
  const {
    title,
    children,
    expanded,
    onToggle,
    id
  } = props;

  const headingId = `heading-${id}`;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button className={`accordion-button ${!expanded ? 'collapsed' : ''}`}
          type="button"
          aria-expanded={expanded}
          aria-controls="collapseOne"
          onClick={() => onToggle(id, expanded)}>
          {
            /**
             * onKeyDown={e => {
                switch (e.key) {
                  case " ":
                  case "Enter":
                    onToggle();
                    break;
                  default:
                }
              }}
             */
            /* we can add more improvements for accesibility for keydown actions 
            eg : 'Down Arrow', 'Up Arrow', 'Home' and 'End' */
          }
          {title}
        </button>
      </h2>
      <div id="collapseOne"
        className={`accordion-collapse collapse ${expanded ? ' show' : ''}`}
        aria-labelledby={headingId}>

        <div className="accordion-body">
          {children}
        </div>

      </div>
    </div>
  )
}

export default AccordionItem;