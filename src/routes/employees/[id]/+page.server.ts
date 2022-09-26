import { error } from '@sveltejs/kit';
import type { Employee } from '$lib/types';
import type { PageServerLoad } from './$types';
import { API } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const result = await fetch(API + `employees/${params.id}.json`);
	const employee: Employee = await result.json();
	if (employee) {
		return { employee: employee };
	}

	throw error(404, 'Not found');
};
