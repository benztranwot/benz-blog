import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <header className="container mx-auto px-10 mb-8">
      <nav className="border-b w-full border-blue-400 py-4 sm:py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-0 sm:mb-4 md:mb-0">
          <Link href="/">
            <span className="p-4 sm:p-8 cursor-pointer font-bold text-4xl text-pink-600 hover:text-pink-600 transition duration-200 sm:text-white">
              Benz Blog
            </span>
          </Link>
        </div>
        <div className="mt-2 md:m-0 flex flex-col justify-center items-center sm:block">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="p-2 sm:p-4 text-pink-600 font-semibold cursor-pointer hover:text-pink-600 transition duration-200 sm:text-white">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
