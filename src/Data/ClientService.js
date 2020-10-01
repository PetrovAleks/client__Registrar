export default class Client {
	constructor(name, surname, gender, loyaltyProgram, id) {
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.loyaltyProgram = loyaltyProgram;
		this.id = id;
		this.date = new Date().toLocaleDateString();
	}
}
