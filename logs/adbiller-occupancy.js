/**
 * * Adbiller Occupancy
 * Billboards [A, B, C, D]
 * A: [slot1, slot2, slot3]
 * B: [slot1, slot2, slot3, slot4]
 * B: [slot1, slot2]
*/

const date = Date.now()
console.log(date);

// const unique_occupied

const pendingAdCampaigns = [
  {
    "id": 5,
    "name": "zita",
    "starts_at": 1621036761088,
    "ends_at": 1621555150848,
    "ad_campaign_status_id": 1,
    "price": 1998,
    "currency": "NGN",
    "ad_client_id": 2,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-05-15 23:32:30",
    "updated_at": "2021-05-15 23:32:30",
    "deleted_at": null,
    "bill_board_id": 2,
    "bill_board_slot_id": null,
    "payment_terms": 1333
  },
  {
    "id": 6,
    "name": "zita2",
    "starts_at": 1621555150848,
    "ends_at": 1622073540608,
    "ad_campaign_status_id": 1,
    "price": 1998,
    "currency": "NGN",
    "ad_client_id": 2,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-05-15 23:39:06",
    "updated_at": "2021-05-15 23:39:06",
    "deleted_at": null,
    "bill_board_id": 2,
    "bill_board_slot_id": null,
    "payment_terms": 13332
  },
  {
    "id": 7,
    "name": "demo camp",
    "starts_at": 1620777631744,
    "ends_at": 1621555150848,
    "ad_campaign_status_id": 1,
    "price": 29999.97,
    "currency": "NGN",
    "ad_client_id": 1,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-05-21 13:32:25",
    "updated_at": "2021-05-21 13:32:25",
    "deleted_at": null,
    "bill_board_id": 1,
    "bill_board_slot_id": null,
    "payment_terms": 30
  },
  {
    "id": 8,
    "name": "Cocacola",
    "starts_at": 1622505553920,
    "ends_at": 1625011257344,
    "ad_campaign_status_id": 1,
    "price": 966.57,
    "currency": "NGN",
    "ad_client_id": 1,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-06-28 14:45:55",
    "updated_at": "2021-06-28 14:45:55",
    "deleted_at": null,
    "bill_board_id": 8,
    "bill_board_slot_id": null,
    "payment_terms": 60
  },
  {
    "id": 10,
    "name": "test spec",
    "starts_at": 1624924749824,
    "ends_at": 1625011257344,
    "ad_campaign_status_id": 1,
    "price": 6.94,
    "currency": "NGN",
    "ad_client_id": 1,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-06-30 13:44:46",
    "updated_at": "2021-06-30 13:44:46",
    "deleted_at": null,
    "bill_board_id": 11,
    "bill_board_slot_id": null,
    "payment_terms": 23
  },
  {
    "id": 11,
    "name": "nice guy",
    "starts_at": 1625097633792,
    "ends_at": 1626048036864,
    "ad_campaign_status_id": 3,
    "price": 3663,
    "currency": "NGN",
    "ad_client_id": 1,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-07-01 10:58:31",
    "updated_at": "2021-07-04 21:31:45",
    "deleted_at": null,
    "bill_board_id": 2,
    "bill_board_slot_id": 3,
    "payment_terms": 30
  },
  {
    "id": 13,
    "name": "drink of life",
    "starts_at": 1625184010240,
    "ends_at": 1625788776448,
    "ad_campaign_status_id": 1,
    "price": 65.87,
    "currency": "NGN",
    "ad_client_id": 1,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-07-02 13:15:56",
    "updated_at": "2021-07-02 13:15:56",
    "deleted_at": null,
    "bill_board_id": 7,
    "bill_board_slot_id": null,
    "payment_terms": 2
  },
  {
    "id": 14,
    "name": "nike shoes",
    "starts_at": 1628031549440,
    "ends_at": 1636671553536,
    "ad_campaign_status_id": 1,
    "price": 2000,
    "currency": "NGN",
    "ad_client_id": 1,
    "ad_provider_id": 1,
    "created_by": 1,
    "created_at": "2021-08-04 08:41:19",
    "updated_at": "2021-08-04 08:42:13",
    "deleted_at": null,
    "bill_board_id": 8,
    "bill_board_slot_id": null,
    "payment_terms": 30
  }
];

const campaignTakenDays = (campaigns) => {
    // Get array of all taken days accross all bill board slots
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
  
    var dateArray = new Array();
    for (const campaign of campaigns) {
      var currentDate = new Date(campaign.starts_at);
      while (currentDate <= new Date(campaign.ends_at)) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
      }
    }
  
    return dateArray;
};

// console.log(campaignTakenDays(pendingAdCampaigns));

// totalSlots * numberOfDays
const total = 121350;
// Billboard slots that are active
const totalSlots = 4045;
const numberOfDays = 30;
const start_date = "2021-07-31T23:00:00.000Z"
const end_date = "2021-08-30T23:00:00.000Z";
const bookedPerformanceSeries = [
    'response.data.empty',
    'response.data.awaitingApproval',
    'response.data.taken',
    'response.data.billboards.total',
    'response.data.billboards.occupied'
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function monthStartAndEnd(date) {
    return {
      name: monthName(date),
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      end: new Date(date.getFullYear(), date.getMonth() + 1, 0)
    }
}

function monthName(date) {
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];
    return `${monthName} ${date.getFullYear()}`;
}

const total_billBoard = 12;
const unique_occupied = [ 2, 1, 8, 11, 7 ];
const unique_occupied_length = 5;

const billboards = {
    total: total_billBoard,
    occupied: unique_occupied,
    occupied_length: unique_occupied_length,
};

