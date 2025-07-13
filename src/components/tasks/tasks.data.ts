import { IProfile } from "@/types/profile.types";
import { ITask } from "@/types/task.types";
import { Bug, Plane, Shrimp } from "lucide-react";

export const USERS: IProfile[] = [
  {
    id: "1",
    name: "Dark Soul",
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
  {
    id: "4",
    name: "Max",
    email: "max@gmail.com",
    avatar:
      "https://images.unsplash.com/vector-1741591987044-45ceb2033abc?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "Max",
    email: "max@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    name: "Max",
    email: "max@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    name: "Max",
    email: "max@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const TASKS: ITask[] = [
  {
    id: "1",
    title: "App User Flow",
    icon: Plane,
    dueDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
    color:
      "repeating-linear-gradient(-45deg, #806df2, #806df2 10px, #A494F0 10px, #A494F0 20px)",
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
    title: "Create wireframes",
    icon: Shrimp,
    dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    color:
      "repeating-linear-gradient(-45deg, #1FC2AD, #1FC2AD 10px, #008271 10px, #008271 20px)",
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
        isCompleted: true,
      },
      {
        id: "4",
        title: "Create user flow",
        isCompleted: true,
      },
    ],
    comments: ["This is a comment", "Another comment", "Yet comment"],
    resources: ["", "", ""],
    links: ["", ""],
  },
  {
    id: "3",
    title: "Design UI developers",
    icon: Bug,
    dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    color:
      "repeating-linear-gradient(-45deg, #F9EFCD, #F9EFCD 10px, #F9C225 10px, #F9C225 20px)",
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
        isCompleted: true,
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
