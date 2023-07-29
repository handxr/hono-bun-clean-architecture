import { User } from "@prisma/client";

type UsersListProps = {
  users: User[];
};

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name} - {user.lastName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
