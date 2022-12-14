import PocketBase from 'pocketbase';


export const handle = async ({event, resolve}) => {
  event.locals.pb = new PocketBase('http://localhost:8090');
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('Cookie') || '');

  if (event.locals.pb.authStore.isValid) {
    event.locals.user = event.locals.pb.authStore.model;
  }

  const response = await resolve(event);

  response.headers.set('Set-Cookie', event.locals.pb.authStore.cookie);

}