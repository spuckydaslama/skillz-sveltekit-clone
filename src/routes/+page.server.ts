import { error } from '@sveltejs/kit';
import type { Employee } from '$lib/types';
import type { PageServerLoad } from './$types';
import { API } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const result = await fetch(API + 'employees.json');
	const employees: Employee[] = await result.json();
	if (employees) {
		return { employees: employees };
	}

	throw error(404, 'Not found');
};
