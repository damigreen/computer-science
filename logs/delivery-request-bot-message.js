/**
 * TODO 
 * * Delivery request bot message
 * * Vamp
 * 
 * Create webhook for delivery request by FM
 * 
 * Files
 * 
 * 
 * 
 * * Resido
 * 
 * Get Work request criticality in resido
    * Equipment Criticality Code
        * Critical -> High
        * High -> Medium
        * Normal -> Low
 *
 * 
 * 
 * * Resido Whatsapp
 * 
 * GEt client reqeust id
 * Get resido request from client id
 * Send message to resido user based on criticality
 * 
 * Delivered message
 * Send Delivere Message to client
     * Equipment criticality
     * Message
         * normal -Service on the way! we should be with you within 24hrs
         * high - Service on the way! we should be with you within 1hrs
         * critical - Service on the way! we should be with you within 20mins

 * After message is deliverd
    * tell resident to acknowledge the response
        * Create action
        * 
 * 
 * Files
    * ProcessMessage(E)
    * Delivered(C)
    * 
 *  
 * * Timeline
 * Delivery Request
    * system_entities_id
        * id: 41
    * systems_event_triggers_id
        * id: 34
    * system events
        * Create system events
        *  id: 9
    * system_events_web_hook
        * create system event web hook
        * id: 67
    * web_hook: create web hooks
        * id: 8
        * http://4cc4-105-112-50-219.ngrok.io/delivery-hook
 * 
 * ? What does Request Delivery Does
 * ex 
 * 
*/