import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header-nav">
					<ul className="header-nav__list list-style">
						<li>
							<NavLink
								to="/home"
								className="header-nav__item"
								activeClassName="active-link"
							>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/about"
								className="header-nav__item"
								activeClassName="active-link"
							>
								About me
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
