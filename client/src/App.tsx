import { Button } from "./components/ui/Button";

export default function App() {
	const handleClick = () => {
		console.log(`Button Clicked`);
	}

	return (
		<Button variant="primary" title="Click Me" onClick={handleClick} />
	);
}