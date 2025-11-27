import { useState } from "react";
import NavMenuButton from "./NavMenuButton";
import NavLink from "./NavLink";

interface NavMenuProps {
    onLinkClick: (page: string) => void;
}

const Pages = {
    HOME: "Home",
    BLOG: "Blog",
    WRITE: "Write"
} as const;

export default function NavMenu({onLinkClick}: NavMenuProps) {
    const [isOpen, setIsOpen] = useState(true);

    function handleLinkClick(e: React.MouseEvent<HTMLUListElement>) {
        e.preventDefault();
        const page = e.currentTarget.textContent?.toLowerCase() || 'home';
        onLinkClick(page);
        setIsOpen((prev) => !prev);
    }

    function handleButtonClick() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className={`flex flex-row-reverse justify-self-end gap-1 justify-between items-start text-2xl fixed z-50 top-0 transition-all md:w-auto ease-out backdrop-blur-sm m-2 ${isOpen ? "scale-100 p-2 m-auto w-screen" : 'scale-100'}`}>
        <NavMenuButton isOpen={isOpen} onButtonClick={handleButtonClick} />
        {isOpen && <nav className="flex flex-col grow gap-3 justify-start items-center">
            <NavLink onLinkClick={handleLinkClick} text={Pages.HOME} />
            <NavLink onLinkClick={handleLinkClick} text={Pages.BLOG} />
            <NavLink onLinkClick={handleLinkClick} text={Pages.WRITE} />
        </nav>}
        </div>
    )
}