import { ThemeProvider } from "@emotion/react";
import React from "react";
import "./App.css";
import CollapsibleCard, { CollapsibleCardProps } from "./components/CollapsibleCard";
import { appTheme } from "./themes/theme";
import * as collapsibleCardData from './data/CollapsibleCard.json'
import * as collapsibleCardGroupData from './data/CollapsibleCardGroup.json'
import CollapsibleCardGroup, { CollapsibleCardGroupProps } from "./components/CollapsibleCardGroup";

function App() {
  return (
    <div style={{backgroundColor: "#e5e5e5", minHeight: "100vh"}}>
      <ThemeProvider theme={appTheme}>
        <div style={{ padding: "25px" }}>
          <CollapsibleCard {...collapsibleCardData as CollapsibleCardProps} />
        </div>
        <div style={{ padding: "25px" }}>
          <CollapsibleCardGroup {...collapsibleCardGroupData as CollapsibleCardGroupProps} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
