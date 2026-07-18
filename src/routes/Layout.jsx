import { Outlet, Link } from "react-router";
import Background from "../components/Background";

const Layout = () => {
	return (
		<div className="layout">
			<Background></Background>
			<div className="sidebar">
				<Link className="navlink" to="/">
					Home
				</Link>
				<Link className="navlink" to="/create">
					Create a Crewmate!
				</Link>
				<Link className="navlink" to="/gallery">
					Crewmate Gallery
				</Link>
			</div>
			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
