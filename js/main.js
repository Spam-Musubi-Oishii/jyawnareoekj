// Local storage variables
// selected_questionlist_name is a string specifying the question list to load in the question page e.g. L2_Calculus_2021. This is saved when the user clicks a question list on the home page.
// selected_question_number is an integer to keep track of the actively selected question on the quetsion page. This defaults to zero each time a question list is selected.
// all_questions_correct_flag is an array of integers where the index corresponds to a question ID. If the value is 1 the user said they got the question correct, -1 incorrect, and 0 not answered yet.
// subject_selection is an array of strings conatining subject names such as ["L3_Calculus", "L3_Statistics"] so the users homepage only shows these subjects.


// question_img = ID for unrestricted Google Drive share link
// hint_img = ID for unrestricted Google Drive share link
// answer_img = ID for unrestricted Google Drive share link
// video_answer_link = ID for YouTube link
// difficulty = depends on past exam question. Usually Achieved, Merit, or Excellence
// topics = array of topics relevant to the question.
// origin = where the question comes from e.g. NCEA Past Exam - Level 3 - Calculus - 2022 - Question 1ai
// question_ID = ID number of the question = index in array of questionlist

const questionlist = [
      {
        "question_img":"17gClUWxkXarB-dYkfFZo2hTkjW3K6NR3",
        "hint_img":"",
        "answer_img":"1rXeA7vwug3NVZ6aQRsCd6m9jO_Lc_yZ9",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1a",
        "question_ID":0,
      },
      {
        "question_img":"1k0iwj90gxDyp-sxtRAceFTre0oBUw9nK",
        "hint_img":"",
        "answer_img":"14U0MAR94iXnp93S320IJwSKDnD9U2LUm",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1b",
        "question_ID":1,
      },
      {
        "question_img":"1y5nsWDa7OZhzftkJVG29MMv1W67zoKzc",
        "hint_img":"",
        "answer_img":"1qbvZtevRVRaTDTa_obN9TyzACwOLmJfP",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1c",
        "question_ID":2,
      },
      {
        "question_img":"1jMHTde0xAeG9KHetA30JWuHtyJJqflK5",
        "hint_img":"",
        "answer_img":"1-mGKOC9yvf_lAYSq9-mmJGdMRgBQvMIR",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2a",
        "question_ID":3,
      },
      {
        "question_img":"1w_Ak61_oWGAVE9vgSyriRaSAUol9EzbN",
        "hint_img":"",
        "answer_img":"1tmhK6Tb3ATwwbpc50VpoapXLauR5ufjJ",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2b",
        "question_ID":4,
      },
      {
        "question_img":"1Wm1aNFUIAWqjwKuss04FHRzKxfIL3-_0",
        "hint_img":"",
        "answer_img":"1hfX5JU0mbyB4_2klyapBq2ov6Z9Unk1_",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2c",
        "question_ID":5,
      },
      {
        "question_img":"1qJdg2QNg1UYJPRb64j5r0Ze6PQH30rRj",
        "hint_img":"",
        "answer_img":"1-PcPAq_ozhap73Gv1q8L3_1RiePbxKDy",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3a",
        "question_ID":6,
      },
      {
        "question_img":"1EBM98Mw95VSrC9X6w3nREjRZjz-ZFoAY",
        "hint_img":"",
        "answer_img":"1RHzSJQAQPELMzTITC2_LraysmKSCQu4Q",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3b",
        "question_ID":7,
      },
      {
        "question_img":"1KAhvUAFDWtdyB_tyZ9lO2I6G4u3mDjDE",
        "hint_img":"",
        "answer_img":"18vsCRNmialZMXBWFF1gMe0QEgwZjKOCl",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3c",
        "question_ID":8,
      },
      {
        "question_img":"1-c4yKJA9oWwmUbTbeUd1EB97Dtsda_bz",
        "hint_img":"",
        "answer_img":"1ImMvqUV0BFIFThVJzby9BHAXSMG9xVyq",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3d",
        "question_ID":9,
      },
      {
        "question_img":"1jBW9eFC0MCztsczkgXKt6EW_qFvrQ-qD",
        "hint_img":"",
        "answer_img":"11cyTXEW6rjYSiZZAvuMB-joRZtDaHYHm",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1a",
        "question_ID":10,
      },
      {
        "question_img":"149pThVQUJ-nTZj6xTYMqxAchMMecjGP-",
        "hint_img":"",
        "answer_img":"1tbDRcfEAa74OLqPH18Dvg5STNVvLlKN5",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1b",
        "question_ID":11,
      },
      {
        "question_img":"1P2jr_1V8oy7yOqNXqaEHjzBUGYIgdNC_",
        "hint_img":"",
        "answer_img":"1m87A3pC1zFydPsSqlC5pNrWVJ_nxmvtl",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1c",
        "question_ID":12,
      },
      {
        "question_img":"1kEr9PU2lG8KAffl5W-k0Lsvb2CksiySm",
        "hint_img":"",
        "answer_img":"1On9HG8Dbhv-bWKgqTzgaCIUO65tB1ZOF",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1d",
        "question_ID":13,
      },
      {
        "question_img":"1ap6NXFMdxXKqCj2cYQoygyjUPkFY90DU",
        "hint_img":"",
        "answer_img":"1bxAk-Ps3OB_x7ZhLeRIeRV3-fo8JXUzH",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1e",
        "question_ID":14,
      },
      {
        "question_img":"1fLLBZDT2swCf9gqJ7bgnqzaTm2UPtddb",
        "hint_img":"",
        "answer_img":"1njdS7LzOLPED4jkd--tZ8JuTnf6z68MP",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2a",
        "question_ID":15,
      },
      {
        "question_img":"1bbHTh2XKr47wYKGrb1CqcbnBWNrbV2L5",
        "hint_img":"",
        "answer_img":"1QHZMwLovtBDSAQ8sYYIBJhfKU9GNd30H",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2b",
        "question_ID":16,
      },
      {
        "question_img":"1QlamQi-UI3CbDeyh7QbM_UivfSPwCl1_",
        "hint_img":"",
        "answer_img":"1Rp3EXco867ncqTImninWpqAfLHq_YKW2",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2c",
        "question_ID":17,
      },
      {
        "question_img":"1Qt1flExwzOjpH8rf4uxKLZIUD8VmI50i",
        "hint_img":"",
        "answer_img":"12v4-gLQkDzFiZwjTaH4OFDrtbqlUrLhC",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2d",
        "question_ID":18,
      },
      {
        "question_img":"1CY-8c51K9uYYUam8RCSwAyxi2kg8pg01",
        "hint_img":"",
        "answer_img":"1cTUqvMPXN6c2r2NNHJn_N5Uhfq9nmH9m",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2e",
        "question_ID":19,
      },
      {
        "question_img":"16ZSWvXsaDd0v83XebjR-5NYEFdIruy9X",
        "hint_img":"",
        "answer_img":"1cXACXk1JNUJ6TAiU0MljsOP2GIpLTJkN",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3a",
        "question_ID":20,
      },
      {
        "question_img":"1BF4jLnM2l0nbLvfGt7rubKyXTL8MZEMl",
        "hint_img":"",
        "answer_img":"1mBcQb-FPahYmgRFz3SF4l1BxDgV9l2Tm",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3b",
        "question_ID":21,
      },
      {
        "question_img":"1c36PDIl1wHB_MSbXdp_8XeItHkyhT5G6",
        "hint_img":"",
        "answer_img":"1dg28cVKVCWaUHsWpTi2mEJbBYhSwGRr_",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3c",
        "question_ID":22,
      },
      {
        "question_img":"1zVSaL6kUPLe8JXj6POVmSJdy6d-PF46c",
        "hint_img":"",
        "answer_img":"1u6J-MUwrX4rp-mWlIHCIyjV7lPgfetQ0",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3d",
        "question_ID":23,
      },
      {
        "question_img":"1bLRV5BHhLbL1q6VP3_umUxiUkm9VVbfo",
        "hint_img":"",
        "answer_img":"1dBoycTkWWKhkQdn6dVHl3lDpawy74c_h",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3e",
        "question_ID":24,
      },





      {
        "question_img":"1HuUZF2RzbFQ1pGaA-LSLgEsqi-Poxhhh",
        "hint_img":"",
        "answer_img":"1nHbeNXGdn7l1yjVg5xQU80GTtBe_yEj7",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1a",
        "question_ID":25,
      },
      {
        "question_img":"1zHxI01LlesW-Yc7jEOejzB8_7yrp_UMr",
        "hint_img":"",
        "answer_img":"1UJzf3smXFdY5vagB1JmEiTUmmnTRKDSL",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1b",
        "question_ID":26,
      },
      {
        "question_img":"1D-n4cBmzWqaY8WdralMA7oEbge2R3UnN",
        "hint_img":"",
        "answer_img":"1M7KF4iPInaeF-dtdNFDY48wlLCtxN6YI",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1c",
        "question_ID":27,
      },
      {
        "question_img":"1OHmu5cs9udhzxX17-QDDsDqjahN3mMIu",
        "hint_img":"",
        "answer_img":"1QacuUb8lPeY8cnzSL_I_zz5wWPkWbn6X",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1d",
        "question_ID":28,
      },
      {
        "question_img":"1K4x-XRB5Gg3yBxgNsdqtV8CTQanX1Ulw",
        "hint_img":"",
        "answer_img":"1Re_fJPzUz9Lo0i50uKcqZ-IrsUCqcNT_",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1e",
        "question_ID":29,
      },
      {
        "question_img":"1so-T9FHzEfcd3k7EugPQxt8_fjkfRUem",
        "hint_img":"",
        "answer_img":"1cigSXdpOdBarnWOYGgFMy-Rnmp1W958D",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2a",
        "question_ID":30,
      },
      {
        "question_img":"1yfKKjmHtefpSgZuHdxJPjWgDQn5-Djpf",
        "hint_img":"",
        "answer_img":"1LN35JEnOirBtdFZWoYC5rvXBe5aCSwKM",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2b",
        "question_ID":31,
      },
      {
        "question_img":"1Iut2DpeOMvjURANa6DrrXG43UA6kswx5",
        "hint_img":"",
        "answer_img":"1lz8RLaIopuy6Iy8hUxIqLjk9Xys2M9g6",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2c",
        "question_ID":32,
      },
      {
        "question_img":"1BOsJ85Hz1paadQ8GLEml4P5k-StMqiPp",
        "hint_img":"",
        "answer_img":"1VvEkpVwLKDIx8CrqVk5ZnZ_cpROT2E6C",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2d",
        "question_ID":33,
      },
      {
        "question_img":"1tm-BgFlVFdJOFT-V1-sQvGK2enD90oGG",
        "hint_img":"",
        "answer_img":"1A7pQ9lIuPiFMxPXhbKUT0hYCVngj7nOC",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2e",
        "question_ID":34,
      },
      {
        "question_img":"1W-95Pj81Y04nhA54LC8pxRAyoVbmjUoW",
        "hint_img":"",
        "answer_img":"1UXayXiML0c82aV9l6sRANRK0-uRxn2lr",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 3a",
        "question_ID":35,
      },
      {
        "question_img":"1sFlWUc9hipr-8wPbZ9FXESyH70gmVTty",
        "hint_img":"",
        "answer_img":"10gbHyA4QTKLwJd5-f_NvJPvnW-sUaMHn",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 3b",
        "question_ID":36,
      },
      {
        "question_img":"1lMIbph0ILAdlq_fpsXIL3JZkOzMeWutW",
        "hint_img":"",
        "answer_img":"15-PfOGP_-AJJqxcjNdj8jWjKMKXWTGhZ",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 3c",
        "question_ID":37,
      },







      {
        "question_img":"1f5PicVyNnQp8j0LQUsplAnhtwIw1oBnb",
        "hint_img":"",
        "answer_img":"1MqoNS3heF0qejPyD1nPW6RC2jRh_8h7e",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1a",
        "question_ID":38,
      },
      {
        "question_img":"1FJn2xDTl4ceRoa1WgrbdPmWEW7-9O2RZ",
        "hint_img":"",
        "answer_img":"1x0-5UrP9zLU6OV8xqwdiFZk9rXG17bvt",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1b",
        "question_ID":39,
      },
      {
        "question_img":"1t_3gGqH5MjiqfXHOhE5Dm121L7WLqBxb",
        "hint_img":"",
        "answer_img":"1qaNfHHbT2THMS-mQ4b_TXUPvikTQUX97",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1c",
        "question_ID":40,
      },
      {
        "question_img":"1RLuO-kRnFMWsKLRM0ALZkpBCfueGlPNd",
        "hint_img":"",
        "answer_img":"1dYs4A5M1RsglUJMB831wltDN9xuwsEib",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1d",
        "question_ID":41,
      },
      {
        "question_img":"17aap0R5jlcbGesg1zo8IGvxSKCeZ8MyW",
        "hint_img":"",
        "answer_img":"1NCFBzgamYgV9Cw_CY_oEuA_RDTeWwtV8",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1e",
        "question_ID":42,
      },
      {
        "question_img":"13tUY2HVtBAh4hWWpcnGlmGXhwXM2VHGc",
        "hint_img":"",
        "answer_img":"1teFMsy1WTSd1wM9AvSVf_rH0rYwaKgSR",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2a",
        "question_ID":43,
      },
      {
        "question_img":"1sWf16nER1LbIpEp0Rw9fwGq1ejqysQyn",
        "hint_img":"",
        "answer_img":"1CZx_fvLcPrGpDCvy0XlmMUAYXhJ3Tk3X",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2b",
        "question_ID":44,
      },
      {
        "question_img":"1216t0UAidQbDlnja8Sl0y2eHQAVqMnb6",
        "hint_img":"",
        "answer_img":"1nA6r9DExnRD5Mrawlli9Fb9hG4ety3Qa",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2c",
        "question_ID":45,
      },
      {
        "question_img":"1RLu3g_I_UIgD_IIS2O3_0nQRv3sMF53n",
        "hint_img":"",
        "answer_img":"1svgF2snF_VHbCGwxfiUbH585d9eAM-DH",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2d",
        "question_ID":46,
      },
      {
        "question_img":"1ZwPkOV5h_er1bc1T6DZlo7FZfxy5yhMQ",
        "hint_img":"",
        "answer_img":"1_VS7W9USoKtq3eAfwQeC-OZTE6rgwjzA",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2e",
        "question_ID":47,
      },
      {
        "question_img":"1v4JypXJhXo7dbDId2_jnpbS8cKK0W6an",
        "hint_img":"",
        "answer_img":"19lKRwc69ThWZM1YQpDB145tJ9hPcXCsC",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3a",
        "question_ID":48,
      },
      {
        "question_img":"1OQhrR0ieX4vBWK2i00MsTqVSvVRNLA8T",
        "hint_img":"",
        "answer_img":"1U9Ne6RJSgUu5eXe24smsG-ty1DTql6pQ",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3b",
        "question_ID":49,
      },
      {
        "question_img":"1xcd_fXqQ0puT7BY13lJwKJ_jZuoXdTH0",
        "hint_img":"",
        "answer_img":"1Pck1NtW-FswSQcbrz090EdqvmAasax-D",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3c",
        "question_ID":50,
      },
      {
        "question_img":"1T5XOkyGFAZQNui7bNTzVzaUOmBQSe0yp",
        "hint_img":"",
        "answer_img":"10rjwjsHDFMpU2xPHRbEB-21eT69nFosf",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3d",
        "question_ID":51,
      },




      {
        "question_img":"1f8pDvGgXJ-MJU-6S4O8ZJfc_3mpaOQsk",
        "hint_img":"",
        "answer_img":"1ovZumRvF83OE15-QtLeP6YIKZxNnkeFz",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1a",
        "question_ID":52,
      },
      {
        "question_img":"1-EdwjM1vctQ6TM7w4lBXW4pdrtFZzN6i",
        "hint_img":"",
        "answer_img":"1Kgbpwjn1puDlH8CVEYZo1AqOjfPI8qs4",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1b",
        "question_ID":53,
      },
      {
        "question_img":"1lYb2WGYD3ncMwnGaNtIzflAwTy5H4aC1",
        "hint_img":"",
        "answer_img":"1g2PHi221Umnpcp8I_-WwQUsIP7BxyK-L",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1c",
        "question_ID":54,
      },
      {
        "question_img":"1sE-VZYVlxd4h2pI2fvi3_5fkeSMjQl-m",
        "hint_img":"",
        "answer_img":"1K066P44CiDRIphFRCOaF9hxAxP9BcRzs",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1d",
        "question_ID":55,
      },
      {
        "question_img":"1jmmLrJfEIPTph9ue_8TLuLIWObFiEXyf",
        "hint_img":"",
        "answer_img":"1Rloq4uTvkBFmwVMvUvSO3Se6tMS5wRE7",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1e",
        "question_ID":56,
      },
      {
        "question_img":"1szG8fbVgi-xZtXCHxOdH1xsotV5_fPeH",
        "hint_img":"",
        "answer_img":"1KQGRSl1tNB80khX7wyTC9H0r3xJGQT5M",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2a",
        "question_ID":57,
      },
      {
        "question_img":"1J2akFNgMxH2SQ5-5QZguQs6FXSaRN7CH",
        "hint_img":"",
        "answer_img":"1Ky0lrD3HVDu8iAVUKZSnhdG_oowovqIC",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2b",
        "question_ID":58,
      },
      {
        "question_img":"1yrFReMyBgX2MZlYmKnOPC9qlDwHpByl0",
        "hint_img":"",
        "answer_img":"12S3SylM_22yvNO7_F4LgkihHoaQQdR2B",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2c",
        "question_ID":59,
      },
      {
        "question_img":"1dHaW0MrmDOPUNAz-rxHfCC02LAewtwwB",
        "hint_img":"",
        "answer_img":"1hwa7stiECyQuNjV4ajYNUbv3aIFhhrun",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2d",
        "question_ID":60,
      },
      {
        "question_img":"1jyQ86KLQ3sW-Od0iXrjYIk50QOMyeqxf",
        "hint_img":"",
        "answer_img":"1oz2Tmt6f7M36EKgV6jCRdUKH6OIqTSYJ",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2e",
        "question_ID":61,
      },
      {
        "question_img":"1Xv7NQAJa3n3JcIxHJCRDj_kpeTs5q9ag",
        "hint_img":"",
        "answer_img":"1LwnY3LRW_AEWXwIDn_Kpwlyu747XLbMW",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3a",
        "question_ID":62,
      },
      {
        "question_img":"1pWEQ2Bg0A6nRXSt4AUeqtlAF5KCekq9L",
        "hint_img":"",
        "answer_img":"12PVbvL0N3sJ8wTmVNXdyfCj8vHGzVsde",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3b",
        "question_ID":63,
      },
      {
        "question_img":"1phW-tsT6pdB23UXnVTa9x3SOROa2Q_uq",
        "hint_img":"",
        "answer_img":"1LVprCPn8toAE6cCooSzUhpvvYQxXzokc",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3c",
        "question_ID":64,
      },
      {
        "question_img":"1DL0Z4G0EnC_QZs2FOuqfxMzTi3T6bBf0",
        "hint_img":"",
        "answer_img":"1O9yEQ2TWnVtMWp3UHk05QZGi6ybrBC53",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3d",
        "question_ID":65,
      },






      {
        "question_img":"1fZpFjMFsheIovvHyj75C2s1d6reKvgW9",
        "hint_img":"",
        "answer_img":"1MBaCilXhIBaOxO7l6-S_DISybg7EgAj3",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1a",
        "question_ID":66,
      },
      {
        "question_img":"1LXDY4GW04tDEfDdKMLCXkp75Jb_3vmFJ",
        "hint_img":"",
        "answer_img":"1EQKJDz4CD8Zbq42Dt63LzvgQqlPcPEpc",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1b",
        "question_ID":67,
      },
      {
        "question_img":"1gh68a0EfjlHBiUbH3SB9XKuSWyVou4KD",
        "hint_img":"",
        "answer_img":"15ZxZWB5M4895Xm_AtUms2H8Jmyfr6yH0",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1c",
        "question_ID":68,
      },
      {
        "question_img":"11MFKPGwhxBCI6AOWqeFCiYjzHsXc6r0I",
        "hint_img":"",
        "answer_img":"1JH0H5NmrCb46uvYR23-sYQgopWXfmDuD",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1d",
        "question_ID":69,
      },
      {
        "question_img":"1HKZ8fLwgLxuIN4c43v6FWY2mZnKKA7Gj",
        "hint_img":"",
        "answer_img":"1QjWFuMfF_TIKLL_QrgZHCPKlYmf1mmHG",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1e",
        "question_ID":70,
      },
      {
        "question_img":"1NVWNlBKpHBwG1JBbqhSxG3vMtSPgqow9",
        "hint_img":"",
        "answer_img":"1PfnGII_B8LOlK0OnvzduqtrBryhNFaUy",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2a",
        "question_ID":71,
      },
      {
        "question_img":"1kHb07AHNCGHueHWBN0OQ0L0uys2-Nf58",
        "hint_img":"",
        "answer_img":"1xW0jHtBXxsdhnNfZPXkXzrhCQai4iA3t",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2b",
        "question_ID":72,
      },
      {
        "question_img":"1tTt00UisQ05MCLXxVnCbkhiGiVpA--F6",
        "hint_img":"",
        "answer_img":"16KcyhFEuzXJ2R6P3jJ2usJu4vwf_5MIr",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2c",
        "question_ID":73,
      },
      {
        "question_img":"10HKO_4o1cd3LMDLQi9tbBO03sjbo0uee",
        "hint_img":"",
        "answer_img":"1cE_ZSbUJiJxvPYucsl7LGwUNO3gyfBPO",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2d",
        "question_ID":74,
      },
      {
        "question_img":"1JleDR00IFfZOocSijXAQ_diA0c46uwQF",
        "hint_img":"",
        "answer_img":"1w3-oRkkfD6F_KjEBWopLgkqMHnk1pIEA",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2e",
        "question_ID":75,
      },
      {
        "question_img":"15Zl0VYaKl68PL34_14NmON6ZlHgb4f8K",
        "hint_img":"",
        "answer_img":"14XfnAunL4opYqFgDsVyQaCJhT5yO9CLh",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 3a",
        "question_ID":76,
      },
      {
        "question_img":"1pL9cHcDGHfjOz7DJzuzlFNhiSkceJiBW",
        "hint_img":"",
        "answer_img":"1bGNZGMBbM0GpHr-6_NbMq7MTe8l68G8a",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 3b",
        "question_ID":77,
      },
      {
        "question_img":"19TkymLBsbyktV_RlgpRdIi7viWOyqpo3",
        "hint_img":"",
        "answer_img":"1FzpqVQX_qjYAKyK07SjHVlTTRN39_JtV",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 3c",
        "question_ID":78,
      },
      



      {
        "question_img":"1T5V400hZWOCSYD8zzyyXw_PBkq_E6A4d",
        "hint_img":"",
        "answer_img":"1z1HQiULSPiRc3oD0RYboAY6vFfC_GVGf",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1a",
        "question_ID":79,
      },
      {
        "question_img":"1Gd7Dcwl0ErOqB_53KA3T6Z1aK3nnj1nI",
        "hint_img":"",
        "answer_img":"1gJ-qtRYiUn4HTNubngCmI29773yUfRWM",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1b",
        "question_ID":80,
      },
      {
        "question_img":"1huMhQNG2uTFVlgaXIkJp-IBOGYxX8IS2",
        "hint_img":"",
        "answer_img":"1QfmDy5mIvBhQhxLhtHr_m4qYdkcdyhmd",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1c",
        "question_ID":81,
      },
      {
        "question_img":"1MBuwOL6LZR8vMSwuKxMy7oUdFwEYuQiY",
        "hint_img":"",
        "answer_img":"1GSSUHcdaXBGUzd2cMfGgAl1YYs_ETrWS",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1d",
        "question_ID":82,
      },
      {
        "question_img":"16Bf2RajVQSY81qvRNoBVOFEN7PA7jpct",
        "hint_img":"",
        "answer_img":"1V6dOcFka5mXqTWx32OCafhyoT7WDPlNM",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 2a",
        "question_ID":83,
      },
      {
        "question_img":"1WHc9JGz_4chvDzeq_hpOJmD_3r1eZWj1",
        "hint_img":"",
        "answer_img":"1i5mGA8azk3Davup62qO5X5ro0bhwvfor",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 2b",
        "question_ID":84,
      },
      {
        "question_img":"10IUV6EK8Mg8zrPBI8HPOS1XYSzDKkRUo",
        "hint_img":"",
        "answer_img":"1C9xn68WnA4qn0yDiZ5z57WUFcc88EftY",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 2c",
        "question_ID":85,
      },
      {
        "question_img":"1PbYGT7kVP_mhKjH1xIwgXW9U8vUukxEU",
        "hint_img":"",
        "answer_img":"1l4MET0jlAQDrYsdwcHzLW1hX5A-z9BBP",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3a",
        "question_ID":86,
      },
      {
        "question_img":"1BSqwiJexYueTXOGdZRhO6fjgml-Qh8pL",
        "hint_img":"",
        "answer_img":"1rmV5T_M7ThLj-NUA6QSmINOxP0q0v513",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3b",
        "question_ID":87,
      },
      {
        "question_img":"1R7-X9UBYOuNByQeJE6eNm8DoV8B1vnBI",
        "hint_img":"",
        "answer_img":"1tiCZnyHBx-48O8EoXdJ7Sbc2DFSSQFSv",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3c",
        "question_ID":88,
      },
      {
        "question_img":"17hAb_w-Z6kN3ZO72MrUqB0O_0k6bjwuE",
        "hint_img":"",
        "answer_img":"15QhCMLMr4YPk6M8gvxG21C59TLEow511",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":[""],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3d",
        "question_ID":89,
      },








  ]


  
