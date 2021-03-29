const wishes = [
  {
    id: 1,
    name: "Ir para a Disney",
    date: "31/12/2021",
  },
  {
    id: 2,
    name: "Conseguir um emprego novo",
    date: "31/12/2021",
  },
  {
    id: 3,
    name: "Atingir minha meta de peso",
    date: "31/12/2021",
  },
  {
    id: 4,
    name: "Aprender uma nova tecnologia backend",
    date: "31/12/2021",
    progress: 100,
  },
];

export const allWishes = wishes.map((wish) => {
  return {
    ...wish,
    progress: !wish.progress ? Math.floor(Math.random() * 101) : wish.progress,
  };
});
