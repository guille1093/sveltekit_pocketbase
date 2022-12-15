import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/helpers';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

// Path: src/routes/auth/register/+page.server.js
export const actions = {
	//metodo asincrono para registrar usuario
	register: async ({ locals, request }) => {
		//obtenemos los datos del formulario
		const formData = await request.formData();
		//creamos un objeto con los datos del formulario y lo serializamos
		const data = serializeNonPOJOs(Object.fromEntries([...formData]));
		console.log(data);

		try {
			//creamos un nuevo usuario

			// eslint-disable-next-line no-unused-vars
			const record = await locals.pb.collection('users').create(data);
			//limpiamos el authStore para que no se quede con el usuario que acabamos de crear
			locals.pb.authStore.clear();
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}
		//redireccionamos a la ruta de login
		throw redirect(303, '/auth/login');
	}
};
