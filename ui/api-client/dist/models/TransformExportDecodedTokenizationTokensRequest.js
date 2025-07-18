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
exports.instanceOfTransformExportDecodedTokenizationTokensRequest = instanceOfTransformExportDecodedTokenizationTokensRequest;
exports.TransformExportDecodedTokenizationTokensRequestFromJSON = TransformExportDecodedTokenizationTokensRequestFromJSON;
exports.TransformExportDecodedTokenizationTokensRequestFromJSONTyped = TransformExportDecodedTokenizationTokensRequestFromJSONTyped;
exports.TransformExportDecodedTokenizationTokensRequestToJSON = TransformExportDecodedTokenizationTokensRequestToJSON;
exports.TransformExportDecodedTokenizationTokensRequestToJSONTyped = TransformExportDecodedTokenizationTokensRequestToJSONTyped;
/**
 * Check if a given object implements the TransformExportDecodedTokenizationTokensRequest interface.
 */
function instanceOfTransformExportDecodedTokenizationTokensRequest(value) {
    return true;
}
function TransformExportDecodedTokenizationTokensRequestFromJSON(json) {
    return TransformExportDecodedTokenizationTokensRequestFromJSONTyped(json, false);
}
function TransformExportDecodedTokenizationTokensRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'continuation': json['continuation'] == null ? undefined : json['continuation'],
        'limit': json['limit'] == null ? undefined : json['limit'],
    };
}
function TransformExportDecodedTokenizationTokensRequestToJSON(json) {
    return TransformExportDecodedTokenizationTokensRequestToJSONTyped(json, false);
}
function TransformExportDecodedTokenizationTokensRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'continuation': value['continuation'],
        'limit': value['limit'],
    };
}
