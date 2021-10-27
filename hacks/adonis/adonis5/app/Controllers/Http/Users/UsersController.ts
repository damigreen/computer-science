import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersService from 'App/Services/UsersService';

export default class UsersController {
    public async index ({ response, view }: HttpContextContract) {
        
        // return view.render("users");
        response.json({ userNamespace: true });
    }
    public async show ({ request, response, params }: HttpContextContract) {
        const test = UsersService.test()
        const testAgain = UsersService.test1
        return response.json({ userId: testAgain, idUser: test });
        // return response.json({ userId: params.id})
    }
    public async create({ view }: HttpContextContract) {
        
        return view.render("users");
    }
    public async store({ view }: HttpContextContract) {
        
        return view.render("users");
    }
    public async edit({ view }: HttpContextContract) {
        
        return view.render("users");
    }
    public async update({ view }: HttpContextContract) {
        
        return view.render("users");
    }
    public async delete({ view }: HttpContextContract) {
        
        return view.render("users");
    }
}