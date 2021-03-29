import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import { allWishes } from "../../mocks/wishes";
import NewWish from "../NewWish";

import Wish from "../Wish";

import { Container } from "./styles";

function WishList() {
  const [wishes, setWishes] = useState(allWishes);

  const addWish = (name, data) => {
    setWishes((wishesState) => [
      ...wishesState,
      {
        name,
        id: uuid(),
        progress: Math.ceil(Math.random() * 100),
        date: data,
      },
    ]);
  };

  return (
    <Container>
      <NewWish handleAdd={addWish} />
      <ul>
        {wishes.map((wish) => (
          <Wish key={wish.id} wish={wish} />
        ))}
      </ul>
    </Container>
  );
}

export default WishList;
