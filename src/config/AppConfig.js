// Simple React Native specific changes

export default {

    apiUrl: 'https://api.otapibeta.com/',
    requestJson: {
        "identification":
            { "iban": "DE89370400440532013000"},
        "market_infrastructure_identification":
            {"clearing_system_member_identification":
                    {"clearing_system_identification":
                            {"code": "DEBLZ"},
                        "member_identification":
                            "MemberA"}},
        "currency": "EUR",
        "type":
            {"code":
                    "SACC"},
        "balance":
            { "type":
                    "CLAV",
                "date_and_time":
                    "2018-08-08T00:00:00.0Z",
                "settlement_cycle":
                    "FIRST",
                "credit_line_indicator":
                    true}
    },

    requestJson2: {
        "identification": {
          "iban": "GB26MIDL40051512345674"
        },
        "market_infrastructure_identification": {
          "clearing_system_member_identification": {
            "clearing_system_identification": {
              "code": "GBDSC"
            },
            "member_identification": "Member A"
          }
        },
        "currency": "GBP",
        "type": {
          "code": "SACC"
        },
        "balance": {
          "type": "CLAV",
          "date_and_time": "2018-08-09T00:00:00.0Z",
          "settlement_cycle": "FIRST",
          "amount": {
            "currency": "GBP",
            "Amount": "100000,"
          },
          "credit_debit_indicator": "CRDT",
          "credit_line_indicator": true,
          "credit_line": {
            "currency": "GBP",
            "Amount": "2500,"
          }
        },
        "token": "TESTUKAccount",
        "hal_links": [
          "a"
        ]
      }
  }