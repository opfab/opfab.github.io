window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "OperatorFabric User Management API",
    "version" : "1.0.0.RELEASE",
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
  "host" : "localhost",
  "basePath" : "/apis",
  "tags" : [ {
    "name" : "users",
    "description" : "Everything concerning users"
  }, {
    "name" : "groups",
    "description" : "Everything concerning groups"
  } ],
  "schemes" : [ "http" ],
  "definitions" : {
    "SimpleUser" : {
      "type" : "object",
      "description" : "User (basic properties)",
      "properties" : {
        "login" : {
          "type" : "string"
        },
        "firstName" : {
          "type" : "string"
        },
        "lastName" : {
          "type" : "string"
        }
      },
      "example" : {
        "login" : "jlcurtis",
        "firstName" : "Jamie Lee",
        "lastName" : "Curtis"
      }
    },
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
        }
      },
      "required" : [ "login" ],
      "example" : {
        "login" : "jcleese",
        "firstName" : "John",
        "lastName" : "Cleese",
        "groups" : [ "Monty Python", "Wanda" ]
      }
    },
    "Group" : {
      "type" : "object",
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "description" : {
          "type" : "string"
        }
      },
      "required" : [ "name" ],
      "example" : {
        "name" : "Wanda",
        "description" : "They were not as successful in Fierce Creatures."
      }
    },
    "TimeLineFormats" : {
      "type" : "object",
      "description" : "Timeline rendered date / time formats",
      "properties" : {
        "dateInsideTooltipsWeek" : {
          "type" : "string",
          "description" : "Default format use on date inside tooltips for time's unit lower than hour"
        },
        "dateInsideTooltipsMonth" : {
          "type" : "string",
          "description" : "Default format use on date inside tooltips for other case"
        },
        "dateOnDay" : {
          "type" : "string",
          "description" : "Default format use for display a day and month informations with day name, number, and month"
        },
        "dateOnWeek" : {
          "type" : "string",
          "description" : "Default format use for display a week information with day number, month number and two last year's number"
        },
        "dateOnMonth" : {
          "type" : "string",
          "description" : "Default format use for display a month information with month name and two last year's number"
        },
        "dateOnYear" : {
          "type" : "string",
          "description" : "Default format use for display a year information"
        },
        "titleDateInsideTooltips" : {
          "type" : "string",
          "description" : "Default format use on first part of title inside tooltips showing day number and month number of its date"
        },
        "titleHourInsideTooltips" : {
          "type" : "string",
          "description" : "Default format use on second part of title inside tooltips showing hours and minutes of its date"
        },
        "dateOnDayNewYear" : {
          "type" : "string",
          "description" : "Default format use for display first year's day on a day configuration display day number, month name and two last year's number"
        },
        "realTimeBarFormat" : {
          "type" : "string",
          "description" : "Default format use on real time bar date, show minutes, hours, day number, month number and two last year's number"
        },
        "dateSimplifliedOnDayNewYear" : {
          "type" : "string",
          "description" : "Default format use on date configuration for first year's day, show simplified day number, month name and last two year's number"
        },
        "dateSimplifliedOnDay" : {
          "type" : "string",
          "description" : "Default format use on date configuration, show simplified day number and month name"
        },
        "hoursOnly" : {
          "type" : "string",
          "description" : "Default format for show only hours"
        },
        "minutesOnly" : {
          "type" : "string",
          "description" : "Default format for show only minutes"
        },
        "secondedsOnly" : {
          "type" : "string",
          "description" : "Default format for show only seconds"
        },
        "weekNumberOnly" : {
          "type" : "string",
          "description" : "Default format for show only week number"
        }
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
        "email" : {
          "type" : "string",
          "description" : "User email"
        },
        "description" : {
          "type" : "string",
          "description" : "Free user description label (ex: organization role)"
        },
        "timeZone" : {
          "type" : "string",
          "description" : "User time zone (See https://momentjs.com)"
        },
        "locale" : {
          "type" : "string",
          "description" : "User using browser format"
        },
        "timeFormat" : {
          "type" : "string",
          "description" : "Time formatting (See https://momentjs.com)"
        },
        "dateFormat" : {
          "type" : "string",
          "description" : "Date formatting (See https://momentjs.com)"
        },
        "dateTimeFormat" : {
          "type" : "string",
          "description" : "Date Time formatting (See https://momentjs.com). If not set dateFormat and timeFormat are used to deduce date time format."
        },
        "defaultTags" : {
          "type" : "array",
          "description" : "Default tags used in tag filter",
          "items" : {
            "type" : "string",
            "uniqueItems" : true
          }
        },
        "timeLineDefaultClusteringFormats" : {
          "$ref" : "#/definitions/TimeLineFormats"
        }
      },
      "required" : [ "login" ],
      "example" : {
        "login" : "jcleese",
        "email" : "john.cleese@monty.python.org",
        "description" : "once played Sir Lancelot",
        "timezone" : "Europe/London",
        "locale" : "en-GB",
        "timeFormat" : "LT",
        "dateFormat" : "L",
        "defaultTags" : [ "humor", "movies" ]
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
                "groups" : [ "Monty Python", "Wanda" ]
              }, {
                "login" : "gchapman",
                "firstName" : "Graham",
                "lastName" : "Chapman",
                "groups" : [ "Monty Python" ]
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
        "description" : "Create a new user",
        "operationId" : "createUser",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "user",
          "description" : "User to be created",
          "schema" : {
            "$ref" : "#/definitions/SimpleUser"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/SimpleUser"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/SimpleUser"
            }
          },
          "400" : {
            "description" : "Bad request (duplicate key)"
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
            "$ref" : "#/definitions/SimpleUser"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/SimpleUser"
            }
          },
          "201" : {
            "description" : "Created",
            "schema" : {
              "$ref" : "#/definitions/SimpleUser"
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
                "name" : "Wanda",
                "description" : "They were not as successful in Fierce Creatures"
              }, {
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
    "/groups/{name}" : {
      "put" : {
        "tags" : [ "groups" ],
        "summary" : "Update existing group",
        "description" : "Update existing group",
        "operationId" : "updateGroup",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "name",
          "description" : "Name of group to be updated (should match name in request body)",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "group",
          "description" : "Updated group data (should match name path parameter)",
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
            "description" : "Bad request (body doesn't match name path parameter)"
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
          "name" : "name",
          "description" : "Group name",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "201" : {
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
      }
    },
    "/groups/{name}/users" : {
      "put" : {
        "tags" : [ "groups", "users" ],
        "summary" : "Update list of group users",
        "description" : "Update list of group users, users not included in given list are removed from group",
        "operationId" : "updateGroupUsers",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "name",
          "description" : "Group name",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "users",
          "description" : "Array of user logins representing exactly the intended list of group users after update",
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
        "description" : "ONLY add users to group (no deletions)",
        "operationId" : "addGroupUsers",
        "produces" : [ "application/json" ],
        "consumes" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "name",
          "description" : "Group name",
          "type" : "string",
          "required" : true
        }, {
          "in" : "body",
          "name" : "users",
          "description" : "Array of user logins to be added to group",
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
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "name",
          "description" : "Group name",
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
    "/groups/{name}/users/{login}" : {
      "delete" : {
        "tags" : [ "groups", "users" ],
        "summary" : "Remove users from group",
        "description" : "ONLY remove users from group (no additions)",
        "operationId" : "deleteGroupUser",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "name",
          "description" : "Group name",
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
    }
  }
}