import React from 'react';

const Loader: React.FC<any> = props => (
  <div className="text-primary m-4">
    <h4>{props.text || 'Loading...'}</h4>
  </div>
);

export default Loader;