var questionlist_length = Object.keys(questionlist).length;
console.log(questionlist_length)  


// Question Lists
// Level - Standard 
// Ex. Level 2 Calculus question list
const all_questionlists = {
  // Level 2 Calculus
  "L2_Calculus_2021": [0,1,2,3,4,5,6,7,8,9],
  "L2_Calculus_2020": [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
  "L2_Calculus_2019": [25,26,27,28,29,30,31,32,33,34,35,36,37],
  "L2_Calculus_2018": [38,39,40,41,42,43,44,45,46,47,48,49,50,51],
  "L2_Calculus_2017": [52,53,54,55,56,57,58,59,60,61,62,63,64,65],
  "L2_Calculus_2016": [66,67,68,69,70,71,72,73,74,75,76,77,78],
  
  "L2_Calculus_Achieved": [0,7,10,11,15,17,20,23,25,31,38,43,48,49,52,57,62],
  "L2_Calculus_Merit": [1,3,4,6,8,12,13,16,1,21,22,27,30,33,35,39,40,44,46,50,53,54,58,59,63],
  "L2_Calculus_Excellence": [2,5,9,14,19,24,26,28,29,32,3436,37,41,42,45,47,51,55,56,60,61,64,65],

  "L2_Calculus_Differentiation": [4,3,2,1,0,10,11,12,15,17,19,21,23,24,26,27,28,29,30,32,35,36,37,38,39,41,42,43,44,47,49,50,51,52,54,55,56,57,58,59,60,61,65,66,68,70,71,72,73,74,75,],
  "L2_Calculus_Equation_Of_Tangent": [0,1,12,23,26,29,37,51,53,55,59,60,67,72],
  "L2_Calculus_Integration": [8,7,6,5,13,14,18,20,22,31,33,34,40,45,46,48,62,63,64,69,76,77,78],
  "L2_Calculus_Sketching_Functions": [8,3,15,18,30,33,43,46,57,63,71,77],
  "L2_Calculus_Describing_Graphs": [16,19,28,32,40,41,47,56,58,61,68,70,75],
  "L2_Calculus_Kinematics": [7,5,14,17,34,35,44,45,54,64,78],
  "L2_Calculus_Applications": [2,9,21,24,27,36,39,42,49,50,65,74],


  // Level 2 Algebra
  "L2_Algebra_2021": [79,80,81,82,83,84,85,86,87,88,89],
  "L2_Algebra_2020": [],
  "L2_Algebra_2019": [],
  "L2_Algebra_2018": [],
  "L2_Algebra_2017": [],
  "L2_Algebra_2016": [],

  "L2_Algebra_Achieved": [79,83,86,87],
  "L2_Algebra_Merit": [80,81,84,88],
  "L2_Algebra_Excellence": [82,85,89],






  // Level 1 Algebra (MCAT)

  // Level 1 Tables Equations and Graphs


}

// var all_questions_correct_flag = [0,0,0,0,0,0,0,0,0,0]

// TO DO: store question correct flag in local storage
// let all_questions_correct_flag = new Array(questionlist_length)
// for (var i = 0; i < questionlist.length(); i++) questionlist.length()[i] = 0;


let selected_questionlist = []

window.addEventListener("load", myInit, true); function myInit(){
  initUserData()
  initLoadQuestions()
}

// on page load, initialise local storage if not already initialised from last session
function initUserData(){

  // all questions correct flag initialisation
  let all_questions_correct_flag_temp = new Array(questionlist_length)
  console.log(all_questions_correct_flag_temp);
  // console.log(Object.keys(localStorage.getItem('all_questions_correct_flag')))

  if (localStorage.getItem('all_questions_correct_flag')==null){
    for (var i = 0; i < questionlist_length; i++) all_questions_correct_flag_temp[i] = 0;
    localStorage.setItem('all_questions_correct_flag',JSON.stringify(all_questions_correct_flag_temp));
  }
  // } else if (Object.keys(localStorage.getItem('all_questions_correct_flag')).length!==questionlist_length){
  //   for (var i = 0; i < questionlist_length; i++) all_questions_correct_flag_temp[i] = 0 + JSON.parse(localStorage.getItem('all_questions_correct_flag'))[i];
  //   localStorage.setItem('all_questions_correct_flag',JSON.stringify(all_questions_correct_flag_temp));
  // } 


}

// on question page load, load all questions, navbar, and render question 0
function initLoadQuestions(){
  loadQuestions()
  updateQuestion(0)
}

// Creates question number nav bar with onclick event to update the question for its position in the filtered question list.
function loadQuestions(){
  var selected_questionlist_name = localStorage['selected_questionlist_name'] || 'None';
  selected_questionlist = all_questionlists[selected_questionlist_name] 

  // update navbar heading
  document.getElementById("question_list_title").innerHTML = selected_questionlist_name.replace(new RegExp(/_/g), ' ');

  // update navbar items with html
  question_nav_html = ""
  for (let i = 0; i < selected_questionlist.length; i++) {
    var question_number_colour = ""
    var question_flags = JSON.parse(localStorage.getItem('all_questions_correct_flag'));

    // If question has not been marked as correct or incorrect, no background
    question_number_colour = "\">"

    // If question has been marked as correct, render it green
    if (question_flags[selected_questionlist[i]]==1){
      question_number_colour = "bg-success\">"
    } 
    // If question has been marked as incorrect, render it red
    else if (question_flags[selected_questionlist[i]]==-1) {
      question_number_colour = "border border-secondary\">"
    }


    // Render the active question
    var selected_question_number = localStorage.getItem('selected_question_number')
    var active_class = ""
    if (selected_question_number == i){
      active_class = "active "
    }

    question_nav_html += "<li class=\"nav-item rounded-circle " + active_class + question_number_colour + "<a class=\"nav-link\" onclick=\"updateQuestion(" + i + ")\" href=\"#\">" + i + "</a></li>";

  }      
  document.getElementById("question_nav").innerHTML = question_nav_html
}


// questionID is the index of a question from a given selected question list. Convert it to the question index in master question list then render it.
function updateQuestion(questionID){
  localStorage.setItem('selected_question_number', questionID);
  let questiondata = questionlist[selected_questionlist[questionID]]
  document.getElementById("question").innerHTML = "<img src=https://drive.google.com/uc?export=view&id=" + questiondata.question_img + " class=\"img-fluid\">"
  document.getElementById("hint").innerHTML = "<img src=https://drive.google.com/uc?export=view&id=" + questiondata.hint_img + " class=\"img-fluid\">"
  document.getElementById("answer").innerHTML = "<img src=https://drive.google.com/uc?export=view&id=" + questiondata.answer_img + " class=\"img-fluid\">"
  document.getElementById("video_solution").innerHTML = "<iframe width=100% height=\"720\"  src=\"https://www.youtube.com/embed/" + questiondata.video_answer_link + "\"></iframe>"
  
  let topicdata = ""
  for (let i = 0; i< questiondata.topics.length; i++){
    topicdata += questiondata.topics[i] + " - "
  }
  document.getElementById("question_details").innerHTML = "<p>Difficulty: " + questiondata.difficulty + "</p><p>Topics: "+ topicdata + "</p><p>Origin: " + questiondata.origin + "</p><p>Question ID: " + questiondata.question_ID + "</p"  
  loadQuestions()

}

// Stores the selected question list in local storage for access by loadQuestions function. 
// This value is selected when the user clicks on a link such as L2 Calculus -> Calculus -> Achieved
// It then loads the question page
function updateQuestionPage(selected_questionlist_name){
  localStorage['selected_questionlist_name'] = selected_questionlist_name; 
  localStorage['selected_question_number'] = 0; 
  window.location="http://127.0.0.1:5500/pastexamquestion.html"
}



// When Incorrect or Correct button is pressed the currently selected question is updated in the navbar 
// to either green for correct or grey border for incorrect
function setCurrentQuestionIncorrect(){
  var selected_questionlist_name = localStorage.getItem('selected_questionlist_name');
  var selected_questionlist = all_questionlists[selected_questionlist_name] 

  var question_flags = JSON.parse(localStorage.getItem('all_questions_correct_flag'));
  var current_question = JSON.parse(localStorage.getItem('selected_question_number'));
  var question_ID = selected_questionlist[current_question];

  question_flags[question_ID]=-1
  localStorage.setItem('all_questions_correct_flag', JSON.stringify(question_flags));
  
  loadQuestions();
  // console.log(JSON.parse(localStorage.getItem('all_questions_correct_flag')))
}

function setCurrentQuestionCorrect(){
  var selected_questionlist_name = localStorage.getItem('selected_questionlist_name');
  var selected_questionlist = all_questionlists[selected_questionlist_name] 

  var question_flags = JSON.parse(localStorage.getItem('all_questions_correct_flag'));
  var current_question = JSON.parse(localStorage.getItem('selected_question_number'));
  var question_ID = selected_questionlist[current_question];

  question_flags[question_ID]=1
  localStorage.setItem('all_questions_correct_flag', JSON.stringify(question_flags));
  
  loadQuestions();
  // console.log(JSON.parse(localStorage.getItem('all_questions_correct_flag')))

}

function setCurrentQuestionNeutral(){
  var selected_questionlist_name = localStorage.getItem('selected_questionlist_name');
  var selected_questionlist = all_questionlists[selected_questionlist_name] 

  var question_flags = JSON.parse(localStorage.getItem('all_questions_correct_flag'));
  var current_question = JSON.parse(localStorage.getItem('selected_question_number'));
  var question_ID = selected_questionlist[current_question];

  question_flags[question_ID]=0
  localStorage.setItem('all_questions_correct_flag', JSON.stringify(question_flags));
  
  loadQuestions();
  // console.log(JSON.parse(localStorage.getItem('all_questions_correct_flag')))
}

function gotoNextQuesion(){
  var selected_questionlist_name = localStorage.getItem('selected_questionlist_name');
  var selected_questionlist = all_questionlists[selected_questionlist_name] 
  var current_question = parseInt(localStorage.getItem('selected_question_number'))
  var next_question = (current_question+1) % selected_questionlist.length
  updateQuestion(next_question)
}

function gotoPrevQuesion(){
  var selected_questionlist_name = localStorage.getItem('selected_questionlist_name');
  var selected_questionlist = all_questionlists[selected_questionlist_name] 
  var current_question = parseInt(localStorage.getItem('selected_question_number'))
  var prev_question = (current_question-1)
  if (prev_question<0){
    updateQuestion(selected_questionlist.length)
  } else {
    updateQuestion(prev_question)
  }
}

function clearLocalStorage(){
  localStorage.clear();
}


