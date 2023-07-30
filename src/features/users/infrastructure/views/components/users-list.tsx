import { User } from "@prisma/client";
import { TableRow } from "./table-row";

type UsersListProps = {
  users: User[];
};

export const UsersList = ({ users }: UsersListProps) => {
  if (!users.length) {
    return <p>No users found</p>;
  }

  return (
    <div class="overflow-x-auto">
      <table
        class="table-auto border-collapse border border-gray-400"
        id="users-table"
      >
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
            <TableRow user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
