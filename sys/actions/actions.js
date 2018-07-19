import XMLUtil from '../utils/XMLUtil';
export const EDIT_GUEST = 'EDIT_GUEST';
export function editGuest(guest) {
  return {
    type: EDIT_GUEST,
    guest,
    guests
  }
}


export const SYNC_GUESTS = 'SYNC_GUESTS';
export function syncGuests(json) {
  return {
    type: SYNC_GUESTS,
    guests: json.map((guest) => {
      return guest
    }),
    guest: json[0]
  }
}

export function getGuests() {
  return dispatch => {
      $.ajax({
              url: 'http://localhost:8350/datasource/guestlist.xml',
              context: this,
              dataType: 'xml',
              type: 'GET'
          })
          .then(
              function(xml) {
                console.log('this will run if the $.get succeeds');
                return dispatch(syncGuests(XMLUtil.parseXML(xml)));
              }, function(error) {
                  console.log('this will run if the $.get fails');
                  XMLUtil.handleParseException(error)
              }
          );
  }
}

/*export const SYNC_GUESTS = 'GET_GUESTS';
export function getGuests(json) {
  return {
    type: GET_GUESTS,
    guests: json.map((guest) => {
      return {...guest}
    }),
    receivedAt: Date.now()
  }
}*/
