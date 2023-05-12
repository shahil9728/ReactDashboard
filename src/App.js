import './App.css';
import React from "react";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider} from '@mui/material';
import { useMediaQuery } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/Navbar/Topbar'
import Sidebar from './scenes/Navbar/Sidebar1';
import Dashboard from './scenes/dashboard'
import Team from './scenes/Students'
import Contacts from './scenes/Contacts'
import Form from './scenes/NewAdmission'
import Calendar from './scenes/Timetable'
import Bar from './scenes/ClassProgress'
import Pie from './scenes/StudentRecords'
import Line from './scenes/ClassRecords'

function App() {
  const [theme, colorMode] = useMode();
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
