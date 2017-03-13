import AddMember from './addMemberComponent';

import { connect } from 'react-redux';

const mapStateToProps = ({ handleSubmit }) => ({ handleSubmit });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
