import React from "react";
import classes from "../Toolbar/Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => {
	return (
		<header className={classes.Toolbar}>
			<div onClick={props.clicked}>MENU</div>
			<Logo height="80%"/>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default toolbar;
