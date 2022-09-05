import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import lineGood from '../../assets/Vector 8 (Stroke).svg'
import lineBad from '../../assets/Vector 22 (Stroke).svg'

export type CollapsibleCardProps = {
  observation: string;
  title: string;
  value: number;
  instance: string;
  narratives: [string, ...string[]]; // require at least 1 string element
};

const CollapsibleCard = ({
  observation,
  title,
  value,
  instance,
  narratives,
}: CollapsibleCardProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const getInstance = () => {
    if (instance === "mini line (good increase)") {
      return lineGood
    }
    if (instance === "mini line (bad increase)") {
      return lineBad
    }
  }

  const ExpandButton = styled(Button)(() => ({
    marginLeft: "auto",
  }));
  
  const CustomCard = styled(Card)(() => ({
    borderRadius: 0,
    boxShadow: "none",
    padding: "8px 0",
    borderRight: "0.5px solid #C9CBD1",
  }));
  
  const CustomCardContent = styled(CardContent)(() => ({
    padding: "8px 16px",
  }));
  
  const VizCardContent = styled(CustomCardContent)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  
  const NarrativeCardContent = styled(CustomCardContent)(() => ({
    minHeight: "80px",
  }));
  
  const CustomCardActions = styled(CardActions)(() => ({
    padding: "8px 16px",
  }));
  
  const Title = styled(Typography)(() => ({
    color: "#6E7582",
    marginTop: "8px",
  }));
  
  const Narrative = styled(Typography)(() => ({
    color: "#6E7582",
  }));
  
  const observationStyle = {
    height: "48px",
    // whiteSpace: "nowrap",
    overflow: "hidden",
    // textOverflow: "ellipsis",
    display: "block",
    // lineClamp: 2,
    // WebkitLineClamp: 2,
    color: "#1C1B1E",
    marginBottom: "8px",
  } as React.CSSProperties;

  return (
    <CustomCard sx={{ maxWidth: 273 }}>
      <CustomCardContent>
        <Typography
          variant="subhead1"
          component={"div"}
          style={observationStyle}
        >
          {observation}
        </Typography>
        <Title variant="headline6">{title}</Title>
      </CustomCardContent>
      <VizCardContent>
        <Typography variant="displaySmall">{value}</Typography>
        <img src={getInstance()} alt="instance" />
      </VizCardContent>
      <NarrativeCardContent>
        <Narrative variant="bodyMedium">{narratives[0]}</Narrative>
      </NarrativeCardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {narratives.map((n, i) => {
          if (i !== 0) {
            return (
              <NarrativeCardContent key={i}>
                <Narrative variant="bodyMedium">{n}</Narrative>
              </NarrativeCardContent>
            );
          }
          return null;
        })}
      </Collapse>
      <CustomCardActions>
        <ExpandButton
          onClick={() => setExpanded(!expanded)}
          startIcon={!expanded ? <ExpandMore /> : <ExpandLess />}
          color="info"
        >
          {expanded ? "Less" : "More"}
        </ExpandButton>
      </CustomCardActions>
    </CustomCard>
  );
};

export default CollapsibleCard;
