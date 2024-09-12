// Constants for storage keys
const USER_LOGIN_KEY = "userLogin";
const API_KEY_KEY = "apiKey";

const isLocalStorageAvailable = (): boolean => {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
};

// 1) local storage for user login
export const getLocalUserLogin = () => {
    if (isLocalStorageAvailable()) {
        return localStorage.getItem(USER_LOGIN_KEY);
    }
};

export const setLocalUserLogin = (userLogin: boolean) => {
    if (isLocalStorageAvailable()) {
        localStorage.setItem(USER_LOGIN_KEY, String(userLogin));
    }
};

export const removeLocalUserLogin = (): void => {
    if (isLocalStorageAvailable()) {
        localStorage.removeItem(USER_LOGIN_KEY);
    }
};

// 2) local storage for api key
export const setLocalApiKey = (apiKey: string) => {
    if (isLocalStorageAvailable()) {
        localStorage.setItem(API_KEY_KEY, apiKey);
    }
};

export const getLocalApiKey = () => {
    if (isLocalStorageAvailable()) {
        return localStorage.getItem(API_KEY_KEY);
    }
};

export const removeLocalApiKey = () => {
    if (isLocalStorageAvailable()) {
        localStorage.removeItem(API_KEY_KEY);
    }
};

export const defaultCompanyData = {
    "additionalParams": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
    },
    "analytics": {
        "avgCVSentToInterviewDays": 0,
        "avgClientRejectRate": 0,
        "avgInterviewToOfferDays": 0,
        "avgInterviewToOfferPct": 0,
        "avgInterviewToOfferRatio": "string",
        "avgJobCreatedToApplicationDays": 0,
        "avgJobCreatedToShortlistDays": 0,
        "avgJobCreatedToSourcedDays": 0,
        "avgOfferToPlacementDays": 0,
        "avgOfferToPlacementPct": 0,
        "avgOfferToPlacementRatio": "string",
        "avgPlacementValue": 0,
        "avgTimeToFillAllTime": 0,
        "avgTimeToFillCurrYear": 0,
        "avgTimeToFillPrevYear": 0,
        "billingCurrMonth": 0,
        "billingCurrQrtr": 0,
        "billingCurrYear": 0,
        "billingPrevMonth": 0,
        "billingPrevQrtr": 0,
        "billingPrevYear": 0,
        "closedJobsPipelineValue": 0,
        "jobsCurrMonth": 0,
        "jobsCurrQrtr": 0,
        "jobsCurrYear": 0,
        "jobsPrevMonth": 0,
        "jobsPrevQrtr": 0,
        "jobsPrevYear": 0,
        "lostOpportunityValue": 0,
        "openJobsCount": 0,
        "openJobsPipelineValue": 0,
        "openOpportunities": 0,
        "opportunitiesCurrMonth": 0,
        "opportunitiesCurrQrtr": 0,
        "opportunitiesCurrYear": 0,
        "opportunitiesPrevMonth": 0,
        "opportunitiesPrevQrtr": 0,
        "opportunitiesPrevYear": 0,
        "opportunityDealValue": 0,
        "opportunityValueCurrMonth": 0,
        "opportunityValueCurrQrtr": 0,
        "opportunityValueCurrYear": 0,
        "opportunityValuePrevMonth": 0,
        "opportunityValuePrevQrtr": 0,
        "opportunityValuePrevYear": 0,
        "pendingPositionsToFill": 0,
        "placementsCurrMonth": 0,
        "placementsCurrQrtr": 0,
        "placementsCurrYear": 0,
        "placementsPrevMonth": 0,
        "placementsPrevQrtr": 0,
        "placementsPrevYear": 0,
        "totalBillingValue": 0,
        "totalContacts": 0,
        "totalJobs": 0,
        "totalOpportunities": 0,
        "totalPlacements": 0,
        "totalPositionsToFill": 0
    },
    "apolloRecord": {
        "accountId": "string",
        "createdOn": "2024-09-12T13:53:40.476Z",
        "emailStatus": "string",
        "enableSync": true,
        "enrichedByEmail": "string",
        "enrichedById": "string",
        "enrichedOn": "2024-09-12T13:53:40.476Z",
        "lastSyncOn": "2024-09-12T13:53:40.476Z",
        "organizationId": "string",
        "personId": "string",
        "recordId": "string",
        "recordType": "string",
        "syncEnabledByEmail": "string",
        "syncEnabledById": "string",
        "syncEnabledOn": "2024-09-12T13:53:40.476Z"
    },
    "benefitsPackage": "string",
    "client": true,
    "companySizeCode": "string",
    "companyTypeId": "string",
    "createdBySystem": true,
    "createdOn": "",
    "description": "string",
    "distributionListId": "string",
    "domain": "string",
    "email": "string",
    "employees": "string",
    "facebook": "string",
    "faxNo": "string",
    "headOffice": {
        "address": {
            "addressLine": "string",
            "addressLine2": "string",
            "cityName": "string",
            "countryCode": "string",
            "countryName": "string",
            "latitude": 0,
            "longitude": 0,
            "postCode": "string",
            "regionName": "string"
        },
        "id": "string",
        "name": "string"
    },
    "id": "string",
    "imageUrl": "string",
    "industries": [
        {
            "category": "string",
            "createdBy": "string",
            "id": "string",
            "name": "string",
            "position": 0,
            "tenantId": "string",
            "type": {
                "code": "string",
                "id": "string",
                "name": "string"
            }
        }
    ],
    "labels": [
        {
            "bgColor": "string",
            "filterId": "string",
            "id": "string",
            "name": "string",
            "parentLabelId": "string",
            "parentLabelName": "string",
            "position": 0,
            "shared": true,
            "textColor": "string",
            "type": "ACTIVE_FILTER"
        }
    ],
    "languages": [
        "string"
    ],
    "linkedIn": "string",
    "logoUrl": "string",
    "modifiedOn": "2024-09-12T13:53:40.476Z",
    "name": "",
    "openJobs": true,
    "otherOffices": [
        {
            "address": {
                "addressLine": "string",
                "addressLine2": "string",
                "cityName": "string",
                "countryCode": "string",
                "countryName": "string",
                "latitude": 0,
                "longitude": 0,
                "postCode": "string",
                "regionName": "string"
            },
            "id": "string",
            "name": "string"
        }
    ],
    "ownerId": "string",
    "ownerName": "string",
    "parent": {
        "address": {
            "addressLine": "string",
            "addressLine2": "string",
            "cityName": "string",
            "cityNameLower": "string",
            "countryCode": "string",
            "countryCodeLower": "string",
            "countryName": "string",
            "latitude": 0,
            "longitude": 0,
            "postCode": "string",
            "regionName": "string"
        },
        "alternateEmail": "string",
        "cvId": "string",
        "doNotContact": true,
        "email": "string",
        "employerName": "string",
        "hasCv": true,
        "headline": "string",
        "homePhone": "string",
        "id": "string",
        "label": "string",
        "labels": [
            {
                "bgColor": "string",
                "filterId": "string",
                "id": "string",
                "name": "string",
                "parentLabelId": "string",
                "parentLabelName": "string",
                "position": 0,
                "shared": true,
                "textColor": "string",
                "type": "ACTIVE_FILTER"
            }
        ],
        "mobile": "string",
        "ownerId": "string",
        "ownerName": "string",
        "rating": 0,
        "recordType": "string",
        "reference": "string",
        "tenantId": "string",
        "tenantName": "string",
        "website": "string",
        "workPhone": "string"
    },
    "phone": "string",
    "placements": true,
    "rating": 0,
    "reference": "string",
    "sectors": [
        {
            "category": "string",
            "createdBy": "string",
            "id": "string",
            "name": "string",
            "position": 0,
            "tenantId": "string",
            "type": {
                "code": "string",
                "id": "string",
                "name": "string"
            }
        }
    ],
    "skills": [
        "string"
    ],
    "status": {
        "category": "string",
        "createdBy": "string",
        "id": "string",
        "name": "string",
        "position": 0,
        "tenantId": "string",
        "type": {
            "code": "string",
            "id": "string",
            "name": "string"
        }
    },
    "statusId": "string",
    "tags": [
        {
            "key": "string",
            "value": "string"
        }
    ],
    "termsAgreed": "string",
    "twitter": "string",
    "type": "ACTIVE_FILTER",
    "udfList": [
        {
            "key": {
                "id": "string",
                "inputType": "DROPDOWN OR MULTI_SELECT or INPUT_DATE.."
            },
            "value": {
                "dateValue": "string",
                "listValue": [
                    "string"
                ],
                "textValue": "string"
            }
        }
    ],
    "website": "string"
}