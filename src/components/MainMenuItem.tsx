import React from 'react';

type MainMenuItemProps = {
    children: string;
    href: string;
};

const MainMenuItem: React.FC<MainMenuItemProps> = ({
    href,
    children,
}) => (
    <li>
        <a href={href} className='p-2 block'>
            {children}
        </a>
    </li>
);

export default MainMenuItem;