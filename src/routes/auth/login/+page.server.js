import { redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/helpers.js";

export const load = ({ locals }) => {
  if (locals.pb.authStore.isValid) {
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
    try {
      //iniciamos sesion
      await locals.pb.collection('users').authWithPassword(
        data.email,
        data.password
      );
      console.log('Sesion iniciada con exito');
      console.log('Valid: ',locals.pb.authStore.isValid);
      console.log('Token: ',locals.pb.authStore.token);
      console.log('ID: ',locals.pb.authStore.model.id);
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
}