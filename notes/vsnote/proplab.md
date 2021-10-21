# Vampfi

## Actions

- [] Fix update on job schedule details
- [] Logos for landwey hagul page not displaying
- [] Fix sla time stoppage after approval - Permananet ( use database)

## Temp

    <p class="contact-item">
      <span>Phone:</span>
      <span>{{ technician.user.phone }}</span>
    </p>
    <!-- contact-item -->
    <p class="contact-item">
      <span>Email:</span>
      <a href>{{ technician.user.email }}</a>
    </p>

## Adonis Commands

    Route.resource('/pets', PetsController);
    Route.resource('/pets', PetsController).apiOnly();
    Route.resource('owners.pet', 'OwnersController') 
    node ace list:routes
    npm install @adonisjs/lucid
    node ace configure @adonisjs/lucid
    npm init adonis-ts-app@latest demo-adonis
    node ace make:model Pet -m // Create model together with migration
    adonis make:model Pet -m // Create model together with migration
    Route.group(() => {
        Route.post('auth/register', 'UsersController.register)
    }).prefix('api/v0')
    const { email, password } = request.all()

## Node Commands

npm config set registry http://registry.npmjs.org/
npm config set strict-ssl false

## Ad campain propblem

`proplem`

`parameters`

    billboards - [1, 2, 3]
    billboards slots - [2 3 4]
    total bilboards slots - [9] - []
    ad_campaign - [cocacola, pepsi] - []

Get the performance

## 02:08:21

Create incident report link on facility manager page

facility-manager - `/dashboard/facility-manager`
incident report - `/repors/inciden-reports`

## Vamp APP URLS

### Vamp local

HOST=127.0.0.1
PORT=6060
APP_URL=http://${HOST}:${PORT}

### Vamp Dev

APP_URL="https://apiv1.vampfi.com"

### Vamp Live

APP_URL="https://apiv1.vampfi.com"

### Vamp FFM local

HOST=127.0.0.1
PORT=8000
APP_URL=http://${HOST}:${PORT}/api

### Vamp FFM Dev

APP_URL="https://vamp.dev.filmorealty.com/api"

### Vamp FFM Live

APP_URL="https://vamp.filmofacilities.com/api"

## Vamp Products

vampfi
resido api - twillo - app.resido.ng
resido bot
landmackprop
Landmack
power BI
google cloud
trello work flow
Twillo bot
technician admin clients facility
facility manager
adbiller.proplab.africa.com
Facility management

## Vamp Questions

- Does every client have a dashboard where they create a work order

## VampFI

Vamp is a computarized management maintenance system, designed to automate organization / facility mantenance process

### Vamp Solutions

Vamp offers a variety of solutions including:

1. Planed Preventive Maintenance
2. Work Order Management
3. Incident Reporting
4. Cost Reporting
5. Procurement and Inventory process
6. Enegy monitoring
7. Access to Big Data for predictive analysis

Vamp gathers data from all business processess to track performance and predicts areas for continual improvement, this data is now integrated with business intelligence tool, Power BI.

Vamp commercial with integration with other internet of things will translate to:

1. Better decision making
2. More effective use of facility infrastructure
3. Better asset use, pattern identification and forecastting
4. Reduction in asset maintenance costs
5. Better maintenance programs
6. Increased sustainability in facilities
7. Personalized user experience
8. Better customer relations
9. Provide competitive edge
10. Risk mitigation
11. Resource levelling and optimization
12. Performance evaluation
13. Informed investment decisions, and, on a greater scale,
14. “Smarter” cities with predictive solutions

### Higher Level Process Description

#### P1 -  PPM / Work request creation

Allows *initiator* to **raise** *request* for *routine* and *reactive maintenance*

##### P1.A - Set up Asset Register

Allows initiator to **register** equipments at pricise location in the facility

##### P1.B - Set up PPM schedules and approve work request

This is the process where system administrators with full details regarding the time at which routine actives will be done are to set a recurring cycle through a period (e.g. Quarterly AC maintenance) alerts and required notifications are sent to the users as required

##### P1.C - Assing work to technicians

Allows initiator to assing work / PPM to technicians for inspection and work execution

##### Request materials / Vendor supplies

Allows iniators to request for materials and vendors for operational procurement

##### Receives and Rates Supply

Initiator receives the materials, review and rate material supply / vendor implementation

#### P2 - Operational Procurement

This is the process that controls inventory storage, materials requisition, vendor execution

##### P2.A - Set up / Acquire vendor directory

Initiator creates vendor / supplier profile into a directory or acquire already existing vendor directory

##### P2.B - Create and Manage item inventory

Operational procurement create inventory for items and manages them using re-order points

##### P2.C - Provide cost to requested items

Cost information for items are entered, verified and validated by the users.

##### P2.D - Initiate bidding process and Vendor selection

This feature incorporates the “three-bids and a buy structure” where parameters(lowest) for selecting vendors are to be selected.

##### P2.E - Purchase Order creation and Vendor management

Allows operational procurement to state purchasing terms for vendors and creating purchasing order

#### P3 - Report Generation

##### P3.A - Technicians and Facility Managers performance ratings

Allows customers to rate the job done by technicians and facillity managers

##### P3.B - Inventory Expenditure and Item usage Reports

Allows the review of inventory and sales expenditure and study trends of usage

##### P3.C - Work Response Reports

All time take to respond to an issue are populated and drilled down to various parameters (Assets, rooms etc)

#### P4 - System Administrator

Allows usres with admistreetive prividledges to update necessary information within the system as required

##### P4.A - Add Facilities

This on-boarding feature allows the administrator to sign on new facilities under parent organization on vamp

##### P4.B - Add Users and Trades

This on-bording feature allows the admistrators priviledges to add new users (facility managers and technicians) to parent organization, also aids in assigning trades to technicians.

##### P4.C - Create Work request priority level and status codes

Allows the facility manager to set priority level against trade faults. This features also allows for creating of status codes for identifying stages of work requested.

### End to End Process Flow Diagrams

#### VAMP Commercial Organization Onbording

`Filmo`
(Start) --->
Filmo request the following details from the organization

- Name and industry
- Facilities managed and their
- locations
- Technicians
- Equipments
- Facility Managers
- Approved Flows
--->

`Client`
--->
Client provides the required details
--->

`Filmo`
--->
Filmo fills these details on the system and then proceeds to pilot the implementation of VAMP accross the client organizations.
---> (end)

#### User Onboarding

`Client Organization`
(start) ---> Provides user biodata and their designation as per specifications
--->

`System Admin`

--->

- Reviews input from clients, create user profile and assign them roles
- Provide extra details based on user roles

---> (end)

#### Parent & Child Set Up

`Client Organization`
(start) --->
waProvide Parent (e.g facilities) details, locations along with any associated children (e.g office, unit).
--->

`System Admin`

--->
Reviews client inputs and create parent on the system
--->

`<Does parent have children>`


`keywords`


