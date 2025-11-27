
interface NavLinkProps {
    text: string 
    onLinkClick: (e: React.MouseEvent<HTMLUListElement>) => void;
}

export default function NavLink({text, onLinkClick}: NavLinkProps) {
    return <ul className="transition-all ease-in-out hover:scale-110 cursor-pointer" onClick={(e) => onLinkClick(e)}>{text}</ul>
}