import { IProfile } from "@/types/profile.types";
import { ITask } from "@/types/task.types";
import { Plane } from "lucide-react";

export const USERS: IProfile[] = [
  {
    id: "1",
    name: "Lilian",
    email: "darkens@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Maria",
    email: "lololoshka@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Max",
    email: "max@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const TASKS: ITask[] = [
  {
    id: "1",
    title: "TravelApp User Flow",
    icon: Plane,
    dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),

    users: [USERS[0], USERS[1], USERS[2]],
    subTasks: [
      {
        id: "1",
        title: "Create wireframes",
        isCompleted: true,
      },
      {
        id: "2",
        title: "Design UI",
        isCompleted: true,
      },
      {
        id: "3",
        title: "Create user flow",
        isCompleted: false,
      },
      {
        id: "4",
        title: "Create user flow",
        isCompleted: false,
      },
    ],
    comments: ["This is a comment", "Another comment", "Yet comment"],
    resources: ["", "", ""],
    links: ["", ""],
  },
  {
    id: "2",
    title: "TravelApp User Flow",
    icon: Plane,
    dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),

    users: [USERS[0], USERS[1], USERS[2]],
    subTasks: [
      {
        id: "1",
        title: "Create wireframes",
        isCompleted: true,
      },
      {
        id: "2",
        title: "Design UI",
        isCompleted: true,
      },
      {
        id: "3",
        title: "Create user flow",
        isCompleted: false,
      },
      {
        id: "4",
        title: "Create user flow",
        isCompleted: false,
      },
    ],
    comments: ["This is a comment", "Another comment", "Yet comment"],
    resources: ["", "", ""],
    links: ["", ""],
  },
  {
    id: "3",
    title: "TravelApp User Flow",
    icon: Plane,
    dueDate: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),

    users: [USERS[0], USERS[1], USERS[2]],
    subTasks: [
      {
        id: "1",
        title: "Create wireframes",
        isCompleted: true,
      },
      {
        id: "2",
        title: "Design UI",
        isCompleted: true,
      },
      {
        id: "3",
        title: "Create user flow",
        isCompleted: false,
      },
      {
        id: "4",
        title: "Create user flow",
        isCompleted: false,
      },
    ],
    comments: ["This is a comment", "Another comment", "Yet comment"],
    resources: ["", "", ""],
    links: ["", ""],
  },
];
