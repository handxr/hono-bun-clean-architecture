export const CreateUserView = () => (
  <form
    hx-post="/users"
    hx-target="#users-table tbody"
    class="max-w-md mx-auto mt-4"
    _="on htmx:afterRequest reset() me"
    hx-swap="beforebegin"
  >
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label for="lastName" class="block text-gray-700 font-bold mb-2">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">
        Email
      </label>
      <input
        type="email"
        name="email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Create User
    </button>
  </form>
);
