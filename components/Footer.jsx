const Footer = () => {
  return (
    <footer className="container mx-auto px-10">
      <div className="border-t w-full border-blue-400 py-8 text-center">
        <p className="text-white inline-block">
          Make with ❤️ by{" "}
          <a
            href="https://benztran.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600 transition duration-200"
          >
            Ben Tran
          </a>
        </p>
        <br />
        <p className="text-white inline-block">
          Built with{" "}
          <a
            href="https://github.com/benztranwot/benz-blog"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600 transition duration-200"
          >
            Next.js and Hygraph CMS
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
