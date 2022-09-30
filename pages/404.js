import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-124 flex justify-center items-center">
      <div className="text-center p-4">
        <h1 className="text-5xl font-semibold mb-4">404</h1>
        <p className="text-3xl font-semibold mb-8">Oops, This Page Not Found!</p>
        <Link href="/">
          <span className="text-xl text-white p-4 cursor-pointer hover:text-pink-600 transition duration-200">
            Head back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
