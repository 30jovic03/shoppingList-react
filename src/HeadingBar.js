import React from 'react';

function HeadingBar() {
  return (
    <div className="row">
          <div className="col-6">
            <h2 className="mx-auto">Items to buy:</h2>
          </div>
          <div className="col-2"></div>
          <div className="col-2">
            <h2 className="mx-auto">Quantity:</h2>
          </div>
          <div className="col-1">
            <h2 className="mx-auto">Price:</h2>
          </div>
        </div>
  )
}

export default HeadingBar