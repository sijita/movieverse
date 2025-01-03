import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from '@tabler/icons-react';

export default function Footer() {
  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Terms', href: '#' },
  ];

  return (
    <footer className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        {footerLinks.map((link, index) => (
          <div key={index} className="px-5 py-2">
            <a
              href={link.href}
              className="text-base leading-6 text-gray-400 hover:text-primary"
            >
              {link.name}
            </a>
          </div>
        ))}
      </nav>
      <div className="flex justify-center mt-8 space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Facebook</span>
          <IconBrandFacebook size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Instagram</span>
          <IconBrandInstagram size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Twitter</span>
          <IconBrandTwitter size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">GitHub</span>
          <IconBrandGithub size={24} />
        </a>
      </div>
      <p className="mt-8 text-base leading-6 text-center text-gray-400">
        © 2024 Movieverse in colab with Simón Jiménez T, Inc. All rights
        reserved.
      </p>
    </footer>
  );
}
