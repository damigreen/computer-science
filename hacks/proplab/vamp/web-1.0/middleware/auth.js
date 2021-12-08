export default ({ redirect, route, store }) => {

    console.log(route)

    if (store.state.auth.isAuthenticated == true) {
        return true;
    }
}