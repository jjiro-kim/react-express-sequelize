import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {Container, Segment, Header, Label, Input, Button} from 'semantic-ui-react';
import update from 'react-addons-update';
import MemberList from './MemberList'

export default class Member extends React.Component {
  constructor(){
    super();
    this.state = {
      Member: {
        ID: '',
        NAME: ''
      },
      MemberList: []
    };
    Axios.get(
      'http://localhost:3000/member'
    ).then( (response) => {
      this.setState({
        MemberList: response.data
      });
    });
    //
    // Axios.get(
    //   'http://localhost:3000/member', {
    //     params: {
    //       ID: '김영윤'
    //     }
    //   }
    // ).then( (response) => {
    //   console.log(response.data);
    // });
    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onInputChange(e) {
    this.setState({
      Member: {
        [e.target.id]: e.target.value
      }
    });
  }

  handleClick(e) {
    Axios.post('http://localhost:3000/member', this.state);
  }

  render() {
    return (
      <div>
        <Container>
          <Header as='h2'> Member </Header>
          <Segment.Group>
            <Segment>
              <p>
              ID
              </p>
            </Segment>
            <Segment>
              <Input id='ID'
                onChange={this.onInputChange}
              />
            </Segment>
          </Segment.Group>
          <Segment.Group>
            <Segment>
              <p>
                Name
              </p>
            </Segment>
            <Segment>
              <Input id='NAME'
                onChange={this.onInputChange}
              />
            </Segment>
          </Segment.Group>
          <Button primary
            onClick={this.handleClick}
          >
          저장
          </Button>
        </Container>

        <Container>
          <MemberList MemberList={this.state.MemberList} />
        </Container>
      </div>
    );
  }
}

Member.propTypes = {
  // onCreate: PropTypes.func,
  // onEdit: PropTypes.func
};

Member.defaultProps = {
  // onCreate: () => { Console.error('onCreate is not defined'); },
  // onEdit: () => { Console.error('onEdit is not defined'); }
};
