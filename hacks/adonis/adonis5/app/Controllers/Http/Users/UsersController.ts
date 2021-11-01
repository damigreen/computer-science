import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersService from 'App/Services/UsersService';
import Mail from '@ioc:Adonis/Addons/Mail';
import mailConfig from 'Config/mail';

export default class UsersController {
    public async index ({ response, view }: HttpContextContract) {
        // await Mail.send((message) => {
        //     message
        //       .from(mailConfig.sender)
        //       .to("fashfired@gmail.com")
        //       .subject("Testing mailgun!!!")
        //       .htmlView("users")
        //   }).catch(error => console.log(error))
        // console.log('message sent')
        console.log('message sent')

        // return view.render("users");
        response.json({ userNamespace: "God hand will be with me always" });
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