# NOTEBOOK

## Mind



### Stacks and Queues

- Stacks
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

  - Stacks Implementation
    - Define the Stacks class
    - create `Stack.prototype.getBuffer()`
    - create `Stack.prototype.isEmpty()`

    - Peek
      - returning the last added element without
      - removing it from the data structure
      - `this.array[this.array.length - 1]`
      - Time complexity O(1)

    - Insertion
      - Adding an element into a stack
      - `this.array.push(value)`
      - time complexity O(1)

    - Deletion
      - Removing the last added element from the stack
      - `this.array.pop(value)`
      - time complexity O(1)

    - Access
      - Access specific element
      - time complexity O(1)
        - PSEUDOCODE
        - 
          - INTEGER n //  nth element from the top
          - ARRAY [len] bufferStack
          - WHILE (decrementing n by one does not equal zero)
          - remove `pop()` one element from bufferStack
          - END
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

### Hash Tables```

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

#### Recap - Hash Tables

Hash tables are fixed size data structures whose length are defined at the start. They are best
used for quick storage and retrival of data base on key value pairs. they are similar to objects
that defines keys and associated values.

### Hash Tables - 24:12:21

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

        hashing, unique keys, generating, array index
        available index, incremental trials, quick storage and retrieval, key value pairs,
        native javascript object, persist, specified key, equal keys, equal hash values,
        modulus division, using (testing), occuring collisions, next available index, distribution
        cluster issue, perfect squares, uniformly distribute the kwys, second hash function,
        original, result

        yeild, 

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

#### Answers ~ Hash Tables

`Hashtables` are fixed-sized data strtucture. Its lenght is ususlly defined at the start. They can be used for / 
they are best used for quick retrival and storage of daata in key value pair.
Objects also works similarly by defining a key(property) and its associated value
`index collision` e.g. When trying to create an hashtable with distributed array index using `prime number hashing`
and there is a collision between two different keys for particular a index location.
`prime number hashing` is the modulus division using prime nubers to get array index that are in a distributed
manner

<!-- Weekly actities -->
### Mnemonics Cache ~ 18:12:2021

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

### JavaScript Strigs

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

- Delete unactive git repositories
- Smoke some weed
- Play some game
- Watch videos on youtube
- Social media e.g whatsapp status instagram etc

## People

### Bukunmi

### Joseph

### Fola

### Hadijat

Hello, Have you help to change the credit card information on the mailgun site.
Let me send you the login for the site
On the site go to ...

### Iya Ariyo

### Kunle

Did you get any good tutorial to work with
Find a tutorial that teaches you the basics

## Information

### General Info

- facebook password - DDQl6HQEhShZBxriaB2UlXdm5Lu7cLsze4f0NXK41I
- Secret recovery phrase **Meta mask**: fiction member dose occur decade fiscal shallow magnet lend gun deputy pilot

### Travel Links

Residencies
https://residencies.io/

Canada PR
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGZiZXZwdE5ucmJYYkdWbVc4R1BiSS1qVHpRQXxBQ3Jtc0tsNFR5ZzRTaV9LcE90YkxSZDJqQmFucUM5ZW9yaFhOdUtBMmdMVEZ0Wm1HU3Q5Y2xhTTg5UUhfeVlTc2NxODl4SUFQQS1pdUp1NnBJX3loYlFoT2p6UUFFTWFPeHRzRk9HYndkdV85TFZLV3UwZVVIRQ&q=https%3A%2F%2Fwww.canada.ca%2Fen%2Fimmigration-refugees-citizenship%2Fservices%2Fimmigrate-canada.html
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbjdIZFJXcUVpb0J3X0txeW12RmZWQnVVT0Nyd3xBQ3Jtc0tuczNxNWVCUU1XeUU0REMwMlEtZzc4QzJuMDNaUDlOLUtVWEw4Y0RraVp0RkM3dXktMFhid01aMmhlS1ltVG1LZlNVeEF5SGpjTkxaWlcxYThtWTVUOW5yRnR6akM1dUU5NFdjNjFGVTJRanVsaU11dw&q=https%3A%2F%2Ftrello.com%2Fb%2F5Ye8Khdx%2Fmoving-to-canada-getting-a-pr

UK
Technation: https://youtu.be/P_QmVVzJz9U 
https://www.gov.uk/global-talent
https://www.gov.uk/skilled-worker-visa

Portugal D7 Visa
https://www.d7visa.com/

Digital Nomad Visa
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFZxcDd6VVRUNVZmSHZLdnJqTXZhQWhmb2tNd3xBQ3Jtc0ttaW83b3BoM1cxeDFLeEN6NXdUR0NqemlTNm81ZW1DVWc2Z3JFYnE2QTJ6Qy0wbFlTSUNjWVpaMTFocU9wV1hxWUlmQmJCWXYyTG9qZkN3bERXNWdWaks4Zk1vbWNCZ3loVlNUa0pkN1piSWs5SDB3SQ&q=https%3A%2F%2Fexpertvagabond.com%2Fdigital-nomad-work-visas%2F

## How Tos

### How to avoid watching pornography

- Read the bible
- Code as much as possible
- To **refocus** your mind, Read about business, do a lot of brainstorm and take a lot of notes
- Think about some smoke (after nine)

## Vocabulary

e.g => following

   following, memory location, unique index,

### Nouns

- format - [specified format]
- ability
- word
- unit
- language
- information
- thoughts
- Feelings

### Verbs

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

### Adverbs

### Adjectives

### Prepositions

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

## Quotes

- Because you didn’t get this far by being average.

## ReCall / Run Downs

### Bubble Sort - JD&A

### Selection Sort - JD&A

- Selection sort: scanning through the array for the smallest item and putting it in the current position in the iteratiion
- Iside the loop, it searches for the smallest element, and move them to the current position
- Also it checks if the smaller element (after comparison with the iterator(item) position) has been assigned to current position
  - If not swaps the smaller element with the current element

### Thoughts

### Process of Total Recall

- ReRead
- Review
- Scan for **Words**
- Search words in **Dictionary**

### 20:11:2021

- Selection sort
  - invloves scanning through an array for the smallest item in the array
  and putting it in the the current position of the array..
  - Ite
  
## Blink

- No **porn** through out the new year

- Always remember to think and formulate your thoughts completely
  before you **write** down again on this **space**

  - It helps in you to develop the ability to retrieve information quickly
    and ultimately increase your memory shortterm

- ability
- Make english your **thought** language and `write` every thought you have in memory in english
- Aways remain focused averytime you are learning something new and

## Notes

### Brownies CBD Other Cannabis product

- Browse for **similar** **sites** on the web

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

##### Parameters

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

#### Loatsadd Case study / Sidebar

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

## Algorithms

### String Shortening

## Rules

- Put God first
- Dont be basic