/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

Route.get('/', async ({ view }) => {
  return view.render('welcome')
});

/**
 * Users
 */
Route.group(() => {
  Route.get("/", async ({ view }: HttpContextContract) => {
    // console.log(ctx)
    return view.render("users");
  }).as("index")

  Route.get("/:id?", async ({ response, params }: HttpContextContract) => {

    // return ctx.response.json({ userId: ctx.params.id });
    return response.json({ userId: params.id });
  }).as("show")

  Route.post("/", async (ctx: HttpContextContract) => {

  }).as("store")

  Route.put("/", async (ctx: HttpContextContract) => {

  }).as("update")

  Route.delete("/:id", async (ctx: HttpContextContract) => {

  }).as("delete")
}).prefix("/users").as("users.")

/**
 * Gatepass Callbacks
*/
Route.post("resident/assigned", "GatepassCallbackController.assign")
  .prefix("callbacks")
  .namespace("App/Controllers/Http/CallBacks");

Route.post("request/approved", "GatepassCallbackController.approve")
  .prefix("callbacks")
  .namespace("App/Controllers/Http/CallBacks");
