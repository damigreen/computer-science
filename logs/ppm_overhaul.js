/**
  * TODO

  * * Add send to next cycle functionality
  * add a flag of pospone in job_schedule_status table in db
  * generate maintenance cycle
  * change start date to next cycle date
    * calculate next due date
  * 
  * 
  * 
  * * Create a job_schedule work_request relationship table
    * Use it to filter job_schedule without request
    * then scope cycles.schedule by schedule_id / work_request
    * ! make appropriate changes to UI (status page)
    * ? updata jobScedules and sync maintenanceCycleIds
    * 
  *
  * * PPM Flow
    * generateMaintenaceCycle -
        * generate maintenanceCycle when jobSchedule is created(stored)
        * event - maintenance/jobSchedule/started
        * listener - "Maintenance/JobSchedule.generateMaintenanceCycle"
        * trigger - jobScheduleController.store

    * restartJobSchedule -
        * triggers after work request completed
        * event - "maintenance/workRequest/jobCompleted"
        * listener - "Maintenance/JobSchedule.restartJobSchedules"
        * trigger - WorkRequestController.completeJob

          * generateMaintenanceCycle - 
            * event - "maintenance/jobSchedule/started"
            * listener - "Maintenance/JobSchedule.generateMaintenanceCycle"
            * trigger - jobScheduleController.store

    * generateWorkRequest - 
        * event - "maintenance/maintenanceCycle/due"
        * listeners - "Maintenance/MaintenanceCycle.generateWorkRequest"
        * tasks - createRoutineRequest.handle
        
  * * Data
    maintnenancePlan:  {
      "id": 1,
      "name": "fixing cars ",
      "code": "FFM/PPM/1",
      "description": "fix all cars ",
      "frequency": 1,
      "time_to_reminder": 1,
      "frequency_measurement_id": 5,
      "reminder_measurement_id": 5,
      "organization_id": 1,
      "created_by": 1,
      "created_at": "2021-02-15 17:00:03",
      "updated_at": "2021-02-15 17:00:03",
      "deleted_at": null,
      "maintenance_plan_scope_id": 1,
      "frequencyMeasurement": {
        "id": 5,
        "name": "Week(s)",
        "code": "weeks",
        "active": 1,
        "measurement_type_id": 2
      }
    }

    jobSchedules: {
      "id": 4,
      "code": "FFM/JOB-SCH/3",
      "started_at": 1628899200,
      "current_cycle_count": 1,
      "unit_id": 1,
      "maintenance_plan_id": 5,
      "organization_id": 1,
      "created_by": 1,
      "created_at": "2021-08-14 16:26:57",
      "updated_at": "2021-08-14 16:26:59",
      "deleted_at": null,
      "job_schedule_status_id": 1,
      "cycles": {},
      equipmentList: {},
      plans: {}

    maintenanceCycle: {
      "id": 4,
      "cycle_count": 1,
      "due_at": 1636156800,
      "reminder_sent_at": null,
      "work_request_created_at": null,
      "work_request_completed_at": null,
      "job_schedule_id": 4,
      "organization_id": 1,
      "created_by": 1,
      "created_at": "2021-08-14 16:27:00",
      "updated_at": "2021-08-14 16:27:00",
      "deleted_at": null,
      "schedule": {},
      "plan": {}

  * * Relationships
    * jobSchedule - maintenanceCycle (hasMany)
    * maintenanceCycle - jobSchedule (belongsTo)
    * maintenancePlan - maintenanceCycle (manyThrough)
    * jobSchedule - workRequest (beleongsToMany)

  * * Thoughts
    * a jobSchedule has many manitenanceCycles
    * a schedule is generated after a plan is created 
    * generate cycle after schedule is created - [generateMaintenanceCycle]
    * work request is generated for each maintenance cycle
      * Restart jobSchedule after work request is completed
        * generate a new cycle for the schedule
          * generate a new work request
    
  * * Illustration
    * jobSchedule - paint fence
      * cycle 1
        * work request generated
        * request completed
        * restart schedule
*/

// change work_request_created_at to '9999' for cycle 2
var cycles = [
  {
    id: 25,
    cycle_count: 1,
    due_at: 1629849600,
    reminder_sent_at: null,
    work_request_created_at: 'XX',
    work_request_completed_at: null,
    job_schedule_id: 23,
    organization_id: 1,
    created_by: 1,
    created_at: '2021-09-03 15:40:34',
    updated_at: '2021-09-03 15:40:34',
    deleted_at: null
  },
  {
    id: 25,
    cycle_count: 2,
    due_at: 1629849600,
    reminder_sent_at: null,
    work_request_created_at: null,
    work_request_completed_at: null,
    job_schedule_id: 23,
    organization_id: 1,
    created_by: 1,
    created_at: '2021-09-03 15:40:34',
    updated_at: '2021-09-03 15:40:34',
    deleted_at: null
  }
]

for (var cycle of cycles) {
  if (cycle.work_request_created_at == null) {
    cycle.work_request_completed_at = '99'
  }
  console.log(cycle)
}