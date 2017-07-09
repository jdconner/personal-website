import React from 'react';
import { Link } from 'react-router';
import './not-found-page.scss';

const NotFoundPage = () => {
  return (
    <div id="not-found-page">
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
