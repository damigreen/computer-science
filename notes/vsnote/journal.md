# Journal

## 30-06-22 :: Thursday

## 28-06-22 :: Tuesday

- {"devId":"493C220304030602","msgType":"aiValueRpt","data":{"AI1":"4139"},"timestamp":"1656429846"}
- image upload
- get the last request and update the image

## 21-06-22 :: Wednesday

⭐✨⚡✅❇#️⃣❎⚫🔵🔹♣‍️☎🛠‍️🗒🗓📌

```javascript
let emojis = [
        "⭐",
        "✨",      "⚡",
        "✨",      "⚡",
        "✨",      "⚡",
        "✨",      "⚡",
        "✨",      "⚡",
        "✅",
        "❇",
        "#️⃣",
        "❎",
        "⚫",
        "🔵",
        "🔹",
        "♣‍️",
        "☎",
        "🛠‍️",
        "🗒",
        "🗓",
        "📌",
        "0️⃣",
        "1️⃣",
        "2️⃣",
        "3️⃣",
        "4️⃣",
        "5️⃣",
        "6️⃣",
        "7️⃣",
        "8️⃣",
        "9️⃣",
        "🔟",
        "#️⃣",
        "*️⃣",
        "🔹"
      ];
```

- resido flow

  - home (initiated)

    - create-request

      - state-request
        - input-request
        - upload-image
          - confirm-upload

    - list-request

    - check-balance

    - update-balance

    - talk-to-agent

  - costed
    - accept-cost
      - accept
      - reject
        - confirm
          - reject-Job
          - accept-job

  - payed

  - approved

  - started

  - completed

laptop model - HP 14-dq1033cl
prodID - 7RP94UA#ABA
S/N # - 5CD941D5w8
Warranty - 1y1y0y

```sql
insert into products (titlt, price, description, imageUrl) VALUES (?, ?, ?, ?), [this.title, ...remaining]
```

## 21-06-22 :: Tuesday

- whatsappbot resido api
- twilio
- mysql workbench

fm jobs dashboard

[ job                                          ]
[ jobs                                         ]
[ Clean the tanks                              ]
[ Clean the tanks                              ]
[ Clean the tanks                              ]

- disable approve and edit buttons

## 20-06-22 :: Monday

https://dev-dot-api-resido-whatsapp.uc.r.appspot.com/rejection-hook
https://dev-dot-api-resido-whatsapp.uc.r.appspot.com/vendor-hook
https://dev-dot-api-resido-whatsapp.uc.r.appspot.com/completed-hook
https://dev-dot-api-resido-whatsapp.uc.r.appspot.com/payment-hook
https://dev-dot-api-resido-whatsapp.uc.r.appspot.com/delivery-hook

https://7857-102-89-32-27.ngrok.io

## 15-06-22 :: Wednesday

