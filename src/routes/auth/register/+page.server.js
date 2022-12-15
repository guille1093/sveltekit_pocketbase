import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/helpers';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	//metodo asincrono para registrar usuario
	register: async ({ locals, request }) => {
		//obtenemos los datos del formulario
		const formData = await request.formData();
		//creamos un objeto con los datos del formulario y lo serializamos
		const data = serializeNonPOJOs(Object.fromEntries([...formData]));
		console.log('Datos de formulario: ', data);
		try {
			//creamos un nuevo usuario
			const record = await locals.pb.collection('users').create(data);
			console.log('Usuario creado con exito: ', record);
			//limpiamos el authStore para que no se quede con el usuario que acabamos de crear
			locals.pb.authStore.clear();
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}
		//redireccionamos a la ruta de login si no hay errores
		throw redirect(303, '/auth/login');
	}
};
