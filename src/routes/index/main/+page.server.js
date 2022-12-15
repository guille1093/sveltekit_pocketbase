import {redirect} from "@sveltejs/kit";

export const actions = {
    //metodo asincrono para cerrar sesion
    logout: async ({locals}) => {
        try {
            //cerramos sesion
            await locals.pb.authStore.clear();
            console.log('Sesion cerrada con exito');
        } catch (err) {
            console.log('Error:', err);
            return {
                error: true,
                message: err
            };
        }
        //redireccionamos a la ruta de inicio si no hay errores
        throw redirect(303, '/auth/login');
    }
}