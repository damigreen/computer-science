import Status from 'Contracts/status';
import Database from '@ioc:Adonis/Lucid/Database';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectsController {
  public async index({ response }: HttpContextContract) {
    const projects = await Project.query().where("statusId", Status.IDLE)

    return response.json({ projects })
  }

  public async create({ }: HttpContextContract) {
  }

  public async store({ request, response }: HttpContextContract) {
    // const name = request.input('name')
    // const description = request.input("description")
    const name = request.only(['name', "description"])

    // const project = new Project();
    // project.name = "Model Example 1";
    // await project.save();

    // const project = await Project.create({ name: name });

    const project = await Database.insertQuery().table("projects").insert({ name })
    // const project = await Database.insertQuery().table("projects").multiInsert([ name ])

    return response.json({ project })
    // return  response.json({ name, description })
    // return  response.json({ name });
  }

  public async show({ params, response }: HttpContextContract) {
    const projects = await Project.query().where("id", params.id).firstOrFail();
    // const projects = await Project.query().where("id", params.id).first()

    return response.json({ projects })
  }

  public async edit({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
