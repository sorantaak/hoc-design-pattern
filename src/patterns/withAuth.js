export default function withAuth(Component) {
	let auth = true;
	if (auth) {
		return (props) => <Component auth={true} {...props} />;
	}

	return (props) => <h2> you are not access</h2>;
}
