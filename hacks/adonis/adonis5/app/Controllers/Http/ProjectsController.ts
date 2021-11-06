import Status from 'Contracts/status';
import Database from '@ioc:Adonis/Lucid/Database';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectsController {
  public async index({ response }: HttpContextContract) {
    // const projects = await Project.query().where("statusId", Status.IDLE)
    const projects = await Project.findMany([1, 4])

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
    // const project = await Project.query().where("id", params.id).firstOrFail();
    // const projects = await Project.query().where("id", params.id).first()
    // const project = await Project.find(params.id)
    // const project = await Project.findBy("id", params.id)
    // const project = await Project.findOrFail(params.id);

    const project = await Database.from("projects").where("id", params.id).firstOrFail();
    
    return response.json({ project })
  }

  public async edit({ }: HttpContextContract) {
  }

  public async update({ request, response, params }: HttpContextContract) {
    const data = request.only(["name", "description"])
    // const project = await Project.findOrFail(params.id);

    // project.name = request.input('name');
    // project.description = request.input('description');

    const project = await Database.from("projects").where("id", params.id).update(data);

    // project.merge(data);
    // await project.save();


    return response.json({ project })
  }

  public async destroy({ response, params }: HttpContextContract) {
    // const project = await Project.findByOrFail("id", params.id)
    // await project.delete();

    const project = await Database.from("projects").where("id", params.id).delete();


    await response.json({ project })
  }
}
