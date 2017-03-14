import { connect } from 'react-redux';

import { updateMember, deleteMember } from '../../actions/teamActions';

import EditMember from './editMemberComponent';

const mapStateToProps = ({ team }) => ({
  editting: team.editting,
  member: team.members[team.editting]
});

const mapDispatchToProps = dispatch => ({
  updateMember: member => dispatch(updateMember(member)),
  deleteMember: () => dispatch(deleteMember())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMember);
