import React, { createContext, useMemo } from "react";

const initialState = {
  currentUser: null,
};

const RecordsContext = createContext(initialState);

function uiReducer(state, action) {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        currentUser: action.data,
      };
    }
    // no default
  }
}

const RecordsProvider = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const setCurrentUser = (data) => dispatch({ type: "SET_USER", data });

  const value = useMemo(
    () => ({
      ...state,
      setCurrentUser,
    }),
    [state]
  );

  return <RecordsContext.Provider value={value} {...props} />;
};

export const useRecords = () => {
  const context = React.useContext(RecordsContext);
  if (context === undefined) {
    throw new Error(`useRecords must be used within a RecordsProvider`);
  }
  return context;
};

export const RecordsProviderContextProvider = ({ children }) => {
  return <RecordsProvider>{children}</RecordsProvider>;
};
