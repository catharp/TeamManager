import MemberList from './memberListComponent';

import { connect } from 'react-redux';

const mapStateToProps = ({ teamMembers }) => ({ teamMembers });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
