import { connect } from 'react-redux';

import { addMember } from '../../actions/teamActions';

import AddMember from './addMemberComponent';

const mapStateToProps = ({ handleSubmit }) => ({ handleSubmit });

const mapDispatchToProps = dispatch => ({ addMember: member => dispatch(addMember(member)) });

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
