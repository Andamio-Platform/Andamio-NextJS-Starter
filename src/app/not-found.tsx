export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto">
      <div className="p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="mb-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <a href="/" className="hover:underline">
          Go back to the homepage
        </a>
      </div>
    </div>
  );
}
