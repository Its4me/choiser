import { User } from './User';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	user: User = new User({
		email: 'email@.com',
		name: 'Inna',
		lastname: 'Oracle',
		nickname: 'coold_Inna',
		city: 'Киев',
		region: 'Киевская область'
	});
	
	constructor() {}
}
