# Note

## Misc

- `Brainstorm`
  - Create **pagination** for activity bar

  - Create **notification** for **unit FMs** and **resido admin**

  - Remove **required field** for **materials**

  - **Notification** for **procurement**

### 18:02:22

- Return **unit_id** from registration api

- Remove **required field** for **materials**
  - Woek on job scoping logic

- Create **pagination** for activity bar

- Create **notification** for **unit FMs** and **resido admin**

- **Notification** for **procurement**

### 17:02:22

- Add message to completed requests
  - if you have any feedback / complaint call **Resido manager**
- Create **pagination** for activity bar
- Create **notification** for **unit FMs** and **resido admin**
- Remove **required field** for **materials**
- **Notification** for **procurement**
  - Work on the **save invoice** logic
- Head first Java
  - Complete **Chapter 2**
- JavaScript data structure and algorithms
  - Complete **Caching**
- Hackerrank
  - Reverse linked list

---

- [x] Rating job from **1-10**

### Brownies CBD Other Cannabis product

- Browse for **similar** **sites** on the web

## Work

### Vampfi dashboard update

```sql
select * from client_requests;
select * from users;
select * from work_requests;
select * from work_requests where id=384;
```

### Meeting ~ 17:02:22

- Create **pagination** for activity bar
- Create **notification** for **unit FMs** and **resido admin**
- Remove **required field** for **materials**
  - Work on the **save invoice** logic

### Landmark new features

- Technician Dashboard
  - **Technicians** can make request (button)
  - FM can rate jobs
- Better Dashboard / OM
  - Analytics
  - Approvals and Overview
    - Ready for approval
    - Approved request

### Database Relation for Users and Community

- Relations
  - community_unit
  - household_unit

- Create units
  - add `household_id` to `units` table
- Create unit_hierarchies
  - add `community_id` to `unit_hierarchies` table
- Create Resident
  - add `community_id` to `occupant` table
  - add `household_id` to `occupant` table
- Assign unit to resident
  - update `household_id` on `units` table
  - update `community_id` on `unit_hierarchies` table

### IOT generator performance endpoints

- Power
- current
- battery voltage
- coolant temperature
- load
- Energy Generated
- Engine speed
- Lube Oil Pressure

### PPM FM fix

```SQL
select * from units;
select * from maintenance_cycles;
select * from `maintenance_cycles` where `organization_id`
= 1 and `job_schedule_id` in (select `id` from `job_schedules` where `unit_id` = (select `unit_id` from `facility_manager_unit` where
`facility_manager_id` = (select `id` from `facility_managers` where `user_id` = 12 limit 1))) and `maintenance_cycles`.`deleted_at` is null and `id` = 0 order by `due_at` asc
select *from units;
select* from users;
select *from facility_manager_unit;
select* from facility_managers;
select *from maintenance_cycles;
select* from maintenance_plans;
select *from job_schedules;
select* from job_schedule_statuses;
select *from job_statuses;
select* from work_requests;
```

### Paystack Resido Integration

- Payment test link
  - [Payment Link]('http://localhost:4040/pay/?transaction=6')

- Todo
  - check paystack live and test secret and public key
  - Update wallet_transaction
    - credit_method
    - confirmed_at
    - residenceId
  <!-- - Check **Aliexpress** transaction page (card details input) -->
  <!-- - Create **transactions UI** -->
  - Save **customer card details**
    - if card details exist
      - **charge authorization** [charge customer]('https://paystack.com/docs/api/#transaction-charge-authorization')
    - if customer details does not exist
      - create customer details [create customer]('https://paystack.com/docs/api/#customer')
  - update residenceId, ~~createdBy(user)~~, creditMethod(paystack) for transaction
  - change resido whatsapp wallet check to residence rather than user
  - Integrate paystack with resido
    - make sure it is wotking and does not clash with wema payment

- Paystack Frontend Trigger
  - openPaystack -> payWithPaystack -> PaystackPop -> verifyPaystackTransaction -> handler.openIframe
  - mounted
    - payForRequest -> payWithPaystack -> PaystackPop -> verifyPaystackTransaction -> handler.openIframe

### Vamp Maintenance Plan Reminder

- test move to next cycle on landwey
- send reminder
  - if status not
    - reminder sent
    - job started
- do not send reminder if status
  - reminder dent
  - job started

#### Queries - Vamp Maintenance Plan Reminder

```SQL
select * from work_requests;
select * from job_schedule_statuses;
select * from job_schedules;
select * from maintenance_cycles;
select * from maintenance_plans;
```

### Data Spooling

### Iot Dashboard Vamp

- Make **stat metrics** and **charts** responsive on breakpoint **992px**
  - Increase **stats metrics** and **charts** to 100% at **992px**
  - Make **info metric** responsive, fall below **charts** and **increase** div to **100%** at breakpoint **992px**
- Change menu and submenu **icons**
- Look for **dashboard chart** **themes**
- Use apex chart **responsive option** to make chart responsive
- Remove **row wrapper** for chart dashboard

#### Generator Performance

- Added **Generator Metrics** to**system_entities** with `id = 68`
- Added **Diesel Tank** to **system_entities** with `id = 68`
- Added **system functions** for listing generator metrics and diesel tanks
- Allowable roles `1-FM,2-SYS,5-OA,7-TCHN`
- Add **roles** **access** to **system function**

