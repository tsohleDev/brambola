import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_STOCKS = 'brambola/GET_STOCKS';
const LIST_STOCKS = 'brambola/home/LIST_STOCKS';

const get = async (pairs) => {
  const [one, two, three] = pairs;
  const response = await fetch(`https://api.stockdata.org/v1/data/currency/latest?symbols=${one},${two},${three}&api_token=osjwHSLRwfwIUzjrJXQv996Pb9pG5W8lhTO5ox0v`);
  const stocks = await response.json();
  return stocks;
};

export const list = (stocks) => ({ type: LIST_STOCKS, stocks });

export const fetchStocks = createAsyncThunk(
  GET_STOCKS,
  async (args, thunkAPI) => {
    try {
      if (args.method === 'GET') {
        const setOne = await get(['GBPUSD', 'USDZAR', 'USDCAD']);
        const setTwo = await get(['EURUSD', 'USDJPY', 'USDCHF']);
        const sets = [...setOne.data, ...setTwo.data];
        thunkAPI.dispatch(list(sets));

        return sets;
      }

      return thunkAPI.rejectWithValue('Invalid method', args.method);
    } catch (error) {
      return thunkAPI.rejectWithValue(error, args.method);
    }
  },
);

export default function reducer(state = { stocksdata: [], status: false }, action) {
  switch (action.type) {
    case LIST_STOCKS:
      return { stocksdata: action.stocks, status: true };
    default:
      return state;
  }
}
