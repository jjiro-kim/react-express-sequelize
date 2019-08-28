import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {Container, Segment, Header, Label, Input, Button} from 'semantic-ui-react';
import MemberInfo from './MemberInfo';

export default class MemberList extends React.Component {
  constructor() {
    super();

  }

  render() {

    return (
      <div>
      {
        this.props.MemberList.map((member, i) => {
        return (
            <MemberInfo key={i} id={member.ID} name={member.NAME}/>
          );
        })
      }
      </div>
    );
  }
}

MemberList.propTypes = {
  MemberList: PropTypes.Array
};

MemberList.defaultProps = {

};
