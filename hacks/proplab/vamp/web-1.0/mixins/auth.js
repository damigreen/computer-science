export default {
    computed: {

    },
    methods: {
    },
    layout({ store }) {

        const layoutMap = {
            SYS: "admin",
            CLI: "client"
        }

        var layout = "", 
            layoutIndex = 0;

        // return layout;
        // return "client";
        return "admin";
    }
}