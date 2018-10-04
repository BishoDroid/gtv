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
      },
    posting: [
      {
        "bic": "BKENGB2L",
        "account_postings": [
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "BKENGB2L",
            "amount": {
              "currency": "GBP",
              "Amount": "10000,",
            },
            "date_and_time": "2018-08-09T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "BKENGB2L",
            "amount": {
              "currency": "GBP",
              "Amount": "500,"
            },
            "date_and_time": "2018-08-09T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "BKENGB2L",
            "amount": {
              "currency": "GBP",
              "Amount": "85000,"
            },
            "date_and_time": "2018-08-09T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "BKENGB2L",
            "amount": {
              "currency": "GBP",
              "Amount": "5000,"
            },
            "date_and_time": "2018-08-09T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "PDNG",
            "bic": "BKENGB2L",
            "amount": {
              "currency": "GBP",
              "Amount": "5000,"
            },
            "date_and_time": "2018-08-09T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "DBIT",
            "status": "PDNG",
            "bic": "BKENGB2L",
            "amount": {
              "currency": "GBP",
              "Amount": "5000,"
            },
            "date_and_time": "2018-08-09T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "DBIT",
            "status": "PDNG",
            "bic": "BKENGB2L",
            "amount": {
              "currency": "GBP",
              "Amount": "500,"
            },
            "date_and_time": "2018-08-09T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "MARKDEFF",
            "amount": {
              "currency": "EUR",
              "Amount": "10000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "MARKDEFF",
            "amount": {
              "currency": "EUR",
              "Amount": "500"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "MARKDEFF",
            "amount": {
              "currency": "EUR",
              "Amount": "85000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "bic": "MARKDEFF",
            "amount": {
              "currency": "EUR",
              "Amount": "5000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "PDNG",
            "bic": "MARKDEFF",
            "amount": {
              "currency": "EUR",
              "Amount": "5000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "DBIT",
            "status": "PDNG",
            "bic": "MARKDEFF",
            "amount": {
              "currency": "EUR",
              "Amount": "5000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "DBIT",
            "status": "PDNG",
            "bic": "MARKDEFF",
            "amount": {
              "currency": "EUR",
              "Amount": "500"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          }
        ]
      },{
        "bic": "MARKDEFF",
        "account_postings": [
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "amount": {
              "currency": "EUR",
              "Amount": "10000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "amount": {
              "currency": "EUR",
              "Amount": "500"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "amount": {
              "currency": "EUR",
              "Amount": "85000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "BOOK",
            "amount": {
              "currency": "EUR",
              "Amount": "5000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "CRDT",
            "status": "PDNG",
            "amount": {
              "currency": "EUR",
              "Amount": "5000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "DBIT",
            "status": "PDNG",
            "amount": {
              "currency": "EUR",
              "Amount": "5000"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          },
          {
            "credit_debit_indicator": "DBIT",
            "status": "PDNG",
            "amount": {
              "currency": "EUR",
              "Amount": "500"
            },
            "date_and_time": "2018-08-07T00:00:00.0Z"
          }
        ]
      }
      
    ]
  }