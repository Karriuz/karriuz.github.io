import { useRef, MouseEvent } from "react";

interface NavbarAnchorProps {
    to: string
    text: string
}

const NavbarAnchor = ({ to, text }: NavbarAnchorProps) => {
    return (
        <a href={`#${to}`}>
            {text}
            <hr />
        </a>
    );
}

export default NavbarAnchor;