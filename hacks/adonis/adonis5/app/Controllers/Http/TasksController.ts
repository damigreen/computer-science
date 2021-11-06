import Status from 'Contracts/status';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Task from 'App/Models/Task';

export default class TasksController {
  public async index ({}: HttpContextContract) {
    // Database Module Query
    // create SQL Query;
    // SELECT * from tasks WHERE status_id = 1
    const tasksDb = await Database.from("tasks").where("status_id", Status.IDLE).select("*");
    
    // Data Model Query
    // create SQL Query;
    // SELECT * from tasks WHERE status_id = 1
    const tasksModel = await  Task.query().where('statusId', Status.IDLE).select("*");
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
