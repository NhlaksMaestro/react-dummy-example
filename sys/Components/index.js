import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GuestTracker from '../components/App'
import * as GuestActions from '../actions/actions'

function mapStateToProps(state) {
  return {
    //guest: state.selectedGuest,
    //guests: state.guests
    conferenceGuest: state.conferenceGuest
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GuestActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestTracker)
