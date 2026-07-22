import { navigation } from "@/data/navigation";
import NavLink from "./NavLink";

interface DesktopNavigationProps {
  activeSection: string;
}

export default function DesktopNavigation({
  activeSection,
}: DesktopNavigationProps) {
 
  return (
    
    <nav className="hidden xl:flex items-center gap-8 xl:gap-10">
      {navigation.map((item) => (
        <NavLink
          key={item.label}
          href={item.href}
          label={item.label}
          
          active={
  activeSection !== "contact" &&
  activeSection === item.href.replace("#", "")
  
}

        />
      ))}
    </nav>
  );
}