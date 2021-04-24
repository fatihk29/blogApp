import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          title: `Blog Post ${state.length + 1}`,
        },
      ];
    case 'remove':
      return [...state, {title: `Blog Post ${state.length + 1}`}];
    default:
      return;
  }
};
const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {
    addBlogPost,
  },
  [],
);
