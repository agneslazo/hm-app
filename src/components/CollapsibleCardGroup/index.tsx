import { Typography } from "@mui/material";
import CollapsibleCard, { CollapsibleCardProps } from "../CollapsibleCard";

export type CollapsibleCardGroupProps = {
  headline: string;
  cards: CollapsibleCardProps[];
};

const CollapsibleCardGroup = ({
  headline,
  cards,
}: CollapsibleCardGroupProps): JSX.Element => {
  const headlineStyle = {
    padding: "26px",
    backgroundColor: "white",
    borderRadius: "10px 10px 0px 0px",
    borderBottom: "1px solid #00B0F0",
  } as React.CSSProperties;

  return (
    <div style={{ width: "fit-content" }}>
      <div style={headlineStyle}>
        <Typography variant="headline5">{headline}</Typography>
      </div>
      <div style={{ display: "flex" }}>
        {cards.map((cardProps, i) => {
          return <CollapsibleCard {...cardProps} key={i} />;
        })}
      </div>
    </div>
  );
};

export default CollapsibleCardGroup;
