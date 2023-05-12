import React from 'react'
import './dashboard.css'
import Header from '../../components/Header'
import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../theme";
import Team from '../Students';
import LineChart from "../../components/LineChart";
import PieChart from '../../components/PieChart';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
            <div className="row">
                <div className="row-card" style={{ backgroundColor: `${colors.primary[400]}` }}>
                    <div className='img-box' style={{ backgroundColor: "#f3e5f5" }}>
                        <img src={`../../assets/class2.png`} alt="" />
                    </div>
                    <Typography
                        variant='h4'
                        color={colors.greenAccent[500]}
                        fontWeight="800">
                        35000
                    </Typography>
                    <Typography
                        variant='h6'
                        color={colors.gray[100]}>
                        Total Students
                    </Typography>
                </div>
                <div className="row-card" style={{ backgroundColor: `${colors.primary[400]}` }}>
                    <div className='img-box' style={{ backgroundColor: "#e1f1ff" }}>
                        <img src={`../../assets/shopping-list.png`} alt="" />
                    </div>
                    <Typography
                        variant='h4'
                        color={colors.greenAccent[500]}
                        fontWeight="800">
                        19050
                    </Typography>
                    <Typography
                        variant='h6'
                        color={colors.gray[100]}>
                        Total Exams
                    </Typography>
                </div>
                <div className="row-card" style={{ backgroundColor: `${colors.primary[400]}` }}>
                    <div className='img-box' style={{ backgroundColor: "#fff2d8" }}>
                        <img src={`../../assets/mortarboard.png`} alt="" />
                    </div>
                    <Typography
                        variant='h4'
                        color={colors.greenAccent[500]}
                        fontWeight="800">
                        23890
                    </Typography>
                    <Typography
                        variant='h6'
                        color={colors.gray[100]}>
                        Garduate Studes
                    </Typography>
                </div>
                <div className="row-card" style={{ backgroundColor: `${colors.primary[400]}` }}>
                    <div className='img-box' style={{ backgroundColor: "#ffeaea" }}>
                        <img src={`../../assets/money.png`} alt="" />
                    </div>
                    <Typography
                        variant='h4'
                        color={colors.greenAccent[500]}
                        fontWeight="800">
                        $2102050
                    </Typography>
                    <Typography
                        variant='h6'
                        color={colors.gray[100]}>
                        Total Income
                    </Typography>
                </div>
            </div>
            <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr));"
                gridAutoRows="140px"
                gap="20px"
                marginTop="1rem">
                <Box
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}>
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.gray[100]}
                            >
                                Class Records
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                3 Classes
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.gray[100]}
                        p="15px"
                    >
                        <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
                            Student Records
                        </Typography>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <PieChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
            <Team />
        </Box>
    )
}

export default Dashboard