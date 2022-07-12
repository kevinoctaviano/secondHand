import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <>
      <div className="vertical">
        <h1 className="display-4 text-center font-weight-bold">
          401 Forbidden
        </h1>
        <p className="text-center">You can't pass, Token needed.</p>
        <Link to={'/'} className="d-flex justify-content-center">
          Return to Home page
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
