import { Menu } from "lucide-react";

interface MobileMenuButtonProps {
  onClick: () => void;
}

export default function MobileMenuButton({
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open navigation menu"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-md
        text-white
        transition-colors
        duration-300
        hover:text-[#C8A96A]
        xl:hidden
      "
    >
      <Menu size={28} />
    </button>
  );
}