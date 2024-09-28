// Define the interface for a user
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // Add any other properties you may want to use from the user object
}

// Fetch users and specify the return type
async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

// Use the User type in the component
export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-8 animate-pulse">
        User Profiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user: User) => (
          <div 
            key={user.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
            <p className="text-lg text-gray-400 mb-1">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="text-lg text-gray-400 mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <a
              href={`/users/${user.id}`}
              className="mt-4 inline-block bg-yellow-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition duration-300"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
