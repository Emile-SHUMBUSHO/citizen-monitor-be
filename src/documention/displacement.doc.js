/**
 * @openapi
 *
 * /displacement/left-village:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Displacement]
 *          summary: This helps to left the village.
 *          description: Leave village.
 *          requestBody:
 *              description: Provide Where you want to join
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              province:
 *                                  type: string
 *                              district:
 *                                  type: string
 *                              sector:
 *                                  type: string
 *                              cell:
 *                                  type: string
 *                              village:
 *                                  type: string
 *
 *          responses:
 *                  200:
 *                     description: successfully request received
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 * 
 * /displacement/{userId}/approve-leaving:
 *      post:
 *          tags: [Displacement]
 *          summary: This helps to approve migrating from one village to another.
 *          description: Approve Village Leaving.
 *          parameters:
 *              - in: path
 *                name: userId
 *
 *          responses:
 *                  200:
 *                     description: successfully request received
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 * 
 * /displacement/history:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [Displacement]
 *          summary: This helps to List all displacement history.
 *          description: Retrieve Displacement History.
 *    
 *          responses:
 *                  200:
 *                     description: successfully request received
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 * 
 */
