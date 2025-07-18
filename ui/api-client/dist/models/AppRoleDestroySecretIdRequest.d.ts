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
 * @interface AppRoleDestroySecretIdRequest
 */
export interface AppRoleDestroySecretIdRequest {
    /**
     * SecretID attached to the role.
     * @type {string}
     * @memberof AppRoleDestroySecretIdRequest
     */
    secretId?: string;
}
/**
 * Check if a given object implements the AppRoleDestroySecretIdRequest interface.
 */
export declare function instanceOfAppRoleDestroySecretIdRequest(value: object): value is AppRoleDestroySecretIdRequest;
export declare function AppRoleDestroySecretIdRequestFromJSON(json: any): AppRoleDestroySecretIdRequest;
export declare function AppRoleDestroySecretIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleDestroySecretIdRequest;
export declare function AppRoleDestroySecretIdRequestToJSON(json: any): AppRoleDestroySecretIdRequest;
export declare function AppRoleDestroySecretIdRequestToJSONTyped(value?: AppRoleDestroySecretIdRequest | null, ignoreDiscriminator?: boolean): any;
