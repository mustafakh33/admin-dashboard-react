import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Team from './pages/Team/Team.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import Invoices from './pages/Invoices/Invoices.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import BarChart from './pages/BarChart/BarChart.jsx';
import PieChart from './pages/PieChart/PieChart.jsx';
import LineChart from './pages/LineChart/LineChart.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Geography from './pages/Geography/Geography.jsx';
import Form from './pages/Form/Form';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
