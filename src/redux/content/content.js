const INITIAL_STATE = {
    contentData : null,
    contentVar : null,
    isModalVisible : false,
    isFetching:false,
    errorMessage : undefined,
  };
  
  const contentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "FETCH_CONTENT_START":
        return {
          ...state,
          isFetching: true,
        };
      case "FETCH_CONTENT_SUCCESS":
        return {
          ...state,
          isFetching: false,
          contentData : action.payload
        };
      case "FETCH_CONTENT_ERREUR":
          return {
            ...state,
            isFetching: false,
            errorMessage : action.payload
          };
      case "SET_MODAL_VISIBLE":
            return {
                ...state,
                isModalVisible: action.payload,
              };
       case "SET_CONTENT_VAR":
                return {
                    ...state,
                    contentVar: action.payload,
                  };
                  case "SET_CONTENT_DATA":
                    return {
                        ...state,
                        contentData: action.payload,
                      };
      default:
        return state;
    }
  };
  
  export default contentReducer;