import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersService from 'App/Services/UsersService';
import Mail from '@ioc:Adonis/Addons/Mail';
import mailConfig from 'Config/mail';
import User from 'App/Models/User';

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
    public async store({ request, response }: HttpContextContract) {
        const user1 = {
            username: "testuser1",
            email: "testuser1@test.com",
            password: "test123"
        }
        
        const user2 = {
            username: "testuser2",
            email: "testuser2@test.com",
            password: "test456"
        }

        const users = await User.createMany([user1, user2])
        // const users = await User.find()

        return response.json({
            users
        })
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