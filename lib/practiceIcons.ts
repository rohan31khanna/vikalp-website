import {
  Scale,
  Shield,
  Building2,
  Users,
  Landmark,
  Home,
} from "lucide-react";

export const practiceIcons = {
  scale: Scale,
  shield: Shield,
  building: Building2,
  users: Users,
  landmark: Landmark,
  home: Home,
} as const;

export type PracticeIcon = keyof typeof practiceIcons;