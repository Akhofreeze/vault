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
 * @interface RootTokenGenerationReadProgressResponse
 */
export interface RootTokenGenerationReadProgressResponse {
    /**
     * 
     * @type {boolean}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    complete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    encodedRootToken?: string;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    encodedToken?: string;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    nonce?: string;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    otp?: string;
    /**
     * 
     * @type {number}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    otpLength?: number;
    /**
     * 
     * @type {string}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    pgpFingerprint?: string;
    /**
     * 
     * @type {number}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    progress?: number;
    /**
     * 
     * @type {number}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    required?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RootTokenGenerationReadProgressResponse
     */
    started?: boolean;
}

/**
 * Check if a given object implements the RootTokenGenerationReadProgressResponse interface.
 */
export function instanceOfRootTokenGenerationReadProgressResponse(value: object): value is RootTokenGenerationReadProgressResponse {
    return true;
}

export function RootTokenGenerationReadProgressResponseFromJSON(json: any): RootTokenGenerationReadProgressResponse {
    return RootTokenGenerationReadProgressResponseFromJSONTyped(json, false);
}

export function RootTokenGenerationReadProgressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootTokenGenerationReadProgressResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'complete': json['complete'] == null ? undefined : json['complete'],
        'encodedRootToken': json['encoded_root_token'] == null ? undefined : json['encoded_root_token'],
        'encodedToken': json['encoded_token'] == null ? undefined : json['encoded_token'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'otp': json['otp'] == null ? undefined : json['otp'],
        'otpLength': json['otp_length'] == null ? undefined : json['otp_length'],
        'pgpFingerprint': json['pgp_fingerprint'] == null ? undefined : json['pgp_fingerprint'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'required': json['required'] == null ? undefined : json['required'],
        'started': json['started'] == null ? undefined : json['started'],
    };
}

export function RootTokenGenerationReadProgressResponseToJSON(json: any): RootTokenGenerationReadProgressResponse {
    return RootTokenGenerationReadProgressResponseToJSONTyped(json, false);
}

export function RootTokenGenerationReadProgressResponseToJSONTyped(value?: RootTokenGenerationReadProgressResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'complete': value['complete'],
        'encoded_root_token': value['encodedRootToken'],
        'encoded_token': value['encodedToken'],
        'nonce': value['nonce'],
        'otp': value['otp'],
        'otp_length': value['otpLength'],
        'pgp_fingerprint': value['pgpFingerprint'],
        'progress': value['progress'],
        'required': value['required'],
        'started': value['started'],
    };
}

