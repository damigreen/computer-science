# Timelines

## timetable

- [] Write your goals down - [Goals](Goals.md) - **07:00:00**

- [] Watch a **jagr** youtube video
- [] Study from **Javascript datastructures and algorithms**
- [] Create a subscription **reminder** timer feature
- [] Integrate **mailchimp** with **landwey** app for email notifications

- [] Write your goals down - [Goals](Goals.md) - **07:00:00**
- [] practice english for - [English](English.md) **07:30:00**
- [] Read a book - [Books](books.md)
- [] Start **blog** writing on writing file - [Writing](writing.md) - **21:00:00**

### 29:10:21

- [x] watch an adonisjs video on jagr channel - **11:45:00**
- [x] Finish the resido alert task - **15:00:00**
  - test the subscription feature and confirm the date works fine 
- [] Work on integratiing **mailchimp** with **landwey** - **XX:XX:XX**

- [] Write your goals down - [Goals](Goals.md) - **07:00:00**
- [x] practice english for - [English](English.md) **07:30:00**
- [x] Read a book - [Books](books.md)
- [] Start **blog** writing on writing file - [Writing](writing.md) - **21:00:00**

### 31:09:21

- [x] Remove **deleted schedules** from schedule **column**
- [x] Test **landmark** and **landwey** **send routine request** event listeners
- [x] **remove rejected** job schedules on **status page**
  - remove totaly
- [x] Test **scope by users** for client request / work request
- [] Study **systemFunctions** code under organizations

### XX:XX:XX

- start working on portfolio [Portfolio](projects.md)

## Notes

### Adonis 5 -JAGR

`build` - compile typescript
`invoke` - get instructions for installing new modules with adonis project
`serrve` - Serve application

### MailChimp integration

host: smtp.mandrillapp.com
You can use any active API key for your account as your SMTP password.
but we recommend using your Mailchimp account’s primary contact email as the username.
Use ports 25, 587, or 2525 for non-encrypted communication between your system and Mailchimp Transactional.
For secure SSL connections, use port 465.
Make sure your hosting provider or ISP allows outbound SMTP connections.

### Gatepass Vamp Callbacks

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

## Learn

- [] learn
- [] Study **systemFunctions** code under organizations
- [] Study adonis scopes
- [] study adonis auth

## Links

- [Console](console.js)
- [English](English.md)
- [Goals](Goals.md)
- [Interview Questions](Interview-Questions.md)
- [Interview Questions](CS%20Docs.md)
- [Notes](notes.md)
- [Resources](resources.md)
- [Timeline](timeline.md)
- [Writing](writing.md)