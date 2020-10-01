import React from "react";
import { clientsDataset } from "../Data";

function Home(props) {
	const clientsInfo = clientsDataset.map((client) => {
		return (
			<li key={client.id} className="clientele__item">
				<div className="clientele__item-link">
					<p clientele__item="item-info">
						{client.name} {client.surname}
						<br />
						<span className="info-text">{client.date}</span>
					</p>
				</div>
			</li>
		);
	});

	return (
		<section className="clientele">
			<div className="container">
				<h1 className="clientele__title"> Список клиентов</h1>
				<p className="clientele__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
					harum voluptate temporibus eveniet inventore.
				</p>
				<div className="wrapper-clientele__list">
					<div className="wrapper-list">
						<ul className="clientele__list list-style">{clientsInfo}</ul>
					</div>
					<button onClick={props.toggleRenderForm} className="clientele__btn">
						Add new client
					</button>
				</div>
			</div>
		</section>
	);
}

export default Home;
