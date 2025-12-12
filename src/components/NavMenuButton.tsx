interface NavMenuButtonProps {
    onButtonClick: () => void;
    isOpen: boolean;
}

export default function NavMenuButton({isOpen, onButtonClick}: NavMenuButtonProps) {
    
    return (
        <div className="fixed">
            <button className={`transition-all ease-in-out p-2 rounded cursor-pointer border-2 border-white ${isOpen ? 'opacity-50 scale-75 p-0' : 'opacity-25'}`} onClick={onButtonClick}>
                <div className={`h-1 bg-white opacity-100 my-1 rounded-full ${isOpen ?  `w-6.5 rotate-45 translate-y-2` : `w-6`}`}></div>
                <div className={`h-1 w-6 bg-white  my-1 rounded-full ${isOpen ?  `opacity-0` : `opacity-100`}`}></div>
                <div className={`h-1 bg-white opacity-100 my-1 rounded-full ${isOpen ?  `w-6.5 -rotate-45 -translate-y-2` : `w-6`}`}></div>
            </button>
        </div>
    )
}