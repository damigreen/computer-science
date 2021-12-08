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

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// });
Route.get('/', async ({ view, response }) => {
  return response.json({
    status: true,
    message: "God is good"
  });
});

/**
 * Users
 */
// Route.group(() => {
//   Route.get("/", "UsersController.index").as("index").namespace("App/Controllers/Http/Users")

//   // Route.get("/:id?", "UsersController.show").as("show")
//   Route.get("/:id", "UsersController.show").as("show")

//   Route.get("/new", "UsersController.create").as("create")

//   Route.post("/", "UsersController.store").as("store")

//   Route.post("/:id/edit", "UsersController.edit").as("edit")

//   Route.put("/", "UsersController.update").as("update")

//   Route.delete("/:id", "UsersController.destroy").as("delete")
// }).prefix("/users").as("users.")

Route.resource("users", "UsersController")
  .namespace("App/Controllers/Http/Users")
// .as()
// .middleware

Route.resource("projects", "ProjectsController");

/**
 * Gatepass Callbacks
*/
Route.post("resident/assigned", "GatepassCallbackController.assign")
  .prefix("callbacks")
  .namespace("App/Controllers/Http/CallBacks");

Route.post("request/approved", "GatepassCallbackController.approve")
  .prefix("callbacks")
  .namespace("App/Controllers/Http/CallBacks");

Route.post("webhook/approve", "WebhooksController.approve");
Route.post("webhook/job-started", "WebhooksController.started");
Route.post("webhook/job-completed", "WebhooksController.completed");

Route.post("message/send", "MessagesController.send")