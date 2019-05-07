export class User {
	id: string = null;
	email: string = '';
	password: string = '';
	confimPassword: string = '';
	name: string = '';
	lastname: string = '';
	sex: string = '';
	nickname: string = '';
	region: string = '';
	city: string = '';

	constructor(data: {
		id?: string;
		email?: string;
		password?: string;
		confimPassword?: string;
		name?: string;
		lastname?: string;
		sex?: string;
		nickname?: string;
		region?: string;
		city?: string;
	}) {
		this.id = data.id;
		this.email = data.email;
		this.password = data.password;
		this.confimPassword = data.confimPassword,
		this.name = data.name;
		this.lastname = data.lastname;
		this.sex = data.sex;
		this.region = data.region;
		this.city = data.city;
	}
}
