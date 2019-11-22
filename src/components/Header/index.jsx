import React from 'react';
import { Link } from 'gatsby';

const style = {
	header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		width: '100%'
	},
	link: {
		fontWeight: 600,
		width: '10%',
		minWidth: '80px'
	}
};

// const activePostsLocation = () => {
// 	if (!window.location) return false;
// 	const { pathname } = window.location;
// 	const regex = /\/([^applications\/]+)(.*)/;
// 	return regex.test(pathname))
// };

const Header = ({ title }) => {
	return (
		<header>
			<div className="Container">
				<div className="w960" style={style.header}>
					<Link to="/" style={style.title}>
						<h3>HungKieu</h3>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
