import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="text-center">
      <h1 className="text-4xl font-semibold mb-6 mt-4">
        The page you are looking for does not exist.
      </h1>
      <Link href="/" className="inline-block text-lg">
        Go back home
      </Link>
    </main>
  );
};

export default NotFoundPage;
