function Footer() {
	return (
		<footer
			style={{
				position: "absolute",
				bottom: 0,
				left: 0,
				right: 0,
				display: "flex",
				justifyContent: "center",
				padding: "10px"
			}}
		>
			<p>
				<small>
					<strong>&copy; {new Date().getFullYear()}</strong>
				</small>
			</p>
		</footer>
	)
}

export default Footer
