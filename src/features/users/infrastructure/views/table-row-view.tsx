import { User } from "@prisma/client";

export const TableRowView = ({ user }: { user: User }) => (
  <tr class="border-b border-gray-400" hx-swap="outerHTML swap:1s">
   
    <td class="px-4 py-2">{user.id}</td>
    <td class="px-4 py-2">{user.name}</td>
    <td class="px-4 py-2">{user.lastName}</td>
    <td class="px-4 py-2">{user.email}</td>
    <td class="px-4 py-2">
      {user.active ? (
        <span class="bg-green-500 text-white font-bold py-1 px-2 rounded-full text-xs">
          Active
          </span>
      ) : (
        <span class="bg-red-500 text-white font-bold py-1 px-2 rounded-full text-xs">
          Inactive
          </span>
      )  
      }
    </td>
    <td class="px-4 py-2">
      <button
        hx-delete={`/users/${user.id}`}
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </td>
  </tr>
);
