import { default as assert } from 'assert';
import { store } from 'reducers/store';
import { Api } from 'services';
import { saveAssets } from './assetSlice';

export const initAssets = async () => {
  try {
    const allTokens = await Api.getAllToken();
    const newToken = allTokens.reduce(
      (map, token) => ({
        ...map,
        [token.symbol]: token,
      }),
      {} as TokenMap,
    );
    const { asset: savedAsset } = store.getState();
    store.dispatch(saveAssets({ ...newToken, allTokens }));
    assert.deepStrictEqual(savedAsset.allTokens, allTokens);
  } catch {
    // TODO: Asset updated => should `unmount` root component
    console.warn('Asset updated => should `unmount` root component');
  }
};
