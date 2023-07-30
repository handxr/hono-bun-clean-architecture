import { User } from "@prisma/client";

export const TableRow = ({ user }: { user: User }) => (
  <tr class="border-b border-gray-400" hx-swap="outerHTML swap:1s">
    <td class="px-4 py-2">{user.id}</td>
    <td class="px-4 py-2">{user.name}</td>
    <td class="px-4 py-2">{user.lastName}</td>
    <td class="px-4 py-2">{user.email}</td>
    <td class="px-4 py-2">
      <input type="checkbox" checked={user.active} />
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
