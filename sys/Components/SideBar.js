import React from 'react';
import ReactDom from 'react-dom';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

let SideBar = React.createClass({
    propTypes: {
      guests: React.PropTypes.array,
      handleSelectedGuest: React.PropTypes.func
    },
    getInitialState() {
      return {
        searchText: '',
        count: 103,
        guests: [],
        filteredGuests: []
      };
    },

    clickSelectedGuest(guest){
      this.props.handleSelectedGuest(guest);
    },
    componentWillReceiveProps(nextProps){
      const { guests } = this.props;
      this.setState({guests: nextProps.guests});
    },
    searchGuest(event){
        let queryText = event.target.value;

        //get guests filtered by first name, last name and company
        var queryResult=[];
        this.state.guests.forEach(function(guest){
          if(guest.first_name.toLowerCase().indexOf(queryText)!=-1)
          {
            queryResult.push(guest);
          }
          else if(guest.last_name.toLowerCase().indexOf(queryText)!=-1)
          {
            queryResult.push(guest);
          }
          else if(guest.company.toLowerCase().indexOf(queryText)!=-1)
          {
            queryResult.push(guest);
          }
        });
        this.setState({
          searchText:queryText,
          filteredGuests: queryResult
        })
      },
  FilteredGuestsData(){
    var customAvatar = {
      backgroundColor: '#fff'
    };
    let i = 0;
    if (this.state.filteredGuests.length > 0) {
      return (this.state.filteredGuests.map((guest, index) =>
        <ListItem
          key={index}
          primaryText={guest.first_name + " " + guest.last_name}
          onClick={this.clickSelectedGuest.bind(this, guest)}
          leftAvatar={<Avatar style={customAvatar} />}/>
      ));
    }else {
      return (this.state.guests.map((guest, index) =>
      <ListItem
          key={index}
          primaryText={guest.first_name + " " + guest.last_name}
          onClick={this.clickSelectedGuest.bind(this, guest)}
          leftAvatar={<Avatar style={customAvatar} />}/>
        ));
      }
    },
  render() {
    return (
      <div >
        <List>
          <Subheader>
            <Input className="input-border-none" hint="Search Guests" onChange={this.searchGuest} />
          </Subheader>
          <Divider/>
          <ListItem
            primaryText={(this.state.filteredGuests.length > 0 ? this.state.filteredGuests.length : this.state.guests.length) + ' Confirmed Guests'}/>
            {this.FilteredGuestsData()}
        </List>
      </div>
    );
  }

});

export default SideBar;
//{listItems}
