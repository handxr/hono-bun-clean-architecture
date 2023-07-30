import { User } from "@prisma/client";

type UsersListProps = {
  users: User[];
};

export const UsersList = ({ users }: UsersListProps) => {
  if (!users.length) {
    return <p>No users found</p>;
  }

  return (
    <div class="overflow-x-auto">
      <table class="table-auto border-collapse border border-gray-400">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Last Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Active</th>
            <th></th>
          </tr>
        </thead>
        <tbody
          hx-confirm="Are you sure?"
          hx-target="closest tr"
          hx-swap="outerHTML swap:1s"
        >
          {users.map((user) => (
            <tr key={user.id} class="border-b border-gray-400">
              <td class="px-4 py-2">{user.id}</td>
              <td class="px-4 py-2">{user.name}</td>
              <td class="px-4 py-2">{user.lastName}</td>
              <td class="px-4 py-2">{user.email}</td>
              <td class="px-4 py-2">
                <input type="checkbox" checked={user.active} />
              </td>
              <td class="px-4 py-2">
                <button
                  hx-delete={`/api/users/${user.id}`}
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
