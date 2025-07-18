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
* @export
* @enum {string}
*/
export var PkiWriteIssuerIssuerRefExternalPolicySignRequestFormatEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicySignRequestFormatEnum) {
    PkiWriteIssuerIssuerRefExternalPolicySignRequestFormatEnum["PEM"] = "pem";
    PkiWriteIssuerIssuerRefExternalPolicySignRequestFormatEnum["DER"] = "der";
    PkiWriteIssuerIssuerRefExternalPolicySignRequestFormatEnum["PEM_BUNDLE"] = "pem_bundle";
})(PkiWriteIssuerIssuerRefExternalPolicySignRequestFormatEnum || (PkiWriteIssuerIssuerRefExternalPolicySignRequestFormatEnum = {}));
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicySignRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicySignRequest(value) {
    if (!('csr' in value) || value['csr'] === undefined)
        return false;
    return true;
}
export function PkiWriteIssuerIssuerRefExternalPolicySignRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicySignRequestFromJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicySignRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { 'csr': json['csr'], 'format': json['format'] == null ? undefined : json['format'], 'removeRootsFromChain': json['remove_roots_from_chain'] == null ? undefined : json['remove_roots_from_chain'] });
}
export function PkiWriteIssuerIssuerRefExternalPolicySignRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicySignRequestToJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicySignRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, value), { 'csr': value['csr'], 'format': value['format'], 'remove_roots_from_chain': value['removeRootsFromChain'] });
}
