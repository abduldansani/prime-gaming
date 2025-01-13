import {
  bmwGallery1,
  bmwGallery2,
  bmwGallery3,
  bmwTrailer,
  cpu,
  gpu,
  ram,
} from "../assets";

export const gameOfTheMonth = {
  name: "Black Myth Wukong",
  description:
    'Black Myth: Wukong is an action RPG inspired by the legendary Chinese novel "Journey to the West." The game takes players on an epic journey as the Monkey King, Wukong, battling through mythological creatures and mastering magical abilities. Featuring stunning visuals, challenging combat, and an immersive world, Black Myth: Wukong aims to set a new standard for action RPGs.',
  review: "81",
  releaseDate: "Auguest 20, 2024",
  availableFor: " Pc - Ps5 - Xbox Series X & S",
  genre: "Action RPG Advanture",
  platforms: ["Ps 5", "Xbox Series S", "Pc", "Xbox Series X"],
  trailerAndGallery: [bmwTrailer, bmwGallery1, bmwGallery2, bmwGallery3],
  minSystemReq: {
    OS: "Windoes 10 64-Bit Or Newer",
    CPU: "Intel Core i5-8400 / AMD 5 1600",
    Memory: "16GB RAM",
    GPU: "NVIDIA GeForce GTX 1060 (6GB) / AMD 5 1600",
    DirectX: "Version 11",
    Storage: "130GB Available Space",
  },
  recSystemReq: {
    OS: "Windoes 10 64-Bit Or Newer",
    CPU: "Intel Core i7-9700 / AMD Ryzen 5 5500",
    Memory: "16GB RAM",
    GPU: "NVIDIA GeForce GTX 2060 / AMD Radeon RX 5700Xt / INTEL Arc A750",
    DirectX: "Version 12",
    Storage: "130GB Available Space",
  },
  reqTestInput: [
    {
      label: "RAM",
      icon: ram,
      placeholder: "Enter Your RAM Storage",
    },
    {
      label: "GPU",
      icon: gpu,
      placeholder: "Enter Your GPU State",
    },
    {
      label: "CPU",
      icon: cpu,
      placeholder: "Enter Your CPU Details",
    },
  ],
};