#### Parameters

- Voltage
- Current
- Power Factor
- Frequency
- Power
- RPM
- Battery Voltage
- Coolant Temperature

- Runhour
- Fuel consumed
- Energy Generated
- Energy Generated per Unit Litre Fuel Consumed

- Todays Runhour
- Todays Energy
- Fuel Consumed today

- Daily  Report
  - Summary report
  - Daily report

### Gatepass Vamp Callbacks

- Test
  - Debug live webhook
    - change live db in env
    - switch branch ro live
    - log response from webhook logic

  - Process
    - Create a new resident (skip*)
    - Create a new request using the resident
    - test the hooks
      - resident assigned a unit
      - request approved
      - work started
      - work completed

- Live Database Update
  - web_hooks
  - system_entity_params
  - system_event_triggers
  - system_events
  - system_event_web_hook

      {
          "description": "Fix the door",
          "name": "Fix the Door",
          "requested_by": 31,
          "unit_id": 17,
          "request_id": "eopiisdjkandxnw"
      }
      {
          "description": "Fix the door",
          "name": "Fix the Door",
          "requested_by": 8,
          "unit_id": 1,
          "request_id": "eopiisdjkandxnw"
      }

<http://127.0.0.1:3333/webhook/approve>
<http://127.0.0.1:3333/webhook/job-started>
<http://127.0.0.1:3333/webhook/job-completed>

<https://us-central1-gatepass-test-environment.cloudfunctions.net/api/vampfi/callback/residents/assigned> 1 2021-10-19 19:17:49 2021-10-19 19:17:49   1  
<https://us-central1-gatepass-test-environment.cloudfunctions.net/api/vampfi/callback/request/approved> 1 2021-10-20 12:17:49 2021-10-20 12:17:49   1  
<https://us-central1-gatepass-test-environment.cloudfunctions.net/api/vampfi/callback/work_started> 1 2021-12-07 18:02:00 2021-12-07 18:02:00   1  
<https://us-central1-gatepass-test-environment.cloudfunctions.net/api/vampfi/callback/work_complete> 1 2021-12-07 18:02:00 2021-12-07 18:02:00   1  

unit_id'1', 'unit_id', '1', '23', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'2', 'occupants_id', '1', '24', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'3', 'occupants_email', '1', '25', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'4', 'work_request_id', '2', '16', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'5', 'job_cost', '2', '18', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'6', 'client_request_id', '2', '19', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'7', 'technician_name', '2', '20', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'8', 'technician_rating', '2', '21', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'9', 'technician_image_url', '2', '22', '2021-10-19 19:17:49', '2021-10-19 19:17:49', NULL
'10', 'request_id', '2', '26', '2021-11-17 07:42:00', '2021-11-17 07:42:00', NULL
'11', 'work_request_id', '3', '16', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'12', 'work_request_name', '3', '17', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'14', 'unit_id', '3', '23', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'15', 'unit_name', '3', '27', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'16', 'work_request_id', '4', '16', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'17', 'work_request_name', '4', '17', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'18', 'unit_id', '4', '23', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'19', 'unit_name', '4', '27', '2021-12-07 18:29:00', '2021-12-07 18:29:00', NULL
'20', 'request_id', '3', '26', '2021-12-09 09:28:00', '2021-12-09 09:28:00', NULL
'21', 'request_id', '4', '26', '2021-12-09 09:28:00', '2021-12-09 09:28:00', NULL

