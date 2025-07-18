/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GenerateHashWithAlgorithmResponse
 */
export interface GenerateHashWithAlgorithmResponse {
    /**
     * 
     * @type {string}
     * @memberof GenerateHashWithAlgorithmResponse
     */
    sum?: string;
}

/**
 * Check if a given object implements the GenerateHashWithAlgorithmResponse interface.
 */
export function instanceOfGenerateHashWithAlgorithmResponse(value: object): value is GenerateHashWithAlgorithmResponse {
    return true;
}

export function GenerateHashWithAlgorithmResponseFromJSON(json: any): GenerateHashWithAlgorithmResponse {
    return GenerateHashWithAlgorithmResponseFromJSONTyped(json, false);
}

export function GenerateHashWithAlgorithmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateHashWithAlgorithmResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'sum': json['sum'] == null ? undefined : json['sum'],
    };
}

export function GenerateHashWithAlgorithmResponseToJSON(json: any): GenerateHashWithAlgorithmResponse {
    return GenerateHashWithAlgorithmResponseToJSONTyped(json, false);
}

export function GenerateHashWithAlgorithmResponseToJSONTyped(value?: GenerateHashWithAlgorithmResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sum': value['sum'],
    };
}

