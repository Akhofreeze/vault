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
exports.instanceOfAppRoleReadSecretIdBoundCidrsResponse = instanceOfAppRoleReadSecretIdBoundCidrsResponse;
exports.AppRoleReadSecretIdBoundCidrsResponseFromJSON = AppRoleReadSecretIdBoundCidrsResponseFromJSON;
exports.AppRoleReadSecretIdBoundCidrsResponseFromJSONTyped = AppRoleReadSecretIdBoundCidrsResponseFromJSONTyped;
exports.AppRoleReadSecretIdBoundCidrsResponseToJSON = AppRoleReadSecretIdBoundCidrsResponseToJSON;
exports.AppRoleReadSecretIdBoundCidrsResponseToJSONTyped = AppRoleReadSecretIdBoundCidrsResponseToJSONTyped;
/**
 * Check if a given object implements the AppRoleReadSecretIdBoundCidrsResponse interface.
 */
function instanceOfAppRoleReadSecretIdBoundCidrsResponse(value) {
    return true;
}
function AppRoleReadSecretIdBoundCidrsResponseFromJSON(json) {
    return AppRoleReadSecretIdBoundCidrsResponseFromJSONTyped(json, false);
}
function AppRoleReadSecretIdBoundCidrsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'secretIdBoundCidrs': json['secret_id_bound_cidrs'] == null ? undefined : json['secret_id_bound_cidrs'],
    };
}
function AppRoleReadSecretIdBoundCidrsResponseToJSON(json) {
    return AppRoleReadSecretIdBoundCidrsResponseToJSONTyped(json, false);
}
function AppRoleReadSecretIdBoundCidrsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'secret_id_bound_cidrs': value['secretIdBoundCidrs'],
    };
}
