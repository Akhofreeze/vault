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
 * @interface SystemWriteStorageRaftSnapshotAutoConfigNameRequest
 */
export interface SystemWriteStorageRaftSnapshotAutoConfigNameRequest {
    /**
     * AWS access key ID
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsAccessKeyId?: string;
    /**
     * AWS bucket
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3Bucket?: string;
    /**
     * Disable TLS for the AWS endpoint, intended only for testing
     * @type {boolean}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3DisableTls?: boolean;
    /**
     * Use KMS to encrypt bucket contents
     * @type {boolean}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3EnableKms?: boolean;
    /**
     * AWS endpoint, typically only set when using a non-AWS S3 instance like Minio
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3Endpoint?: string;
    /**
     * Use the endpoint/bucket URL style instead of bucket.endpoint
     * @type {boolean}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3ForcePathStyle?: boolean;
    /**
     * Use named KMS key
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3KmsKey?: string;
    /**
     * AWS region
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3Region?: string;
    /**
     * Use AES256 to encrypt bucket contents
     * @type {boolean}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsS3ServerSideEncryption?: boolean;
    /**
     * AWS secret access key
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsSecretAccessKey?: string;
    /**
     * AWS session token
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    awsSessionToken?: string;
    /**
     * Azure account key
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    azureAccountKey?: string;
    /**
     * Azure account name
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    azureAccountName?: string;
    /**
     * Azure auth mode: shared, managed, or application
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    azureAuthMode?: string;
    /**
     * Azure blob environment
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    azureBlobEnvironment?: string;
    /**
     * Azure client id
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    azureClientId?: string;
    /**
     * Azure container name
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    azureContainerName?: string;
    /**
     * Azure blob storage endpoint
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    azureEndpoint?: string;
    /**
     * file/object prefix prepended to snapshot ID
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    filePrefix?: string;
    /**
     * Disable TLS, normally only for testing
     * @type {boolean}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    googleDisableTls?: boolean;
    /**
     * GCS endpoint
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    googleEndpoint?: string;
    /**
     * GCS bucket
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    googleGcsBucket?: string;
    /**
     * Service account key in JSON format
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    googleServiceAccountKey?: string;
    /**
     * snapshot schedule
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    interval?: string;
    /**
     * max space on disk to use for snapshots
     * @type {number}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    localMaxSpace?: number;
    /**
     * directory (local) or bucket prefix (cloud) for snapshot
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    pathPrefix?: string;
    /**
     * how many snapshots to keep
     * @type {number}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    retain?: number;
    /**
     * type of storage to use for the snapshots
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoConfigNameRequest
     */
    storageType?: SystemWriteStorageRaftSnapshotAutoConfigNameRequestStorageTypeEnum;
}
/**
* @export
* @enum {string}
*/
export declare enum SystemWriteStorageRaftSnapshotAutoConfigNameRequestStorageTypeEnum {
    LOCAL = "local",
    AZURE_BLOB = "azure-blob",
    AWS_S3 = "aws-s3",
    GOOGLE_GCS = "google-gcs"
}
/**
 * Check if a given object implements the SystemWriteStorageRaftSnapshotAutoConfigNameRequest interface.
 */
export declare function instanceOfSystemWriteStorageRaftSnapshotAutoConfigNameRequest(value: object): value is SystemWriteStorageRaftSnapshotAutoConfigNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoConfigNameRequestFromJSON(json: any): SystemWriteStorageRaftSnapshotAutoConfigNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoConfigNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteStorageRaftSnapshotAutoConfigNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoConfigNameRequestToJSON(json: any): SystemWriteStorageRaftSnapshotAutoConfigNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoConfigNameRequestToJSONTyped(value?: SystemWriteStorageRaftSnapshotAutoConfigNameRequest | null, ignoreDiscriminator?: boolean): any;
