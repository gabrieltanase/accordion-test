import PropTypes from 'prop-types';

function Accordion({ children, id }) {
  return (
    <div className="accordion" id={id}>
      {children}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.array
}

export default Accordion;