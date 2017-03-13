import { connect } from 'react-redux';

import { deleteMember } from '../../actions/teamActions';

import MemberInfoForm from './memberInfoFormComponent';

const mapStateToProps = ({ team }) => ({ editting: team.editting });

const mapDispatchToProps = dispatch => ({ deleteMember: member => dispatch(deleteMember(member)) });

export default connect(mapStateToProps, mapDispatchToProps)(MemberInfoForm);
