/**
 * @openapi
 *
 * /admin/citizens:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [Admin]
 *          summary: This helps to list all citizens of the village.
 *          description: Citizens of village.
 *          parameters: 
 *           - name: province
 *             in: query
 *             required: true
 *           - name: district
 *             in: query
 *             required: true
 *           - name: sector
 *             in: query
 *             required: true
 *           - name: cell
 *             in: query
 *             required: true
 *           - name: village
 *             in: query
 *             required: true
 
 *          responses:
 *                  200:
 *                     description: Citizens retrieved successfully
 *                  400:
 *                     description: Bad Request
 *                  403:
 *                     description: Not Found to perform this task
 *                  500:
 *                     description: Internal server error
 * 
 * /admin/citizens/{id}/change-to-leader:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Admin]
 *          summary: This helps to elect leaderv of the village.
 *          description: Elect village leader.
 *          parameters: 
 *           - name: id
 *             in: path
 *             required: true
 *         
 *          responses:
 *                  200:
 *                     description: Leader elected successfully
 *                  400:
 *                     description: Bad Request
 *                  403:
 *                     description: Not allowed to perform this task
 *                  409:
 *                     description: Already is a leader
 *                  500:
 *                     description: Internal server error
 * 
 * /admin/citizens/{id}/change-to-citizen:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Admin]
 *          summary: This helps to change to citizen.
 *          description: Change to Citizen.
 *          parameters: 
 *           - name: id
 *             in: path
 *             required: true
 *         
 *          responses:
 *                  200:
 *                     description: Citizen successfully
 *                  400:
 *                     description: Bad Request
 *                  403:
 *                     description: Not allowed to perform this task
 *                  409:
 *                     description: Already is a citizen
 *                  500:
 *                     description: Internal server error
 * 
 * /admin/citizens/changeRole:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Admin]
 *          summary: This helps to elect leaderv of the village.
 *          description: Elect village leader.
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              userId:
 *                                  type: string
 *                              newRole:
 *                                  type: string              
 *         
 *          responses:
 *                  200:
 *                     description: Leader elected successfully
 *                  400:
 *                     description: Bad Request
 *                  403:
 *                     description: Not Found to perform this task
 *                  409:
 *                     description: Already is a leader
 *                  500:
 *                     description: Internal server error
 * 
 * 
 */
