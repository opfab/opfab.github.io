window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "IMPORTANT - The Try it Out button will generate curl requests for examples, but executing them through the UI will not work as authentication has not been set up. This page is for documentation only.",
    "version" : "3.1.0.RELEASE",
    "title" : "Card Management API",
    "termsOfService" : "",
    "contact" : {
      "email" : "opfab_AT_lists.lfenergy.org",
      "url" : "https://opfab.github.io/"
    },
    "license" : {
      "name" : "Mozilla Public License V2.0",
      "url" : "http://mozilla.org/MPL/2.0/"
    }
  },
  "host" : "localhost:2002",
  "basePath" : "/cards",
  "tags" : [ {
    "name" : "cards",
    "description" : "Everything concerning cards"
  }, {
    "name" : "actions",
    "description" : "Everything concerning actions"
  }, {
    "name" : "read",
    "description" : "Everything concerning resource state"
  }, {
    "name" : "creation",
    "description" : "Everything concerning resource creation"
  }, {
    "name" : "deletion",
    "description" : "Everything concerning resource deletion"
  }, {
    "name" : "archives",
    "description" : "Everything concerning archived cards"
  } ],
  "schemes" : [ "http" ],
  "definitions" : {
    "EpochDate" : {
      "type" : "object",
      "description" : "Number of milliseconds since Epoch (long integer)",
      "example" : 1551868290379
    },
    "LongInteger" : {
      "type" : "object",
      "description" : "Number of items",
      "example" : 10
    },
    "CardOperationTypeEnum" : {
      "type" : "string",
      "description" : "Type of operation >\n* ADD - Operation lists cards object to be added\n* UPDATE - Operation lists cards object to be updated\n* DELETE - Operation lists card ids to be deleted",
      "enum" : [ "ADD", "UPDATE", "DELETE" ],
      "example" : "ADD"
    },
    "SeverityEnum" : {
      "type" : "string",
      "description" : "Severity of the card subject >\n* ALARM - The process instance behind the card is in critical condition\n* ACTION - The process instance behind the card is expecting an action from the user\n* COMPLIANT - The process related to the card is in a compliant status\n* INFORMATION - Purely informational card",
      "enum" : [ "ALARM", "ACTION", "COMPLIANT", "INFORMATION" ],
      "example" : "INFORMATION"
    },
    "I18n" : {
      "type" : "object",
      "description" : "describes an i18n label",
      "properties" : {
        "key" : {
          "type" : "string",
          "description" : "i18n client side key"
        },
        "parameters" : {
          "type" : "object",
          "description" : "Optional parameters",
          "additionalProperties" : {
            "type" : "string"
          }
        }
      },
      "required" : [ "key" ],
      "example" : {
        "key" : "title",
        "parameters" : {
          "EN" : "My Title",
          "FR" : "Mon Titre"
        }
      }
    },
    "CardOperation" : {
      "type" : "object",
      "description" : "This object holds an operation to be performed as well as a collection of cards (published in the same second) so as to be able to perform the operation on a batch of cards rather than on a single card.",
      "properties" : {
        "number" : {
          "$ref" : "#/definitions/LongInteger"
        },
        "publishDate" : {
          "$ref" : "#/definitions/EpochDate"
        },
        "type" : {
          "$ref" : "#/definitions/CardOperationTypeEnum"
        },
        "cardId" : {
          "type" : "string",
          "description" : "ID of card to be deleted. Only used for CardOperations of DELETE type."
        },
        "card" : {
          "$ref" : "#/definitions/LightCard",
          "description" : "Card object to be added or updated. Only used for CardOperations of ADD or UPDATE type."
        }
      },
      "example" : {
        "number" : 3,
        "publishDate" : 1546300800000,
        "type" : "DELETE",
        "cardId" : [ 12345 ]
      }
    },
    "TimeSpan" : {
      "type" : "object",
      "description" : "An object to define a business time span",
      "properties" : {
        "start" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Span start"
        },
        "end" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Span end (must be after start)"
        },
        "recurrence" : {
          "$ref" : "#/definitions/Recurrence",
          "description" : "recurrence of the timeSpan"
        }
      },
      "required" : [ "start" ]
    },
    "Recurrence" : {
      "type" : "object",
      "description" : "An object to define recurrence of timeSpans",
      "properties" : {
        "hoursAndMinutes" : {
          "$ref" : "#/definitions/HoursAndMinutes",
          "description" : "hours and minutes"
        },
        "daysOfWeek" : {
          "description" : "Days of the week for the recurrence",
          "type" : "array",
          "items" : {
            "type" : "integer"
          }
        },
        "timeZone" : {
          "description" : "Time zone reference for the recurrence definition",
          "type" : "string"
        },
        "durationInMinutes" : {
          "description" : "Duration in minutes of the event",
          "type" : "integer"
        }
      },
      "required" : [ "hoursAndMinutes" ]
    },
    "HoursAndMinutes" : {
      "type" : "object",
      "description" : "An object to represent a time with only hours and minutes",
      "properties" : {
        "hours" : {
          "type" : "integer"
        },
        "minutes" : {
          "type" : "integer"
        }
      }
    },
    "Card" : {
      "type" : "object",
      "description" : "A Card sums up information about the status of a given process instance of the publishing service",
      "properties" : {
        "uid" : {
          "type" : "string",
          "description" : "Unique card ID",
          "readOnly" : true
        },
        "id" : {
          "type" : "string",
          "description" : "Unique card ID (as defined in the associated process)",
          "readOnly" : true
        },
        "parentCardId" : {
          "type" : "string",
          "description" : "The id of the parent card if it's a child card (optional)",
          "readOnly" : true
        },
        "initialParentCardUid" : {
          "type" : "string",
          "description" : "The uid of the initial parent card if it's a child card (optional). When a card is updated, its id is still the same but not its uid, that's why we store this field initialParentCardUid.",
          "readOnly" : true
        },
        "keepChildCards" : {
          "type" : "boolean",
          "description" : "Is true if OperatorFabric must not delete child cards when their parent card is updated"
        },
        "publisher" : {
          "type" : "string",
          "description" : "Unique ID of the entity or service publishing the card"
        },
        "processVersion" : {
          "type" : "string",
          "description" : "Version of the associated process"
        },
        "process" : {
          "type" : "string",
          "description" : "ID of the associated process"
        },
        "processInstanceId" : {
          "type" : "string",
          "description" : "ID of the associated process instance"
        },
        "state" : {
          "type" : "string",
          "description" : "associated process state name"
        },
        "publishDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "The date the card was published (meaning created by the card service)",
          "readOnly" : true
        },
        "lttd" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Last time to decide, after this date no action can be triggered on the card"
        },
        "startDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Card validity start time"
        },
        "endDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Card validity end time (must be after startDate)"
        },
        "severity" : {
          "$ref" : "#/definitions/SeverityEnum",
          "description" : "Card severity"
        },
        "tags" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "description" : "Tags associated with the card"
        },
        "timeSpans" : {
          "type" : "array",
          "description" : "List of business time span associated to card",
          "items" : {
            "$ref" : "#/definitions/TimeSpan"
          }
        },
        "title" : {
          "description" : "Card i18n title",
          "$ref" : "#/definitions/I18n"
        },
        "summary" : {
          "description" : "Card i18n summary",
          "$ref" : "#/definitions/I18n"
        },
        "titleTranslated" : {
          "description" : "Card title translated",
          "type" : "string"
        },
        "summaryTranslated" : {
          "description" : "Card summary translated",
          "type" : "string"
        },
        "userRecipients" : {
          "description" : "List of user recipients",
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "groupRecipients" : {
          "description" : "List of group recipients",
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "externalRecipients" : {
          "description" : "List of  external recipients",
          "readOnly" : true,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "entitiesAllowedToRespond" : {
          "description" : "List of entities that can respond",
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "example" : [ "Dispatcher", "Planner" ]
        },
        "entitiesRequiredToRespond" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "example" : [ "Dispatcher", "Planner" ],
          "description" : "List of entities that have to respond. It will be taken into account in addition to entitiesAllowedToRespond to determine if a user can send a response. If present and not empty, this list will be used for display in the card detail header instead of entitiesAllowedToRespond."
        },
        "entityRecipients" : {
          "description" : "List of entity recipients",
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "example" : [ "Dispatcher", "Planner" ]
        },
        "data" : {
          "type" : "object",
          "description" : "Business data"
        },
        "hasBeenAcknowledged" : {
          "type" : "boolean",
          "description" : "Is true if the card was acknowledged by current user"
        },
        "hasBeenRead" : {
          "type" : "boolean",
          "description" : "Is true if the card was read by current user"
        },
        "publisherType" : {
          "$ref" : "#/definitions/PublisherTypeEnum"
        },
        "representative" : {
          "type" : "string",
          "description" : "Used in case of sending card as a representative of an entity or a publisher (unique ID of the entity or publisher)"
        },
        "representativeType" : {
          "$ref" : "#/definitions/PublisherTypeEnum"
        },
        "secondsBeforeTimeSpanForReminder" : {
          "type" : "integer"
        },
        "toNotify" : {
          "type" : "boolean",
          "description" : "Is false if the card must not be displayed in the feed and in monitoring screen"
        }
      },
      "required" : [ "publisher", "process", "processVersion", "processInstanceId", "severity", "startDate", "title", "summary", "state" ],
      "example" : {
        "uid" : 12345,
        "id" : "cardIdFromMyProcess",
        "publisher" : "MyService",
        "processVersion" : "0.0.1",
        "process" : "MyProcess",
        "processInstanceId" : "MyProcess_001",
        "state" : "started",
        "publishDate" : 1546300800000,
        "lttd" : 1546387230000,
        "startDate" : 1546387200000,
        "endDate" : 1546387250000,
        "severity" : "ACTION",
        "tags" : [ "MyService", "MyProcess", "ACTION" ],
        "actions" : [ {
          "type" : "URL",
          "lockAction" : true,
          "called" : false,
          "updateStateBeforeAction" : false,
          "hidden" : true,
          "buttonStyle" : "button.css",
          "label" : {
            "key" : "myCard.myAction.label",
            "parameters" : {
              "EN" : "My actions label",
              "FR" : "Mon intitule d'actions"
            }
          }
        } ],
        "title" : {
          "key" : "myservice.myprocess.title",
          "parameters" : {
            "EN" : "My process name",
            "FR" : "Mon nom de processus"
          }
        },
        "summary" : {
          "key" : "myservice.myprocess.title.summary",
          "parameters" : {
            "EN" : "Summary of card content",
            "FR" : "Resume du contenu de la carte"
          }
        }
      }
    },
    "CardCreationReport" : {
      "type" : "object",
      "description" : "Created card identifiers",
      "properties" : {
        "id" : {
          "type" : "string",
          "description" : "ID of the process instance to which this card refers"
        },
        "uid" : {
          "type" : "string",
          "description" : "Unique card ID"
        }
      }
    },
    "Subscription" : {
      "type" : "object",
      "description" : "LightCard Subscription object",
      "properties" : {
        "rangeStart" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "subscription range start time"
        },
        "rangeEnd" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "subscription range end time"
        },
        "loadedCards" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "Connection" : {
      "type" : "object",
      "description" : "Object representing a user connection (subscription)",
      "properties" : {
        "login" : {
          "type" : "string",
          "description" : "Login of user"
        }
      }
    },
    "LightCard" : {
      "type" : "object",
      "description" : "LightCard bears the essential information of a Card, to be aggregated in CardOperations.",
      "readOnly" : true,
      "properties" : {
        "uid" : {
          "type" : "string",
          "description" : "Unique card ID"
        },
        "id" : {
          "type" : "string",
          "description" : "Unique card ID for associated process"
        },
        "publisher" : {
          "type" : "string",
          "description" : "Publishing service unique ID"
        },
        "processVersion" : {
          "type" : "string",
          "description" : "Publishing service version"
        },
        "process" : {
          "type" : "string",
          "description" : "associated process name"
        },
        "processInstanceId" : {
          "type" : "string",
          "description" : "Unique process ID of the associated process instance"
        },
        "state" : {
          "type" : "string",
          "description" : "associated process state name"
        },
        "lttd" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Last time to decide, after this date no action can be triggered on the card"
        },
        "startDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Card validity start time"
        },
        "endDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Card validity end time"
        },
        "publishDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Publication time of the Card"
        },
        "severity" : {
          "$ref" : "#/definitions/SeverityEnum",
          "description" : "Card severity"
        },
        "tags" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "description" : "Tags associated with the card"
        },
        "entitiesAllowedToRespond" : {
          "description" : "List of entities that can respond",
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "example" : [ "Dispatcher", "Planner" ]
        },
        "entitiesRequiredToRespond" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "example" : [ "Dispatcher", "Planner" ],
          "description" : "List of entities that have to respond. It will be taken into account in addition to entitiesAllowedToRespond to determine if a user can send a response. If present and not empty, this list will be used for display in the card detail header instead of entitiesAllowedToRespond."
        },
        "title" : {
          "description" : "Card i18n title",
          "$ref" : "#/definitions/I18n"
        },
        "summary" : {
          "description" : "Card i18n summary",
          "$ref" : "#/definitions/I18n"
        },
        "titleTranslated" : {
          "description" : "Card title translated",
          "type" : "string"
        },
        "summaryTranslated" : {
          "description" : "Card summary translated",
          "type" : "string"
        },
        "timeSpans" : {
          "type" : "array",
          "description" : "List of business time span associated to card",
          "items" : {
            "$ref" : "#/definitions/TimeSpan"
          }
        },
        "hasBeenAcknowledged" : {
          "type" : "boolean",
          "description" : "Is true if the card was acknowledged by current user"
        },
        "hasBeenRead" : {
          "type" : "boolean",
          "description" : "Is true if the card was read by current user"
        },
        "parentCardId" : {
          "type" : "string",
          "description" : "The id of its parent card if it's a child card"
        },
        "initialParentCardUid" : {
          "type" : "string",
          "description" : "The uid of the initial parent card if it's a child card (optional). When a card is updated, its id is still the same but not its uid, that's why we store this field initialParentCardUid."
        },
        "publisherType" : {
          "$ref" : "#/definitions/PublisherTypeEnum"
        },
        "representative" : {
          "type" : "string",
          "description" : "Used in case of sending card as a representative of an entity or a publisher (unique ID of the entity or publisher)"
        },
        "representativeType" : {
          "$ref" : "#/definitions/PublisherTypeEnum"
        },
        "secondsBeforeTimeSpanForReminder" : {
          "type" : "integer"
        }
      },
      "required" : [ "uid", "id", "processInstanceId", "startDate" ],
      "example" : {
        "uid" : 12345,
        "id" : "cardIdFromMyProcess",
        "publisher" : "MyService",
        "processVersion" : "0.0.1",
        "processInstanceId" : "MyProcess_001",
        "lttd" : 1546387230000,
        "startDate" : 1546387200000,
        "endDate" : 1546387250000,
        "severity" : "ACTION",
        "tags" : [ "MyService", "MyProcess" ],
        "title" : {
          "key" : "myservice.myprocess.title",
          "parameters" : {
            "EN" : "My process name",
            "FR" : "Mon nom de processus"
          }
        },
        "summary" : {
          "key" : "myservice.myprocess.title.summary",
          "parameters" : {
            "EN" : "Summary of card content",
            "FR" : "Resume du contenu de la carte"
          }
        },
        "titleTranslated" : "My process name",
        "summaryTranslated" : "Summary of card content"
      }
    },
    "LightCardPage" : {
      "type" : "object",
      "description" : "This object contains the result of a paginated query returning LightCards: a list of LightCards as well as additional information on the result: total number of items, page number, page size, etc.",
      "properties" : {
        "content" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/LightCard"
          },
          "description" : "LightCard objects making up the required result page"
        },
        "first" : {
          "type" : "boolean",
          "description" : "Is true for the first page (page number = 0)"
        },
        "last" : {
          "type" : "boolean",
          "description" : "Is true for the last page"
        },
        "totalPages" : {
          "type" : "number",
          "description" : "Total number of pages returned by the query"
        },
        "totalElements" : {
          "type" : "number",
          "description" : "Total number of elements returned by the query"
        },
        "numberOfElements" : {
          "type" : "number",
          "description" : "Number of elements in the current page"
        },
        "size" : {
          "type" : "number",
          "description" : "Page size (max number of items in page)"
        },
        "number" : {
          "type" : "number",
          "description" : "Page number"
        }
      }
    },
    "PublisherTypeEnum" : {
      "type" : "string",
      "description" : "Publisher type >\n* EXTERNAL - The sender is an external service\n* ENTITY - The sender of the card is the user on behalf of the entity",
      "enum" : [ "EXTERNAL", "ENTITY" ],
      "example" : "EXTERNAL"
    },
    "FieldToTranslate" : {
      "description" : "Card field to translate with i18n value",
      "properties" : {
        "i18nValue" : {
          "description" : "i18n value to translate",
          "$ref" : "#/definitions/I18n"
        },
        "process" : {
          "description" : "Id of the process",
          "type" : "string"
        },
        "processVersion" : {
          "description" : "Version of the process",
          "type" : "string"
        }
      }
    }
  },
  "paths" : {
    "/cardSubscription" : {
      "get" : {
        "tags" : [ "cards", "read", "subscription" ],
        "summary" : "fetch card operations",
        "description" : "fetch cards restricted to calling user. Fetched cards all come with empty data and details. requesting this end point opens an SSE connection",
        "operationId" : "getCardSubscription",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "rangeStart",
          "type" : "string",
          "format" : "date-time",
          "in" : "query",
          "description" : "start of time range to get published card"
        }, {
          "name" : "rangeEnd",
          "type" : "string",
          "format" : "date-time",
          "in" : "query",
          "description" : "end of time range to get published card"
        }, {
          "name" : "notification",
          "type" : "boolean",
          "in" : "query",
          "default" : false,
          "description" : "If true, connection is kept for notification of new cards (not related to the specified range)"
        }, {
          "name" : "clientId",
          "type" : "string",
          "in" : "query",
          "description" : "A unique id to identify client to allow for reconnection (an autogenerated UUID is the best solution)"
        } ],
        "responses" : {
          "200" : {
            "description" : "ok",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/CardOperation"
              }
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - User doesn't have any group"
          }
        }
      }
    },
    "/cardSubscription/{uiId}" : {
      "put" : {
        "tags" : [ "cards", "subscription" ],
        "summary" : "Update existing subscription",
        "description" : "Update existing subscription",
        "operationId" : "updateCardSubscription",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "uiId",
          "description" : "unique ui client id associated to subscription",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "subscription",
          "description" : "updated subscription",
          "schema" : {
            "$ref" : "#/definitions/Subscription"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Subscription"
            }
          },
          "400" : {
            "description" : "Bad request (body doesn't match login path parameter)"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "404" : {
            "description" : "Subscription not found"
          }
        }
      }
    },
    "/cards" : {
      "post" : {
        "tags" : [ "card", "creation" ],
        "summary" : "publish card",
        "description" : "Publish one card to OperatorFabric",
        "operationId" : "publishCard",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "card",
          "in" : "body",
          "schema" : {
            "$ref" : "#/definitions/Card"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "created",
            "schema" : {
              "$ref" : "#/definitions/CardCreationReport"
            }
          },
          "400" : {
            "description" : "bad request"
          }
        }
      },
      "delete" : {
        "tags" : [ "cards", "deletion" ],
        "summary" : "delete cards",
        "description" : "Delete cards from OperatorFabric where card endDate is before the specified date or where  card has no endDate and startDate is before the specified date.",
        "operationId" : "deleteCards",
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "query"
        }, {
          "name" : "endDateBefore"
        }, {
          "type" : "number"
        }, {
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK"
          }
        }
      }
    },
    "/archives" : {
      "get" : {
        "tags" : [ "archives", "read" ],
        "summary" : "get archived cards matching given criteria",
        "description" : "get archived cards matching the criteria given as parameters. Results are limited to the cards that the calling user is allowed to see (based on the card recipients). For performance reasons, the response  does not contain all lightCard fields, the returned fields are : id, uid,publisher, processVersion,process, processInstanceId,state,title,summary,publishDate,startDate,endDate,severity, publisherType, representative,representativeType. The other fields are set to null.",
        "operationId" : "fetchArchivedCardsWithParams",
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "query",
          "name" : "page",
          "type" : "number",
          "required" : false,
          "description" : "Page number of the page to retrieve. If \"size\" is set but \"page\" isn't, the default page returned will be the first (number 0). If \"page\" is set but \"size\" isn't, the default size will be 10 items. If neither \"page\" nor \"size\" is set, the response will contain a single page containing all matching cards. This parameter should be unique or a BAD REQUEST will be returned."
        }, {
          "in" : "query",
          "name" : "size",
          "type" : "number",
          "required" : false,
          "description" : "Size of the results pages. If \"size\" is set but \"page\" isn't, the default page returned will be the first (number 0). If \"page\" is set but \"size\" isn't, the default size will be 10 items. If neither \"page\" nor \"size\" is set, the response will contain a single page containing all matching cards. This parameter should be unique or a BAD REQUEST will be returned."
        }, {
          "in" : "query",
          "name" : "publishDateFrom",
          "type" : "number",
          "required" : false,
          "description" : "Date as number of milliseconds since epoch. If this query parameter is set, only cards with a publishDate that is after this date will be returned. This parameter should be unique or a BAD REQUEST will be returned."
        }, {
          "in" : "query",
          "name" : "publishDateTo",
          "type" : "number",
          "required" : false,
          "description" : "Date as number of milliseconds since epoch. If this query parameter is set, only cards with a publishDate that is before this date will be returned. This parameter should be unique or a BAD REQUEST will be returned."
        }, {
          "in" : "query",
          "name" : "activeFrom",
          "type" : "number",
          "required" : false,
          "description" : "Date as number of milliseconds since epoch. If this query parameter is set, only cards with an active period (as defined by their startDate and endDate properties) that overlaps the range [activeFrom, activeTo] will be returned. If no parameter activeTo is set, only cards with at least part of their active period after activeFrom will be returned. This parameter should be unique or a BAD REQUEST will be returned."
        }, {
          "in" : "query",
          "name" : "activeTo",
          "type" : "number",
          "required" : false,
          "description" : "Date as number of milliseconds since epoch. If this query parameter is set, only cards with an active period (as defined by their startDate and endDate properties) that overlaps the range [activeFrom, activeTo] will be returned. If no parameter activeFrom is set, only cards with at least part of their active period before activeTo will be returned. This parameter should be unique or a BAD REQUEST will be returned."
        }, {
          "in" : "query",
          "name" : "publisher",
          "type" : "string",
          "required" : false,
          "description" : "If this parameter is set, results will be limited to cards from this publisher. This parameter can be set multiple times to filter cards from several publishers, using the following syntax: ?publisher=publisher1&publisher=publisher2"
        }, {
          "in" : "query",
          "name" : "process",
          "type" : "string",
          "required" : false,
          "description" : "If this parameter is set, results will be limited to cards from this process. This parameter can be set multiple times to filter cards from several processes, using the following syntax: ?process=process1&process=process2"
        }, {
          "in" : "query",
          "name" : "tags",
          "type" : "string",
          "required" : false,
          "description" : "If this parameter is set, results will be limited to cards containing this tag. This parameter can be set multiple times to filter cards with several tags, using the following syntax: ?tags=tag1&tags=tag2. In this example, cards bearing either tag1 or tag2 (or both) will be returned."
        }, {
          "in" : "query",
          "name" : "XXXX",
          "type" : "string",
          "required" : false,
          "description" : "In addition to the query parameters described above, any query parameter of the form ?key=value, where \"key\" is the name of a card field, will filter cards to return only cards where the field \"key\" is either equal to the string \"value\" or to an array containing \"value\". If key isn't a card property, the filter will have no effect."
        }, {
          "in" : "query",
          "name" : "childCards",
          "type" : "boolean",
          "required" : false,
          "description" : "If this parameter is set to true, child cards will be included in the results. If the parameter is absent or set to false, child cards will not be included."
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/LightCardPage"
            }
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - User doesn't have any group"
          }
        }
      }
    },
    "/archives/{id}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "id",
        "type" : "string",
        "required" : true
      } ],
      "get" : {
        "operationId" : "fetchArchivedCard",
        "tags" : [ "archives", "read" ],
        "summary" : "fetch archived card",
        "description" : "fetch archived card with the given id",
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Card"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - User doesn't have any group"
          }
        }
      }
    },
    "/cards/{id}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "id",
        "type" : "string",
        "required" : true,
        "description" : "The id parameter is constructed as follows : {process}.{processInstanceId}"
      } ],
      "delete" : {
        "operationId" : "deleteProcessCard",
        "tags" : [ "cards", "deletion" ],
        "summary" : "delete card",
        "description" : "delete a card",
        "responses" : {
          "200" : {
            "description" : "OK"
          }
        }
      },
      "get" : {
        "operationId" : "fetchProcessCard",
        "tags" : [ "cards", "read" ],
        "summary" : "fetch current card",
        "description" : "fetch current card for process id",
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Card"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - User doesn't have any group"
          }
        }
      }
    },
    "/cards/userAcknowledgement/{uid}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "uid",
        "type" : "string",
        "required" : true,
        "description" : "The card uid"
      } ],
      "post" : {
        "operationId" : "postUserAcknowledgement",
        "tags" : [ "cards", "update", "acknowledgement" ],
        "summary" : "update current card adding a user acknowledgement",
        "description" : "update current card users acknowledgements, adding a new item, by card id and authenticated user",
        "responses" : {
          "201" : {
            "description" : "Created"
          },
          "200" : {
            "description" : "No action done, the item already exists"
          },
          "404" : {
            "description" : "Try to remove item from unexisting card"
          }
        }
      },
      "delete" : {
        "operationId" : "deleteUserAcknowledgement",
        "tags" : [ "cards", "delete", "acknowledgement" ],
        "summary" : "update current card removing a user acknowledgement",
        "description" : "update current card users acknowledgements, removing an item, by card id and authenticated user",
        "responses" : {
          "200" : {
            "description" : "Item removed"
          },
          "204" : {
            "description" : "Try to remove unexisting item"
          },
          "404" : {
            "description" : "Try to remove item from unexisting card"
          }
        }
      }
    },
    "/cards/userCardRead/{uid}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "uid",
        "type" : "string",
        "required" : true,
        "description" : "The card uid"
      } ],
      "post" : {
        "operationId" : "postUserRead",
        "tags" : [ "cards", "update", "read" ],
        "summary" : "update current card adding a user read",
        "description" : "update current card users reads, adding a new item, by card id and authenticated user",
        "responses" : {
          "201" : {
            "description" : "Created"
          },
          "200" : {
            "description" : "No action done, the item already exists"
          },
          "404" : {
            "description" : "Try to remove item from unexisting card"
          }
        }
      },
      "delete" : {
        "operationId" : "deleteUserRead",
        "tags" : [ "cards", "update", "read" ],
        "summary" : "update current card removing a user read",
        "description" : "update current card users reads, removing an item, by card id and authenticated user",
        "responses" : {
          "201" : {
            "description" : "Created"
          },
          "200" : {
            "description" : "No action done, the item already exists"
          },
          "404" : {
            "description" : "Try to remove item from unexisting card"
          }
        }
      }
    },
    "/cards/translateCardField" : {
      "post" : {
        "summary" : "Get translated field",
        "description" : "Get translated field for a given i18n value",
        "operationId" : "translateCardField",
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "name" : "fieldToTranslate",
          "in" : "body",
          "schema" : {
            "$ref" : "#/definitions/FieldToTranslate"
          }
        } ],
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string"
            }
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      }
    }
  }
}