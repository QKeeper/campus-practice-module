import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="*" element={<Homepage />} />
		</Routes>
	);
};

export default AppRouter;
