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
/**
 * Check if a given object implements the TransformWriteMaskingTransformationRequest interface.
 */
export function instanceOfTransformWriteMaskingTransformationRequest(value) {
    return true;
}
export function TransformWriteMaskingTransformationRequestFromJSON(json) {
    return TransformWriteMaskingTransformationRequestFromJSONTyped(json, false);
}
export function TransformWriteMaskingTransformationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'allowedRoles': json['allowed_roles'] == null ? undefined : json['allowed_roles'],
        'maskingCharacter': json['masking_character'] == null ? undefined : json['masking_character'],
        'template': json['template'] == null ? undefined : json['template'],
    };
}
export function TransformWriteMaskingTransformationRequestToJSON(json) {
    return TransformWriteMaskingTransformationRequestToJSONTyped(json, false);
}
export function TransformWriteMaskingTransformationRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'allowed_roles': value['allowedRoles'],
        'masking_character': value['maskingCharacter'],
        'template': value['template'],
    };
}
