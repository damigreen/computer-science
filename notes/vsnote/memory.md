# Memory

## List

### Week 0

- javascript string accessing
  - `.charAt(index)`
  - `.substring(starIndex, endIndex)`

- javascript string comparirison
  - `> < >= <=`

- javascript string decomposition
  - `.split()`

- javascript string Replacement
  - `.replace()`

- Regular Expression [Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  - RegExp
    - optional match setting (3)
    - `search()` - test for matches
    - `match()`
  - JavaScript String Object
    - `exec()` - test - first match
    - `test()` - test - true / false

- Basic Regex
  - start of line
  - end of line
  - finding digits
  - Finding characters between brackets / not between brackets
  - Find digits betwween a bracket / not between the bracket
  - Find alternatives specified

- Importance of regex (39)
  - any numeric character
  - only numeric character
  - Alpha numeric characters
  - query string

- Encoding
  - base64 Encoding ascii string
  - btoa() - characters -bytes
  - atob()

- String Shortening*****
  - explain process of url shortening
    - integer based id
    - shortend string

- Slot
  - API

- Searching and Sorting
  - Techniques used
  - Searching [technique used, sorted, unsorted]
    - Linear search [sequentially, ]
    - Binary search [check, sorted data, desired value, greater of less middle value, upper half, middle half, dividing, two sections]
  - Sorting (advantages, locate, faster, easier, naive, efficient, trade-offs)
    - Bubble Sort [simplest, iterate, swap, bigger than other, entire, swap function, switches, worst, possible pair]
    - Algorithms steps
    - Selection Sort [scanning, inserting, current position, one for loop, nested for loop, scan, get minimum element]
  
## Notes

### Docker tutorial for beginners

#### Docker tutorial for beginners - Timelines

    43.10, 52.00, 56.49, 56,19, 1:01:00, 01:03:09, 01:05:09, 01:07:24, 01:13:00, 01:31:00, 01:35:47, 01:57:49

### Single Sign On

- Login to account session
- Return token from api
- on the frontend setToken for Authorization
- Redirect to the dashboard

[IOT Login](https://accounts.datoms.io/login)
Username: demo12@iobotech.com
Password: 123456

    {
        email_id: "demo12@iobotech.com",
        password: "123456",
        source: "website",
        source_id: 1,
        target:
          "https://app.datoms.io/enterprise/1083/dg-monitoring/detailed-view/?thing_id=7284",
    }

### Termii Integration with Vamp

### Google Cloud Platform SimpliLearn

What is cloud computing - It is the use of hardware and software components to deliver a service to a network.
Users can also acces the files and application from any device that can access the internet.

cloud providers privide access to resources e.g computing, memory, storage

### Adonis 5 -JAGR

    @column()
    public description?: string

    @column.dateTime({ autoCreate: true })
    public createdAt

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt

    @hasMany(() => Task, {
      localKey: "createdBy"
    })
    public tasks: hasMany<typeof Task>

    @hasMany(() => User, {
      foreignKey: "createdBy"
    })
    public creator: hasMany<typeof Task>

`build` - compile typescript
`invoke` - get instructions for installing new modules with adonis project
`serve` - Serve application

Users can create many tasks tasks belongs to a user

    Migrations
          Users                Tasks           Projects

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

### MailChimp integration

host: smtp.mandrillapp.com
You can use any active API key for your account as your SMTP password.
but we recommend using your Mailchimp account’s primary contact email as the username.
Use ports 25, 587, or 2525 for non-encrypted communication between your system and Mailchimp Transactional.
For secure SSL connections, use port 465.
Make sure your hosting provider or ISP allows outbound SMTP connections.

### Gatepass Vamp Callbacks

    https://us-central1-gatepass-test-environment.cloudfunctions.net/api/vampfi/callback/request/approved

    select * from system_functions;
    select * from system_entities;
    select * from system_entity_params;
    select * from system_event_triggers;
    select * from system_events;
    select * from system_event_web_hook;
    select * from web_hooks;

    select * from web_hook_params;
    select * from web_hooks;
    select * from system_entities;
    select * from system_entity_params;
    select * from web_hooks where id=8;


    select * from work_requests;
    select * from client_requests;
    select * from equipment_criticalities;
    select * from work_request_items;
    select * from materials;

    ------------------------------------------------------------

    select * from users;
    select * from residences;
    select * from requests;
    select * from request_statuses;
    select * from request_logs;
    select * from messages;
    select * from estates;
    select * from chat_groups;
    select * from chat_group_user;
    ----------------------------------------------------------------

    select * from users;
    select * from stages;
    select * from requests;

    ------------------------------------------------------------------------------

    select * from users;
    select * from occupants;
    select * from unit_hierarchies;
    select * from units;

[CallBack Route](http://127.0.0.1:3333/callbacks/request/approved)

### Work on ppms

- [] create a new **relationship table** between **cycles** and **schedules**
  - [] use relationship on the frontend
- [] create a new **relationship table** between **cycles** and **work_request**

- [x] Work on PPM **frontend**
  - Add links to **location**
  - Fix for both landmark and landwey

- [x] Work on **ppm backend**

- [x] Make reject button work

- Learn how the **ppm** works, study the **flow** of the ppm or better yet **create** a new flow

### Fix sales order on live version of landmark server

`components/hagul/dashboard/request.vue`
`pages/hagul/index`

    data
      requests: {
        code,
        workRequests,
        salesOrder,

      }

- On work request delivery clicked, a **sales order** is generated

      <span style='color:red'>Remove !!! Remove !!! Remove !!! Remove !!!</span>

### Fix the delete user issue on loadstat

I took the dates of all the pending ad campaign ignorant and those from the running and approved 

### Toptal video

- Make a **record** for toptal **video**
  - Record a Video

    To kick off the screening process, please introduce yourself in a short 4 to 7-minute recording. This is an opportunity for us to get to know you better, learn about your skills and career highlights, and gauge your ability to communicate clearly and professionally in English.

    In your video, please respond to the following questions:

        - What was the last project you worked on? How did you contribute to it?
        - How many years of professional experience do you have in software development or QA?
        - What are your strongest skills in terms of technologies and programming languages?

    You can record straight from your browser – no app installation necessary.

    Please note that you can review and re-record your audio multiple times before submitting it.

## Vocabulary

- format (ing, ted) [specified format]
- represent (ted, ing, s)
- perform
- After
- treat

## Algorithms

### String Shortening
