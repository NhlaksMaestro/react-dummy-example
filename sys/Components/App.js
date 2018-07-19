import React from 'react';
import SideBar from './SideBar';
import MuiForm from './MuiForm';

class App extends React.Component {
  constructor(props) {
        super(props);
        this.getGuests();
        this.handleSelectedGuest = this.handleSelectedGuest.bind(this);
    }
    getGuests() {
      const { getGuests } = this.props;
      getGuests();
    }
    handleSelectedGuest(guestSelected){
        this.setState({guest: guestSelected});
        const {conferenceGuest} = this.props;
        conferenceGuest.guest = guestSelected;
    }
    render() {
      const {conferenceGuest} = this.props;
      return (<div>
              <div id="sidedrawer" className="mui--no-user-select">
                <SideBar guests={conferenceGuest.guests}
                 handleSelectedGuest={this.handleSelectedGuest}/>
              </div>
              <div id="content-wrapper">
                <MuiForm handleSelectedGuest={this.handleSelectedGuest}
                 guest={conferenceGuest.guest} />
              </div>
        </div>);
    }
}

module.exports = App;
