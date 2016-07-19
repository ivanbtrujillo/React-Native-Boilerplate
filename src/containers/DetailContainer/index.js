import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from './actions';
import Detail from '../../components/Detail';

export class DetailContainer extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.data.id);
  }

  render() {
    return (
      <Detail
        navigator={this.props.navigator}
        data={this.props.data}
        post={this.props.post}
      />
    );
  }
}

DetailContainer.propTypes = {
  fetchPost: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
  post: React.PropTypes.object,
  navigator: React.PropTypes.object,
};

function mapStateToProps(state) {
  return { post: state.post.post };
}

export default connect(mapStateToProps, { fetchPost })(DetailContainer);
