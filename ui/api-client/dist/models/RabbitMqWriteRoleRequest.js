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
exports.instanceOfRabbitMqWriteRoleRequest = instanceOfRabbitMqWriteRoleRequest;
exports.RabbitMqWriteRoleRequestFromJSON = RabbitMqWriteRoleRequestFromJSON;
exports.RabbitMqWriteRoleRequestFromJSONTyped = RabbitMqWriteRoleRequestFromJSONTyped;
exports.RabbitMqWriteRoleRequestToJSON = RabbitMqWriteRoleRequestToJSON;
exports.RabbitMqWriteRoleRequestToJSONTyped = RabbitMqWriteRoleRequestToJSONTyped;
/**
 * Check if a given object implements the RabbitMqWriteRoleRequest interface.
 */
function instanceOfRabbitMqWriteRoleRequest(value) {
    return true;
}
function RabbitMqWriteRoleRequestFromJSON(json) {
    return RabbitMqWriteRoleRequestFromJSONTyped(json, false);
}
function RabbitMqWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'tags': json['tags'] == null ? undefined : json['tags'],
        'vhostTopics': json['vhost_topics'] == null ? undefined : json['vhost_topics'],
        'vhosts': json['vhosts'] == null ? undefined : json['vhosts'],
    };
}
function RabbitMqWriteRoleRequestToJSON(json) {
    return RabbitMqWriteRoleRequestToJSONTyped(json, false);
}
function RabbitMqWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'tags': value['tags'],
        'vhost_topics': value['vhostTopics'],
        'vhosts': value['vhosts'],
    };
}
