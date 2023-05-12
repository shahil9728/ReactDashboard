import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../components/BarChart";

const ClassProgress = () => {
  return (
    <Box m="20px">
      <Header title="Class Progress" subtitle="Simple Class data" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default ClassProgress;