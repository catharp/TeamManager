import { connect } from 'react-redux';

import { updateMember } from '../../actions/teamActions';

import AddMember from './addMemberComponent';

const mapStateToProps = ({  }) => ({  });

const mapDispatchToProps = dispatch => ({ updateMember: member => dispatch(updateMember(member)) });

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
