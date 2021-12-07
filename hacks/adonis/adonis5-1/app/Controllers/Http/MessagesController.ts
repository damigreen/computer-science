// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require("axios");

export default class MessagesController {
    public async send({ request, response }) {
        var data = {
            "to": "+2349017755801",
            "from": "proplab01",
            "sms": "Hi there, testing Termii",
            "type": "plain",
            "channel": "generic",
            "api_key": "TLxrc7GYAwYl4CSiFhauPCCosm8nwmuxdXXj1Z7IV13VHIPjRD42flY2WAxtZ5",
        };
        const config = {
            method: "post",
            url: "https://termii.com/api/sms/send",
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios(config).then(res => console.log(res)).catch(e => console.log(e));

        response.json({
            status: true,
            message: "God is good"
        });
    }
}
