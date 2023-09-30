import { createStore } from "redux";
import { LeftBar } from "../containers/LeftBar";
import { RightBar } from "../containers/RightBar";

export default function Homepage() {
  return (
    <div className="tm-container">
      <div className="tm-row">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
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

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "account/requestLoan" };
}

const store = createStore(reducer);

store.dispatch(deposit(500));
console.log(store.getState());
