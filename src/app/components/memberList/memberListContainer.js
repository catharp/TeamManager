import { connect } from 'react-redux';

import { setEditting } from '../../actions/teamActions';

import MemberList from './memberListComponent';

const mapStateToProps = ({ team }) => ({ team });

const mapDispatchToProps = dispatch => ({ setEditting: index => dispatch(setEditting(index)) });

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
