export const SEND_ASSET_PREVIEW = 'SEND_ASSET_PREVIEW';
export const REMOVE_ASSET_PREVIEW = 'REMOVE_ASSET_PREVIEW';


export const sendCardToPreview = id => ({
  type: SEND_ASSET_PREVIEW,
  id,
});

export const removeCardFromPreview = id => ({
  type: REMOVE_ASSET_PREVIEW,
  id,
});
