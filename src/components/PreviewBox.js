import React from 'react';

function PreviewBox(props) {
  return (
  <ul className="asset-preview">
    {props.children}
  </ul>
  )
}

export default PreviewBox;