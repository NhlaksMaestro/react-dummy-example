import { EDIT_GUEST, ADD_GUEST, SYNC_GUESTS } from '../actions/actions'

export default function conferenceGuest(state = {
  guests: [],
  guest: {}
  },
  action) {
    console.log('action.type == ' + action.type);
  switch (action.type) {
   case EDIT_GUEST:
      return {state, guests: action.guests, guest:action.guest};
    /* case ADD_GUEST:
      return {...state, showGuest: action.showGuest, feed: mergeFeed(state.guests, state.guest, state.showGuests, state.showGuest)};*/
      case SYNC_GUESTS:
        return {state, guests: action.guests, guest:action.guest};
      default:
        return state
  }
}
