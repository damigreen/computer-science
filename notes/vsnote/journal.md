# Journal

## 25-05-22:: Wednesday

- user account relationship
  - [x] model relationship
  - [ ] controller relationship
    - [ ] index
    - [ ] update

- create table for **customers**

- add change_account_name to account controller

- customer
  - 

## 24-05-22:: Tuessay

```javascript
associations = [],
      byStatusCodes = [],
      byUnitId = null,
      byUserId = null,
      byOrganizationId = null,
      byEquipmentIds = [],
      byJobScheduleIds = [],
      page = 1,
      perPage = 100,
      rangeBy = null,
      rangeFrom = null,
      rangeTo = null,
      search = null,
      sortBy = "name",
      sortOrder = "asc"
```

- pending job status
  - [1, 3, 5, 6, rd-7, ]

- approved job status
  - [26]

- completed job status
  - [15, 17, 19, rated]

## 23-05-22:: Monday

- create systems logic
- system

- create account logic
- use user seeders for account

- account
- relationship
  - user
  - transactions...
  
- account
  - name
  - account_unique_id
  - type
    - debit account
    - credit account
  - user_id
  - account_type_id
  
- account_type
  - name
  - code
  - descrption

- current
- type
- Cash Account
- Income Account
- Expense Account
- Liabilities
- Equities

```sql
select * from system_alerts;
select * from system_entities;
select * from system_entity_params;
select * from system_events;
select * from system_functions;
select * from system_event_web_hook;
select * from system_event_triggers;
select * from insufficient_quotations_flags;
select * from work_requests;
select * from client_requests;
```

- scope user by roles

## 22-05-22:: Sunday

- ppm update
  - add start cycle(job) end job(cycle) to ppm

```javascript
// console.log(solve(arr, query2));
// console.log(solve(arr, query3));
// console.log(solve(arr, query4));
// console.log(solve(arr, query5));
```

- $argon2id$v=19$t=3,m=4096,p=1$AN1c0tnmiHGUMrYlElGbrg$sUlsyPmKENcUaNs1yQeXOEufeCs3ssvF3E9jvV+QpmM
- $argon2id$v=19$t=3,m=4096,p=1$iwS0tLDve/8OGmvUQ0q0Sg$jqUT0PM1PdeI333Tnm35F4m5ZLcq1z+8EkQlgnEFSv4

## 20-05-22:: Friday

- test email verification
- scope user by_user

- verify and reset logic
  - get the parameters
    - code
  - password
  - get user to verify
  - change the used field to true
  - hash password
  - save user
  
- test delete schedule in unit
- test ppm creation
- test maintenance plan create api

- adonisjs validator
  - `schema.create({})`
  - `schema.string()`, `schema.number()`
  - `rules`
  


## 19-05-22:: Thursday

- resources\views\emails\auth\reset-code.edge

```javascript
import Event from '@ioc:Adonis/Core/Event';
/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

["People/User/SendWelcomeMail"].forEach(listener => {
    Event.on("user/created", listener)
})

import type { EventsList } from '@ioc:Adonis/Core/Event'
import { webAppUrl } from './../../../config/app';
import mailConfig from 'Config/mail';
import Mail from '@ioc:Adonis/Addons/Mail';


export default class SendResetCode {
    /**
* [ ] create email verification logica
  * [ ] register new event listner on the events file
  * [ ] send user, reset_code, type as a parameter to event listener
  * [ ] write email template
  * [ ] send email logic
 */
    public async send({ user, resetCode, type }: EventsList["password/reset-code-generated"]) {
        await Mail.send(message => {
            message
                .from(mailConfig.sender)
                .to("fashfired@gmail.com")
                .subject("Welcome to Foxwire")
                .htmlView("emails/people/welcome", { user, webAppUrl })
        })
    }
}
```

_email-verification
  =======================================                 =======================================
  | forgot password?                    |                 | Password Reset                      |
  |                                     |                 |                                     |
  |                                     |                 | enter your email                    |
  |                                     |                 |        [send password reset link]   |
  | <--back                             |                 | <--back                             |
  =======================================                 =======================================

