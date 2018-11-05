import React, { Fragment } from 'react';

function AssetSummary(props) {
  let articleArray  = [];
  let videoArray    = [];
  let documentArray = [];
  let courseArray   = [];
  if(props.data.length > 0) {
    articleArray = props.data.filter(e => e.type === 'Article');
    videoArray = props.data.filter(e => e.type === 'Video');
    documentArray = props.data.filter(e => e.type === 'Document');
    courseArray = props.data.filter(e => e.type === 'Online Course');
  }
  return (
    <Fragment>
      {articleArray.length > 0 ? (
        <Fragment>{
          articleArray.length}x<span className="info">Article{articleArray.length>1 ? 's' : null}</span>
        </Fragment>
        ) : null
      }
      {videoArray.length > 0 ? (
        <Fragment>{
          videoArray.length}x<span className="info">Video{videoArray.length>1 ? 's' : null}</span>
        </Fragment>
        ) : null
      }
      {documentArray.length > 0 ? (
        <Fragment>{
          documentArray.length}x<span className="info">Document{documentArray.length>1 ? 's' : null}</span>
        </Fragment>
        ) : null
      }
      {courseArray.length > 0 ? (
        <Fragment>{
          courseArray.length}x<span className="info">Course{courseArray.length>1 ? 's' : null}</span>
        </Fragment>
        ) : null
      }
    </Fragment>
  )
}

export default AssetSummary;