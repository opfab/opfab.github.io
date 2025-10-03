window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "IMPORTANT - The Try it Out button will generate curl requests for examples, but executing them through the UI will not work as authentication has not been set up. This page is for documentation only.",
    "version" : "4.10.0-RC.RELEASE",
    "title" : "BusinessConfig Management",
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
  "schemes" : [ "http" ],
  "paths" : {
    "/businessconfig/processes" : {
      "get" : {
        "summary" : "List existing processes.",
        "description" : "List existing processes. If the query parameter allVersions is absent or set to false, only the latest version of the processes will be returned.",
        "operationId" : "getProcesses",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "allVersions",
          "in" : "query",
          "required" : false,
          "description" : "If true, all versions of processes will be returned.",
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Process"
              }
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "post" : {
        "summary" : "Upload process configuration bundle",
        "description" : "Upload process configuration bundle. Bundle is a gzipped tarball (tar.gz) containing a config.json file (containing a Process object in json notation) and the associated resource files",
        "operationId" : "uploadBundle",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "file to upload",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful creation",
            "schema" : {
              "$ref" : "#/definitions/Process"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      },
      "delete" : {
        "summary" : "Delete all existing process configuration data",
        "description" : "Delete all existing process configuration data",
        "operationId" : "clearProcesses",
        "produces" : [ "application/json" ],
        "responses" : {
          "204" : {
            "description" : "OK"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "500" : {
            "description" : "Unable to delete processes"
          }
        }
      }
    },
    "/businessconfig/processes/{processId}" : {
      "get" : {
        "summary" : "Access configuration data for a given process",
        "description" : "Access configuration data for a given process",
        "operationId" : "getProcess",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to retrieve",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "query",
          "required" : false,
          "description" : "Expected version of process (defaults to latest)",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Process"
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "delete" : {
        "summary" : "Delete existing process configuration data",
        "description" : "Delete existing process configuration data",
        "operationId" : "deleteBundle",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to delete",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "OK"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "404" : {
            "description" : "Not found"
          },
          "500" : {
            "description" : "Unable to delete process"
          }
        }
      }
    },
    "/businessconfig/processhistory/{processId}" : {
      "get" : {
        "summary" : "Access all versions of configuration data for a given process",
        "description" : "Access all versions of configuration data for a given process",
        "operationId" : "getProcessHistory",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to retrieve",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Process"
              }
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "404" : {
            "description" : "Not found"
          }
        }
      }
    },
    "/businessconfig/processes/{processId}/templates/{templateName}" : {
      "get" : {
        "summary" : "Get existing template",
        "description" : "Get template, if file exists return file (application/handlebars) otherwise return error message (application/json)",
        "operationId" : "getTemplate",
        "produces" : [ "application/json", "application/handlebars" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to retrieve",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "templateName",
          "in" : "path",
          "description" : "Name of template to retrieve (w.o. extension)",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "query",
          "required" : false,
          "description" : "Expected version of template (defaults to latest)",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string",
              "format" : "binary"
            }
          },
          "404" : {
            "description" : "No such template"
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      }
    },
    "/businessconfig/processes/{processId}/css/{cssFileName}" : {
      "get" : {
        "summary" : "Get css file",
        "description" : "Get css file, if file exists return file (text/css) otherwise return error message (application/json)",
        "operationId" : "getCss",
        "produces" : [ "application/json", "text/css" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to retrieve",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "cssFileName",
          "in" : "path",
          "description" : "Name of stylesheet file to retrieve (w.o. extension)",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "query",
          "required" : false,
          "description" : "Expected version of stylesheet (defaults to latest)",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string",
              "format" : "binary"
            }
          },
          "404" : {
            "description" : "No such template"
          }
        }
      }
    },
    "/businessconfig/processes/{processId}/i18n" : {
      "get" : {
        "summary" : "Get i18n translation file",
        "description" : "Get i18n file, if file exists return file (text/plain) otherwise return error message (application/json)",
        "operationId" : "getI18n",
        "produces" : [ "application/json", "text/plain" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to retrieve",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "query",
          "required" : false,
          "description" : "Expected version of i18n (defaults to latest)",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "string",
              "format" : "binary"
            }
          },
          "404" : {
            "description" : "No such template"
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      }
    },
    "/businessconfig/processes/{processId}/{state}/response" : {
      "get" : {
        "summary" : "Get response associated with a given state of a given process",
        "description" : "Get response associated with a given state of a given process, returns a response (application/json)",
        "operationId" : "getResponse",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to retrieve",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "state",
          "in" : "path",
          "description" : "Name of state",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "query",
          "required" : false,
          "description" : "Required version of process (defaults to latest)",
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Response"
            }
          },
          "404" : {
            "description" : "No such process/state"
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      }
    },
    "/businessconfig/processes/{processId}/versions/{version}" : {
      "delete" : {
        "summary" : "Delete specific version of the configuration data for a given process",
        "description" : "Delete specific version of the configuration data for a given process",
        "operationId" : "deleteBundleVersion",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "processId",
          "in" : "path",
          "description" : "Id of the process to delete",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "version",
          "in" : "path",
          "description" : "Version of process to delete",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "OK"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "404" : {
            "description" : "Not found"
          },
          "500" : {
            "description" : "Unable to delete version of process"
          }
        }
      }
    },
    "/businessconfig/processgroups" : {
      "get" : {
        "summary" : "Get the groups of processes",
        "description" : "Get the groups of processes",
        "operationId" : "getProcessgroups",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/ProcessGroups"
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "post" : {
        "summary" : "Upload file defining the groups of processes",
        "description" : "Upload file defining the groups of processes. This file must be in json format and is saved to disk, under the name 'processGroups.json'.",
        "operationId" : "uploadProcessgroups",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "file to upload",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful creation"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      }
    },
    "/businessconfig/realtimescreens" : {
      "get" : {
        "summary" : "Get the configuration for the real time screen",
        "description" : "Get the configuration for the real time screen",
        "operationId" : "getRealTimeScreens",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/RealTimeScreens"
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "post" : {
        "summary" : "Upload file defining the configuration for the real time screen",
        "description" : "Upload file defining the configuration for the real time screen. This file must be in json format and is saved to disk, under the name 'realtimescreens.json'.",
        "operationId" : "uploadRealTimeScreens",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "file to upload",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful creation"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      }
    },
    "/businessconfig/businessData" : {
      "get" : {
        "summary" : "Get the list of the available business data",
        "description" : "Get the list of the available business data",
        "operationId" : "getAllBusinessData",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object"
            }
          }
        }
      },
      "delete" : {
        "summary" : "Delete every resource",
        "description" : "Delete every resource",
        "operationId" : "deleteAllBusinessData",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      }
    },
    "/businessconfig/businessData/{resourceName}" : {
      "get" : {
        "summary" : "Get the business data",
        "description" : "Get the business data",
        "operationId" : "getBusinessData",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "resourceName",
          "in" : "path",
          "description" : "Name of the resource",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object"
            }
          }
        }
      },
      "post" : {
        "summary" : "Upload file containing businessdata",
        "description" : "Upload file containing businessdata This file must be in json format and is saved to disk.",
        "operationId" : "uploadBusinessData",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "file to upload",
          "required" : true,
          "type" : "file"
        }, {
          "name" : "resourceName",
          "in" : "path",
          "description" : "Name of the resource",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful creation"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      },
      "delete" : {
        "summary" : "Delete existing resource",
        "description" : "Delete existing resource",
        "operationId" : "deleteBusinessData",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "resourceName",
          "in" : "path",
          "description" : "Name of the resource",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "204" : {
            "description" : "OK"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "404" : {
            "description" : "Not found"
          },
          "500" : {
            "description" : "Unable to delete resource"
          }
        }
      }
    },
    "/businessconfig/processmonitoring" : {
      "get" : {
        "summary" : "Get the process monitoring configuration",
        "description" : "Get the process monitoring configuration",
        "operationId" : "getProcessMonitoring",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/ProcessMonitoring"
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "post" : {
        "summary" : "Post the json defining the process monitoring config",
        "description" : "Post the json defining the process monitoring config This json is saved to disk, under the name 'processmonitoring.json'. The uploaded file should be a valid JSON file containing the ProcessMonitoring object structure as defined in the schema",
        "operationId" : "uploadProcessMonitoring",
        "consumes" : [ "multipart/form-data" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "file",
          "in" : "formData",
          "description" : "file to upload",
          "required" : true,
          "type" : "file"
        } ],
        "responses" : {
          "201" : {
            "description" : "Successful creation"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      }
    }
  },
  "definitions" : {
    "Process" : {
      "type" : "object",
      "description" : "Business process definition, also listing available resources",
      "properties" : {
        "id" : {
          "type" : "string",
          "description" : "Identifier referencing this process. It should be unique across the OperatorFabric instance."
        },
        "name" : {
          "type" : "string",
          "description" : "Name of the process"
        },
        "version" : {
          "type" : "string",
          "description" : "Process configuration version"
        },
        "states" : {
          "type" : "object",
          "additionalProperties" : {
            "type" : "object",
            "properties" : {
              "response" : {
                "$ref" : "#/definitions/Response"
              },
              "acknowledgmentAllowed" : {
                "description" : "Acknowledgment allowed or not",
                "$ref" : "#/definitions/AcknowledgmentAllowedEnum",
                "default" : "Never"
              },
              "consideredAcknowledgedForUserWhen" : {
                "description" : "Define how a card is considered as acknowledged in the feed",
                "$ref" : "#/definitions/ConsideredAcknowledgedForUserWhenEnum",
                "default" : "USER_HAS_ACKNOWLEDGED"
              },
              "cancelAcknowledgmentAllowed" : {
                "type" : "boolean",
                "description" : "Cancel acknowledgment allowed",
                "default" : false
              },
              "showAcknowledgmentFooter" : {
                "description" : "Define the condition for displaying or not the acknowledgment footer of the card",
                "$ref" : "#/definitions/ShowAcknowledgmentFooterEnum",
                "default" : "ONLY_FOR_EMITTING_ENTITY"
              },
              "closeCardWhenUserAcknowledges" : {
                "type" : "boolean",
                "description" : "close card detail when user acknowledges it",
                "default" : false
              },
              "editCardEnabledOnUserInterface" : {
                "type" : "boolean",
                "description" : "Show or hide card edit button",
                "default" : false
              },
              "copyCardEnabledOnUserInterface" : {
                "type" : "boolean",
                "description" : "Show or hide card copy button",
                "default" : false
              },
              "deleteCardEnabledOnUserInterface" : {
                "type" : "boolean",
                "description" : "Show or hide card delete button",
                "default" : false
              },
              "name" : {
                "type" : "string",
                "description" : "Name of the state"
              },
              "description" : {
                "type" : "string",
                "description" : "Description of the state"
              },
              "showDetailCardHeader" : {
                "type" : "boolean",
                "description" : "Hide or show header card for question card",
                "default" : true
              },
              "color" : {
                "type" : "string",
                "description" : "color for the state in the logging screen (optional)"
              },
              "userCard" : {
                "description" : "User card template and visibility options",
                "$ref" : "#/definitions/UserCard"
              },
              "templateName" : {
                "description" : "Name of the template to use",
                "type" : "string"
              },
              "emailBodyTemplate" : {
                "description" : "Name of the template to use for the body of the associated email",
                "type" : "string"
              },
              "styles" : {
                "description" : "Name of the css files to apply",
                "type" : "array",
                "items" : {
                  "type" : "string"
                }
              },
              "type" : {
                "description" : "Type of state (\"INPROGRESS\", \"FINISHED\" or \"CANCELED\")",
                "$ref" : "#/definitions/TypeOfStateEnum"
              },
              "isOnlyAChildState" : {
                "description" : "If true, this state is only used for child cards and shall not be seen on feed notification screen and in archives filters",
                "type" : "boolean",
                "default" : false
              },
              "validateAnswerButtonLabel" : {
                "description" : "If this field is present, it is used for the label of the button, otherwise, the default label is used",
                "type" : "string"
              },
              "modifyAnswerButtonLabel" : {
                "description" : "If this field is present, it is used for the label of the button, otherwise, the default label is used",
                "type" : "string"
              },
              "automaticPinWhenAcknowledged" : {
                "description" : "If true, card is automatically pinned on feed screen when it is acknowledged",
                "type" : "boolean",
                "default" : false
              }
            }
          }
        },
        "uiVisibility" : {
          "type" : "object",
          "properties" : {
            "monitoring" : {
              "type" : "boolean",
              "description" : "If this flag is set to true, the cards of this process will be visible on the monitoring screen",
              "default" : false
            },
            "processMonitoring" : {
              "type" : "boolean",
              "description" : "If this flag is set to true, the cards of this process will be visible on the monitoring processus screen",
              "default" : false
            },
            "logging" : {
              "type" : "boolean",
              "description" : "If this flag is set to true, the cards of this process will be visible on the logging screen",
              "default" : false
            },
            "calendar" : {
              "type" : "boolean",
              "description" : "If this flag is set to true, the cards of this process will be visible on the calendar screen",
              "default" : false
            }
          }
        }
      },
      "required" : [ "id", "version" ],
      "example" : {
        "id" : "some_business_process",
        "name" : "some_business_process.label",
        "version" : "v1.0",
        "initial_state" : {
          "templateName" : "template1"
        },
        "other_state" : {
          "templateName" : "template2",
          "styles" : [ "my-template.css" ]
        }
      }
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
      "example" : {
        "key" : "title",
        "parameters" : {
          "EN" : "My Title",
          "FR" : "Mon Titre"
        }
      },
      "required" : [ "key" ]
    },
    "Response" : {
      "description" : "defines a response to an action on the business process associated with the card",
      "type" : "object",
      "properties" : {
        "lock" : {
          "description" : "If true, user can only act once",
          "type" : "boolean"
        },
        "state" : {
          "description" : "The state of the card triggered by the action",
          "type" : "string"
        },
        "externalRecipients" : {
          "description" : "The recipients that should receive the response card",
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "emittingEntityAllowedToRespond" : {
          "description" : "If true, entity emitting a card is allowed to respond",
          "type" : "boolean"
        },
        "showConfirmationPopup" : {
          "description" : "If true, opfab displays a confirmation popup before the user sends response",
          "type" : "boolean"
        }
      }
    },
    "AcknowledgmentAllowedEnum" : {
      "type" : "string",
      "description" : "Acknowledgment allowed >\n* ALWAYS - Acknowledgment always allowed\n* NEVER - Acknowledgment not allowed\n* ONLY_WHEN_RESPONSE_DISABLED_FOR_USER - Acknowledgment allowed only if response is disabled for the user",
      "enum" : [ "Always", "Never", "OnlyWhenResponseDisabledForUser" ]
    },
    "TypeOfStateEnum" : {
      "type" : "string",
      "description" : "Type of state >\n* INPROGRESS - In Progress\n* FINISHED - Finished\n* CANCELED - Canceled",
      "enum" : [ "INPROGRESS", "FINISHED", "CANCELED" ]
    },
    "ConsideredAcknowledgedForUserWhenEnum" : {
      "type" : "string",
      "description" : "This field is used to define how a card is considered as acknowledged in the feed. >\n* USER_HAS_ACKNOWLEDGED - For the card to appear acknowledged in the feed, it suffices that the user acknowledges it \n* ALL_ENTITIES_OF_USER_HAVE_ACKNOWLEDGED - For the card to appear acknowledged in the feed, all the entities of the user must acknowledge it",
      "enum" : [ "UserHasAcknowledged", "AllEntitiesOfUserHaveAcknowledged" ]
    },
    "ShowAcknowledgmentFooterEnum" : {
      "type" : "string",
      "description" : "Define the condition for displaying or not the acknowledgment footer of the card. >\n* ONLY_FOR_EMITTING_ENTITY\n* ONLY_FOR_USERS_ALLOWED_TO_EDIT\n* FOR_ALL_USERS\n* NEVER",
      "enum" : [ "OnlyForEmittingEntity", "OnlyForUsersAllowedToEdit", "ForAllUsers", "Never" ]
    },
    "ProcessGroup" : {
      "description" : "Object containing a list of processes.",
      "properties" : {
        "id" : {
          "description" : "Id of the group",
          "type" : "string"
        },
        "name" : {
          "description" : "Name of the group",
          "type" : "string"
        },
        "processes" : {
          "description" : "List of processes included in the group",
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      },
      "required" : [ "id" ],
      "example" : {
        "id" : "processgroup1",
        "processes" : [ "id_process1", "id_process2" ]
      }
    },
    "ProcessGroups" : {
      "properties" : {
        "groups" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessGroup"
          }
        }
      }
    },
    "RealTimeScreens" : {
      "properties" : {
        "realTimeScreens" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/RealTimeScreen"
          }
        }
      }
    },
    "RealTimeScreen" : {
      "properties" : {
        "screenName" : {
          "type" : "string"
        },
        "onlyDisplayUsersInGroups" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "screenColumns" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ScreenColumn"
          }
        }
      }
    },
    "ScreenColumn" : {
      "properties" : {
        "entitiesGroups" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "UserCard" : {
      "properties" : {
        "template" : {
          "type" : "string"
        },
        "severityVisible" : {
          "type" : "boolean"
        },
        "keepChildCardsVisible" : {
          "type" : "boolean",
          "description" : "Sets the visibility of the keepChildCards checkbox on the usercard. Default value set to false."
        },
        "startDateVisible" : {
          "type" : "boolean"
        },
        "endDateVisible" : {
          "type" : "boolean"
        },
        "expirationDateVisible" : {
          "type" : "boolean",
          "description" : "Default value set to false."
        },
        "lttdVisible" : {
          "type" : "boolean",
          "description" : "Default value set to false."
        },
        "recipientVisible" : {
          "type" : "boolean"
        },
        "recipientForInformationVisible" : {
          "type" : "boolean"
        },
        "publisherVisible" : {
          "type" : "boolean"
        },
        "publisherList" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/EntitiesTree"
          }
        }
      }
    },
    "EntitiesTree" : {
      "description" : "Object containing the id of the entity and an optional list of connection levels with 0 meaning the entity itself, 1 for first level children, 2 for 2nd level connections, etc.",
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "levels" : {
          "type" : "array",
          "items" : {
            "type" : "integer"
          }
        }
      }
    },
    "ProcessMonitoring" : {
      "description" : "Configuration for the process monitoring screen",
      "properties" : {
        "fields" : {
          "description" : "monitoring fields configuration",
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessMonitoringField"
          }
        },
        "fieldsForProcesses" : {
          "description" : "monitoring fields configuration for processes",
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessMonitoringFields"
          }
        },
        "filters" : {
          "description" : "process monitoring filters",
          "properties" : {
            "tags" : {
              "description" : "Array of filter tags for process monitoring",
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ProcessMonitoringFilterTag"
              }
            },
            "pageSize" : {
              "description" : "Number of items to display per page in the process monitoring view",
              "type" : "integer"
            }
          }
        }
      }
    },
    "ProcessMonitoringFields" : {
      "properties" : {
        "process" : {
          "description" : "process name",
          "type" : "string"
        },
        "fields" : {
          "description" : "monitoring fields configuration for process",
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ProcessMonitoringField"
          }
        }
      }
    },
    "ProcessMonitoringField" : {
      "description" : "process monitoring field",
      "properties" : {
        "field" : {
          "type" : "string"
        },
        "type" : {
          "type" : "ProcessMonitoringFieldTypeEnum"
        },
        "colName" : {
          "type" : "string"
        },
        "size" : {
          "description" : "The size of the field",
          "type" : "integer"
        },
        "defaultVisibility" : {
          "description" : "Indicates whether the field will be displayed, before the user interacts with the column for the first time.",
          "type" : "boolean"
        },
        "possibleValues" : {
          "description" : "List of values to display in the custom filter of a column. Must be used with field 'type' set to 'set'.",
          "type" : "array",
          "uniqueItems" : true,
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "ProcessMonitoringFilterTag" : {
      "description" : "process monitoring filter tag",
      "properties" : {
        "label" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        }
      }
    },
    "ProcessMonitoringFieldTypeEnum" : {
      "type" : "string",
      "description" : "Type of field",
      "enum" : [ "string", "date", "array", "set" ]
    }
  }
}