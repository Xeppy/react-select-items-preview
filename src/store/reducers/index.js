import data from '../../assets';
import { SEND_ASSET_PREVIEW, REMOVE_ASSET_PREVIEW  } from '../actions';

let initialState = {
  data,
  previewData: [],
}

export default function mainReducer(state = initialState, action) {
  switch(action.type) {
    case SEND_ASSET_PREVIEW:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.id),
        previewData: [...state.previewData, data.find(obj => obj.id === action.id)],
      };

    case REMOVE_ASSET_PREVIEW:
      return {
        ...state,
        data: [...state.data, state.previewData.find(obj => obj.id === action.id)],
        previewData: state.previewData.filter(e => e.id !== action.id),
      };

    default:
      return state;
  }
}