import { User } from "@prisma/client";

type UsersListProps = {
  users: User[];
};

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2 text-red-500">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-400">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
