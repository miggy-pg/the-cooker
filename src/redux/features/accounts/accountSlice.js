const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return;
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export function createAccount(amount) {
  return { type: "account/deposit", payload: amount };
}

export function blockAccount(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function resetAccount(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
