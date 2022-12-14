import { redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/helpers';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	register: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = serializeNonPOJOs(Object.fromEntries([...formData]));
		console.log(data);

		try {
			// const newUser = await locals.pb.users.create(data);
			// eslint-disable-next-line no-unused-vars
			const record = await locals.pb.collection('users').create(data);

			// const { token, user } = await locals.pb.users.authViaEmail(data.email, data.password);
			//
			// const updatedProfile = await locals.pb.records.update('profiles', user.profile.id, {
			//   name: data.name
			// });

			locals.pb.authStore.clear();
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		throw redirect(303, '/auth/login');
	}
};