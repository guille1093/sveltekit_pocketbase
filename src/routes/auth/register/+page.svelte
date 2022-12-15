<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

<section class="bg-white dark:bg-gray-900">
	<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
		<section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
			<img
				alt="Night"
				src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
				class="absolute inset-0 h-full w-full object-cover opacity-80"
			/>

			<div class="hidden lg:relative lg:block lg:p-12">
				<a class="block text-white" href="/">
					<span class="sr-only">Home</span>
					<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
						><g id="_8-3"
							><path
								d="m70.788 8.606c-13.794-4.539-27.783-4.539-41.576 0-.41.135-.688.518-.688.95v36.012c0 .552.448 1 1 1h5.673c.43 0 .812-.275.948-.683l3.335-9.979h4.293v27.145c0 4.105-2.207 7.933-5.76 9.989-.309.179-.499.509-.499.866v13.267c0 .357.19.687.5.866l11.485 6.639c.155.089.328.134.5.134s.346-.045.5-.134l11.485-6.639c.31-.179.5-.509.5-.866v-13.267c0-.357-.19-.687-.499-.866-3.553-2.056-5.76-5.884-5.76-9.989v-27.145h4.293l3.335 9.979c.136.408.519.683.948.683h5.673c.553 0 1-.448 1-1v-36.012c0-.432-.277-.815-.688-.95zm-10.303 65.861v12.128l-10.485 6.061-10.485-6.061v-12.128c3.875-2.474 6.259-6.795 6.259-11.417v-27.139h8.453v27.139c0 4.622 2.384 8.943 6.259 11.417zm8.99-59.529c-12.932-3.981-26.02-3.981-38.951 0v-1.276c12.927-4.105 26.023-4.105 38.951 0zm0-4.655v1.286c-12.931-3.982-26.021-3.982-38.951 0v-1.286c12.927-4.104 26.025-4.104 38.951 0zm-26.992 23.623v-3.226c0-4.145 3.372-7.516 7.516-7.516s7.517 3.372 7.517 7.516v3.226z"
							/><path
								d="m42.079 80.541c0 4.368 3.553 7.921 7.921 7.921s7.921-3.553 7.921-7.921-3.554-7.921-7.921-7.921-7.921 3.553-7.921 7.921zm13.842 0c0 3.265-2.656 5.921-5.921 5.921s-5.921-2.656-5.921-5.921 2.656-5.921 5.921-5.921 5.921 2.656 5.921 5.921z"
							/><path
								d="m50 67.816c.552 0 1-.448 1-1v-25.35c0-.552-.448-1-1-1s-1 .448-1 1v25.35c0 .552.448 1 1 1z"
							/><path
								d="m50 26.202c-1.806 0-3.276 1.47-3.276 3.276s1.47 3.276 3.276 3.276 3.276-1.47 3.276-3.276-1.47-3.276-3.276-3.276z"
								fill="currentColor"
							/></g
						></svg
					>
				</a>

				<h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
					Bienvenido a SmartDrive <span class="text-indigo-400">.</span>
				</h2>

				<p class="mt-4 leading-relaxed text-white/90">Monitoreo vehicular simplificado.</p>
			</div>
		</section>

		<main
			aria-label="Main"
			class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
		>
			<div class="max-w-xl lg:max-w-3xl">
				<div class="relative -mt-16 block lg:hidden">
					<a
						class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-gray-900 sm:h-20 sm:w-20"
						href="/"
					>
						<span class="sr-only">Home</span>
						<svg
							class="h-8 sm:h-10"
							viewBox="0 0 28 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
								fill="currentColor"
							/>
						</svg>
					</a>

					<h1 class="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
						Bienvenido a SmartDrive.
					</h1>

					<p class="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
						Monitoreo vehicular simplificado.
					</p>
				</div>

				<div class="col-span-6 w-full">
					<h1 class="text-2xl font-bold text-accent-content/90 w-full justify-items-center ">
						Registrese para poder disfrutar de todos nuestros servicios. 🚀
					</h1>
				</div>

				<form method="POST" action="?/register" class="mt-8 grid grid-cols-6 gap-6">
					<div class="col-span-6 sm:col-span-3 form-control">
						<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
							Nombre
						</label>

						<input
							type="text"
							id="name"
							name="name"
							class="input input-bordered input-primary w-full input-sm mt-1"
						/>
					</div>

					<div class="col-span-6 sm:col-span-3 form-control">
						<label
							for="lastname"
							class="block text-sm font-medium text-gray-700 dark:text-gray-200"
						>
							Apellido
						</label>

						<input
							type="text"
							id="lastname"
							name="lastname"
							class="input input-bordered input-primary w-full input-sm mt-1"
						/>
					</div>

					<div class="col-span-6 form-control">
						<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
							Email
						</label>

						<input
							type="email"
							id="email"
							name="email"
							class="input input-bordered input-primary w-full input-sm mt-1"
						/>
					</div>

					<div class="col-span-6 sm:col-span-3 form-control">
						<label
							for="password"
							class="block text-sm font-medium text-gray-700 dark:text-gray-200"
						>
							Contraseña
						</label>

						<input
							type="password"
							id="password"
							name="password"
							class="input input-bordered input-primary w-full input-sm mt-1"
						/>
					</div>

					<div class="col-span-6 sm:col-span-3 form-control">
						<label
							for="passwordConfirm"
							class="block text-sm font-medium text-gray-700 dark:text-gray-200"
						>
							Confirmar contraseña
						</label>

						<input
							type="password"
							id="passwordConfirm"
							name="passwordConfirm"
							class="input input-bordered input-primary w-full input-sm mt-1"
						/>
					</div>

					<div class="col-span-6">
						<p class="text-sm text-gray-500 dark:text-gray-400">
							Al crear una cuenta, acepta nuestros
							<a href="/" class="text-gray-700 underline dark:text-gray-200">
								términos y condiciones.
							</a>
						</p>
					</div>

					<div class="col-span-6">
						<p class="mt-0 text-sm text-gray-500 dark:text-gray-400">
							Ya tiene una cuenta?
							<a href="/auth/login" class="text-gray-700 underline dark:text-gray-200"
								>Inicie sesión</a
							>.
						</p>
					</div>

					<div class="col-span-6">
						<p class="mt-0 text-sm text-gray-500 dark:text-gray-400">
							Olvido su contraseña?
							<a href="/" class="text-gray-700 underline dark:text-gray-200">Haga click aqui</a>.
						</p>
					</div>

					<div class="col-span-6 sm:flex sm:items-center sm:gap-4">
						<button class="btn btn-primary w-full"> Registrarme </button>
					</div>
				</form>
			</div>
		</main>
	</div>
</section>
