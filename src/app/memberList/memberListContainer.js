import MemberList from './MemberListComponent';

import { connect } from 'react-redux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
