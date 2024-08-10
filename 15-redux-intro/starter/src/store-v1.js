import { combineReducers, createStore } from "redux";
import React from "react";
const initialsStateAccount = {
  balance: 0,
  loan: 0,
  loadPurpose: "",
};

const innitialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialsStateAccount, action) {
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
function customerReducer(state = innitialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/deposit", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoad", payload: { purpose, amount } };
}

function payloan() {
  return { type: "account/payloan" };
}

//Customer
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}

store.dispatch(createCustomer("fluke", 1115));
console.log(store.getState());
