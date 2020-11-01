import React, {Fragment} from 'react';

import {platform, IOS, Group, Div, Avatar} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';


import './Intro.css';

const onName = platform();

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
	return (
		<Panel id={id} centered={true}>
			<PanelHeader>
				Расписание университета
			</PanelHeader>
			{(!userHasSeenIntro && fetchedUser) &&
				<Fragment>
					<Group>
						<Div className="User">
							{fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200}/>}
						</Div>
					</Group>
				</Fragment>
			}
			{snackbarError}
		</Panel>
	);
}


export default Intro;
