import React from 'react';

function Cards(props) {
  if(props.data.length > 0) {
    return props.data.map((item, index) => {
      return (
      <li 
        className={"asset type-" + item.type.toLowerCase().replace(/\s/g, "")} 
        key={item.id}
        onClick={!props.isPreview ? () => props.handleAssetClick(item.id, index) : () => null}
      >
        <h2>{item.name}</h2>
        <p>
          <span className="info">{(item.duration * 60).toFixed(1)} seconds</span>
          <span className="info">{item.type}</span>
        </p>
        { props.isPreview ? (
            <button 
              className="remove-asset"
              onClick={() => props.handleRemoveAsset(item.id)}
            >x</button>
          ) : null
        }
      </li> 
      )
    })
  } else {
    return null
  }
}

export default Cards;