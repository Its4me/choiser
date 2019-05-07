import { User } from './User';
import { Injectable } from '@angular/core';


export const URL: string = 'localHost:3000';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	user: User = null
	
	constructor() {}
}
