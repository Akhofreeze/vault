"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfGoogleCloudGenerateStaticAccountKeyRequest = instanceOfGoogleCloudGenerateStaticAccountKeyRequest;
exports.GoogleCloudGenerateStaticAccountKeyRequestFromJSON = GoogleCloudGenerateStaticAccountKeyRequestFromJSON;
exports.GoogleCloudGenerateStaticAccountKeyRequestFromJSONTyped = GoogleCloudGenerateStaticAccountKeyRequestFromJSONTyped;
exports.GoogleCloudGenerateStaticAccountKeyRequestToJSON = GoogleCloudGenerateStaticAccountKeyRequestToJSON;
exports.GoogleCloudGenerateStaticAccountKeyRequestToJSONTyped = GoogleCloudGenerateStaticAccountKeyRequestToJSONTyped;
/**
 * Check if a given object implements the GoogleCloudGenerateStaticAccountKeyRequest interface.
 */
function instanceOfGoogleCloudGenerateStaticAccountKeyRequest(value) {
    return true;
}
function GoogleCloudGenerateStaticAccountKeyRequestFromJSON(json) {
    return GoogleCloudGenerateStaticAccountKeyRequestFromJSONTyped(json, false);
}
function GoogleCloudGenerateStaticAccountKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'keyAlgorithm': json['key_algorithm'] == null ? undefined : json['key_algorithm'],
        'keyType': json['key_type'] == null ? undefined : json['key_type'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}
function GoogleCloudGenerateStaticAccountKeyRequestToJSON(json) {
    return GoogleCloudGenerateStaticAccountKeyRequestToJSONTyped(json, false);
}
function GoogleCloudGenerateStaticAccountKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key_algorithm': value['keyAlgorithm'],
        'key_type': value['keyType'],
        'ttl': value['ttl'],
    };
}
