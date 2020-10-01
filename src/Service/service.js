export default class Service {
	BASE_URL = "https://meowfacts.herokuapp.com";

	getData = async () => {
		const resourse = await fetch(this.BASE_URL);
		return await resourse.json();
	};
}
