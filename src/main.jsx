import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout.jsx';
import NotFound from './routes/NotFound.jsx'
import CreateCrewmate from './routes/CreateCrewmate.jsx';
import ViewCrewmates from "./routes/ViewCrewmates.jsx";
import EditCrewmate from './routes/EditCrewmate.jsx';
import DetailView from './routes/DetailView.jsx';


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<App />} />
					<Route path="/create" element={<CreateCrewmate />} />
					<Route path="/gallery" element={<ViewCrewmates />} />
					<Route path="/edit/:id" element={<EditCrewmate />} />
					<Route path="/crewmate/:id" element={<DetailView />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
