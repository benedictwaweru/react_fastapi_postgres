import { inputVariants } from "../../constants/inputVariants";

interface InputProps {
	type: string;
	placeholder: string;
	variant?: `textInput` | `calendar`;
	size?: `sm` | `md` | `lg`;
}

export const Input = ({ type, placeholder, variant, size }: InputProps) => {
	return (
		<input type={type} placeholder={placeholder} className={inputVariants({ variant, size })} />
	);
}