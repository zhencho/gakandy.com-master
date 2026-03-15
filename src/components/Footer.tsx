import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-[#1c3449] bg-[linear-gradient(180deg,#07111b_0%,#081522_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="group mb-4 inline-block rounded-2xl border border-[#24435d] bg-[rgba(16,35,53,0.82)] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-[#2e597b]">
              <img
                src="https://ik.imagekit.io/d36vkx7c33/gakandy/logo-wihtout-text.png?updatedAt=1733490143012"
                alt="Global Associates Logo"
                className="h-12 w-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#9db0c3]">
              A leading professional services firm providing comprehensive financial and business solutions in Sri Lanka.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f4fbff]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/services', 'Services'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-[#9db0c3] transition-colors hover:text-[#7cd8ff]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f4fbff]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#4ec4ff]" />
                <span className="text-sm text-[#9db0c3]">No 291, D.S Senanayake Veediya, Kandy, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#4ec4ff]" />
                <span className="text-sm text-[#9db0c3]">+9481-2225 488</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#4ec4ff]" />
                <a href="mailto:info@gakandy.com" className="text-sm text-[#9db0c3] transition-colors hover:text-[#7cd8ff]">
                  info@gakandy.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f4fbff]">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Linkedin, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="text-[#9db0c3] transition-colors hover:text-[#7cd8ff]">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1c3449]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 px-4 py-6 text-sm text-[#9db0c3] md:flex-row md:space-y-0 sm:px-6 lg:px-8">
          <div>&copy; {new Date().getFullYear()} Global Associates. All rights reserved.</div>
          <div>
            Powered by{' '}
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ec4ff] transition-colors hover:text-[#7cd8ff]"
            >
              Quadrate Tech Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
