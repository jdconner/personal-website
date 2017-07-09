import React from 'react';
import { Link } from 'react-router';
import './under-construction-page.scss';

const UnderConstructionPage = () => {
  return (
    <div id="not-found-page">
      <h4>
        Page Under Construction
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default UnderConstructionPage;
