import React from 'react';
import { useRouter } from 'next/router';

const Jumbotron = () => {
  const router = useRouter();
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4">Cats World</h1>
        <p className="lead">Find your new best friend today.</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push('/cats')}
        >
          Start Looking!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
