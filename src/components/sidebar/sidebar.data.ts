import { PAGE } from "@/config/pages.config";
import {
  BookText,
  CalendarDays,
  ChartColumnBig,
  LayoutGrid,
  LucideIcon,
  MessageSquareMore,
  Settings,
  Users,
} from "lucide-react";

interface ISidebarItem {
  link: string;
  label: string;
  number?: number;
  icon: LucideIcon;
}
interface IProjectItem {
  label: string;
  icon: string;
}

export const sidebarData: ISidebarItem[] = [
  {
    link: PAGE.BASE,
    label: "Dashboard",
    icon: LayoutGrid,
  },
  {
    link: PAGE.BASE,
    label: "Message",
    number: 4,
    icon: MessageSquareMore,
  },
  {
    link: PAGE.BASE,
    label: "Insight",
    icon: ChartColumnBig,
  },
  {
    link: PAGE.BASE,
    label: "Team",
    icon: Users,
  },
  {
    link: PAGE.BASE,
    label: "Schedule",
    icon: CalendarDays,
  },
  {
    link: PAGE.BASE,
    label: "Report",
    icon: BookText,
  },
  {
    link: PAGE.BASE,
    label: "Settings",
    icon: Settings,
  },
];

export const projectsData: IProjectItem[] = [
  {
    label: "Landing Page",
    icon: "#725CF2",
  },
  {
    label: "Mobile App",
    icon: "#FE8EF1",
  },
  {
    label: "Dashboard",
    icon: "#FFE156",
  },
  {
    label: "Fyler",
    icon: "#FDBF25",
  },
  {
    label: "Branding",
    icon: "#04806F",
  },
];
