import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";

export default function() {
	const mainStore = MainStore;
	const loginForm = LoginStore;

	return {
		loginForm,
		mainStore,
	};
}
