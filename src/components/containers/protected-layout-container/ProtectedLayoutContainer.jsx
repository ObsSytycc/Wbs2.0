import { connect } from 'react-redux';
import { ProtectedLayout } from '../../../layout';
import { authenticate } from '../../../redux/selectors/userSelector';

const mapStateToProps = (state) => ({
	authenticated: authenticate(state)
});

export const ProtectedLayoutContainer = connect(mapStateToProps)(ProtectedLayout);
