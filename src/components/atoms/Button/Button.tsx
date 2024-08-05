import { Button as RadixButton } from "@radix-ui/themes"
import "./Button.css"

type ButtonProps = {
	children?: string
}

const Button = ({ children }: ButtonProps) => {
	return (
		<RadixButton
			type="button"
			variant="solid"
			radius="full"
			className={`button button--dark-mode`}
			data-theme-toggle
			aria-label="turn dark mode on"
		>
			{children}
		</RadixButton>
	)
}

export default Button
