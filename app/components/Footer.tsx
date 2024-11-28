"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">Emad Ahmed</h2>
            <p className="mt-4 text-gray-400">
              Crafting seamless web experiences with modern design and efficient code. Let&apos;s build something amazing together!
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100027186373750&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Facebook
              </a>
              
              <a
                href="https://www.instagram.com/mr.emad09/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/emaad-ahmed-7b1024314/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Footer Bottom */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Emad Ahmed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
