import Link from 'next/link';
import React from 'react';

type MainMenuItemProps = {
  href: string;
};

const MainMenuItem: React.FC<MainMenuItemProps> = ({
  href,
  children,
}) => (
  <Link href={href}>
    <a className="py-2 px-4 block text-slate-600 hover:text-slate-900 border-b-2 border-b-transparent hover:border-b-violet-600">
      {children}
    </a>
  </Link>
);

export default MainMenuItem;
