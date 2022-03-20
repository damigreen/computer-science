// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WebhooksController {
    public async assign({ request, response }) {
        console.log("user assigned >>--------s---->")
        console.log(request.all())

        return response.json({
            status: true
        })
    }

    public async approve({ request, response }) {
        console.log("job approved >>--------s---->")
        console.log(request.all())

        return response.json({
            status: true
        })
    }
    
    public async started({ request, response }) {
        console.log("job started >>------------>")
        console.log(request.all())

        return response.json({
            status: true
        })
    }

    public async completed({ request, response }) {
        console.log("job completed >>------------>")
        console.log(request.all())

        return response.json({
            status: true
        })
    }
}
