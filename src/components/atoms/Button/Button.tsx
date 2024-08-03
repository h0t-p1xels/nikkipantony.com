import { Button as RadixButton } from "@radix-ui/themes"
import "./Button.css"

type ButtonProps = {
	icon: string
	children?: string
}

const Button = ({ icon: children }: ButtonProps) => {
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
