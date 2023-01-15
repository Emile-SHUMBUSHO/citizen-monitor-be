/**
 * @openapi
 *
 * /citizens:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [Citizens]
 *          summary: This helps chef to list all citizens of the village.
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
 */
