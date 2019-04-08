export class User {
	email: string = '';
	password: string = '';
	name: string = '';
	lastname: string = '';
	sex: string = '';
	nickname: string = '';
	region: string = '';
	city: string = '';

	constructor(data: {
		email?: string;
		password?: string;
		name?: string;
		lastname?: string;
		sex?: string;
		nickname?: string;
		region?: string;
		city?: string;
	}) {
		this.email = data.email;
		this.password = data.password;
		this.name = data.name;
		this.lastname = data.lastname;
		this.sex = data.sex;
		this.region = data.region;
		this.city = data.city;
	}
}
