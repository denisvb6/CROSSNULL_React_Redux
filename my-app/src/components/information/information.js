import { useReduxState } from '../../redux-manager';
import { useSelector } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';

export const Information = () => {
	const { status, currentPlayer } = useReduxState();

	const playerAction = useSelector(PLAYER_ACTION[status]);
	const playerName = useSelector(PLAYER_NAME[currentPlayer]);

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
