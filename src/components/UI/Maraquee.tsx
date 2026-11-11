import { MaraqueeTrack, MaraqueeWrapper } from "./MaraqueeStyles";

interface Cards {
  cards: JSX.Element[];
}

const Maraquee = ({cards}: Cards) => {
  return (
    <MaraqueeWrapper>
      <MaraqueeTrack>
        {cards}
        {cards}
      </MaraqueeTrack>
    </MaraqueeWrapper>
  );
};

export default Maraquee;
