import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}

// [{ id: 147569, ... }, {...}]
// { 147569: { id: 147569, ... }, {...}}
