import { useRef, MouseEvent } from "react";

interface NavbarAnchorProps {
    to: string
    text: string
}

const NavbarAnchor = ({ to, text }: NavbarAnchorProps) => {

    const aRef = useRef<HTMLAnchorElement>(null!)
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        document.querySelector(aRef.current.getAttribute('href')!)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <a
            href={`#${to}`}
            ref={aRef}
            onClick={handleClick}>
            {text}
            <hr />
        </a>
    );
}

export default NavbarAnchor;