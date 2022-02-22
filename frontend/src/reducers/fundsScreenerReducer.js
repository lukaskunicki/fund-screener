const fundsScreenerReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        ...state,
        initialFundsData: [...action.payload.initialFundsData],
        filteredFundsData: [...action.payload.initialFundsData],
        filtersData: [...action.payload.filtersData],
        requestStatus: {
          isLoading: false,
          isError: false,
        },
      };
    case "FILTER":
      return {
        ...state,
        filteredFundsData: [...action.payload.filteredFundsData],
        appliedFilters: { ...action.payload.appliedFilters },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filteredFundsData: [...state.initialFundsData],
        appliedFilters: { ...action.payload.appliedFilters },
      };
    case "SEARCH":
      return {
        ...state,
        filteredFundsData: [...action.payload.filteredFundsData],
        searchState: action.payload.searchState,
      };
    case "SET_ERROR":
      return {
        ...state,
        requestStatus: {
          isLoading: false,
          isError: true,
        },
      };
    default:
      return { ...state };
  }
};

export default fundsScreenerReducer;
