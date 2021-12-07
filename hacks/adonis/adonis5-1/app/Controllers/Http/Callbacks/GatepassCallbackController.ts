// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GatepassCallbacksController {
    public async assign({ request, response }) {
        
        console.log('>>------------>Getting Request')
        console.log(request.all())

        return response.json({
            status: true,
            message: "God is Great"
        })
    }

    public async approve({ request, response }) {
        console.log('>>------------>Getting Request')
        console.log(request.all())

        return response.json({
            status: true,
            message: "God is Great"
        })
    }
}