- press 4 to check your pending requests
  - displaus link to request
    - user click link
    - [link](https://app.resido.ng/requests/?user=5)

```txt
> press 4 to check your pending requests
       click on link [ | ]
        https://app.resido.ng/requests/?user=5 <

>[1.                                             ]
>[2.                                             ]
>[3.                                             ]
>[4.                                             ]
```

## 13-06-22 :: Monday

- main-layoout

## 12-06-22 :: Sunday

- transactions
  - daily
  - monthly
  - yearly
- expenses
- income
- tranfer
- create transaction

- models
  - transaction
  - transaction type

## 09-06-22 :: thursday

```json
{
  "name": "webhook two",
  "url": "webhook two",
  "accountId": 1,
  "systemEntityId": 1,
  "webHookVerbId": 1,
  "systemEventTriggerId": 1,
  "header_name": [
    "header three",
    "header four"
  ],
  "header_value": [
    "3",
    "4"
  ],
  "system_entity_param_id": [
    1
  ],
  "param_name": [
    "User ID"
  ]
}
```

## 08-06-22 :: wednesday

- sync user with roles
  
- chess

- `TODO`

  - [ ] create seeders for
    - [ ] system_functions
    - [ ] system entitites
    - [ ] system event trigger
    - [ ] system entitites param

  - create trigger in config
  - create seeder

## 07-06-22:: tuesday

- `TODO`
  - [x] create seeders for web-hook verbs
  - [ ] create controllers for
    - [ ] system_events
    - [ ] system_event trigggers
    - [ ] system_functions
    - [ ] webhooks
    - [ ] webhook_params

```sql
alter TABLE users auto_increment=0;
alter TABLE accounts auto_increment=0;
alter TABLE customers auto_increment=0;

select * from users;
select * from accounts;
select * from customers;
```

- **model**
  - [ ] web_hook_logs;

- **migrations**

  - [ ] web_hook_logs;

- **controllers**
  - [ ] system function
  - [ ] system entities
  - [ ] system events
  - [ ] system triggers

- **relationships**
  
- **seeders**
  - [x] web_hook_verbs
  - [ ] system_entities
  - [ ] system_functions  
  
## 06-06-22:: monday

- `TODO`
  - create seeders for web-hook verbs
  - create controllers for
    - system_events
    - system_event trigggers
    - system_functions
    - webhooks
    - webhook_params

```sql
select * from notifications;
select * from user_notifications;
select * from comments;
select * from system_event_triggers;
select * from system_events;
select * from web_hooks;
select * from web_hook_web_hook_header;
select * from web_hook_headers;
select * from web_hook_logs;
select * from web_hook_params;
select * from system_entities;
select * from system_entity_params;
select * from system_alerts;
select * from system_alert_logs;
select * from system_event_logs;
```

- **model**
  - [ ] web_hook_logs;

- **migrations**
  - [ ] web_hook_logs;

- **controllers**
  - [ ] system function
  - [ ] system entities
  - [ ] system events
  - [ ] system triggers

- **relationships**
  - system_functions
    - [x] roles ~ manyToMany

  - system_entities
    - [x] params ~ hasMany
    - [x] eventTriggers ~ hasMany
    - [x] system_entity_params as params ~ hasMany
  
  - system_events
    - [x] system_trigger as trigger ~ manyToMany
    - [x] system_alert as alert ~ belongsTo
  
  - system_triggers
    - [x] system_events as events ~ hasMany
    - [x] system_entity as entity ~ belongsTo

  - web_hooks
    - [x] web_hook_verb as verb ~ belongsTo
    - [x] account ~ belongsTo
    - [x] web_hook_headers as headers ~ manyToMany
    - [x] system_entity_params as params ~ hasMany

  - web_hook_params
    <!-- - [x] web_hook -->

- **seeders**
  - [ ] web_hook_verbs
  - [ ] system_entities
  - [ ] system_functions  

## 04-06-22:: saturday

- questions
  - height needed to traverse to find and delete a node in a binary search tree
  - what is the time complexith for a balanced and unbalanced BST
  - what property of the BST enables us to perform a search on the tree
  - what property of the BST makes it possible to search operation on it

  - describe avl trees
  - who are the inventors of the avl tree
  - how does avl tree balances it self

## 03-06-22:: Friday

```sql
select * from notifications;
select * from comments;
select * from job_statuses;
select * from work_requests;
select * from maintenance_cycles;
select * from job_schedules;
select * from water_readings;
select * from sensors;
select * from system_event_triggers;
select * from system_events;
select * from web_hooks;
select * from web_hook_params;
select * from system_entities;
select * from system_entity_params;
select * from maintenance_cycles;
select * from sensors;

```

## 02-06-22:: Thursday

- FFM/PO/6425
- https://vamp.filmofacilities.com/account-officer

## 01-06-22:: Wednesday

- "0*/3***"

```javascript
<div>
  {{ waterReadings }}
</div>
```

## 31-05-22:: Tuesday

```txt
1 Work Request Created 01
2 Incorrect Work Order Type 02
3 Ready For Approval 05
4 Job Planning 10
5 Held For External Resources 20
6 Held in Engineering 30
7 Held for Operations 35
8 Held for Materials 40
9 Partial Materials Recieved 41
10 Materials at Warehouse 42
11 Materials Staged 43
12 Materials at Job Site 45
13 Ready to Schedule 50
14 Scheduled 55
15 Work in Progress 60
16 Complete Awaiting Data Entry 61
17 Complete Ready for Review 65
18 More Information Needed 75
19 Reviewed Complete 80
20 Data Reviewed and Accurate 81
21 Closed History 85
22 Confirm Rejection 90
23 Rejected 95
24 Awaiting Purge 99
25 Invoice Generated 100
26 Job Approved 105
```

- 23,7,5,1,3,17,19,26,15,10

- planing [1,3,5]
- pending
- scoping
- costed
- started
- completed

## 29-05-22:: Sunday

```docker
docker run \
  -it --rm \
  -p 8080:80 -p 443:443 \
  --name php8site \
  -v "$PWD":/var/www/html \
  php8
```

```env
APP_NAME=vamp
APP_ENV=development
APP_KEY=base64:2/yvyx5iPm6WzZqL1/mlTn0JSeISwm+5iSvpXxRf4v4=
APP_DEBUG=false
# APP_URL=https://vamp.filmorealty.com
APP_URL=http://localhost:8000

LOG_CHANNEL=stack

BUGSNAG_API_KEY="b64b8e848a5c1d17f555203b37f4faad"

DB_CONNECTION=mysql
DB_HOST=104.154.34.80
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD='pGC7d1ssGG10GOCD'
DB_DATABASE=vamp_ffm_live

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
SESSION_LIFETIME=120
QUEUE_DRIVER=sync

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST='smtp.office365.com'
MAIL_PORT=587
MAIL_USERNAME='hello@proplab.africa'
MAIL_PASSWORD='Gax11130'
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS='hello@proplab.africa'
MAIL_FROM_NAME='PropLab Africa'

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

GOOGLE_CLOUD_PROJECT_ID="vamp-filmo"
GOOGLE_CLOUD_KEY_FILE="gcp-service-account.json"
GOOGLE_CLOUD_STORAGE_BUCKET="vamp-filmo.appspot.com"
GOOGLE_CLOUD_STORAGE_PATH_PREFIX="vamp.live"

FILESYSTEM_DRIVER="gcs"
FILESYSTEM_CLOUD="gcs"

VAMPFI_BASE_URL="https://apiv1.vampfi.com"
VAMPFI_CLIENT_ID=2
VAMPFI_CLIENT_SECRET="bmbeevjcswr1agoeoneuig"
VAMPFI_AUTH_KEY="=2DHLtc?bcQ@dQVkCrvnxhnZKC-KHbmY28cGEZuMX6e-UtLYyw7$!veLGcsT3Mj36wr7L?K43D*_nZcnu-Jk3p!bwwne!j99r*xXHBbrM87KuGfrS+pfvMLRwBpjsKe"
VAMPFI_EMAIL="vampfi@filmorealty.com"
```

4187 4518 5608 4688

- buy docker ebook


## 28-05-22:: Saturday

- agents in surulere
  - affable properties: 08128340044
  - SOJ Smith Agency: 0816 668 1845 : 300k kilo
  - Olalekan Afolabi: tel:07065270372
  - Ontale Oladipo Int&#39;L Ontale (yaba)
  - longinus-ejikeme flat-apartment-for-rent-off-randle-avenue-08082088667
  - Toa okiki nig: Call for real estate developer,lettings, renovation and management.office:81 itire road off Ogunlana drive surulere. 08023521449
  
- [Docker for web developers](https://dockerwebdev.com/tutorials/docker-php-development/)

```dockerfile
FROM php:8-apache

RUN a2enmod ssl && a2enmod rewrite
RUN mkdir -p /etc/apache2/ssl
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

COPY ./ssl/*.pem /etc/apache2/ssl/
COPY ./apache/000-default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80
EXPOSE 443
```


- mnt/c/users/filmo/dami/dami/vscode/hacks/docker/dockerphp
## 27-05-22:: Friday

        "php": "^7.2.5|^8.0",

8.1.0
  return request()->is($route) ? $className : (($route == $currentRouteName) ? $className : '');

## 25-05-22:: Wednesday

- user account relationship
  - [x] model relationship
  - [ ] controller relationship
    - [ ] index
    - [ ] update

- create table for **customers**

- add change_account_name to account controller

- customer


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
