import React from "react";
import ReactDOM from "react-dom";
import Stats from "./Stats/Stats";

const stats = [
  { id: "id-1", label: ".docx", percentage: 22 },
  { id: "id-2", label: ".pdf", percentage: 4 },
  { id: "id-3", label: ".mp3", percentage: 17 },
  { id: "id-4", label: ".psd", percentage: 47 },
  { id: "id-5", label: ".pdf", percentage: 10 },
];

ReactDOM.render(
  <Stats title="Upload stats" stats={stats} />,
  document.getElementById("root"),
);
