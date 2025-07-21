import { Link } from 'react-router-dom';

interface FooterLinksProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;