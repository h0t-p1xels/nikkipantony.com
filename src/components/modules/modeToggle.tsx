// Based on: https://ui.shadcn.com/docs/dark-mode/astro
import * as React from "react"
import { VscColorMode } from "react-icons/vsc"
import { Button } from "@/components/fragments/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/modules/dropdown-menu"

export function ModeToggle() {
	const [theme, setThemeState] = React.useState<
		"theme-light" | "dark" | "system"
	>("theme-light")

	React.useEffect(() => {
		const isDarkMode =
			document.documentElement.classList.contains("dark")
		setThemeState(isDarkMode ? "dark" : "theme-light")
	}, [])

	React.useEffect(() => {
		const isDark =
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)")
					.matches)
		document.documentElement.classList[
			isDark ? "add" : "remove"
		]("dark")
	}, [theme])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="hover:bg-ally-light-100 focus:bg-ally-light-100 data-[state=open]:bg-ally-light-100 dark:hover:bg-ally-key-black-900 dark:focus:bg-ally-key-black-900 dark:data-[state=open]:bg-ally-key-black-900 cursor-pointer"
				>
					<VscColorMode className="h-[1.5rem] w-[1.5rem] scale-100 transition-all" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => setThemeState("system")}
					className="hover:bg-ally-magenta-600 focus:bg-ally-magenta-600 hover:text-ally-light-50 focus:text-ally-light-50 dark:hover:bg-ally-magenta-600 dark:focus:bg-ally-magenta-600 dark:hover:text-ally-light-50 dark:focus:text-ally-light-50"
				>
					Auto
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setThemeState("theme-light")}
					className="hover:bg-ally-yellow-400 focus:bg-ally-yellow-400 hover:text-ally-key-black-950 focus:text-ally-key-black-950 dark:hover:bg-ally-yellow-400 dark:focus:bg-ally-yellow-400 dark:hover:text-ally-key-black-950 dark:focus:text-ally-key-black-950"
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setThemeState("dark")}
					className="hover:bg-ally-cyan-400 focus:bg-ally-cyan-400 hover:text-ally-key-black-950 focus:text-ally-key-black-950 dark:hover:bg-ally-cyan-400 dark:focus:bg-ally-cyan-400 dark:hover:text-ally-key-black-950 dark:focus:text-ally-key-black-950"
				>
					Dark
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
