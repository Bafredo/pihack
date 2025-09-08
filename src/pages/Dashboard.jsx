import { useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, username: "john_doe", data: "Example string 1", suspended: false },
    { id: 2, username: "jane_smith", data: "Example string 2", suspended: false },
    { id: 3, username: "alice_dev", data: "Example string 3", suspended: false },
  ]);

  const [editUser, setEditUser] = useState(null);
  const [editData, setEditData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleSuspend = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, suspended: !u.suspended } : u
      )
    );
  };

  const handleEdit = (user) => {
    setEditUser(user.id);
    setEditData(user.data);
  };

  const handleSave = (id) => {
    setUsers(
      users.map((u) => (u.id === id ? { ...u, data: editData } : u))
    );
    setEditUser(null);
    setEditData("");
  };

  // Filter users by search term
  const filteredUsers = users.filter(
    (u) =>
      u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.data.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* 🔍 Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username or passphrase..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">PassPhrase</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{user.username}</td>
                <td className="p-3">
                  {editUser === user.id ? (
                    <input
                      type="text"
                      value={editData}
                      onChange={(e) => setEditData(e.target.value)}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.data
                  )}
                </td>
                <td className="p-3">
                  {user.suspended ? (
                    <span className="text-red-600 font-semibold">Suspended</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Active</span>
                  )}
                </td>
                <td className="p-3 space-x-2">
                  {editUser === user.id ? (
                    <button
                      onClick={() => handleSave(user.id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(user)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleSuspend(user.id)}
                    className={`px-3 py-1 rounded ${
                      user.suspended
                        ? "bg-green-600 text-white"
                        : "bg-gray-600 text-white"
                    }`}
                  >
                    {user.suspended ? "Unsuspend" : "Suspend"}
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No matching users
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile */}
      <div className="md:hidden space-y-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <p>
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p className="mt-2">
              <span className="font-semibold">PassPhrase:</span>{" "}
              {editUser === user.id ? (
                <input
                  type="text"
                  value={editData}
                  onChange={(e) => setEditData(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : (
                user.data
              )}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Status:</span>{" "}
              {user.suspended ? (
                <span className="text-red-600 font-semibold">Suspended</span>
              ) : (
                <span className="text-green-600 font-semibold">Active</span>
              )}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {editUser === user.id ? (
                <button
                  onClick={() => handleSave(user.id)}
                  className="flex-1 px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(user)}
                  className="flex-1 px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(user.id)}
                className="flex-1 px-3 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleSuspend(user.id)}
                className={`flex-1 px-3 py-1 rounded ${
                  user.suspended
                    ? "bg-green-600 text-white"
                    : "bg-gray-600 text-white"
                }`}
              >
                {user.suspended ? "Unsuspend" : "Suspend"}
              </button>
            </div>
          </div>
        ))}
        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500">No matching users</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
