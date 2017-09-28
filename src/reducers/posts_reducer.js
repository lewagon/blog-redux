import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function postsReducer(state = [], action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_POSTS:
      return payload;
    case FETCH_POST:
            const posts = state.splice(0);
      const index = posts.findIndex((post) => post.id === payload.id);
      if (index === -1) {
        posts.push(payload);
      } else {
        posts.splice(index, 1, payload);
      }
      return posts;
    default:
      return state;
  }
}
