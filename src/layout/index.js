// Dependencies
import React from 'react';
import './layout.css';
import StudioFooter from './StudioFooter';
import StudioHeader from './StudioHeader';

const Layout = props => {

	return (
		<React.Fragment>
			<div className="container-fluid">
				<StudioHeader/>
				{props.children}
				<StudioFooter/>
			</div>
		</React.Fragment>
	);
};


export default Layout;
