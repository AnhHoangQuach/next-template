import { default as assert } from 'assert';
import { saveContract } from 'reducers/contractSlice';
import { store } from 'reducers/store';
import { Api } from 'services';

export const initContract = async () => {
  const contracts = await Api.getAllContract();
  const newContract = contracts.reduce(
    (map, contract) => ({
      ...map,
      [contract.name]: contract.address,
    }),
    {},
  );
  try {
    const { contract: savedContract } = store.getState();
    store.dispatch(saveContract(newContract));
    assert.deepStrictEqual(savedContract, newContract);
  } catch {
    // TODO: Contract updated => should `unmount` root component
  }
  return newContract;
};
