import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import List from '../../components/List';

export class ListContainer extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <List posts={this.props.posts} navigator={this.props.navigator} />
    );
  }
}

ListContainer.propTypes = {
  fetchPosts: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
  posts: React.PropTypes.array,
};

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(ListContainer);
