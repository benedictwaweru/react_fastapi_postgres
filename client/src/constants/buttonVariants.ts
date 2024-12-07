import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	'',
	{
		variants: {
			variant: {
				primary: '',
				secondary: '',
				ghost: '',
				destructive: ''
			},
			size: {
				sm: '',
				md: '',
				lg: '',
				icon: ''
			}
		},
		defaultVariants: {
			variant: `primary`,
			size: `md`
		}
	}
);