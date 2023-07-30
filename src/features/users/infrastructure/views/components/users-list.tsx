import { User } from "@prisma/client";

type UsersListProps = {
  users: User[];
};

export const UsersList = ({ users }: UsersListProps) => (
  <div class="overflow-x-auto">
    <table class="table-auto border-collapse border border-gray-400">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Last Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Active</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} class="border-b border-gray-400">
            <td class="px-4 py-2">{user.id}</td>
            <td class="px-4 py-2">{user.name}</td>
            <td class="px-4 py-2">{user.lastName}</td>
            <td class="px-4 py-2">{user.email}</td>
            <td class="px-4 py-2">
              <input type="checkbox" checked={user.active} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
