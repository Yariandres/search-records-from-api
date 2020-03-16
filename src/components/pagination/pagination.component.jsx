import React from 'react';

import "./pagination.css";

export const Pagination = props => {
  const pageLinks = [];

  for(let i = 1; i >= props.pages; i++) {
    let active = props.currentPage === i ? 'active' : '';
    pageLinks.push(<li className={`page ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="!#">{i}</a></li>)
  }

  return (
   
      <ul className="pagination">
        {props.currentPage > 1 ? <li className={`page`} onClick={() => props.nextPage(props.currentPage - 1)}>
                                    <a className="prev" href="!#">Prev Page</a>
                                  </li> : ''}
        { pageLinks }

        {props.currentPage >= props.pages ? '' : <li className={`page`} onClick={() => props.nextPage(props.currentPage + 1)}>
                                                    <a className="next" href="!#">Next Page</a>
                                                </li>}        
      </ul>
  );
};
