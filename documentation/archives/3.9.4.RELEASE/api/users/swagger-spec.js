window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "IMPORTANT - The Try it Out button will generate curl requests for examples, but executing them through the UI will not work as authentication has not been set up. This page is for documentation only.",
    "version" : "3.9.4.RELEASE",
    "title" : "User Management",
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
  "basePath" : "/users",
  "tags" : [ {
    "name" : "users",
    "description" : "Everything concerning users"
  }, {
    "name" : "groups",
    "description" : "Everything concerning groups"
  }, {
    "name" : "entities",
    "description" : "Everything concerning entities"
  }, {
    "name" : "perimeters",
    "description" : "Everything concerning perimeters"
  } ],
  "schemes" : [ "http" ],
  "definitions" : {
    "User" : {
      "type" : "object",
      "description" : "User",
      "properties" : {
        "login" : {
          "type" : "string"
        },
        "firstName" : {
          "type" : "string"
        },
        "lastName" : {
          "type" : "string"
        },
        "groups" : {
          "type" : "array",
          "items" : {
            "type" : "string",
            "uniqueItems" : true
          }
        },
        "entities" : {
          "type" : "array",
          "items" : {
            "type" : "string",
            "uniqueItems" : true
          }
        },
        "authorizedIPAddresses" : {
          "type" : "array",
          "items" : {
            "type" : "string",
            "uniqueItems" : true
          }
        }
      },
      "required" : [ "login" ],
      "example" : {
        "login" : "jcleese",
        "firstName" : "John",
        "lastName" : "Cleese",
        "groups" : [ "MONTY", "WANDA" ],
        "entities" : [ "ENTITY1", "ENTITY2" ]
      }
    },
    "GroupTypeEnum" : {
      "type" : "string",
      "description" : "Different group types possible >\n* ROLE: Used to define user role or profile\n* PERMISSION: Used to define user permissions on processes",
      "enum" : [ "ROLE", "PERMISSION" ]
    },
    "Group" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "type" : {
          "$ref" : "#/definitions/GroupTypeEnum"
        },
        "description" : {
          "type" : "string"
        },
        "perimeters" : {
          "type" : "array",
          "items" : {
            "type" : "string",
            "uniqueItems" : true
          }
        },
        "realtime" : {
          "type" : "boolean"
        }
      },
      "required" : [ "id" ],
      "example" : {
        "id" : "WANDA",
        "name" : "Wanda",
        "description" : "They were not as successful in Fierce Creatures."
      }
    },
    "Entity" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "name" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        },
        "labels" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "entityAllowedToSendCard" : {
          "type" : "boolean"
        },
        "parents" : {
          "type" : "array",
          "items" : {
            "type" : "string",
            "uniqueItems" : true
          }
        }
      },
      "required" : [ "id" ],
      "example" : {
        "id" : "ENTITY1",
        "name" : "Control Room 1",
        "description" : "Control Room 1"
      }
    },
    "RightsEnum" : {
      "type" : "string",
      "description" : "Different rights possible >\n* Receive: Only receive rights (receiving card)\n* Write: Write rights (creating new card)\n* ReceiveAndWrite: Receive and write rights (receiving card and creating new card)",
      "enum" : [ "Receive", "Write", "ReceiveAndWrite" ]
    },
    "StateRight" : {
      "type" : "object",
      "properties" : {
        "state" : {
          "type" : "string"
        },
        "right" : {
          "$ref" : "#/definitions/RightsEnum"
        }
      },
      "example" : {
        "state" : "State1",
        "right" : "Receive"
      }
    },
    "Perimeter" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "process" : {
          "type" : "string"
        },
        "stateRights" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/StateRight",
            "uniqueItems" : true
          }
        }
      },
      "required" : [ "id" ],
      "example" : {
        "id" : "Process1Perimeter1",
        "process" : "Process1",
        "stateRights" : [ {
          "state" : "state1",
          "right" : "Receive"
        }, {
          "state" : "state2",
          "right" : "ReceiveAndWrite"
        } ]
      }
    },
    "UserSettings" : {
      "type" : "object",
      "description" : "User associated settings. Note that the current supported locales are en and fr. Date and time formats use Moment.js formats.",
      "properties" : {
        "login" : {
          "type" : "string",
          "description" : "User login"
        },
        "description" : {
          "type" : "string",
          "description" : "Free user description label (ex: organization role)"
        },
        "locale" : {
          "type" : "string",
          "description" : "User using browser format"
        },
        "playSoundForAlarm" : {
          "type" : "boolean",
          "description" : "If this is set to true, a sound will be played for incoming cards with ALARM severity."
        },
        "playSoundForAction" : {
          "type" : "boolean",
          "description" : "If this is set to true, a sound will be played for incoming cards with ACTION severity."
        },
        "playSoundForCompliant" : {
          "type" : "boolean",
          "description" : "If this is set to true, a sound will be played for incoming cards with COMPLIANT severity."
        },
        "playSoundForInformation" : {
          "type" : "boolean",
          "description" : "If this is set to true, a sound will be played for incoming cards with INFORMATION severity."
        },
        "playSoundOnExternalDevice" : {
          "type" : "boolean",
          "description" : "If set to true and the user has an external device configured, sounds will be played on this device rather\nthan in the browser"
        },
        "replayEnabled" : {
          "type" : "boolean",
          "description" : "If this is set to true, sounds for incoming cards or reminders will be replayed until the user clicks\nanywhere on the screen."
        },
        "replayInterval" : {
          "type" : "integer",
          "description" : "Interval (in seconds) between sound replays."
        },
        "remoteLoggingEnabled" : {
          "type" : "boolean",
          "description" : "If this is set to true, some of the ui logs are stored in the log file of cards-consultation service "
        },
        "processesStatesNotNotified" : {
          "type" : "object",
          "description" : "Filters on processes and states for user feed (exclusion filter)",
          "additionalProperties" : {
            "type" : "array",
            "description" : "List of process states for which the user will not be notified",
            "items" : {
              "type" : "string"
            }
          }
        },
        "entitiesDisconnected" : {
          "description" : "Entities not represented by the user for his current session",
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      },
      "required" : [ "login" ],
      "example" : {
        "login" : "jcleese",
        "description" : "once played Sir Lancelot",
        "locale" : "en-GB"
      }
    },
    "CurrentUserWithPerimeters" : {
      "type" : "object",
      "description" : "Information about the user connected and his perimeters",
      "properties" : {
        "userData" : {
          "type" : "object",
          "$ref" : "#/definitions/User"
        },
        "computedPerimeters" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/ComputedPerimeter",
            "uniqueItems" : true
          }
        },
        "processesStatesNotNotified" : {
          "type" : "object",
          "description" : "Filters on processes and states for user feed (exclusion filter)",
          "additionalProperties" : {
            "type" : "array",
            "description" : "List of process states for which the user will not be notified",
            "items" : {
              "type" : "string"
            }
          }
        }
      }
    },
    "ComputedPerimeter" : {
      "type" : "object",
      "properties" : {
        "process" : {
          "type" : "string"
        },
        "state" : {
          "type" : "string"
        },
        "rights" : {
          "$ref" : "#/definitions/RightsEnum"
        }
      }
    },
    "NotificationFilter" : {
      "type" : "object",
      "properties" : {
        "process" : {
          "type" : "string"
        },
        "states" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      }
    }
  },
  "paths" : {
    "/users" : {
      "get" : {
        "tags" : [ "users" ],
        "summary" : "Fetch a list of all existing users",
        "description" : "Fetch a list of all existing users, with pagination and filter options",
        "operationId" : "fetchUsers",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/User"
              }
            },
            "examples" : {
              "application/json" : [ {
                "login" : "jcleese",
                "firstName" : "John",
                "lastName" : "Cleese",
                "groups" : [ "MONTY", "WANDA" ],
                "entities" : [ "ENITY1", "ENTITY2" ]
              }, {
                "login" : "gchapman",
                "firstName" : "Graham",
                "lastName" : "Chapman",
                "groups" : [ "MONTY" ],
                "entities" : [ "ENITY1" ]
              } ]
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only access their own data"
          }
        }
      },
      "post" : {
        "tags" : [ "users" ],
        "summary" : "Create a new user",
        "description" : "Create a new user. If the user already exists, then an update of the user will be made. Be careful, user login must be lowercase. Otherwise, it will be converted to lowercase before saving to the database.",
        "operationId" : "createUser",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "user",
          "description" : "User to be created",
          "schema" : {
            "$ref" : "#/definitions/User"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK (user already existed so it was updated)",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only create their own data"
          }
        }
      }
    },
    "/users/{login}" : {
      "get" : {
        "tags" : [ "users" ],
        "summary" : "Fetch an existing user",
        "description" : "Fetch an existing user from their login",
        "operationId" : "fetchUser",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "login",
          "description" : "user login",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only access their own data"
          },
          "404" : {
            "description" : "Required user not found"
          }
        }
      },
      "put" : {
        "tags" : [ "users" ],
        "summary" : "Update existing user",
        "description" : "Update existing user",
        "operationId" : "updateUser",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "login",
          "description" : "user login (should match login in request body)",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "user",
          "description" : "User to be updated (login should match path parameter)",
          "schema" : {
            "$ref" : "#/definitions/User"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "400" : {
            "description" : "Bad request (body doesn't match login path parameter)"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only update their own data"
          }
        }
      },
      "delete" : {
        "tags" : [ "users" ],
        "summary" : "Remove user",
        "description" : "Remove a user",
        "operationId" : "deleteUser",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "login",
          "description" : "User login",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required user not found"
          }
        }
      }
    },
    "/users/{login}/settings" : {
      "get" : {
        "tags" : [ "users" ],
        "summary" : "Fetch an existing user's settings",
        "description" : "Fetch existing user's settings from their login",
        "operationId" : "fetchUserSetting",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "login",
          "description" : "user login",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/UserSettings"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only access their own data"
          },
          "404" : {
            "description" : "Required user not found"
          }
        }
      },
      "put" : {
        "tags" : [ "users" ],
        "summary" : "Update existing user settings",
        "description" : "Update existing user settiogs",
        "operationId" : "updateUserSettings",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "login",
          "description" : "user login (should match login in request body)",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "userSettings",
          "description" : "User settings to be updated (login should match path parameter)",
          "schema" : {
            "$ref" : "#/definitions/UserSettings"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/UserSettings"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/UserSettings"
            }
          },
          "400" : {
            "description" : "Bad request (body doesn't match login path parameter)"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only update their own data"
          },
          "404" : {
            "description" : "User not found"
          }
        }
      },
      "patch" : {
        "tags" : [ "users" ],
        "summary" : "Patch existing user settings",
        "description" : "Patch existing user settions",
        "operationId" : "patchUserSettings",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "login",
          "description" : "user login",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "userSettings",
          "description" : "User settings to be updated",
          "schema" : {
            "$ref" : "#/definitions/UserSettings"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/UserSettings"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only update their own data"
          },
          "404" : {
            "description" : "User not found"
          }
        }
      }
    },
    "/users/synchronizeWithToken" : {
      "post" : {
        "tags" : [ "users" ],
        "summary" : "synchronize user data",
        "description" : "synchronize user data with JWT token",
        "operationId" : "synchronizeWithToken",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/User"
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      }
    },
    "/groups" : {
      "get" : {
        "tags" : [ "groups" ],
        "summary" : "Fetch a list of all existing groups",
        "description" : "Fetch a list of all existing groups, with pagination and filter options",
        "operationId" : "fetchGroups",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Group"
              }
            },
            "examples" : {
              "application/json" : [ {
                "id" : "WANDA",
                "name" : "Wanda",
                "description" : "They were not as successful in Fierce Creatures"
              }, {
                "id" : "MARXB",
                "name" : "Marx Brothers",
                "description" : "Chico, Groucho and Harpo, forget about Zeppo and Gummo"
              } ]
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
      "post" : {
        "tags" : [ "groups" ],
        "summary" : "Create a new group of users",
        "description" : "Create a new group of users",
        "operationId" : "createGroup",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "group",
          "description" : "Group to be created",
          "schema" : {
            "$ref" : "#/definitions/Group"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated",
            "schema" : {
              "$ref" : "#/definitions/Group"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Group"
            }
          },
          "400" : {
            "description" : "Bad request (duplicate key)"
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
    "/groups/{id}" : {
      "put" : {
        "tags" : [ "groups" ],
        "summary" : "Update existing group",
        "description" : "Update existing group",
        "operationId" : "updateGroup",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Id of group to be updated (should match \"id group\" in request body)",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "group",
          "description" : "Updated group data (should match \"id group\" path parameter)",
          "schema" : {
            "$ref" : "#/definitions/Group"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated",
            "schema" : {
              "$ref" : "#/definitions/Group"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Group"
            }
          },
          "400" : {
            "description" : "Bad request (body doesn't match \"id group\" path parameter)"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      },
      "get" : {
        "tags" : [ "groups" ],
        "summary" : "Fetch an existing group of users",
        "description" : "Fetch an existing group of users",
        "operationId" : "fetchGroup",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Group"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "groups" ],
        "summary" : "Remove group",
        "description" : "Remove a group",
        "operationId" : "deleteGroup",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      }
    },
    "/groups/{id}/users" : {
      "put" : {
        "tags" : [ "groups", "users" ],
        "summary" : "Update list of group users",
        "description" : "Update list of group users, users not included in given list are removed from group",
        "operationId" : "updateGroupUsers",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "users",
          "description" : "Array of user ids representing exactly the intended list of group users after update",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      },
      "patch" : {
        "tags" : [ "groups", "users" ],
        "summary" : "Add users to group",
        "description" : "ONLY add users to group (no deletion)",
        "operationId" : "addGroupUsers",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "users",
          "description" : "Array of user ids to be added to group",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "groups", "users" ],
        "summary" : "Remove all users from group",
        "description" : "remove all users from group",
        "operationId" : "deleteGroupUsers",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      }
    },
    "/groups/{id}/users/{login}" : {
      "delete" : {
        "tags" : [ "groups", "users" ],
        "summary" : "Remove user from group",
        "description" : "ONLY remove user from group (no addition)",
        "operationId" : "deleteGroupUser",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "path",
          "name" : "login",
          "description" : "User login",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      }
    },
    "/entities" : {
      "get" : {
        "tags" : [ "entities" ],
        "summary" : "Fetch a list of all existing entities.",
        "description" : "Fetch a list of all existing entities, with pagination and filter options.",
        "operationId" : "fetchEntities",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Entity"
              }
            },
            "examples" : {
              "application/json" : [ {
                "id" : "ENTITY1",
                "name" : "Control Room 1",
                "description" : "Control Room 1"
              }, {
                "id" : "ENTITY2",
                "name" : "Control Room 2",
                "description" : "Control Room 2"
              } ]
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "post" : {
        "tags" : [ "entities" ],
        "summary" : "Create a new entity of users",
        "description" : "Create a new entity of users.",
        "operationId" : "createEntity",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "entity",
          "description" : "Entity to be created",
          "schema" : {
            "$ref" : "#/definitions/Entity"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated",
            "schema" : {
              "$ref" : "#/definitions/Entity"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Entity"
            }
          },
          "400" : {
            "description" : "Bad request (duplicate key)"
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
    "/entities/{id}" : {
      "put" : {
        "tags" : [ "entities" ],
        "summary" : "Update existing entity",
        "description" : "Update existing entity.",
        "operationId" : "updateEntity",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Id of entity to be updated (should match id in request body)",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "entity",
          "description" : "Updated entity data (should match id path parameter)",
          "schema" : {
            "$ref" : "#/definitions/Entity"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated",
            "schema" : {
              "$ref" : "#/definitions/Entity"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Entity"
            }
          },
          "400" : {
            "description" : "Bad request (body doesn't match id path parameter)"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      },
      "get" : {
        "tags" : [ "entities" ],
        "summary" : "Fetch an existing entity of users",
        "description" : "Fetch an existing entity of users.",
        "operationId" : "fetchEntity",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Entity id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Entity"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required entity not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "entities" ],
        "summary" : "Remove entity",
        "description" : "Remove an entity",
        "operationId" : "deleteEntity",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Entity id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required entity not found"
          }
        }
      }
    },
    "/entities/{id}/users" : {
      "put" : {
        "tags" : [ "entities", "users" ],
        "summary" : "Update list of entity users",
        "description" : "Update list of entity users, users not included in given list are removed from entity.",
        "operationId" : "updateEntityUsers",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Entity id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "users",
          "description" : "Array of user logins representing exactly the intended list of entity users after update",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required entity not found"
          }
        }
      },
      "patch" : {
        "tags" : [ "entities", "users" ],
        "summary" : "Add users to entity",
        "description" : "ONLY add users to entity (no deletion).",
        "operationId" : "addEntityUsers",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Entity id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "users",
          "description" : "Array of user logins to be added to entity",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required entity not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "entities", "users" ],
        "summary" : "Remove all users from entity",
        "description" : "remove all users from entity.",
        "operationId" : "deleteEntityUsers",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Entity id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required entity not found"
          }
        }
      }
    },
    "/entities/{id}/users/{login}" : {
      "delete" : {
        "tags" : [ "entities", "users" ],
        "summary" : "Remove user from entity",
        "description" : "ONLY remove user from entity (no addition).",
        "operationId" : "deleteEntityUser",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Entity id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "path",
          "name" : "login",
          "description" : "User login",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required entity not found"
          }
        }
      }
    },
    "/perimeters" : {
      "get" : {
        "tags" : [ "perimeters" ],
        "summary" : "Fetch a list of all existing perimeters",
        "description" : "Fetch a list of all existing perimeters.",
        "operationId" : "fetchPerimeters",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Perimeter"
              }
            },
            "examples" : {
              "application/json" : [ {
                "id" : "Process1",
                "process" : "Process1",
                "stateRights" : [ {
                  "state" : "State1",
                  "right" : "Receive"
                }, {
                  "state" : "State2",
                  "rights" : "ReceiveAndWrite"
                } ]
              }, {
                "id" : "Process2",
                "process" : "Process2",
                "stateRights" : [ {
                  "state" : "State1",
                  "right" : "ReceiveAndWrite"
                }, {
                  "state" : "State2",
                  "rights" : "Write"
                } ]
              } ]
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
      "post" : {
        "tags" : [ "perimeters" ],
        "summary" : "Create a new perimeter",
        "description" : "Create a new perimeter.",
        "operationId" : "createPerimeter",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "perimeter",
          "description" : "Perimeter to be created",
          "schema" : {
            "$ref" : "#/definitions/Perimeter"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Perimeter"
            }
          },
          "400" : {
            "description" : "Bad request (duplicate key)"
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
    "/perimeters/{id}" : {
      "put" : {
        "tags" : [ "perimeters" ],
        "summary" : "Update existing perimeter",
        "description" : "Update existing perimeter.",
        "operationId" : "updatePerimeter",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Id of perimeter to be updated (should match id in request body)",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "perimeter",
          "description" : "Updated perimeter data (should match id path parameter)",
          "schema" : {
            "$ref" : "#/definitions/Perimeter"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated",
            "schema" : {
              "$ref" : "#/definitions/Perimeter"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/Perimeter"
            }
          },
          "400" : {
            "description" : "Bad request (body doesn't match id path parameter)"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          }
        }
      },
      "get" : {
        "tags" : [ "perimeters" ],
        "summary" : "Fetch an existing perimeter",
        "description" : "Fetch an existing perimeter.",
        "operationId" : "fetchPerimeter",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Perimeter id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Perimeter"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required perimeter not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "perimeters" ],
        "summary" : "Remove perimeter",
        "description" : "Remove a perimeter",
        "operationId" : "deletePerimeter",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Perimeter id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required perimeter not found"
          }
        }
      }
    },
    "/perimeters/{id}/groups" : {
      "put" : {
        "tags" : [ "perimeters", "groups" ],
        "summary" : "Update list of groups that have this perimeter",
        "description" : "Update list of groups that have this perimeter, groups not included in given list lose this perimeter.",
        "operationId" : "updatePerimeterGroups",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Perimeter id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "groups",
          "description" : "Array of group id representing exactly the intended list of groups that must have this perimeter after update",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required perimeter not found"
          }
        }
      },
      "patch" : {
        "tags" : [ "perimeters", "groups" ],
        "summary" : "Add groups to perimeter",
        "description" : "ONLY add groups to perimeter (no deletion).",
        "operationId" : "addPerimeterGroups",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Perimeter id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "groups",
          "description" : "Array of group id to be added to perimeter",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required perimeter not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "perimeters", "groups" ],
        "summary" : "Remove all groups from perimeter",
        "description" : "remove all groups from perimeter.",
        "operationId" : "deletePerimeterGroups",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Perimeter id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required perimeter not found"
          }
        }
      }
    },
    "/perimeters/{idPerimeter}/groups/{idGroup}" : {
      "delete" : {
        "tags" : [ "perimeters", "groups" ],
        "summary" : "Remove group from perimeter",
        "description" : "ONLY remove group from perimeter (no addition).",
        "operationId" : "deletePerimeterGroup",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "idPerimeter",
          "description" : "Perimeter id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "path",
          "name" : "idGroup",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "Deleted"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required perimeter not found"
          }
        }
      }
    },
    "/groups/{id}/perimeters" : {
      "get" : {
        "tags" : [ "groups", "perimeters" ],
        "summary" : "Fetch an existing group's perimeters",
        "description" : "Fetch existing group's perimeters from their id.",
        "operationId" : "fetchGroupPerimeters",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "group id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Perimeter"
              }
            },
            "examples" : {
              "application/json" : [ {
                "id" : "Process1",
                "process" : "Process1",
                "stateRights" : [ {
                  "state" : "State1",
                  "right" : "Receive"
                }, {
                  "state" : "State2",
                  "rights" : "ReceiveAndWrite"
                } ]
              }, {
                "id" : "Process2",
                "process" : "Process2",
                "stateRights" : [ {
                  "state" : "State1",
                  "right" : "ReceiveAndWrite"
                }, {
                  "state" : "State2",
                  "rights" : "Write"
                } ]
              } ]
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      },
      "put" : {
        "tags" : [ "groups", "perimeters" ],
        "summary" : "Update list of perimeters for group",
        "description" : "Update list of perimeters for group, perimeters not included in given list are no longer linked to the group.",
        "operationId" : "updateGroupPerimeters",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "perimeters",
          "description" : "Array of perimeter id representing exactly the intended list of perimeters that must be linked to the group after update",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      },
      "patch" : {
        "tags" : [ "groups", "perimeters" ],
        "summary" : "Add perimeters to group",
        "description" : "ONLY add perimeters to group (no deletion).",
        "operationId" : "addGroupPerimeters",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "id",
          "description" : "Group id",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "perimeters",
          "description" : "Array of perimeter id to be added to group",
          "schema" : {
            "type" : "array",
            "items" : {
              "type" : "string"
            }
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Updated"
          },
          "400" : {
            "description" : "Bad request"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required group not found"
          }
        }
      }
    },
    "/users/{login}/perimeters" : {
      "get" : {
        "tags" : [ "users", "perimeters" ],
        "summary" : "Fetch an existing user's perimeters",
        "description" : "Fetch existing user's perimeters from their login.",
        "operationId" : "fetchUserPerimeters",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "login",
          "description" : "user login",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Perimeter"
              }
            },
            "examples" : {
              "application/json" : [ {
                "id" : "Process1",
                "process" : "Process1",
                "stateRights" : [ {
                  "state" : "State1",
                  "right" : "Receive"
                }, {
                  "state" : "State2",
                  "rights" : "ReceiveAndWrite"
                } ]
              }, {
                "id" : "Process2",
                "process" : "Process2",
                "stateRights" : [ {
                  "state" : "State1",
                  "right" : "ReceiveAndWrite"
                }, {
                  "state" : "State2",
                  "rights" : "Write"
                } ]
              } ]
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Authenticated users who are not admins can only access their own data"
          },
          "404" : {
            "description" : "Required user not found"
          }
        }
      }
    },
    "/CurrentUserWithPerimeters" : {
      "get" : {
        "tags" : [ "users" ],
        "summary" : "Get information about the user connected and his perimeters",
        "description" : "Get information about the user connected and his perimeters.",
        "operationId" : "fetchCurrentUserWithPerimeters",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "object",
              "$ref" : "#/definitions/CurrentUserWithPerimeters"
            },
            "examples" : {
              "application/json" : {
                "userData" : {
                  "login" : "jcleese",
                  "firstName" : "John",
                  "lastName" : "Cleese",
                  "groups" : [ "MONTY", "WANDA" ],
                  "entities" : [ "ENITY1", "ENTITY2" ]
                },
                "computedPerimeters" : [ {
                  "process" : "Process1",
                  "state" : "State1",
                  "rights" : "Receive"
                }, {
                  "process" : "Process1",
                  "state" : "State2",
                  "rights" : "ReceiveAndWrite"
                } ]
              }
            }
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      }
    }
  }
}