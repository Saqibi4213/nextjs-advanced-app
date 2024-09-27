async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id);

  // Use a placeholder image URL based on the user ID
  const imageUrl = `https://i.pravatar.cc/150?img=${user.id}`;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4 flex flex-col items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <img
          src={imageUrl}
          alt={user.name}
          className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-yellow-600"
        />
        <h2 className="text-3xl font-extrabold mb-2">{user.name}</h2>
        <p className="mt-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mt-1">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="mt-1">
          <strong>Website:</strong> {user.website}
        </p>
        <a
          href="/users"
          className="mt-4 inline-block bg-yellow-600 hover:bg-yellow-500 text-white py-2 px-4 rounded transition duration-300"
        >
          Go Back
        </a>
      </div>
    </div>
  );
}
