import React from 'react';

const FooterLinks = ({ links, onNavigate }) => {
  return (
    <>
      {links.map((link) => (
        <li
          key={link.name}
          className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // prevent page reload
              onNavigate(link.path);
            }}
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default FooterLinks;
