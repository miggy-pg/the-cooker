const initialState = {
  amount: 0,
  cashOnHand: 0,
  reset: 0,
  resetPurpose: "",
  isLoading: false,
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/payCash":
      return {
        ...state,
        amount: state.amount + action.payload,
        isLoading: false,
      };
    case "customer/payCredit":
      return { ...state, amount: state.amount - action.payload };
    case "customer/payDebit":
      if (state.loan > 0) return state;
      return;
    case "customer/payCoupon":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "customer/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export function payCash(amount, currency) {
  if (currency === "USD") return { type: "customer/payCash", payload: amount };

  return async (dispatch, getState) => {
    dispatch({ type: "customer/convertingCurrency" });

    // API call to convert currency
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    console.log("data: ", data);

    dispatch({ type: "customer/payCash", payload: converted });
  };
}

export function payCredit(amount) {
  return { type: "customer/withdraw", payload: amount };
}

export function payDebit(amount, purpose) {
  return { type: "customer/requestLoan", payload: { amount, purpose } };
}
