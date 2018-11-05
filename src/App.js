import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { sendCardToPreview, removeCardFromPreview } from './store/actions';
import Cards from './components/Cards';
import AssetSummary from './components/AssetSummary';
import PreviewBox from './components/PreviewBox';

export class App extends Component {

  handleAssetClick = (id) => {
    this.props.dispatch(sendCardToPreview(id))
  }

  handleRemoveAsset = (id) => {
    this.props.dispatch(removeCardFromPreview(id))
  }

  render() {
    return (
      <div className="wrapper">
        <div className="asset-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 asset-summary-left">
                <span>{this.props.previewData.length} assets</span>
              </div>
              <div className="col-6 asset-summary-right">
                <AssetSummary 
                  data={this.props.previewData}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container asset-builder">
          <div className="row">
            <div className="col-4">
              <ul className="asset-picker">
                <Cards 
                  data={this.props.data}
                  handleAssetClick={this.handleAssetClick}
                />
              </ul>
            </div>
            <div className="col-8">
              <h2>Learning Assets Preview</h2>
              <PreviewBox>
                <Cards 
                  isPreview
                  data={this.props.previewData}
                  handleAssetClick={ () => {return null} }
                  handleRemoveAsset={this.handleRemoveAsset}
                />
              </PreviewBox>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    previewData: state.previewData,
  }
}

export default connect(mapStateToProps)(App);