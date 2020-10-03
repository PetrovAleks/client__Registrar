import React, { Component } from "react";
import { connect } from "react-redux";

import { clientsDataset } from "../Data";
import { renderForm, getClientList } from "../Redux/actions";

class Home extends Component {
	componentDidMount() {
		this.props.getclientsList();
	}
	render() {
		const clients = this.props.clientsList.map((client) => {
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
							<ul className="clientele__list list-style">{clients}</ul>
						</div>
						<button onClick={this.props.renderForm} className="clientele__btn">
							Add new client
						</button>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clientsList: state.clientsList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		renderForm: () => dispatch(renderForm()),
		getclientsList: () => dispatch(getClientList(clientsDataset)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
