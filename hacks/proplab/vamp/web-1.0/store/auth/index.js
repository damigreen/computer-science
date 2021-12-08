export default {
    namespaced: true,
    state: () => ({
        appClass: null,
        isAuthenticated: true,
        // isAuthenticated: false,
        jwt: null,
        routeAfterLogin: "/",
        user: {
            name: "Damilola faseun",
            roles: [
                {name: "System Admin", code: "SYS"},
                // {name: "Client", code: "CLI"}
            ]
        }
    })
}