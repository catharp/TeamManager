import MemberList from './memberListComponent';

import { connect } from 'react-redux';

const mapStateToProps = ({ team }) => ({ team });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
