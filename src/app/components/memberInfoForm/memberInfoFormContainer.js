import { connect } from 'react-redux';

import { updateMember } from '../../actions/teamActions';

import MemberInfoForm from './memberInfoFormComponent';

const mapStateToProps = ({ team }) => ({ team });

const mapDispatchToProps = dispatch => ({ updateMember: member => dispatch(updateMember(member)) });

export default connect(mapStateToProps, mapDispatchToProps)(MemberInfoForm);
