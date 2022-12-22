import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/helpers.js';

//La funcion load se ejecuta antes de que se renderice la pagina
export const load = ({ locals }) => {
	//si el usuario ya esta autenticado, redireccionamos a la ruta de inicio
	if (locals.pb.authStore.isValid) {
		console.log('Usuario ya autenticado, redireccionando...');
		throw redirect(303, '/index/main');
	}
};

export const actions = {
	//metodo asincrono para iniciar sesion
	login: async ({ locals, request }) => {
		//obtenemos los datos del formulario
		const formData = await request.formData();

		//creamos un objeto con los datos del formulario y lo serializamos
		const data = serializeNonPOJOs(Object.fromEntries([...formData]));
		console.log('Datos de formulario: ', data);

		//iniciamos sesion
		try {
			await locals.pb.collection('users').authWithPassword(data.email, data.password);

			//logs de control
			console.log('Sesion iniciada con exito');
			console.log('Valid: ', locals.pb.authStore.isValid);
			console.log('Token: ', locals.pb.authStore.token);
			console.log('ID: ', locals.pb.authStore.model.id);
			console.log('Email: ', locals.pb.authStore.model.email);
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		//redireccionamos a la ruta de inicio si no hay errores
		throw redirect(303, '/index/main');
	}
};
