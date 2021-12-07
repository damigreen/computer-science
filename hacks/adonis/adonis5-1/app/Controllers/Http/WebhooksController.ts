// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WebhooksController {
    public async approve({ request, response }) {
        console.log("getting request ---->")
        console.log(request.all())

        return response.json({
            status: true
        })
    }
}
