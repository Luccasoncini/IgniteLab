import { Logo } from "./Logo";
import { Menu } from "./Menu";

export function Header() {
    return(
        <header className="w-full py-5 flex items-center justify-around bg-theme-gray_background border-b border-theme-gray_stroke">
            <Logo />
            <Menu />
        </header>
    )
}