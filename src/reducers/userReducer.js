const initialState = {
  name: 'Emilio Emidio',
  email: 'emilioemidio@hotmail.com',
  idade: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
      break;
    case 'SET_EMAIL':
      return {...state, email: action.payload.email};
      break;
  }

  return state;
};
