import { Box } from "@mui/material";
import Header from "../components/Header";
import LineChart from "../components/LineChart";

const ClassRecords = () => {
  return (
    <Box m="20px">
      <Header title="All Classes" subtitle="Class Competitions" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default ClassRecords;