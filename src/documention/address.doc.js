/**
 * @openapi
 *
 * /address/{userId}/approve:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Address]
 *          summary: This helps to approve user's address.
 *          description: Approve User Address.
 *          parameters:
 *              - in: path
 *                name: userId
 *
 *          responses:
 *                  200:
 *                     description: Address approved
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 */
