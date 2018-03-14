'use strict';

export function login(token){
	return {
		type : 'login',
    token: token
	}
}
