import React, { useReducer, createContext, useMemo } from "react";
export const DataContext = createContext(); 
export const actions = {
    isDrawerOpen:"isDrawerOpen"
  }
const initialState = {
  drawerBoolean:false
};
const reducer = (state, action) => {
    switch (action.type) {
        case actions.isDrawerOpen:
          return {
           ...state,drawerBoolean:!(state.drawerBoolean)
          };
        default:
          return state;
  }
};
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};