const initialsStateAccount = {
  balance: 0,
  loan: 0,
  loadPurpose: "",
};

export default function accountReducer(state = initialsStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        load: action.payload.amount,
        loadPurpose: action.payload.purpose,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loadPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "account/deposit", payload: amount };
}

export function requestLoan(amount, purpose) {
  return { type: "account/requestLoad", payload: { purpose, amount } };
}

export function payloan() {
  return { type: "account/payloan" };
}