[Gatepass Hooks](ttps://us-central1-gatepass-test-environment.cloudfunctions.net/api/vampfi/callback/request/approved)

#### Queries - Gatepass Vamp Callbacks

```SQL
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


select * from users;
select * from residences;
select * from requests;
select * from request_statuses;
select * from request_logs;
select * from messages;
select * from estates;
select * from chat_groups;
select * from chat_group_user;

select * from users;
select * from stages;
select * from requests;


select * from users;
select * from occupants;
select * from unit_hierarchies;
select * from units;
```

[CallBack Route](http://127.0.0.1:3333/callbacks/request/approved)

### Loatsadd Case study / Sidebar

- styles
  - nav-item toggle-sidebar

- Files
  - static/assets/js/app.js
    - toggleFunction()

### Resido Revamp

- Add delete button from residence(clients)
- remove client onboarding
- remove manage and add to side bar
- Clear resido database
  - Create new database

### Single Sign On

- Login to account session
- Return token from api
- on the frontend setToken for Authorization
- Redirect to the dashboard

[IOT Login](https://accounts.datoms.io/login)
Username: demo12@iobotech.com
Password: 123456

```JSON
    {
        email_id: "demo12@iobotech.com",
        password: "123456",
        source: "website",
        source_id: 1,
        target:
          "https://app.datoms.io/enterprise/1083/dg-monitoring/detailed-view/?thing_id=7284",
    }
```

### Termii Integration with Vamp

#### MailChimp integration

host: smtp.mandrillapp.com
You can use any active API key for your account as your SMTP password.
but we recommend using your Mailchimp account’s primary contact email as the username.
Use ports 25, 587, or 2525 for non-encrypted communication between your system and Mailchimp Transactional.
For secure SSL connections, use port 465.
Make sure your hosting provider or ISP allows outbound SMTP connections.

#### Work on ppms

- [] create a new **relationship table** between **cycles** and **schedules**
  - [] use relationship on the frontend
- [] create a new **relationship table** between **cycles** and **work_request**

- [x] Work on PPM **frontend**
  - Add links to **location**
  - Fix for both landmark and landwey

- [x] Work on **ppm backend**

- [x] Make reject button work

- Learn how the **ppm** works, study the **flow** of the ppm or better yet **create** a new flow

#### Fix sales order on live version of landmark server

`components/hagul/dashboard/request.vue`
`pages/hagul/index`

```JSON
  data
    requests: {
      code,
      workRequests,
      salesOrder,

    }
```

- On work request delivery clicked, a **sales order** is generated

```HTML
<span style='color:red'>Remove !!! Remove !!! Remove !!! Remove !!!</span>
```

### Fix the delete user issue on loadstat

I took the dates of all the pending ad campaign ignorant and those from the running and approved

## Courses

### Spring Boot Full Course ~ Learn Spring Boot In 4 Hours

- `Spring Boot`
  - Spring boot is a spring module aim to simplify the use of spring framwork for
  - java deveopment
  - It is used to create standalone spring base application
  - Makes it esay to create spring powered, production grade applications
  - `Features`
    - `sprintg cli`
      - Allows the use of groovy for writing spring boot application and
      - avoid boilerplate code
    - `Starter Dependency`
      - With this feature, sprong boot aggregates common dependencies together and
      - eventuslly improves productivity
    - `Sprong Initializer`
      - This is a web app which can
      - crate an internal project structure for you
    - `Auto Configuration`
      - This feature helps in the loading the defaulg configuration
      - according to the project you are working on
    - `Sprong Actuator`
      - Provides help while running spring boot applications
    - `Logging and security`
      - Ensures all the application made using spring boot are properly
      - secured without any hassle
  - `Importance of Spring Boot`
    - `Stability`
      - Connect to Java virtual machine
      - have rapid app developnent in java
    - `Based on JVM`
    - `Connectivity`
      - Provides good connectivity with other web technology,
      - database technologies like MYSQl, etc
    - `Cloud-Native`
    - `Flexibility`
    - `Open Source`
  - `Spring Vs Spring Boot`
    - `Spring`
      - Takes time to have spring application up and running
      - Manage life cycle of java
      - Dependency injection framework
    - `Spring Boot`
      - Shortest way to run spring applications
      - Need not worry about configuring a data source i.e.
        - provides auto configuration feauture
      - Pre-configured set of frameworks/technology
  - `Spring Boot Installation`
    - `Spring Boot Cli`
    - `Spring Tool Suite`

### Solidity, Blockchain and Smart Contract Course - Beginner to Expert Python Tutorial

#### Notes~SBSCC

- Notes
  - [Github link](https://github.com/smartcontractkit/full-blockchain-solidity-course-py)
  - aava
  - compound
  - curve finace
  - polygon
  - pokadot
  - `Bitcoin`
    - one of the first protocol to use the technology blockchain
    - bitcoin whitepaper released by Satoshi Nakamoto
    - used to make peer to peer transaction in a dicentralised network
    - Network is powerd by cryptography
    - Refered to as **digital gold**
    - has scarse quantity
  - `Ethereum`
    - Use blockchain technology with additional featuers
    - released in 2015
    - to make decentralised app / organization
    - build smart contracts
    - `Smart Contracts`
      - They are self executing set of instructions without 3rd parties
      - Allows for aggrements without centralized intermediaries
      - Nick zsabo relead smart contracts
      - they are writen in code
      - and automarically executed by the decentraised blockhain network
      - Bitcoin smart contracts are not **turin** complete
      - smart contracts need real world data
      - Oracle Problem
      - **Dapp** = **Smart Contract** == **Decentralised App / protocol**
      - Decentralised applications is usually a combination of different smart contracts
      - `Oracle`
        - They are devices that brings data into blockchain or
        - execute external computation
        - centralised oracle are a point of failure
        - `Hybrid Smart contracts`
          - Combines on-chain and off-chain components
          - ...
        - `Chainlink`
          - Provides data and external computation to smart contracts
          - They access these datas using **oracle**
          - Is a decentralised oracle network that
          - allow you to bring data into smartcontract and
          - interact with the real world
          - It allows us to
          - get data
          - get randomness
          - allows unlimited smart contract customization
          - They also allows us to buld **hybrid smart contracts**
      - `Features of Smart Contracts`
        - `Decentalised`
          - No centralised sourse that controls the blockchain
          - Individual tha makes up the blockchain are **node operators**
          - `Node operators`
            - They are independent individuals running the software connecting the whole blockchain network together
          - Summary
            - Not controlled by a single centralised entity
            - Run by a network of independent users
        - `Transparency and Flexibility`
          - Everything taht is done on the blockchain and all the rules that are made
          - can be seen by everyone
          - Everyone has to play by the same rules
          - Not everything is tracked meaning that
          - Blockchain is **pseudoanonymous** meaningn that
          - you can create different accounts and interect with it in different ways
        - `Speed and efficiency`
          - They are quick and efficiency
        - `Security and immutablility`
          - They cant be changed / tampered with / corrupted in any way
          - allows massive security on data / transactions
          - On a blockchain if seveal nodes go down it doesnt matter
          - as long as a single node is running your data is safe and secure
          - There are hundred of thousands of node running the blockchain software
          - Meaning every transaction is immutable on every node and wont change
          - Hacking the blockchain is impossiblem
          - You access your transaction using a private key
        - `Removal of countemporary risk`
          - smart contracts in particular remove massive confilct of interest
        - `Trust Minimized Agreements`
          - smart contract allows us to move from **brand based aggrements** to **math based aggrement**
          - We dont need to trust that they are going to do the right thing
      - `DAOs ~ Decentralised Autonomous Organizations`
        - They are live online and live in smart contracts
        - They do all there gorvenance on chains
    - `Ethereum Paradym`
      - Diphy
      - NFTs
      - Dows
      - Layer Two
    - `Ethereum Tools`
      - [Etherscan]()

#### Keywords | Solidity, Blockchain and Smart Contract Course

- Dapp / Smart Contracts / Smart Protocol
- DAOs
- faucet
- block explorer
- gas
- Hash

### Angular & Typescript Tutorial by Mosh

- Angular
  - Component
    - Encapsulates the data, html mock-up, and logic for the view
    - Angular embraces component based architecture
      - build small, maintainable,and reusable pieces

  - Module
    - Container for a group of related component
    - Every anagular app has at least one module called
    - the app module
    - Can be broken into smaller, maintenanble modules
      - e.g.
        - Courses module
        - Messaging module
        - Instructor module

      `07:01:21`
    - Process of creating app
      - Crete a component
      - Register component in module
      - Add elements in the HTML markup

    - Notes
      - with `selectors`
      - extend html vocabulary
      - selectors reference element
      - template html markup to render
      - data binding
        - binding the view to a field in the component
      - string interpolation
      - use backtick to beaak up into multiple line
        - make it readable
      - add service class as a dependency of a component
        - pass it as a parameter for the component constructor
        - i.e inject it into the component
        - Register the service as a provider in the app module

    class component decorator, decorator function { selector, template }

### Google Cloud Platform SimpliLearn

What is cloud computing - It is the use of hardware and software components to deliver a service to a network.
Users can also acces the files and application from any device that can access the internet.

cloud providers privide access to resources e.g computing, memory, storage

### Adonis 5 -JAGR

```TYPESCRIPT
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
```

`build` - compile typescript
`invoke` - get instructions for installing new modules with adonis project
`serve` - Serve application

Users can create many tasks tasks belongs to a user

```CSS
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


        ENUMS

            Role                    Status
                member                  idle
                admin                   in_progress
                                        complete
```

### Docker tutorial for beginners

#### Docker tutorial for beginners - Timelines

43.10, 52.00, 56.49, 56,19, 1:01:00, 01:03:09, 01:05:09, 01:07:24, 01:13:00, 01:31:00, 01:35:47, 01:57:49

## Books

### Head First Java

- Word soup
  - reference variable
  - assign object to reference variable
  - garbage collectible heap
  - null referenece
  - garbage collector

### JavaScript Data Structures and Algorithms

#### Linked Lists ~ 24:01:22 [Linked List](../../cs/books/JSDSA/linked_list.js)

- `Linked List`
  - data structure
  - consisting of **nodes** where
  - each nodes points to another **node**
  - unlike **arrays** with fixed size
  - they are **dynamic** data structures that
  - can allocate and deallocate **memory** at **runtime**

  - `Singly Linked List`
    - each **node** has a **reference** to the next node
    - has two properties
    - **head** and **size**
    - **start** of a linked list is refered to as the **head**
  
    - `Singly Linked List Node`
      - a node has two properties
      - **data** and **next**

    - `Insertion`
      - adding a new **node** into the linked list
      - time complexity `O(1)`
      - constant time operation
      - no loop or **traversal**
  
      - `Pseudocode`
        - if the head of the linked list is empty
          - the head is set to the new node otherwise
        - the **old heap** is saved in **temp**
        - the new **head** becomes the newly added node finally
        - the new **heads next** points to **temp** (the old heap)

    - `Deletion by Value`
      - deleting an element(node) from the singly linked list
      - based on a value provided
      - It is done by removing
      - the reference of that node
      - if the node is in the middle
      - we have the nodes next pointing to that node
      - point to the node owns next instead
      - [] -> [] -> [X] -> []
      - [] -> [] -> --> -> []
      - time complexity is `O(n)`

      - create a varible to save the current head
      - if the head is the node is the value to remove
        - set the head to the next of the current head
      - otherwise
        - create a variable prev to save the current head (keep track of the previous head)
        - iterate over the current head using its next
          - if current head data is value to be removed
            - set prev's next to currenthead's next
            - set prev to current head (keep track of the previous head)
            - set currenthead to current heads next (skip the current head which is the value to be deleted)
            - break out of the loop
          - track the previous head
          - increment the head for the while loop
        - if value was not found in the middle or head, then it must be tail
        - set prev value to null

    - `Deletion at the head`
      - This is possible at `O(1)` and
      - no traversal is required
      - It allows the linked list to implement a stack where
      - the last added element (the head) can be removed at `O(1)`

    - `Search`
      - To find out if an element exist in a linked list
      - we **iterate** through its **next pointer**

  - `Doubly Linked List`
    - A doubly linked list can be thougth of as a **bi-directional** singly linked list
    - each node has a **next pointer** and a **prev pointer**
    - the **next pointer** points to the **right node**, while
    - the **prev pointer** points to the **left node**
    - In addition, a doulbly linked list has
    - a **head pointer** and a **tail pointer**
    - the head refers to the **start** of the linked list, and
    - the tail refers to the **end** of the linked list
    - Deletion, insertion, and search implementation in a doubly linked list are
    - similar to that in a singly linked list
    - However, for both insertion and deletion
    - the next and prev properties must be updated

    - `Insertion at the Head`
      - If the head is empty
        - both the head and tail are set to the **new node** i.e
        - When there is only one element,
          - that element is both the head and the tail
      - Otherwise
        - the temp is used to store the new node
        - the new node next points to the current head and
        - the current head prev points to the new node. (making it the new head)
        - Finally
        - the head pointer is updated to the new node (temp) (making it the new head)

    - `Insertion at the Tail`
      - If the tail is empty
      - both the head and tail are set to the **new node**
      - temp is used to store the new node
      - the new node prev points to the current tail
      - the current tail next points to the new node
      - the tail is then updated to the new node (temp)

    - `Deletion at the Head`
      - Deleting a node at the head from a doubly linked list can be done in `O(1)` time
      - If there is only one item in the list, i.e
      - the head and the tail are the same
      - both the head and the tail are set to null.
      - Otherwise
      - the head is set to the heads next pointer.
      - Finally
      - the new heads prev is set to null
      - to remove the reference of the old head

    - `Deletion at the Tail`
      - A node can removed and returend from a DLL in `O(1)` time
      - They can be thought of as a **bi-directional queue** data structure
      - A queue can dequeue the last added item but
      - a DLL can dequeue the item at the head and the item at the tail in O(1) time

    - `Search`
      - To find out whether a value exists in a DLL,
      - you can start at the head and use the next pointer
      - or
      - start at the tail and use the prev pointer

```HTML
      next node, node, reference, data, next, head, traversal, insertion, start, end
      next pointer, prev pointer, new node, bi-directional queue data structure,
```

#### Stacks and Queues ~ 01:01:22

- `Stacks`
  - data structure in which
  - only the last **inserted element** can be
  - removed and accessed

  - Stacking plates on a table
  - to get to the bottom plate you must
  - remove all the other plates at the top
  - this principle is known as last in, first out (LIFO)

  - Pros
    - they are great because
    - they are fast and
    - since it is known that
    - the last inserted element is to be removed
    - the lookup and insertion happens
    - in a constant time of O(1).

  - Cons
    - They cannot access the non-last added element
    - in addition, accessing deeper elements requires you to
    - remove all the elements from the data structure

  - Stacks Implementation [hashtables](../../cs/algorithms%20&%20data%20structures/stacks.js)
    - Define the Stacks class
    - create `Stack.prototype.getBuffer()`
    - create `Stack.prototype.isEmpty()`

    - Peek
      - returning the last added element without
      - removing it from the data structure
      - `this.array[this.array.length - 1]`
      - Time complexity O(1)

    - Insertion
      - `Stack.prototype.put`
      - Adding an element into a stack
      - `this.array.push(value)`
      - time complexity O(1)

    - Deletion
      - `Stack.prototype.pop`
      - Removing the last added element from the stack
      - `this.array.pop(value)`
      - time complexity O(1)

    - Access
      - Access specific element
      - time complexity O(1)
        - PSEUDOCODE
          - BEGIN
          - INTEGER n //  nth element from the top
          - ARRAY [len] bufferStack
          - WHILE (decrementing n by one does not equal zero)
            - remove `pop()` one element from bufferStack
          - END
          - remove `pop()` one element from bufferStack
          - OUTPUT
            - the element
          - END

    - Search
      - create a buffer stack and
      - call `pop()` on the buffer stask
      - this way the original stack is not mutated and
      - nothing is removed
  
      - PSEUDOCODE
        - BEGIN
        - CLASS stack
        - INTEGER element
        - ARRAY bufferStack
        - WHILE (bufferStack is not empty)
          <!-- - the last element removed from the top -->
          - remove the last element in bufferStack and
          - compare it with the provided element
          - OUTPUT
            - true
        - OUTPUT
          - false

      - Time complexity is O(n)
            <!-- OUTPUT return the  -->

- Queues
  - Data structures in which
  - only the first added element can be
  - removed ~~and accessed~~
  - A principle called First in, first out (FIFO)

  - Pros
    - Operates in constant time

  - Cons
    - Can only be used to access one element at a time
    - can only access the first added element

    - `shift()` method removes and returns the first element from the queue
    - Adding to a queue is called **enqueueing**
    - `push()` is used for enqueueing
    - `shift()` is used for dequeueing
    - Removing from a queue is called **dequeueing**

    - Queues Operation
      - Peek
        - Look at the first element in the queue
        - return `this.array[0]`

      - Insertion
        - `Queue.prototype.enqueue`
        - also known as `enqueueing`
        - return `this.array.push(value)`

      - Deletion
        - `Queue.prototype.dequeue`
        - Removing an element from the queue
        - also known as `dequeueing`
        - return `this.array.shift(value)`

      - Access
        - Access specific element
        - time complexity O(1)
          - PSEUDOCODE
            - BEGIN
            - INTEGER n //  nth element from the top
            - QUEUE queue
            - ARRAY [len] bufferQueue
            - WHILE (decrementing n by one does not equal zero)
              - remove `dequeue()` one element from bufferQueue
            - END
            - return `dequeue()` one element from bufferQueue
            - END

      - Search
        - create a buffer stack and
        - call `dequeue()` on the buffer stask
        - this way the original stack is not mutated and
        - nothing is removed

        - PSEUDOCODE
          - BEGIN
          - CLASS stack
          - INTEGER element
          - ARRAY bufferQueue
          - WHILE (bufferQueue is not empty)
            <!-- - the last element removed from the top -->
            - remove the last element `dequeue` in bufferQueue and
            - compare it with the provided element
            - OUTPUT
              - true
          - OUTPUT
            - false

        - Time complexity is O(n)
              <!-- OUTPUT return the  -->
- Queue and Stack Time Complexity Summary

|       | Access | Search | Peek | Insertion | Deletion |
| ----- | ------ | ------ | ---- | --------- | -------- |
| Queue | O(n)   | O(n)   | O(1) | O(1)      | O(n)     |
| Stack | O(n)   | O(n)   | O(1) | O(1)      | O(1)     |

##### Exercise ~ Stack and Queues

#### Hash Tables ~ JDSA```

- Hash Tables
  - Fixed size data structure
  - there length are defined at the start
  - Best for quick storage and retrieval of data usnig key value pair
  - Also like objects that defines key and associated values

  - Hashing Techniques
    - Hashing is `converting` a specified key into an array index
    - for array that stores all the data / for the array that will be
      used to store the data

    - Prime Number Hashing
      - modulus division using prime numbers
      - to yield array index in a distributed manner
      - to get array of larger sizes use larger prime numbers

      - Probing
        - work around occuring collision
        - prevent array index collision
        - distribute array index `evenly`
        - `evenly` distribution of **array indices**

        - Linear Probing
          - Resove Conflict by
          - Finding the next available index by
          - incrementing one index at time or
          - by **incremental trials**

        - Quadratic Probing
          - `Resolves` conflicts using
          - perfect squares rather than
          - incrementing the index one step at a time
          - Incrementing one index at a time

    - Rehashing / Double-Hashing
      - Another (good / great) way to
      - `uniformly` distrubute the keys accross array indices is by
      - having a second hash function that
      - reharshing the result from the original (first hash function)

      - Requirement for a good second hash function
        - Different
          - It needs to be different to **distribure better**
        - Efficient
          - It should still be in **`O(1)` time**
        - Non Zero
          - Should never evaluate to zero
          - zero gives the initial hash value

      - Second Hash Function Formula
        - `hash2(x) = R - (x % R)`
        - `x` is the result from the first hash
        - `R` is a value less than the size of the array

  - Hash table Implementation [hashtables](../../cs/algorithms%20&%20data%20structures/../books/JavaScript%20Data%20Structures%20and%20Algorithms/hash_tables.js)
    - Hashing using **Linear Probing**
      - implement hash function
      - implement put
      - implement get
    - Hashing using **Quadratic Probing**
      - implement hash function
      - implement put
      - implement get
    - Hashing using Double-Hashing with Linear Probing
      - implement hash function
      - implement second hash function
      - implement put
      - implement get

##### Recap - Hash Tables

Hash tables are fixed size data structures whose length are defined at the start. They are best
used for quick storage and retrival of data base on key value pairs. they are similar to objects
that defines keys and associated values.

#### Hash Tables - 24:12:21

- Hash Tables
  - What are hash tables
  - What other **thing** is synonymous in use to an hash table
  - What is index collision
  - How to prevent index collision
  - Explaining probing list exapmpels
  - How does linear probing technique resolve conflicts
  - How does quadratic probing technique resolve conflicts
  - How many functions does a hashtable has
  - What is `put()` and `get()` and time complexity
  - Example of datastructure base on a **hash table**
  - What is the most important part of a **hash table**
  - What does the **hash function** do?
  - Three Requirements for a good hash function
  - First technique of hashing
  - What is prime number hashing
  - What hashing method guarantees the best **distibution** for a fixed size hash table
  - What is **probing**
  - Describe the **probing hashing technique**
  - What method does **linear probing techniques** uses to resolve confilcts
  - Describe **linear probing**
  - Describe **Quadratic probing**
  - Describe **Rehashing/Double-Hashing**
  - What are the requirement for a good **second hash function**
  - Write the **formala** describing the second hash function
  - `code` Implement hash table (`put()` and `get()`) using the three techniques described

```HTML
        hashing, unique keys, generating, array index
        available index, incremental trials, quick storage and retrieval, key value pairs,
        native javascript object, persist, specified key, equal keys, equal hash values,
        modulus division, using (testing), occuring collisions, next available index, distribution
        cluster issue, perfect squares, uniformly distribute the kwys, second hash function,
        original, result

        yeild,
```

- stacks and Queues
  - describe them

  - What is a stack / What are **Stacks**
  - Limitation of stack
  - Stack implementation
    - `getBuffer()` `isEmpty()` `peek()` `push()` `pop()` `stackAccessNthTopNode(stack, n)` `stackSearch()`

  - What are **Queues**
  - Queue implementation / **methods**
    - `getBuffer()` `isEmpty()` `peek()` `enqueue()` `dequeue()` `queueAccessNthTopNode(stack, n)` `queueSearch()`

      last inserted element, removed, accessed, LIFO, priciple, constant time, lookup, insertion, first added element
      FIFO, buffer, prevent(avoid), modification, original

##### Answers ~ Hash Tables

`Hashtables` are fixed-sized data strtucture. Its lenght is ususlly defined at the start. They can be used for /
they are best used for quick retrival and storage of daata in key value pair.
Objects also works similarly by defining a key(property) and its associated value
`index collision` e.g. When trying to create an hashtable with distributed array index using `prime number hashing`
and there is a collision between two different keys for particular a index location.
`prime number hashing` is the modulus division using prime nubers to get array index that are in a distributed
manner

<!-- Weekly actities -->
#### Mnemonics Cache ~ 18:12:2021

Creative inersia

  DG-Vile, that is what i am naming my **memory palace** for now,
and inside the mansion, there are several beautiful tings that you will find
of course because it is collosal art I want to leave behind for future enthusiast on thw art of **|**

  I have come up with a method, yet I havent tested it amd this note is a reminder to
continue writing on this note-pad so that you build the habit of documenting your thought process
in order to attach **meemory key** to subjects (words) we want to memorize
and help in improve ones ability in storing and retreiving information from the brain

So it realy something somple and I know I will have a lot of fun practicalizing evetything
I comeup with. Every thoughts and observation. any changes in the mind

  So generally the idea is I select a memory of random **hooks** (word | an part of speech
that accurately describe the **situation**) on each palaces and place them chronologically
on different **levels** in the palace

  The first level which is `level-0` I have decided to use to memorize my **NOT TO DO LIST**
So I will assign hooks to every one of the list.

- No masturbation [red cross]
- No **streaming youtube** anytime of the day. If you cannot download it do not watch it [stream]
- NO **movies**, do not **download** movies, do not **watch** anu movie except on programming [google]

level 0

record(v) information(n)

- Use Keywods for

#### JavaScript Strigs

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

## After Nine

- Shop for smart watches on aliexpress, others

- ~~Check instagram for some~~
- Delete unactive git repositories
- Smoke some weed
- Play some game
- Watch videos on youtube
- Social media e.g whatsapp status instagram etc

## Personal

### Dailys

#### On Gatepass Update

When a user is registered now from the mobile app
the household of the user is automatically registerd as a unit on vamp
using the user name

for examle
Say a user john simon is registerd as a new occupant
the unit will be registered as john simons residence on vamp for that user

I have spoken with **Efosa** and
i dont think they have completed the live implementation of the mobile app logic.

### On talking with efosa about the progress

Greetings

- live testing

### Social Hacks / How tos

### School ~ Masters

- Fairfield University
- Florida Agricultural and Mechanical University
- Prairie View A&M University

### Notes ~ Personal

- Whenever you open **whatsapp status** quicky click on / open up **chess** on **android**

### Brands

#### Cannabis Startup

##### Inventory ~ CS

- Rolling papers
  - Raw
- Bongs
- Vapes

### Downloads

- [ ] [Foundation of Entrepreneurship](https://www.youtube.com/watch?v=UEngvxZ11sw)
- [ ] [Docker and Kubernetes Tutorial](https://www.youtube.com/watch?v=bhBSlnQcq2k)
- [ ] [Coding Interview with Dan Abramov](https://www.youtube.com/watch?v=XEt09iK8IXs&t=38s)
- [ ] [Algorithmic Trading with Python](https://www.youtube.com/watch?v=xfzGZB4HhEE&t=41s)
- [ ] [C++ Complete Course Freecodecamp](https://www.youtube.com/watch?v=8jLOx1hD3_o)
- [ ] [MIT 15.S12 Blockchain and Money, Fall 2018](https://www.youtube.com/watch?v=EH6vE97qIP4&list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn&ab_channel=MITOpenCourseWare)
- [ ] [Database systems](https://youtu.be/4cWkVbC2bNE)
- [x] [Database Design Course](https://www.youtube.com/watch?v=ztHopE5Wnpc&t=2s)
- [x] [complete react native](https://piratebay.party/torrent/42918738/Udemy-_Complete_React_Native_in_2021__Zero_to_Mastery_with_Hooks)
- [x] [Angular the complete guide real worid app](https://piratebay.party/torrent/38738248/Udemy_-_Complete_Angular_11_Ultimate_Guide_with_Real_World_App)
- [x] [Angular the complete guide](https://piratebay.party/torrent/45549857/Angular_-_The_Complete_Guide_(2021_Edition))

### Links

- [Google](https://google.com)

### Food Planner

- options
  - rice
  - rice / beans
  - beans
  - yam
  - potatoes
  - spaghetti
  - meats

- Mon
  - spaghetti
- Tue
  - yam / potatoes
- Wed
  - Rice
- Thur
  - spaghetti
- Fri
  - rice / beans **buy**
- Sat
  - beans
- Sun
  - Rice

### Account Statement

#### Feb 2022

- Balance
  - 171000
  - 141000

  - Target
    - 100000

- Withdrawals
  - 10000

- Transfers
  - 20000

- Deposit
  - 65000
  - 10000

### Information

#### General Info

- [TwiloZD](https://www.twilio.com/quest?utm-source=twlozd) - use for portfolio
- facebook password - DDQl6HQEhShZBxriaB2UlXdm5Lu7cLsze4f0NXK41I
- fiction member dose occur decade fiscal shallow magnet lend gun deputy pilot
  - xLtFtYDUyiaNAB2rE3pu
- 22356363073
- N-4853599

#### Travel Links

Residencies
<https://residencies.io/>

Canada PR
<https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGZiZXZwdE5ucmJYYkdWbVc4R1BiSS1qVHpRQXxBQ3Jtc0tsNFR5ZzRTaV9LcE90YkxSZDJqQmFucUM5ZW9yaFhOdUtBMmdMVEZ0Wm1HU3Q5Y2xhTTg5UUhfeVlTc2NxODl4SUFQQS1pdUp1NnBJX3loYlFoT2p6UUFFTWFPeHRzRk9HYndkdV85TFZLV3UwZVVIRQ&q=https%3A%2F%2Fwww.canada.ca%2Fen%2Fimmigration-refugees-citizenship%2Fservices%2Fimmigrate-canada.html>
<https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjdIZFJXcUVpb0J3X0txeW12RmZWQnVVT0Nyd3xBQ3Jtc0tuczNxNWVCUU1XeUU0REMwMlEtZzc4QzJuMDNaUDlOLUtVWEw4Y0RraVp0RkM3dXktMFhid01aMmhlS1ltVG1LZlNVeEF5SGpjTkxaWlcxYThtWTVUOW5yRnR6akM1dUU5NFdjNjFGVTJRanVsaU11dw&q=https%3A%2F%2Ftrello.com%2Fb%2F5Ye8Khdx%2Fmoving-to-canada-getting-a-pr>

UK
Technation: <https://youtu.be/P_QmVVzJz9U>
<https://www.gov.uk/global-talent>
<https://www.gov.uk/skilled-worker-visa>

Portugal D7 Visa
<https://www.d7visa.com/>

Digital Nomad Visa
<https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFZxcDd6VVRUNVZmSHZLdnJqTXZhQWhmb2tNd3xBQ3Jtc0ttaW83b3BoM1cxeDFLeEN6NXdUR0NqemlTNm81ZW1DVWc2Z3JFYnE2QTJ6Qy0wbFlTSUNjWVpaMTFocU9wV1hxWUlmQmJCWXYyTG9qZkN3bERXNWdWaks4Zk1vbWNCZ3loVlNUa0pkN1piSWs5SDB3SQ&q=https%3A%2F%2Fexpertvagabond.com%2Fdigital-nomad-work-visas%2F>

#### How to avoid watching pornography

- Read the bible
- Code as much as possible
- To **refocus** your mind, Read about business, do a lot of brainstorm and take a lot of notes
- Smoke some weed and plan for the future

### Rules

- Put God first
- Dont be basic

### Thoughts / Ideas

- No **porn** through out the new year

- Always remember to think and formulate your thoughts completely
  before you **write** down again on this **space**

  - It helps in you to develop the ability to retrieve information quickly
    and ultimately increase your memory shortterm

- ability
- Make english your **thought** language and `write` every thought you have in memory in english
- Aways remain focused averytime you are learning something new and

#### Process of Total Recall

- ReRead
- Review
- Scan for **Words**
- Search words in **Dictionary**

## English

### Vocabulary

e.g => following

   following, memory location, unique index,

#### Nouns

- format - [specified format]
- ability
- word
- unit
- language
- information
- thoughts
- Feelings

#### Verbs

- represent (ted, ing, s)

- format (ing, ted)

- perform

- develop

- ability

- treat

- recall
  
- Write
  - To make marks which represent letters, words, and numbers on a surface such as paper
  - or a computer screen
  - To send a letter to someone or similar message, giving them information or expressing
  - your thoughts or feelings

#### Adverbs

#### Adjectives

#### Prepositions

- After
  - Following in time space and order
  - To be looking for someone or something and trying to get them or thing
  - to Politely say to someone they can go in front of you or
  - serve themselves with food before you

  - You can come back to town after you p ay me my money
  - You can call mery after calling john
  - Three months after graduation i started my businnes
  - soon after he left his girlfriend  he started making plans and working toward
  - his dream in life of traveling and learning more about life and his carrer
  - Expanding is the keyword here it should be your baltle cry when you wake up in the morning

### Quotes

- Because you didn’t get this far by being average.
- Take actions regardless of how you feel - `Grant Cardone`

## CS

### Vue

- watch

```javascript
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // string method name
    b: 'someMethod',
    // the callback will be called whenever any of the watched object properties change regardless of their nested depth
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
```

### Algorithms

#### String Shortening
