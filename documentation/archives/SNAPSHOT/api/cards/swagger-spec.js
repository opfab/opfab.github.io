window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "IMPORTANT - The Try it Out button will generate curl requests for examples, but executing them through the UI will not work as authentication has not been set up. This page is for documentation only.",
    "version" : "SNAPSHOT",
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
  "tags" : [ {
    "name" : "cards",
    "description" : "Everything concerning cards"
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
    "CardOperationTypeEnum" : {
      "type" : "string",
      "description" : "Type of operation >\n* ADD - Operation lists cards object to be added\n* UPDATE - Operation lists cards object to be updated\n* DELETE - Operation lists card ids to be deleted\n* ACK - Operation lists card ids to be acknowledged\n* UNACK - Operation lists card ids to be unacknowledged",
      "enum" : [ "ADD", "UPDATE", "DELETE", "ACK", "UNACK" ],
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
      "description" : "Operation to do:  Add, Update or Delete a card",
      "properties" : {
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
        "type" : "DELETE",
        "cardId" : 12345
      }
    },
    "FreqEnum" : {
      "type" : "string",
      "description" : "Frequency for the recurrence >\n* SECONDLY\n* MINUTELY\n* HOURLY\n* DAILY\n* WEEKLY\n* MONTHLY\n* YEARLY",
      "enum" : [ "SECONDLY", "MINUTELY", "HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY" ],
      "example" : "WEEKLY"
    },
    "DayEnum" : {
      "type" : "string",
      "description" : "Defines the days of the week >\n* MO\n* TU\n* WE\n* TH\n* FR\n* SA\n* SU",
      "enum" : [ "MO", "TU", "WE", "TH", "FR", "SA", "SU" ],
      "example" : "SU"
    },
    "RRule" : {
      "type" : "object",
      "description" : "An object representing the recurrence of the card (as defined in the RFC 5545)",
      "properties" : {
        "freq" : {
          "description" : "Frequency of the recurrence",
          "$ref" : "#/definitions/FreqEnum"
        },
        "interval" : {
          "description" : "Represents at which intervals the recurrence rule repeats. The default value is \"1\", meaning every second for a SECONDLY rule, every minute for a MINUTELY rule etc.",
          "type" : "integer"
        },
        "count" : {
          "description" : "Defines the number of occurrences at which to range-bound the recurrence",
          "type" : "integer"
        },
        "wkst" : {
          "description" : "Defines the day on which the workweek starts. Valid values are MO, TU, WE, TH, FR, SA, and SU.",
          "$ref" : "#/definitions/DayEnum"
        },
        "byweekday" : {
          "description" : "Defines a list of days of the week for the recurrence",
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/DayEnum"
          }
        },
        "bymonth" : {
          "description" : "Defines a list of months of the year for the recurrence (from 1 to 12, 1 representing January)",
          "type" : "array",
          "items" : {
            "type" : "integer"
          }
        },
        "byhour" : {
          "description" : "Defines a list of hours of the day for the recurrence (from 0 to 23)",
          "type" : "array",
          "items" : {
            "type" : "integer"
          }
        },
        "byminute" : {
          "description" : "Defines a list of minutes within an hour for the recurrence (from 0 to 59)",
          "type" : "array",
          "items" : {
            "type" : "integer"
          }
        },
        "bysetpos" : {
          "description" : "Array of integers, positive or negative. Each given integer will specify an occurrence number, corresponding to the nth occurrence of the rule inside the frequency period",
          "type" : "array",
          "items" : {
            "type" : "integer"
          }
        },
        "bymonthday" : {
          "description" : "Defines the month days to apply the recurrence to",
          "type" : "array",
          "items" : {
            "type" : "integer"
          }
        },
        "tzid" : {
          "description" : "Time zone identifier (for example 'Europe/Paris', 'Europe/London', ...)",
          "type" : "string"
        },
        "durationInMinutes" : {
          "description" : "Duration in minutes of the event",
          "type" : "integer",
          "minimum" : 0
        }
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
        }
      },
      "required" : [ "start" ]
    },
    "CardActionEnum" : {
      "type" : "string",
      "description" : "Defines the action to be executed on card reception >\n* PROPAGATE_READ_ACK_TO_PARENT_CARD\n* KEEP_CHILD_CARDS\n* KEEP_EXISTING_ACKS_AND_READS,\n* KEEP_EXISTING_PUBLISH_DATE\n* STORE_ONLY_IN_ARCHIVES\n* NOT_NOTIFIED",
      "enum" : [ "PROPAGATE_READ_ACK_TO_PARENT_CARD", "KEEP_CHILD_CARDS", "KEEP_EXISTING_ACKS_AND_READS", "KEEP_EXISTING_PUBLISH_DATE", "STORE_ONLY_IN_ARCHIVES", "NOT_NOTIFIED" ],
      "example" : "PROPAGATE_READ_ACK_TO_PARENT_CARD"
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
        "expirationDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Card deletion time (must be after startDate)"
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
        "rRule" : {
          "description" : "Json object representing the recurrence of the card (as defined in the RFC 5545)",
          "$ref" : "#/definitions/RRule"
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
        "entityRecipientsForInformation" : {
          "description" : "List of entity recipients for information : Among entityRecipients which one are only for information.",
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "example" : [ "Manager" ]
        },
        "entitiesAllowedToEdit" : {
          "description" : "List of entities that can edit the card",
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
        "entitiesAcks" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "description" : "List of entities that acknowledged the card"
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
        "wktGeometry" : {
          "type" : "string",
          "description" : "Contains WKT geometry string ex. 'POINT (6.476709 52.569132)'"
        },
        "wktProjection" : {
          "type" : "string",
          "description" : "Contains projection ex. 'EPSG:4326'"
        },
        "secondsBeforeTimeSpanForReminder" : {
          "type" : "integer",
          "minimum" : 0
        },
        "actions" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/CardActionEnum"
          }
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
        "expirationDate" : 1546397250000,
        "severity" : "ACTION",
        "tags" : [ "MyService", "MyProcess" ],
        "title" : {
          "key" : "myservice.myprocess.title"
        },
        "summary" : {
          "key" : "myservice.myprocess.title.summary"
        }
      }
    },
    "CardCreationReport" : {
      "type" : "object",
      "description" : "Created card report",
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
        },
        "firstName" : {
          "type" : "string",
          "description" : "First name of user"
        },
        "lastName" : {
          "type" : "string",
          "description" : "Last name of user"
        },
        "entitiesConnected" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "description" : "List of entities the user is attached to"
        },
        "groups" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "description" : "Groups of the user"
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
        "expirationDate" : {
          "$ref" : "#/definitions/EpochDate",
          "description" : "Card deletion time"
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
        "entitiesAllowedToEdit" : {
          "description" : "List of entities that can edit the card",
          "type" : "array",
          "items" : {
            "type" : "string"
          },
          "example" : [ "Dispatcher", "Planner" ]
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
        "rRule" : {
          "description" : "Json object representing the recurrence of the card (as defined in the RFC 5545)",
          "$ref" : "#/definitions/RRule"
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
        "entitiesAcks" : {
          "type" : "array",
          "description" : "List of entities that have acknowledged the card",
          "items" : {
            "type" : "string"
          }
        },
        "entityRecipients" : {
          "type" : "array",
          "description" : "List of entity recipients",
          "items" : {
            "type" : "string"
          }
        },
        "entityRecipientsForInformation" : {
          "description" : "List of entity recipients for information : Among entityRecipients which one are only for information.",
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "groupRecipients" : {
          "type" : "array",
          "description" : "List of recipient groups",
          "items" : {
            "type" : "string"
          }
        },
        "userRecipients" : {
          "type" : "array",
          "description" : "List of recipient users",
          "items" : {
            "type" : "string"
          }
        },
        "usersReads" : {
          "type" : "array",
          "description" : "List of users who read the read",
          "items" : {
            "type" : "string"
          }
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
        "wktGeometry" : {
          "type" : "string",
          "description" : "Contains WKT geometry string ex. 'POINT (6.476709 52.569132)'"
        },
        "wktProjection" : {
          "type" : "string",
          "description" : "Contains projection ex. 'EPSG:4326'"
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
        "expirationDate" : 1546397250000,
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
    "FilterOperationTypeEnum" : {
      "type" : "string",
      "description" : "Type of operation between 2 filter conditions",
      "enum" : [ "AND", "OR" ]
    },
    "FilterMatchTypeEnum" : {
      "type" : "string",
      "description" : "Type of match to do between column value and filter value",
      "enum" : [ "EQUALS", "NOTEQUAL", "STARTSWITH", "ENDSWITH", "CONTAINS", "NOTCONTAINS", "BLANK", "NOTBLANK", "IN" ]
    },
    "CardsFilter" : {
      "type" : "object",
      "properties" : {
        "page" : {
          "type" : "number",
          "description" : "Page number"
        },
        "size" : {
          "type" : "number",
          "description" : "Page size (max number of items in page)"
        },
        "adminMode" : {
          "type" : "boolean"
        },
        "includeChildCards" : {
          "type" : "boolean"
        },
        "latestUpdateOnly" : {
          "type" : "boolean"
        },
        "filters" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/FilterModel"
          }
        },
        "selectedFields" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "FilterModel" : {
      "type" : "object",
      "properties" : {
        "columnName" : {
          "type" : "string"
        },
        "matchType" : {
          "$ref" : "#/definitions/FilterMatchTypeEnum"
        },
        "filter" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "operation" : {
          "$ref" : "#/definitions/FilterOperationTypeEnum"
        }
      }
    },
    "PublisherTypeEnum" : {
      "type" : "string",
      "description" : "Publisher type >\n* EXTERNAL - The sender is an external service.\n* ENTITY - The sender of the card is the user on behalf of the entity.\n* USER - The sender of the card is the user himself.",
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
    "/cards-consultation/cardSubscription" : {
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
    "/cards-consultation/cardSubscription/{uiId}" : {
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
    "/cards-publication/cards/rateLimiter" : {
      "post" : {
        "summary" : "reset the rate limiter",
        "responses" : {
          "200" : {
            "description" : "rate limiter reset"
          },
          "400" : {
            "description" : "bad request"
          }
        }
      }
    },
    "/cards-consultation/logs" : {
      "post" : {
        "summary" : "sends remote logs",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "remote logs sent"
          },
          "400" : {
            "description" : "bad request"
          }
        }
      }
    },
    "/cards-publication/cards" : {
      "post" : {
        "tags" : [ "cards", "read" ],
        "summary" : "retrieve published cards matching given criteria",
        "description" : "get published cards matching the criteria given as parameters. Results are limited to the cards that the calling user is allowed to see (based on the card recipients). For performance reasons, the response  does not contain all lightCard fields, the returned fields are : id, uid,publisher, processVersion,process, processInstanceId,state,title,summary,publishDate,startDate,endDate,severity, publisherType, representative,representativeType. The other fields are set to null.",
        "operationId" : "fetchPublishedCardsWithFilteringCriteria",
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "name" : "filter",
          "in" : "body",
          "schema" : {
            "$ref" : "#/definitions/CardsFilter"
          }
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
      },
      "patch" : {
        "tags" : [ "card" ],
        "summary" : "Patch existing card",
        "description" : "Patch existing card",
        "operationId" : "patchCard",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "card id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "card",
          "description" : "card containing fields to be updated",
          "schema" : {
            "$ref" : "#/definitions/Card"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/CardCreationReport"
            }
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "404" : {
            "description" : "Card not found"
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
    "/cards-consultation/archives/{id}" : {
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
    "/cards-consultation/archives" : {
      "post" : {
        "tags" : [ "archives", "read" ],
        "summary" : "get archived cards matching given criteria",
        "description" : "get archived cards matching the criteria given as parameters. Results are limited to the cards that the calling user is allowed to see (based on the card recipients). For performance reasons, the response  does not contain all lightCard fields, the returned fields are : id, uid,publisher, processVersion,process, processInstanceId,state,title,summary,publishDate,startDate,endDate,severity, publisherType, representative,representativeType. The other fields are set to null.",
        "operationId" : "fetchArchivedCardsWithFilterinCriteria",
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "name" : "filter",
          "in" : "body",
          "schema" : {
            "$ref" : "#/definitions/CardsFilter"
          }
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
    "/cards-consultation/connectedRecipientsPreview" : {
      "post" : {
        "summary" : "get the connected Entity among the recipients in card preview",
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
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "400" : {
            "description" : "Bad request"
          }
        }
      }
    },
    "/cards-publication/cards/{id}" : {
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
      }
    },
    "/cards-consultation/cards/{id}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "id",
        "type" : "string",
        "required" : true,
        "description" : "The id parameter is constructed as follows : {process}.{processInstanceId}"
      } ],
      "get" : {
        "operationId" : "fetchProcessCard",
        "tags" : [ "cards", "read" ],
        "summary" : "fetch current card",
        "description" : "fetch current card for process id",
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object",
              "properties" : {
                "card" : {
                  "$ref" : "#/definitions/Card"
                },
                "childCards" : {
                  "type" : "array",
                  "items" : {
                    "$ref" : "#/definitions/Card"
                  }
                }
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
    "/cards-publication/cards/userAcknowledgement/{uid}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "uid",
        "type" : "string",
        "required" : true,
        "description" : "The card uid"
      }, {
        "in" : "body",
        "name" : "entitiesAcks",
        "description" : "List of user entities for which the card will be acknowledged",
        "schema" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
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
            "description" : "Try to remove item from non-existing card"
          }
        }
      }
    },
    "/cards-publication/cards/cancelUserAcknowledgement/{uid}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "uid",
        "type" : "string",
        "required" : true,
        "description" : "The card uid"
      }, {
        "in" : "body",
        "name" : "entitiesAcks",
        "description" : "List of user entities for which the card will be acknowledged",
        "schema" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      } ],
      "post" : {
        "operationId" : "deleteUserAcknowledgement",
        "tags" : [ "cards", "delete", "acknowledgement" ],
        "summary" : "update current card removing a user acknowledgement",
        "description" : "update current card users acknowledgements, removing an item, by card id and authenticated user",
        "responses" : {
          "200" : {
            "description" : "Item removed"
          },
          "204" : {
            "description" : "Try to remove non-existing item"
          },
          "404" : {
            "description" : "Try to remove item from non-existing card"
          }
        }
      }
    },
    "/cards-publication/cards/userCardRead/{uid}" : {
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
            "description" : "Try to remove item from non-existing card"
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
            "description" : "Try to remove item from non-existing card"
          }
        }
      }
    },
    "/cards-publication/cards/translateCardField" : {
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
    },
    "/cards-publication/cards/resetReadAndAcks/{uid}" : {
      "parameters" : [ {
        "in" : "path",
        "name" : "uid",
        "type" : "string",
        "required" : true,
        "description" : "The card uid"
      } ],
      "post" : {
        "operationId" : "resetReadAndAcks",
        "tags" : [ "cards", "update", "acknowledgement" ],
        "summary" : "update current card removing acknowledgements and reads",
        "description" : "update current card removing acknowledgements and reads, send the card with updated publishDate",
        "responses" : {
          "200" : {
            "description" : "card updated and sent with updated publishDate"
          },
          "404" : {
            "description" : "Try to update non-existing card"
          },
          "403" : {
            "description" : "Forbidden - User not allowed"
          }
        }
      }
    }
  }
}