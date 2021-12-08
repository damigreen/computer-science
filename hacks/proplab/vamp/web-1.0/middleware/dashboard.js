export default ({ store, redirect }) => {
    // check if user is authenticated

    const roleCode = store.state.auth.user.roles.map(role => role.code);
    if (roleCode.includes("SYS")) return redirect("/dashboard/admin")
    if (roleCode.includes("CLI")) return redirect("/dashboard/client")
}