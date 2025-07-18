/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface EntityUpdateAliasByIdRequest
 */
export interface EntityUpdateAliasByIdRequest {
    /**
     * Entity ID to which this alias should be tied to
     * @type {string}
     * @memberof EntityUpdateAliasByIdRequest
     */
    canonicalId?: string;
    /**
     * User provided key-value pairs
     * @type {object}
     * @memberof EntityUpdateAliasByIdRequest
     */
    customMetadata?: object;
    /**
     * Entity ID to which this alias belongs to. This field is deprecated, use canonical_id.
     * @type {string}
     * @memberof EntityUpdateAliasByIdRequest
     */
    entityId?: string;
    /**
     * (Unused)
     * @type {string}
     * @memberof EntityUpdateAliasByIdRequest
     */
    mountAccessor?: string;
    /**
     * (Unused)
     * @type {string}
     * @memberof EntityUpdateAliasByIdRequest
     */
    name?: string;
}
/**
 * Check if a given object implements the EntityUpdateAliasByIdRequest interface.
 */
export declare function instanceOfEntityUpdateAliasByIdRequest(value: object): value is EntityUpdateAliasByIdRequest;
export declare function EntityUpdateAliasByIdRequestFromJSON(json: any): EntityUpdateAliasByIdRequest;
export declare function EntityUpdateAliasByIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityUpdateAliasByIdRequest;
export declare function EntityUpdateAliasByIdRequestToJSON(json: any): EntityUpdateAliasByIdRequest;
export declare function EntityUpdateAliasByIdRequestToJSONTyped(value?: EntityUpdateAliasByIdRequest | null, ignoreDiscriminator?: boolean): any;
