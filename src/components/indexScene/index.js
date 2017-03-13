import React, { Component } from 'react';
import { Container, Header } from 'native-base';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { action_chatSearch } from '../../actions/CHAT_SEARCH'

import Search from './Search';
import GirlRecommendations from './GirlRecommendations';
import Chat from './Chat';

// import data from '../../db/data'

class PeopleListScene extends Component {
  constructor(){
    super()
    // this.state={
    //   peopleList: data
    // }
  }

  handleChatSearchChange(e){
    this.props.action_chatSearch(e.nativeEvent.text)
  }

  render(){
    return (
        <Container>
            <Header></Header>
            <Search
              onChange={this.handleChatSearchChange.bind(this)}
            />

            <GirlRecommendations toPeopleListScene={this.props.toPeopleListScene} />

            <Chat people={this.props.people} />
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people.filter( x => x.name.toLowerCase().match(state.chatSearch) ),
    search_chat: state.chatSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({action_chatSearch}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleListScene)
