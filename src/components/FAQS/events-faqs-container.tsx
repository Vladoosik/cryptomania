// modules
import { memo, useEffect, useState } from "react";
import React from "react";
// component
import Dropdown from "./DropDown/dropdown";
// types
import { DropdownProps } from "../../interface/DropdownProps";
// styles
import "./styles.scss";
import { EventAnswerQuestions } from "./StyledComponents/styles";

function EventsFaqsContainer(props: DropdownProps) {
  const { item, index, onStarClick, favorite, category } = props;
  const [included, setIncluded] = useState<boolean>(false);
  const athChange = `${Math.floor(item.ath_change_percentage * 100) / 100}%`;
  const cryptoChange =
    Math.floor(item.market_cap_change_percentage_24h * 100) / 100;
  const content = item.content ? item.content : null;
  const crypto = Math.floor(item.market_cap_change_24h * 100) / 100;
  const cryptoChangeCategory = Math.floor(item.market_cap * 100) / 100;

  useEffect(() => {
    const isIncluded = favorite?.some((fav) => fav.id === item.id);
    setIncluded(isIncluded);
  }, [favorite, item.id]);

  return (
    <EventAnswerQuestions>
      <ul className="events-faqs__ulContainer">
        <li>
          <Dropdown
            category={category}
            favorite={favorite}
            active={included}
            onClick={onStarClick}
            nameContent={item.id}
            athChangePercentage={"Ath change percentage:"}
            total_Volume={"Total Volume:"}
            total_Supply={"Total Supply:"}
            allTimeHigh={"All Time High:"}
            priseSymbol={category ? "%" : "$"}
            currentSymbol={category ? "$" : "%"}
            question={item.id || item.name}
            totalVolume={`${item.total_volume}$`}
            ath={`${item.ath} $`}
            athChange={athChange}
            index={index}
            title={item.id}
            crypto={item.current_price || crypto}
            cryptoChange={cryptoChange || cryptoChangeCategory}
            cryptoImg={item.image || item.top_3_coins}
            marketCupRank={item.market_cap_rank}
            totalSupply={item.total_supply}
            content={content}
          />
        </li>
      </ul>
    </EventAnswerQuestions>
  );
}

export default memo(EventsFaqsContainer);
