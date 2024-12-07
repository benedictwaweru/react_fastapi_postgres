import { cva } from "class-variance-authority";

export const inputVariants = cva(
	'',
	{
		variants: {
			variant: {
				textInput: '',
				calendar: ''
			},
			size: {
				sm: '',
				md: '',
				lg: ''
			}
		},
		defaultVariants: {
			variant: 'textInput',
			size: 'md'
		}
	}
);