- user and account relationship
  - one to many relationship

- Generate **account** for every user **created**

- restrict reset_code to 30 mins

## 18-05-22:: Wednesday

`send code (password reset link)`
create password reset validator
validator/password/reset_code_validator
validate email / or phone
get user with email / phone
generate reset code
delete old reset code
create a new reset code
[ ] create email verification logic
[ ] register new event listner on the events file
[ ] send user, reset_code, type as a parameter to event listener
[ ] write email template
[ ] send email logic

```javascript
import { webAppUrl } from './../../../config/app';
import mailConfig from 'Config/mail';
import Mail from '@ioc:Adonis/Addons/Mail';
import type { EventsList } from '@ioc:Adonis/Core/Event'

export default class SendResetCode {
    /**
    * [ ] create email verification logica
      * [ ] register new event listner on the events file
      * [ ] send user, reset_code, type as a parameter to event listener
      * [ ] write email template
      * [ ] send email logic
     */
    async handle({ user, resetCode, type }: EventsList["password/reset-code-genereated"]) {
        console.log(user, resetCode, type);

        await Mail.send(message => {
            message
                .from(mailConfig.sender)
                .to("fashfired@gmail.com")
                .subject("Welcome to Foxwire")
                .htmlView("emails/people/welcome", { user, webAppUrl })
        })
        return 0;
    }
}

import Event from '@ioc:Adonis/Core/Event';
/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/


/**
 *  User
 */
["People/User/SendWelcomeMail"].forEach(listener => {
    Event.on("user/created", listener)
})

/**
 *  Auth
 */
["Auth/SendResetCode"].forEach(listener => {
    Event.on("password/reset-code-generated", listener)
})

```

## 16:05:22

* Always make sure you win at the game of words against anybody and any number of persons:: put this in quotes

* Bug on foxwire validation logic
  * not throwing validation errors

* Include features column in foxwire trello card**

* document all api as you are implementing them

### Foxwire api

#### send code logic (password reset link)

validate email, phone, type
get user of phone or email

```txt
  _password_reset
  =======================================                 =======================================
  | forgot password?                    |                 | Password Reset                      |
  |                                     |                 |                                     |
  |                                     |                 | enter your email                    |
  |                                     |                 |        [send password reset link]   |
  | <--back                             |                 | <--back                             |
  =======================================                 =======================================

  :mail
  =======================================                 =======================================
  | foxwire password reset              |                 | Verify reset code                   |
  | your password reset code is: 2345   |                 |                                     |
  |                                     |                 | enter your reset code               |
  |                                     |    =====>       | enter your new password             |
  |                                     |                 | confirm your new password           |
  |                                     |                 | <--back                             |
  =======================================                 =======================================

```


## 14:05:22

```txt

  _password_reset
  =======================================                 =======================================
  | forgot password?                    |                 | Password Reset                      |
  |                                     |                 |                                     |
  |                                     |                 | enter your email                    |
  |                                     |                 |        [send password reset link]   |
  | <--back                             |                 | <--back                             |
  =======================================                 =======================================

  :mail
  =======================================                 =======================================
  | foxwire password reset              |                 | Verify reset code                   |
  | your password reset code is: 2345   |                 |                                     |
  |                                     |                 | enter your reset code               |
  |                                     |    =====>       | enter your new password             |
  |                                     |                 | confirm your new password           |
  |                                     |                 | <--back                             |
  =======================================                 =======================================

```

- password reset
  - generate code
  - send code to mail
  - 

## 13:05:22

create login page for foxwire
create signup page for foxwire
create admin dashboard landing page for foxwire

design a new welcome page, login page, signup page etc.

- configure auth
  - go to adonisjs auth page

### foxwire Startup Process

- Start XAMP
- Load database
- Start server
- create migration for relationship
  - `check` relationships in notebook
- create relationship in model file and also
- modify the relationship in the pivot table model

## 19:04:22

### foxwire user controller

In case you need to use the getlogs method

```javascript
<button @click="getLogs()">btn</button>

getLogs() {
  console.log(this.fuelReadings);
},
```
