import { saveAs } from "file-saver";

export const exportCSV = (data) => {
  const csvData = data.map((row) => Object.values(row).join(",")).join("\n");
  const blob = new Blob([csvData], { type: "text/csv" });
  saveAs(blob, "data.csv");
};
