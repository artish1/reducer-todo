export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: new Date() }
      ];
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);

    case "TOGGLE_COMPLETED": //dispatch( { type: 'TOGGLE_COMPLETED', payload: id} )
      return state.map((todo, index) => {
        if (todo.id === action.payload) todo.completed = !todo.completed;
        return todo;
      });

    default:
      return state;
  }
}
