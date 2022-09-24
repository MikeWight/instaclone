import React from "react";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<i className="fa-brands fa-instagram"></i>
			</div>
			<div className="search__container">
				<i className="fa-solid fa-magnifying-glass"></i>
				<input type="text" placeholder="Search" />
			</div>
			<div className="right__section">
				<Button variant="primary">Primary</Button>
				<Button variant="primary">Primary</Button>
			</div>
		</div>
	);
};

export default Header;
