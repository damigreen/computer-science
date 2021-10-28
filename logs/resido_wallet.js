/**
 * TODO
 * 
 * * Mail for subscription reminder one week to subscription deduction
 * 
 * * Send mail when subscription plan is activated
 * subscription plan update controller
 * 
 * * send mail when there is not enough balance on wallet
 * check if the wallet_balance is greater than or equal to plan
 * 
 * 
 * 
 * * Update wallet ballance for residences with no wallet ballance i.e wallet_balance = NULL
 * * Add new user credit to residence wallet_balance
 * 
 * * Make transaction reflect on the resido wallet for users and residents
   * Make api call to wema api for each residents
   * get transactions
   * Add transactions to wallet account
   * 
 * Check account deduction code
   * if not availaible, implement code
   * 
 * Notify User of transactions
   * Configure email account 
   * 
 * ? Find the account number generating code
 * Study the flow of the project and possibly clone a particular section
 * 
 * get resido resident users from residence
 * get request of all residents
    * add to the request tab
 * get sum of the amount spent by all residents
 * 
 
 * * Files
 * AcceptCost.ts - debitTransactions code - debit wallet

 * * Resido Whatsapp API
 * vamp_request_id - where is it comong from on the request table
 * resido_user_id - where is it comming from on the user table
 * 
 * * Wallet Flow
 * move wallet to resident page
 * user on resident have access to wallet
 * user pay for services on resident wallet page
 *
 * * Important tables Resido
 * users;
      * roles;
 * role_user;
 * residences;
 * residents;
 * requests;
 * wallet_transactions
 * 
 * * Queries Resido
 select * from users;
 select * from roles;
 select * from role_user;
 select * from residences;
 select * from residents;
 select * from requests;
 select * from request_wallet_transaction;
 select * from wallet_transactions;
 * 
 * Important tables and queries Resido-whatsapp
 * 
 * * Live links
 * https://app.resido.ng/manage/users/details/wallet?id=5
 * https://app.resido.ng/manage/users/details/wallet?id=8
 * 
 *  
 */