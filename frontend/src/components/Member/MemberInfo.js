import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {Segment, Header} from 'semantic-ui-react';

export default class MemberInfo extends React.Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          {this.props.id}
        </Segment>
        <Segment>
          {this.props.name}
        </Segment>
      </Segment.Group>
    )
  }
}

MemberInfo.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

MemberInfo.defaultProps = {
  // onCreate: () => { Console.error('onCreate is not defined'); },
  // onEdit: () => { Console.error('onEdit is not defined'); }
};
