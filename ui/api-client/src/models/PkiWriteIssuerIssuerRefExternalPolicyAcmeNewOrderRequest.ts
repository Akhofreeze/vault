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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest
     */
    signature?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest {
    return true;
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest {
    return PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequestFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : json['payload'],
        '_protected': json['protected'] == null ? undefined : json['protected'],
        'signature': json['signature'] == null ? undefined : json['signature'],
    };
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest {
    return PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequestToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyAcmeNewOrderRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': value['payload'],
        'protected': value['_protected'],
        'signature': value['signature'],
    };
}

