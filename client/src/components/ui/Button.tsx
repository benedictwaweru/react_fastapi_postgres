import { buttonVariants } from "../../constants/buttonVariants";

interface ButtonProps {
	title: string;
	onClick: () => void;
	type?: `submit` | `reset` | `button` | undefined;
	size?: `sm` | `md` | `lg` | `icon`;
	variant?: `primary` | `secondary` | `ghost` | `destructive`;
}

export const Button = ({ title, onClick, type, size, variant }: ButtonProps) => {
	return (
		<button type={type} onClick={onClick} className={buttonVariants({ variant, size })}>{title}</button>
	);
}