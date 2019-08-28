import React from 'react';
import Axios from 'axios';
import {Container, Header, Button} from 'semantic-ui-react';
import update from 'react-addons-update';

export default class Contact extends React.Component {
    Axios.get('http://localhost:3000/user').then( (response) => { console.log(response);});

    render() {
      return (
        <Container>
        <Header as='h2'>Header</Header>
        <p>text</p>
        <Button>button</Button>
        </Container>
      );
    }
}
