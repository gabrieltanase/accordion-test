import React from "react";
import PropTypes from 'prop-types';

function ListComponent({ items, title }) {
  return (
    <>
      <h5 className='mt-3'>{title}</h5>
      <ul className="list-group list-group-flush list-group-numbered">
        {
          items.map((item, index) => <li className="list-group-item" key={index}>{item.title}</li>)
        }
      </ul>
    </>
  );
}

ListComponent.propTypes = {
  title: PropTypes.string,
  listItems: PropTypes.shape({
    title: PropTypes.string
  })
}

export default ListComponent;