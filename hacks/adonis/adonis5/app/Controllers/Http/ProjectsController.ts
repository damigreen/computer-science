import User from 'App/Models/User';
import Status from 'Contracts/status';
import Database from '@ioc:Adonis/Lucid/Database';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'
import ProjectValidator from 'App/Validators/ProjectValidator';

export default class ProjectsController {
  public async index({ response }: HttpContextContract) {
    // const projects = await Project.query().where("statusId", Status.IDLE)
    const projects = await Project.findMany([1, 4])

    return response.json({ projects })
  }

  public async create({ }: HttpContextContract) {
  }

  public async store({ request, response }: HttpContextContract) {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    let payload = await request.validate(ProjectValidator)
    const {name, description } = payload

    // const project = new Project();
    // project.name = "Model Example 1";
    // await project.save();

    const user1 = await User.findOrFail(1)
    const user2 = await User.findOrFail(2)

    const project = await Project.create({ name: name, description });

    // Attach users to project
    // await project.related("users").attach([user1.id, user2.id]);
    await project.related("users").attach({
      [user1.id]: { role_id: 1 }
    });

    await project.related("tasks").create({
      name: "Welcome to your new task",
      createdBy: user1.id,
      assignedTo: user2.id
    });

    // const project = await Database.table("projects").insert({ name })
    // const project = await Database.insertQuery().table("projects").insert({ name })
    // const project = await Database.insertQuery().table("projects").multiInsert([ name ])
    // const project = await Project.firstOrCreate({ name: "My Example Project", description: "Example descrtiption" })
    // const project = await Project.updateOrCreate({ name: "My Example Project" }, { name: "My Example Project", description: "Example descrtiption" })

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

    // const project = await Database.from("projects").where("createdAt", "<=" DateTime.local().toSQL()).firstOrFail();
    // const project = await Database.from("projects").where("createdAt", "LIKE", "Damilola").firstOrFail();
    // const project = await Database.from("projects").where("createdAt", "LIKE", "Damilola%").firstOrFail(); //starts with Damilola
    // const project = await Database.from("projects").where("createdAt", "LIKE", "%Damilola%").firstOrFail(); //contains Damilola
    // const project = await Database.from("projects").where("id", params.id).firstOrFail();
    // const project = await Database.from("projects")
    //   .where("name", "My project 2")
    //   // .orWhere("status_id", 2)
    //   // .orWhereNot("status_id", 2)
    //   // .where("name", "My project 5")
    //   .where(query => query.where("status_id", 1)) // AND OR statement

    const ids = [3,4,5]
    // const project = await Database.from("projects").whereIn("id", ids).orderBy("name", "asc")
    // const project = await Database.from("projects").where("status_id", 1).orderBy("name", "asc").limit(2)
    // const project = await Database.from("projects").where("status_id", 1).orderBy("name", "asc").count("*")
    // const project = await Database.from("projects").where("status_id", 1).orderBy("name", "asc").count("* as total")
    // const project = await Database.from("project_task").orderBy("name", "asc").count("* as total")
    // const project = await Database.from("project_task").sum("sort_order as Sum")
    // const project = await Database.from("project_task").avg("sort_order as Avg")
    // const project = await Database.from("project_task").min("sort_order as minSort")
    // const project = await Database.from("projects").where("role_id", 1).select(["id", "name"])
    // const project = await Database.from("projects").where("role_id", 1).select(["id", "name"]).groupBy(["user_id", "role_id"])
    // const project = await Database.from("projects").where("role_id", 1).distinct("user_id");
    // const statusFilter = 2;
    // const project = await Project.query().if(statusFilter, query => query.where("status_id", statusFilter)).where("user_id", 1)
    const project = await Project.query().paginate(2, 100)

    return response.json({ project })
  }

  public async edit({ }: HttpContextContract) {
  }

  public async update({ request, response, params }: HttpContextContract) {
    const data = request.only(["name", "description"]);
    const project = await Project.findOrFail(params.id);

    const user1 = await User.findOrFail(1);
    const user2 = await User.findOrFail(2);

    await project.related("users").detach([user2.id]);

    await project.related("users").sync({
      [user1.id]: { role_id: 1},
      [user2.id]: { role_id: 2},
    });

    // project.name = request.input('name');
    // project.description = request.input('description');
    // const project = await Database.from("projects").where("id", params.id).update(data);

    project.merge(data);
    await project.save();

    return response.json({ project })
  }

  public async destroy({ response, params }: HttpContextContract) {
    // const project = await Project.findByOrFail("id", params.id)
    // await project.delete();

    const project = await Database.from("projects").where("id", params.id).delete();

    await response.json({ project })
  }
}
