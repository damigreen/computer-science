/**
 * * Query many to Many Relationships Lucid
 * Customers
    * projects - hasMany: a customer has many projects
 * Project
    * customer - belongsTo: A project belongs to a single customer
    * tasks - hasMany: A project has many tasks assigned it
 * Task
    * project - belongsTo: A task belongs to a project
 * Token
 * User
 * 
 */