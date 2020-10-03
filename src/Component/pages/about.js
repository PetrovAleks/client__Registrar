import React from "react";
import avatar from "../images/avatar.jpg";

function About() {
	return (
		<section className="about">
			<div className="container about-wrapper">
				<div className="about-wrapper__img">
					<img
						className="about__img"
						src={avatar}
						width="400px"
						alt="это я"
					></img>
				</div>
				<div className="about-wrapper__text">
					<h2 className="about__title">Петров Александр</h2>
					<p className="about__text">
						Здравствуйте, претендую на позицию Junior Frontend Developer. Ниже
						по ссылкам можно перейти на мое портфолио и репозиторий на GITHUB
					</p>
					<ul className="about__list list-style">
						<li className="about__item">
							<a
								className="about__links"
								href="https://petrovaleks.github.io/portfolio_site/"
							>
								portfolio
							</a>
						</li>
						<li className="about__item">
							<a className="about__links" href="https://github.com/PetrovAleks">
								GITHUB
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default About;
