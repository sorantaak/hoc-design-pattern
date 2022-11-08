import withAuth from "../../patterns/withAuth";

function Panel({ auth, aaa = "2222" }) {
	console.log(auth, aaa);
	return <h2>User Panel {aaa}</h2>;
}

export default withAuth(Panel);
