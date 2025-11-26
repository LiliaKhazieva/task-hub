import { IProfile } from "@/types/profile.types";
import { ITask } from "@/types/task.types";
import { Bug, Plane, Shrimp } from "lucide-react";

export const USERS: IProfile[] = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    name: "Lilia",
    email: "darkens@gmail.com",
    avatar:
      "https://yaart-web-alice-images.s3.yandex.net/3162f1d7b27211f080d50ed853a713d3:1",
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    name: "David",
    email: "lololoshka@gmail.com",
    avatar:
      "https://yaart-web-alice-images.s3.yandex.net/remixed_82262220b27211f0b3099e6ec7290088_1002863345_generation_0",
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    name: "Sofia",
    email: "sofia@gmail.com",
    avatar:
      "https://yaart-web-alice-images.s3.yandex.net/c9805dafb27211f0a802aeb24f0405d6:1",
  },
  {
    id: "44444444-4444-4444-4444-444444444444",
    name: "Maria",
    email: "maria@gmail.com",
    avatar:
      "https://yaart-web-alice-images.s3.yandex.net/c9805dafb27211f0a802aeb24f0405d6:1",
  },
  {
    id: "55555555-5555-5555-5555-555555555555",
    name: "Max",
    email: "max@gmail.com",
    avatar:
      "https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "66666666-6666-6666-6666-666666666666",
    name: "Pavel",
    email: "pavel@gmail.com",
    avatar:
      "https://yaart-web-alice-images.s3.yandex.net/ded77fc3b27211f0b661b26ea6470736:1",
  },
  {
    id: "77777777-7777-7777-7777-777777777777",
    name: "Daria",
    email: "daria@gmail.com",
    avatar:
      "https://yaart-web-alice-images.s3.yandex.net/c9805dafb27211f0a802aeb24f0405d6:1",
  },
];

export const TASKS: ITask[] = [
  {
    id: "1",
    title: "App User Flow",
    icon: Plane,
    dueDate: "3",
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
    dueDate: "5",
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
    dueDate: "10",
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
