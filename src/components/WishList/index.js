import React, { useEffect, useState } from "react";

import { allWishes } from "../../mocks/wishes";

import Wish from "../Wish";

import { Container } from "./styles";

function WishList() {
  const [wishes, setWishes] = useState(allWishes);

  useEffect(() => {
    if (wishes) {
      setWishes([
        ...wishes,
        {
          name: "Manual",
          id: 10,
          progress: 0,
          date: "2021/03/31",
        },
      ]);
    }
  }, []);

  const handleAdd = (newWish) => {
    setWishes((wishes) => wishes.push(newWish));
  };

  return (
    <Container>
      <ul>
        {wishes.map((wish) => (
          <Wish key={wish.id} wish={wish} />
        ))}
      </ul>
    </Container>
  );
}

export default WishList;
