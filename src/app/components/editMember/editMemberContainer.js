import { connect } from 'react-redux';

import { updateMember } from '../../actions/teamActions';

import EditMember from './editMemberComponent';

const mapStateToProps = ({ handleSubmit }) => ({ handleSubmit });

const mapDispatchToProps = dispatch => ({ updateMember: member => dispatch(updateMember(member)) });

export default connect(mapStateToProps, mapDispatchToProps)(EditMember);
