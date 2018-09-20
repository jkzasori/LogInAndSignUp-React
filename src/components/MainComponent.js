import React, {Component} from 'react';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render() {
		return(
			<div className="container">
			<Nav tabs>
				<NavItem>
					<NavLink
					className={classnames({ active: this.state.activeTab === '1'})}
					onClick={() => {this.toggle('1'); }}
					>
					Log in
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
					className={classnames({ active: this.state.activeTab === '2'})}
					onClick={() => {this.toggle('2'); }}
					>
					Sign up
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={this.state.activeTab}>
				<TabPane tabId="1">
					<Login />	
				</TabPane>
				<TabPane tabId="2">
					<Signup />	
				</TabPane>
			</TabContent>
				
			</div>
			)
	}
}

export default Main;