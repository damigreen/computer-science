/**
 * * Adonis5
 * 
 * Migrations
        users                tasks           projects
        id                    id                id
        username              name              name
        password              descrtiption      description
        remember_me_token     due_at            satus_id
                              created_by
                              assigned_to
                              status_id

    project_users               project_tasks
        id                          id
        project_id                  project_id
        user_id                     task_id
        role_id                     sort_order

        -------------------------------------------------------------------

        ENUMS

            Role                    Status
                member                  idle
                admin                   in_progress
                                        complete
  *
  *
  * 

 */