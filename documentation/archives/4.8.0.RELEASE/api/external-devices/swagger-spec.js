window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "IMPORTANT - The Try it Out button will generate curl requests for examples, but executing them through the UI will not work as authentication has not been set up. This page is for documentation only.",
    "version" : "4.8.0.RELEASE",
    "title" : "External Devices Management",
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
  "tags" : [ {
    "name" : "notification",
    "description" : "Passing of notifications to be handled by the external-devices service"
  }, {
    "name" : "device",
    "description" : "Live device management (connection, etc.)"
  }, {
    "name" : "deviceConfiguration",
    "description" : "Management of device configurations"
  }, {
    "name" : "signalMapping",
    "description" : "Management of signal mappings"
  }, {
    "name" : "userConfiguration",
    "description" : "Management of user configurations"
  } ],
  "definitions" : {
    "DeviceConfiguration" : {
      "type" : "object",
      "description" : "Configuration information for an external device",
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "host" : {
          "type" : "string"
        },
        "port" : {
          "type" : "integer"
        },
        "signalMappingId" : {
          "description" : "Id of the mapping to use to link OpFab signals to the corresponding",
          "type" : "string"
        },
        "isEnabled" : {
          "description" : "Tells whether the device can be used by OperatorFabric",
          "type" : "boolean",
          "default" : true
        }
      },
      "required" : [ "id", "host", "port" ],
      "example" : {
        "id" : "CDS_1",
        "host" : "localhost",
        "port" : 4300,
        "signalMappingId" : "default_CDS_mapping",
        "isEnabled" : true
      }
    },
    "Device" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "string"
        },
        "resolvedAddress" : {
          "type" : "string"
        },
        "port" : {
          "type" : "integer"
        },
        "isConnected" : {
          "type" : "boolean"
        }
      },
      "required" : [ "id", "resolvedAddress", "port" ],
      "example" : {
        "id" : "CDS_1",
        "resolvedAddress" : "123.45.67.89",
        "port" : 4300,
        "isConnected" : true
      },
      "description" : "Connection to an external device"
    },
    "Notification" : {
      "type" : "object",
      "description" : "Description of outbound notification",
      "properties" : {
        "opfabSignalId" : {
          "type" : "string"
        }
      },
      "required" : [ "opfabSignalId" ],
      "example" : {
        "opfabSignalId" : "ALARM"
      }
    },
    "SignalMapping" : {
      "type" : "object",
      "description" : "Mapping between OperatorFabric signal key and integer value representing a given sound on external device",
      "properties" : {
        "id" : {
          "type" : "string",
          "description" : "identifier for this mapping table"
        },
        "supportedSignals" : {
          "type" : "object",
          "description" : "mapping between OpFab signal and external device signal (key = id of the OpFab signal, value = id of the external device signal)",
          "additionalProperties" : {
            "type" : "integer"
          }
        }
      },
      "required" : [ "id", "supportedSignals" ],
      "example" : {
        "id" : "default_CDS_mapping",
        "supportedSignals" : {
          "ALARM" : 1,
          "ACTION" : 2,
          "COMPLIANT" : 3,
          "INFORMATION" : 4
        }
      }
    },
    "UserConfiguration" : {
      "type" : "object",
      "description" : "Definition of the external device to use for each user",
      "properties" : {
        "userLogin" : {
          "type" : "string"
        },
        "externalDeviceIds" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      },
      "required" : [ "userLogin" ],
      "example" : {
        "userLogin" : "operator1_fr",
        "externalDeviceIds" : [ "CDS_1", "CDS_2" ]
      }
    }
  },
  "paths" : {
    "/externaldevices/notifications" : {
      "post" : {
        "tags" : [ "notification" ],
        "summary" : "Handle (e.g. play sound for) given notification",
        "operationId" : "handleNotification",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "notification",
          "description" : "Notification to be passed on to an external device",
          "schema" : {
            "$ref" : "#/definitions/Notification"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK sound was triggered on external device"
          },
          "400" : {
            "description" : "Bad request - notification could not be handled (bad notification object,no external device configured for user, etc.)"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "404" : {
            "description" : "Could not send notification to device because it has no known driver"
          }
        }
      }
    },
    "/externaldevices/configurations/devices" : {
      "post" : {
        "tags" : [ "deviceConfiguration" ],
        "summary" : "Create device with provided configuration",
        "operationId" : "createDeviceConfiguration",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "deviceConfiguration",
          "description" : "Device configuration to be created",
          "schema" : {
            "$ref" : "#/definitions/DeviceConfiguration"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "OK Device configuration was created"
          },
          "400" : {
            "description" : "Bad request (wrong configuration data, duplicate, etc.)"
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
        "tags" : [ "deviceConfiguration" ],
        "summary" : "Get all device configurations",
        "operationId" : "getDeviceConfigurations",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/DeviceConfiguration"
              }
            }
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
    "/externaldevices/configurations/devices/{deviceId}" : {
      "get" : {
        "tags" : [ "deviceConfiguration" ],
        "summary" : "Get device configuration with given Id",
        "operationId" : "getDeviceConfiguration",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "deviceId",
          "description" : "id of the device configuration",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/DeviceConfiguration"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Device configuration not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "deviceConfiguration" ],
        "summary" : "Delete device configuration with given Id",
        "operationId" : "deleteDeviceConfiguration",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "deviceId",
          "description" : "id of the device configuration to be deleted",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK Device configuration was deleted"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Device configuration not found"
          }
        }
      }
    },
    "/externaldevices/configurations/signals" : {
      "post" : {
        "tags" : [ "signalMapping" ],
        "summary" : "Create signal mapping with provided configuration",
        "operationId" : "createSignalMapping",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "signalMapping",
          "description" : "Signal mapping to be created",
          "schema" : {
            "$ref" : "#/definitions/SignalMapping"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "OK Signal mapping was created"
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "get" : {
        "tags" : [ "signalMapping" ],
        "summary" : "Get all signal mappings",
        "operationId" : "getSignalMappings",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/SignalMapping"
              }
            }
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
    "/externaldevices/configurations/signals/{signalMappingId}" : {
      "get" : {
        "tags" : [ "signalMapping" ],
        "summary" : "Get signal mapping with given Id",
        "operationId" : "getSignalMapping",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "signalMappingId",
          "description" : "id of the signal mapping",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/SignalMapping"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Signal mapping not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "signalMapping" ],
        "summary" : "Delete signal mapping with given Id",
        "operationId" : "deleteSignalMapping",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "signalMappingId",
          "description" : "id of the signal mapping to be deleted",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK Signal mapping was deleted"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Signal mapping not found"
          }
        }
      }
    },
    "/externaldevices/configurations/users" : {
      "post" : {
        "tags" : [ "userConfiguration" ],
        "summary" : "Configures the external device to use for a given user",
        "operationId" : "createUserConfiguration",
        "consumes" : [ "application/json" ],
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "body",
          "name" : "userConfiguration",
          "description" : "User configuration to be created",
          "schema" : {
            "$ref" : "#/definitions/UserConfiguration"
          }
        } ],
        "responses" : {
          "201" : {
            "description" : "OK User configuration was created"
          },
          "401" : {
            "description" : "Authentication required"
          }
        }
      },
      "get" : {
        "tags" : [ "userConfiguration" ],
        "summary" : "Get all user configurations",
        "operationId" : "getUserConfigurations",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/UserConfiguration"
              }
            }
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
    "/externaldevices/configurations/users/{userLogin}" : {
      "get" : {
        "tags" : [ "userConfiguration" ],
        "summary" : "Get user configuration for user with given login",
        "operationId" : "getUserConfiguration",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "userLogin",
          "description" : "login of the user",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/UserConfiguration"
            }
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "User configuration not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "userConfiguration" ],
        "summary" : "Delete user configuration for user with given login",
        "operationId" : "deleteUserConfiguration",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "userLogin",
          "description" : "login of the user whose configuration should be deleted",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK user configuration was deleted"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "User configuration not found"
          }
        }
      }
    },
    "/externaldevices/devices" : {
      "get" : {
        "tags" : [ "device" ],
        "summary" : "Fetch all devices",
        "operationId" : "getDevices",
        "produces" : [ "application/json" ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Device"
              }
            }
          }
        }
      }
    },
    "/externaldevices/devices/{deviceId}" : {
      "get" : {
        "tags" : [ "device" ],
        "summary" : "Fetch device",
        "description" : "Fetch device with given deviceId",
        "operationId" : "getDevice",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "deviceId",
          "description" : "device Id",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "schema" : {
              "$ref" : "#/definitions/Device"
            }
          },
          "404" : {
            "description" : "Required device not found"
          }
        }
      }
    },
    "/externaldevices/devices/{deviceId}/enable" : {
      "post" : {
        "tags" : [ "device" ],
        "summary" : "Enable device",
        "operationId" : "enableDevice",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "deviceId",
          "description" : "the id of the device configuration to enable",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK Device was enabled"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required device not found"
          }
        }
      }
    },
    "/externaldevices/devices/{deviceId}/disable" : {
      "post" : {
        "tags" : [ "device" ],
        "summary" : "Disable device",
        "operationId" : "disableDevice",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "in" : "path",
          "name" : "deviceId",
          "description" : "the id of the device configuration to disable",
          "type" : "string",
          "required" : true
        } ],
        "responses" : {
          "200" : {
            "description" : "OK Device was disabled"
          },
          "401" : {
            "description" : "Authentication required"
          },
          "403" : {
            "description" : "Forbidden - ADMIN role necessary"
          },
          "404" : {
            "description" : "Required device not found"
          }
        }
      }
    }
  }
}