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
        "hint_img":"1vqbAb_lZvVYibhZYvrOXzEgsYnaL_ewH",
        "answer_img":"1rXeA7vwug3NVZ6aQRsCd6m9jO_Lc_yZ9",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1a",
        "question_ID":0,
      },
      {
        "question_img":"1k0iwj90gxDyp-sxtRAceFTre0oBUw9nK",
        "hint_img":"132VYzVrEnaz3sfif6ulMb_dwmGKfAaQX",
        "answer_img":"14U0MAR94iXnp93S320IJwSKDnD9U2LUm",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1b",
        "question_ID":1,
      },
      {
        "question_img":"1y5nsWDa7OZhzftkJVG29MMv1W67zoKzc",
        "hint_img":"16SBRl5lFjzQNxVCw0tXC5pd1Jim97zIf",
        "answer_img":"1qbvZtevRVRaTDTa_obN9TyzACwOLmJfP",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 1c",
        "question_ID":2,
      },
      {
        "question_img":"1jMHTde0xAeG9KHetA30JWuHtyJJqflK5",
        "hint_img":"1Z9PX-UxjvKGjht--GCuHDYXrCUMIjykp",
        "answer_img":"1-mGKOC9yvf_lAYSq9-mmJGdMRgBQvMIR",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2a",
        "question_ID":3,
      },
      {
        "question_img":"1w_Ak61_oWGAVE9vgSyriRaSAUol9EzbN",
        "hint_img":"12h2QX-2RWMJMNGHC_2aGti73OOb9_UGZ",
        "answer_img":"1tmhK6Tb3ATwwbpc50VpoapXLauR5ufjJ",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2b",
        "question_ID":4,
      },
      {
        "question_img":"1Wm1aNFUIAWqjwKuss04FHRzKxfIL3-_0",
        "hint_img":"1mOs7VOEZXbVMEFPcVatcdror-728aUpy",
        "answer_img":"1hfX5JU0mbyB4_2klyapBq2ov6Z9Unk1_",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 2c",
        "question_ID":5,
      },
      {
        "question_img":"1qJdg2QNg1UYJPRb64j5r0Ze6PQH30rRj",
        "hint_img":"1NsloD62rF6NvwOiTbDXNczygLowXV4f1",
        "answer_img":"1-PcPAq_ozhap73Gv1q8L3_1RiePbxKDy",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3a",
        "question_ID":6,
      },
      {
        "question_img":"1EBM98Mw95VSrC9X6w3nREjRZjz-ZFoAY",
        "hint_img":"1yVDFyU5vegDbFVdj53XZQ-5sYCbeYAqq",
        "answer_img":"1RHzSJQAQPELMzTITC2_LraysmKSCQu4Q",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3b",
        "question_ID":7,
      },
      {
        "question_img":"1KAhvUAFDWtdyB_tyZ9lO2I6G4u3mDjDE",
        "hint_img":"1ZmurkSi-t9wYEYS8HZyQ3Xl__ho6VLy2",
        "answer_img":"18vsCRNmialZMXBWFF1gMe0QEgwZjKOCl",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3c",
        "question_ID":8,
      },
      {
        "question_img":"1-c4yKJA9oWwmUbTbeUd1EB97Dtsda_bz",
        "hint_img":"14gkGt7SY-XbvJfGGUlaL2ExjKzb6hVqB",
        "answer_img":"1ImMvqUV0BFIFThVJzby9BHAXSMG9xVyq",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2021 - Question 3d",
        "question_ID":9,
      },
      {
        "question_img":"1jBW9eFC0MCztsczkgXKt6EW_qFvrQ-qD",
        "hint_img":"12TEnbfv3_A5yjOakHmqKsT--st6GGCYU",
        "answer_img":"11cyTXEW6rjYSiZZAvuMB-joRZtDaHYHm",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1a",
        "question_ID":10,
      },
      {
        "question_img":"149pThVQUJ-nTZj6xTYMqxAchMMecjGP-",
        "hint_img":"1wspFCW1sjJsSX6cVKh7Bri06Kp8y7sHx",
        "answer_img":"1tbDRcfEAa74OLqPH18Dvg5STNVvLlKN5",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1b",
        "question_ID":11,
      },
      {
        "question_img":"1P2jr_1V8oy7yOqNXqaEHjzBUGYIgdNC_",
        "hint_img":"1_iQokA_-3O867SVFRH0qZontilqjckEr",
        "answer_img":"1m87A3pC1zFydPsSqlC5pNrWVJ_nxmvtl",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1c",
        "question_ID":12,
      },
      {
        "question_img":"1kEr9PU2lG8KAffl5W-k0Lsvb2CksiySm",
        "hint_img":"1SWc0c441NOpdMFI_qmQSeuBOXcFtKdm7",
        "answer_img":"1On9HG8Dbhv-bWKgqTzgaCIUO65tB1ZOF",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1d",
        "question_ID":13,
      },
      {
        "question_img":"1ap6NXFMdxXKqCj2cYQoygyjUPkFY90DU",
        "hint_img":"13qVja0lp-drmVfIE8zF8K6PrSTLq_GjQ",
        "answer_img":"1bxAk-Ps3OB_x7ZhLeRIeRV3-fo8JXUzH",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 1e",
        "question_ID":14,
      },
      {
        "question_img":"1fLLBZDT2swCf9gqJ7bgnqzaTm2UPtddb",
        "hint_img":"1cN5s7waB61bhAas3xvSxZrJCyguBVk4-",
        "answer_img":"1njdS7LzOLPED4jkd--tZ8JuTnf6z68MP",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2a",
        "question_ID":15,
      },
      {
        "question_img":"1bbHTh2XKr47wYKGrb1CqcbnBWNrbV2L5",
        "hint_img":"1zEB7k8i9vClTDO0It35Vf5HUyc7_7GAY",
        "answer_img":"1QHZMwLovtBDSAQ8sYYIBJhfKU9GNd30H",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2b",
        "question_ID":16,
      },
      {
        "question_img":"1QlamQi-UI3CbDeyh7QbM_UivfSPwCl1_",
        "hint_img":"1ya-VuPYGzRuPdIxJ3DW9o4fwLPtqJ2Yh",
        "answer_img":"1Rp3EXco867ncqTImninWpqAfLHq_YKW2",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2c",
        "question_ID":17,
      },
      {
        "question_img":"1Qt1flExwzOjpH8rf4uxKLZIUD8VmI50i",
        "hint_img":"16pyLcg7AtyRU50p--V0Vl0QUG4pfIQ_-",
        "answer_img":"12v4-gLQkDzFiZwjTaH4OFDrtbqlUrLhC",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2d",
        "question_ID":18,
      },
      {
        "question_img":"1CY-8c51K9uYYUam8RCSwAyxi2kg8pg01",
        "hint_img":"12QMn20WCLKlT5cNnKjFiRelXBjHT5AGq",
        "answer_img":"1cTUqvMPXN6c2r2NNHJn_N5Uhfq9nmH9m",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 2e",
        "question_ID":19,
      },
      {
        "question_img":"16ZSWvXsaDd0v83XebjR-5NYEFdIruy9X",
        "hint_img":"1GoMg0KKm7MO0ktV6IGCOu5KdAfFf6oXl",
        "answer_img":"1cXACXk1JNUJ6TAiU0MljsOP2GIpLTJkN",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3a",
        "question_ID":20,
      },
      {
        "question_img":"1BF4jLnM2l0nbLvfGt7rubKyXTL8MZEMl",
        "hint_img":"1BQI_Etd6eHOLcJMvCimqrzWbWC4-ECPC",
        "answer_img":"1mBcQb-FPahYmgRFz3SF4l1BxDgV9l2Tm",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3b",
        "question_ID":21,
      },
      {
        "question_img":"1c36PDIl1wHB_MSbXdp_8XeItHkyhT5G6",
        "hint_img":"1iNO0_HQHZixw3-2S0ME6YkX56i-Dhnl8",
        "answer_img":"1dg28cVKVCWaUHsWpTi2mEJbBYhSwGRr_",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3c",
        "question_ID":22,
      },
      {
        "question_img":"1zVSaL6kUPLe8JXj6POVmSJdy6d-PF46c",
        "hint_img":"1vpoUfGCIap4CZjaSXipMxazSiRKp4ZoP",
        "answer_img":"1u6J-MUwrX4rp-mWlIHCIyjV7lPgfetQ0",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3d",
        "question_ID":23,
      },
      {
        "question_img":"1bLRV5BHhLbL1q6VP3_umUxiUkm9VVbfo",
        "hint_img":"1n5V1YLLsmgJSIeMAiG72t7uv_EuYava0",
        "answer_img":"1dBoycTkWWKhkQdn6dVHl3lDpawy74c_h",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2020 - Question 3e",
        "question_ID":24,
      },





      {
        "question_img":"1HuUZF2RzbFQ1pGaA-LSLgEsqi-Poxhhh",
        "hint_img":"1vW7bAaWDu6HltJCBP9C53ODu7T6enD4b",
        "answer_img":"1nHbeNXGdn7l1yjVg5xQU80GTtBe_yEj7",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1a",
        "question_ID":25,
      },
      {
        "question_img":"1zHxI01LlesW-Yc7jEOejzB8_7yrp_UMr",
        "hint_img":"16w_fFknI4f4zRDNzJibBa4OgvcKqpAQV",
        "answer_img":"1UJzf3smXFdY5vagB1JmEiTUmmnTRKDSL",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1b",
        "question_ID":26,
      },
      {
        "question_img":"1D-n4cBmzWqaY8WdralMA7oEbge2R3UnN",
        "hint_img":"102ElpJSj9--yoVRkjtxbbzLmrIhCmt8A",
        "answer_img":"1M7KF4iPInaeF-dtdNFDY48wlLCtxN6YI",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1c",
        "question_ID":27,
      },
      {
        "question_img":"1OHmu5cs9udhzxX17-QDDsDqjahN3mMIu",
        "hint_img":"1qbQvPTsTerLm2P6AeYapK63Z032J1StR",
        "answer_img":"1QacuUb8lPeY8cnzSL_I_zz5wWPkWbn6X",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1d",
        "question_ID":28,
      },
      {
        "question_img":"1K4x-XRB5Gg3yBxgNsdqtV8CTQanX1Ulw",
        "hint_img":"1ScNRbYqlWlyiNHwwRNoEnm9sFtNh-b1_",
        "answer_img":"1Re_fJPzUz9Lo0i50uKcqZ-IrsUCqcNT_",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 1e",
        "question_ID":29,
      },
      {
        "question_img":"1so-T9FHzEfcd3k7EugPQxt8_fjkfRUem",
        "hint_img":"1nf5bWqDFEtbuKfHyuzsowCDCm5rUy9mY",
        "answer_img":"1cigSXdpOdBarnWOYGgFMy-Rnmp1W958D",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2a",
        "question_ID":30,
      },
      {
        "question_img":"1yfKKjmHtefpSgZuHdxJPjWgDQn5-Djpf",
        "hint_img":"1_j3GzrbuubRYwsODcZJjZEJA_qOt3-AI",
        "answer_img":"1LN35JEnOirBtdFZWoYC5rvXBe5aCSwKM",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2b",
        "question_ID":31,
      },
      {
        "question_img":"1Iut2DpeOMvjURANa6DrrXG43UA6kswx5",
        "hint_img":"1ke4bsMaXgEG4pzcGyvM_447yBBZHfvDn",
        "answer_img":"1lz8RLaIopuy6Iy8hUxIqLjk9Xys2M9g6",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2c",
        "question_ID":32,
      },
      {
        "question_img":"1BOsJ85Hz1paadQ8GLEml4P5k-StMqiPp",
        "hint_img":"1SeFbVIKLUkCGFhNDiJxs1YYEvjEs8Lrw",
        "answer_img":"1VvEkpVwLKDIx8CrqVk5ZnZ_cpROT2E6C",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2d",
        "question_ID":33,
      },
      {
        "question_img":"1tm-BgFlVFdJOFT-V1-sQvGK2enD90oGG",
        "hint_img":"1yf-qZiXX4sqLxUicXWsgTbShBpQO8--8",
        "answer_img":"1A7pQ9lIuPiFMxPXhbKUT0hYCVngj7nOC",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 2e",
        "question_ID":34,
      },
      {
        "question_img":"1W-95Pj81Y04nhA54LC8pxRAyoVbmjUoW",
        "hint_img":"1ZtqFPq8YXKBFkjqk_lYpTc-CoKnjexBq",
        "answer_img":"1UXayXiML0c82aV9l6sRANRK0-uRxn2lr",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 3a",
        "question_ID":35,
      },
      {
        "question_img":"1sFlWUc9hipr-8wPbZ9FXESyH70gmVTty",
        "hint_img":"18vVc4OGr5Z3AwGifUbfb2Fo7I2Mr_u0Y",
        "answer_img":"10gbHyA4QTKLwJd5-f_NvJPvnW-sUaMHn",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 3b",
        "question_ID":36,
      },
      {
        "question_img":"1lMIbph0ILAdlq_fpsXIL3JZkOzMeWutW",
        "hint_img":"16k6yPMC-w99wdhpk7FtItgWSBsILatUX",
        "answer_img":"15-PfOGP_-AJJqxcjNdj8jWjKMKXWTGhZ",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2019 - Question 3c",
        "question_ID":37,
      },







      {
        "question_img":"1f5PicVyNnQp8j0LQUsplAnhtwIw1oBnb",
        "hint_img":"1wEzNG5dPwm17Hou9hQ4gnKjP0ytxehT5",
        "answer_img":"1MqoNS3heF0qejPyD1nPW6RC2jRh_8h7e",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1a",
        "question_ID":38,
      },
      {
        "question_img":"1FJn2xDTl4ceRoa1WgrbdPmWEW7-9O2RZ",
        "hint_img":"1ew-sDob04IYU7wUPTGUC4COdxwreYMgX",
        "answer_img":"1x0-5UrP9zLU6OV8xqwdiFZk9rXG17bvt",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1b",
        "question_ID":39,
      },
      {
        "question_img":"1t_3gGqH5MjiqfXHOhE5Dm121L7WLqBxb",
        "hint_img":"1B4nENCPAx27pDD42D4TejdpWbXvB7Ef8",
        "answer_img":"1qaNfHHbT2THMS-mQ4b_TXUPvikTQUX97",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1c",
        "question_ID":40,
      },
      {
        "question_img":"1RLuO-kRnFMWsKLRM0ALZkpBCfueGlPNd",
        "hint_img":"1C3H0ZONyvBttggdq71-4DFaqxDWh5pHX",
        "answer_img":"1dYs4A5M1RsglUJMB831wltDN9xuwsEib",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1d",
        "question_ID":41,
      },
      {
        "question_img":"17aap0R5jlcbGesg1zo8IGvxSKCeZ8MyW",
        "hint_img":"1D9bA_njBbKq4j1WUkqOVyxyVeUxrD7bi",
        "answer_img":"1NCFBzgamYgV9Cw_CY_oEuA_RDTeWwtV8",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 1e",
        "question_ID":42,
      },
      {
        "question_img":"13tUY2HVtBAh4hWWpcnGlmGXhwXM2VHGc",
        "hint_img":"1b4dk-nOB26ApHm0H7LMaJBOtW8UngCrp",
        "answer_img":"1teFMsy1WTSd1wM9AvSVf_rH0rYwaKgSR",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2a",
        "question_ID":43,
      },
      {
        "question_img":"1sWf16nER1LbIpEp0Rw9fwGq1ejqysQyn",
        "hint_img":"1Aj9omEhzcE6IZ7xWmfvGwzQ0Nta_FVHc",
        "answer_img":"1CZx_fvLcPrGpDCvy0XlmMUAYXhJ3Tk3X",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2b",
        "question_ID":44,
      },
      {
        "question_img":"1216t0UAidQbDlnja8Sl0y2eHQAVqMnb6",
        "hint_img":"1vlkDiOVV1EwOwXLckAY97iKDVki2WMrv",
        "answer_img":"1nA6r9DExnRD5Mrawlli9Fb9hG4ety3Qa",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2c",
        "question_ID":45,
      },
      {
        "question_img":"1RLu3g_I_UIgD_IIS2O3_0nQRv3sMF53n",
        "hint_img":"19wNkNfT7KUtT94-E8Y6w7_01RhJifxE8",
        "answer_img":"1svgF2snF_VHbCGwxfiUbH585d9eAM-DH",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2d",
        "question_ID":46,
      },
      {
        "question_img":"1ZwPkOV5h_er1bc1T6DZlo7FZfxy5yhMQ",
        "hint_img":"19ctekoESzb51962SKUEILQXtdm_qXzq9",
        "answer_img":"1_VS7W9USoKtq3eAfwQeC-OZTE6rgwjzA",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 2e",
        "question_ID":47,
      },
      {
        "question_img":"1v4JypXJhXo7dbDId2_jnpbS8cKK0W6an",
        "hint_img":"16XkDti_k-vqY4uPtlTJe5AiKol97eFOR",
        "answer_img":"19lKRwc69ThWZM1YQpDB145tJ9hPcXCsC",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3a",
        "question_ID":48,
      },
      {
        "question_img":"1OQhrR0ieX4vBWK2i00MsTqVSvVRNLA8T",
        "hint_img":"10wvw8Mg_ZYCPvbUIhJCSkdLWSwzhKLaI",
        "answer_img":"1U9Ne6RJSgUu5eXe24smsG-ty1DTql6pQ",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3b",
        "question_ID":49,
      },
      {
        "question_img":"1xcd_fXqQ0puT7BY13lJwKJ_jZuoXdTH0",
        "hint_img":"1mLa4UNBdenlaULtmBpd_5weR4XrWM2Jo",
        "answer_img":"1Pck1NtW-FswSQcbrz090EdqvmAasax-D",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3c",
        "question_ID":50,
      },
      {
        "question_img":"1T5XOkyGFAZQNui7bNTzVzaUOmBQSe0yp",
        "hint_img":"135ufczwN2duhnEx2SPnI_8y70Uqe8XW9",
        "answer_img":"10rjwjsHDFMpU2xPHRbEB-21eT69nFosf",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2018 - Question 3d",
        "question_ID":51,
      },




      {
        "question_img":"1f8pDvGgXJ-MJU-6S4O8ZJfc_3mpaOQsk",
        "hint_img":"1RX5QIqnjqSHq9HX472k5HXoAdzNxHdzN",
        "answer_img":"1ovZumRvF83OE15-QtLeP6YIKZxNnkeFz",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1a",
        "question_ID":52,
      },
      {
        "question_img":"1-EdwjM1vctQ6TM7w4lBXW4pdrtFZzN6i",
        "hint_img":"1eVaM3--bOyPI6dGTuYxEG7zuTbTVgZYV",
        "answer_img":"1Kgbpwjn1puDlH8CVEYZo1AqOjfPI8qs4",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1b",
        "question_ID":53,
      },
      {
        "question_img":"1lYb2WGYD3ncMwnGaNtIzflAwTy5H4aC1",
        "hint_img":"1fBBlPeJ-6N6QxY04EiMFO8pUVK6EdLK1",
        "answer_img":"1g2PHi221Umnpcp8I_-WwQUsIP7BxyK-L",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1c",
        "question_ID":54,
      },
      {
        "question_img":"1sE-VZYVlxd4h2pI2fvi3_5fkeSMjQl-m",
        "hint_img":"1QhRQOam9QrBs9mfhGy5Cr6jl0eESsrIB",
        "answer_img":"1K066P44CiDRIphFRCOaF9hxAxP9BcRzs",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1d",
        "question_ID":55,
      },
      {
        "question_img":"1jmmLrJfEIPTph9ue_8TLuLIWObFiEXyf",
        "hint_img":"1gh-rMUp5nfVOe2ai3oDRu7nIh3prl-M4",
        "answer_img":"1Rloq4uTvkBFmwVMvUvSO3Se6tMS5wRE7",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 1e",
        "question_ID":56,
      },
      {
        "question_img":"1szG8fbVgi-xZtXCHxOdH1xsotV5_fPeH",
        "hint_img":"1ct4Pyyq8tgpgWWP64oLWMaapTzk8Dh93",
        "answer_img":"1KQGRSl1tNB80khX7wyTC9H0r3xJGQT5M",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2a",
        "question_ID":57,
      },
      {
        "question_img":"1J2akFNgMxH2SQ5-5QZguQs6FXSaRN7CH",
        "hint_img":"1TnnmS33wlRDrCS-Z7LnonXP7Pj6wNT1m",
        "answer_img":"1Ky0lrD3HVDu8iAVUKZSnhdG_oowovqIC",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2b",
        "question_ID":58,
      },
      {
        "question_img":"1yrFReMyBgX2MZlYmKnOPC9qlDwHpByl0",
        "hint_img":"1XWsFnwcYXggznea9BPQypM5yGyos9vFk",
        "answer_img":"12S3SylM_22yvNO7_F4LgkihHoaQQdR2B",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2c",
        "question_ID":59,
      },
      {
        "question_img":"1dHaW0MrmDOPUNAz-rxHfCC02LAewtwwB",
        "hint_img":"13Z8oWRc75hiw-tWFy4jiCWoXpjGXuT8s",
        "answer_img":"1hwa7stiECyQuNjV4ajYNUbv3aIFhhrun",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2d",
        "question_ID":60,
      },
      {
        "question_img":"1jyQ86KLQ3sW-Od0iXrjYIk50QOMyeqxf",
        "hint_img":"1Gpl17riM6jCQ4_nwBEcidbYVmVvxm6vf",
        "answer_img":"1oz2Tmt6f7M36EKgV6jCRdUKH6OIqTSYJ",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 2e",
        "question_ID":61,
      },
      {
        "question_img":"1Xv7NQAJa3n3JcIxHJCRDj_kpeTs5q9ag",
        "hint_img":"1O341aL8F87P_rCovgmoH-515FJyfn1RP",
        "answer_img":"1LwnY3LRW_AEWXwIDn_Kpwlyu747XLbMW",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3a",
        "question_ID":62,
      },
      {
        "question_img":"1pWEQ2Bg0A6nRXSt4AUeqtlAF5KCekq9L",
        "hint_img":"1tyFkfEvjIQ1ulcwgtMXVpSnzoBI6KVtU",
        "answer_img":"12PVbvL0N3sJ8wTmVNXdyfCj8vHGzVsde",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3b",
        "question_ID":63,
      },
      {
        "question_img":"1phW-tsT6pdB23UXnVTa9x3SOROa2Q_uq",
        "hint_img":"1lf5iD_F2DD5Nx5BqJZHtzNOD3Sn9XxWB",
        "answer_img":"1LVprCPn8toAE6cCooSzUhpvvYQxXzokc",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration","kinematics"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3c",
        "question_ID":64,
      },
      {
        "question_img":"1DL0Z4G0EnC_QZs2FOuqfxMzTi3T6bBf0",
        "hint_img":"18PT63o8KmMvPVvGzs_qROMaxdR0BpE3s",
        "answer_img":"1O9yEQ2TWnVtMWp3UHk05QZGi6ybrBC53",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2017 - Question 3d",
        "question_ID":65,
      },






      {
        "question_img":"1fZpFjMFsheIovvHyj75C2s1d6reKvgW9",
        "hint_img":"19Fy0W2s8JFRAOKQFuXs9E14Jc4UlCFRr",
        "answer_img":"1MBaCilXhIBaOxO7l6-S_DISybg7EgAj3",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1a",
        "question_ID":66,
      },
      {
        "question_img":"1LXDY4GW04tDEfDdKMLCXkp75Jb_3vmFJ",
        "hint_img":"1VITcVQkq42dQGK5jO5hfwRK6nc6YeSNr",
        "answer_img":"1EQKJDz4CD8Zbq42Dt63LzvgQqlPcPEpc",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1b",
        "question_ID":67,
      },
      {
        "question_img":"1gh68a0EfjlHBiUbH3SB9XKuSWyVou4KD",
        "hint_img":"10r5wVxflLeELAHMAceFRcci-WSNxG1h7",
        "answer_img":"15ZxZWB5M4895Xm_AtUms2H8Jmyfr6yH0",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation","describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1c",
        "question_ID":68,
      },
      {
        "question_img":"11MFKPGwhxBCI6AOWqeFCiYjzHsXc6r0I",
        "hint_img":"1ZBTdniwZj6y5E3Ww3iB1AsIwqh8DF3k6",
        "answer_img":"1JH0H5NmrCb46uvYR23-sYQgopWXfmDuD",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1d",
        "question_ID":69,
      },
      {
        "question_img":"1HKZ8fLwgLxuIN4c43v6FWY2mZnKKA7Gj",
        "hint_img":"1N_XdHbC6UZW3x_JDXto48TJpFhbu0Reo",
        "answer_img":"1QjWFuMfF_TIKLL_QrgZHCPKlYmf1mmHG",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 1e",
        "question_ID":70,
      },
      {
        "question_img":"1NVWNlBKpHBwG1JBbqhSxG3vMtSPgqow9",
        "hint_img":"1J80lpTYK7jl80CDpj7lQJjQc4t9IAtad",
        "answer_img":"1PfnGII_B8LOlK0OnvzduqtrBryhNFaUy",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["differentiation","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2a",
        "question_ID":71,
      },
      {
        "question_img":"1kHb07AHNCGHueHWBN0OQ0L0uys2-Nf58",
        "hint_img":"1whxNQN12HIo3kOJlZU55QE3oRvf3JEqH",
        "answer_img":"1xW0jHtBXxsdhnNfZPXkXzrhCQai4iA3t",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation", "tangent"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2b",
        "question_ID":72,
      },
      {
        "question_img":"1tTt00UisQ05MCLXxVnCbkhiGiVpA--F6",
        "hint_img":"12dGsihkUYYWaQtalbDTgA3_dmstCGybA",
        "answer_img":"16KcyhFEuzXJ2R6P3jJ2usJu4vwf_5MIr",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["differentiation"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2c",
        "question_ID":73,
      },
      {
        "question_img":"10HKO_4o1cd3LMDLQi9tbBO03sjbo0uee",
        "hint_img":"1fP-WlwZ2cOT-4TLoNH7m3GGVlrXIRRYO",
        "answer_img":"1cE_ZSbUJiJxvPYucsl7LGwUNO3gyfBPO",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation","application"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2d",
        "question_ID":74,
      },
      {
        "question_img":"1JleDR00IFfZOocSijXAQ_diA0c46uwQF",
        "hint_img":"1copt5bZbsiB1KkaMtUWXGyMfzbK9vkYX",
        "answer_img":"1w3-oRkkfD6F_KjEBWopLgkqMHnk1pIEA",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["differentiation", "describing graphs"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 2e",
        "question_ID":75,
      },
      {
        "question_img":"15Zl0VYaKl68PL34_14NmON6ZlHgb4f8K",
        "hint_img":"1LDahVNjM6rk99dtrLoH9zC-U3UstHYa6",
        "answer_img":"14XfnAunL4opYqFgDsVyQaCJhT5yO9CLh",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["integration"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 3a",
        "question_ID":76,
      },
      {
        "question_img":"1pL9cHcDGHfjOz7DJzuzlFNhiSkceJiBW",
        "hint_img":"1HOYI6IMM0bVbd5kH20MN29Ov2v3YMrp8",
        "answer_img":"1bGNZGMBbM0GpHr-6_NbMq7MTe8l68G8a",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["integration","sketch"],
        "origin":"NCEA Past Exam - Level 2 Calculus 2016 - Question 3b",
        "question_ID":77,
      },
      {
        "question_img":"19TkymLBsbyktV_RlgpRdIi7viWOyqpo3",
        "hint_img":"1vLERJvE92otB1Uf4Xfsk2grW6JSK52Ad",
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
        "topics":["powers"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1a",
        "question_ID":79,
      },
      {
        "question_img":"1Gd7Dcwl0ErOqB_53KA3T6Z1aK3nnj1nI",
        "hint_img":"",
        "answer_img":"1gJ-qtRYiUn4HTNubngCmI29773yUfRWM",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1b",
        "question_ID":80,
      },
      {
        "question_img":"1huMhQNG2uTFVlgaXIkJp-IBOGYxX8IS2",
        "hint_img":"",
        "answer_img":"1QfmDy5mIvBhQhxLhtHr_m4qYdkcdyhmd",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["polynomials","discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1c",
        "question_ID":81,
      },
      {
        "question_img":"1MBuwOL6LZR8vMSwuKxMy7oUdFwEYuQiY",
        "hint_img":"",
        "answer_img":"1GSSUHcdaXBGUzd2cMfGgAl1YYs_ETrWS",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomial", "other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 1d",
        "question_ID":82,
      },
      {
        "question_img":"16Bf2RajVQSY81qvRNoBVOFEN7PA7jpct",
        "hint_img":"",
        "answer_img":"1V6dOcFka5mXqTWx32OCafhyoT7WDPlNM",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 2a",
        "question_ID":83,
      },
      {
        "question_img":"1WHc9JGz_4chvDzeq_hpOJmD_3r1eZWj1",
        "hint_img":"",
        "answer_img":"1i5mGA8azk3Davup62qO5X5ro0bhwvfor",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 2b",
        "question_ID":84,
      },
      {
        "question_img":"10IUV6EK8Mg8zrPBI8HPOS1XYSzDKkRUo",
        "hint_img":"",
        "answer_img":"1C9xn68WnA4qn0yDiZ5z57WUFcc88EftY",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["applictaions","logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 2c",
        "question_ID":85,
      },
      {
        "question_img":"1PbYGT7kVP_mhKjH1xIwgXW9U8vUukxEU",
        "hint_img":"",
        "answer_img":"1l4MET0jlAQDrYsdwcHzLW1hX5A-z9BBP",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3a",
        "question_ID":86,
      },
      {
        "question_img":"1BSqwiJexYueTXOGdZRhO6fjgml-Qh8pL",
        "hint_img":"",
        "answer_img":"1rmV5T_M7ThLj-NUA6QSmINOxP0q0v513",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3b",
        "question_ID":87,
      },
      {
        "question_img":"1R7-X9UBYOuNByQeJE6eNm8DoV8B1vnBI",
        "hint_img":"",
        "answer_img":"1tiCZnyHBx-48O8EoXdJ7Sbc2DFSSQFSv",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["applications","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3c",
        "question_ID":88,
      },
      {
        "question_img":"17hAb_w-Z6kN3ZO72MrUqB0O_0k6bjwuE",
        "hint_img":"",
        "answer_img":"15QhCMLMr4YPk6M8gvxG21C59TLEow511",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["applications","discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2021 - Question 3d",
        "question_ID":89,
      },


      {
        "question_img":"1wmUJp4joUucgawScbRCj0qICTKS6OBNT",
        "hint_img":"",
        "answer_img":"1SCsEHmuzfe2gd4RZl6qQWn53ttMiJaZJ",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 1a",
        "question_ID":90,
      },
      {
        "question_img":"1JxKmqfIhJreyWtZYGwP6HUG56yEh0ZPT",
        "hint_img":"",
        "answer_img":"1w9BuJMSEZspYbyf20ZriuShPYKn6F07k",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 1b",
        "question_ID":91,
      },
      {
        "question_img":"1NYmh53PIJWY72aFk5mlXwsduN1nfUUit",
        "hint_img":"",
        "answer_img":"1ofjLQU4MFNIaYXCD76bHjf2CS1ptbs5M",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 1ci-ii",
        "question_ID":92,
      },
      {
        "question_img":"1bHOiHlwsw26yL7ZJf3VJZ_1cD41MdSg8",
        "hint_img":"",
        "answer_img":"1-D82lqTecj6kzjQrFVVP0wrS6PbxzX5i",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 1ciii",
        "question_ID":93,
      },
      {
        "question_img":"1DwsRetkQmMpMfpXMHBay40ipQH5m1L7l",
        "hint_img":"",
        "answer_img":"1vPqfxFMJOk2vd9El9I4DTqM0x2CfCSER",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 2a",
        "question_ID":94,
      },
      {
        "question_img":"1MGOyuGyqUW1jPYJQ_b3Q0-OSfpwLDYJY",
        "hint_img":"",
        "answer_img":"1aP-ks_y3EG7mucdRB7r94Ci4aVPhnLEM",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 2b",
        "question_ID":95,
      },
      {
        "question_img":"1bTsUEfLty0ojsXQFWOytUrk6Ksdu070s",
        "hint_img":"",
        "answer_img":"1lIxY2iopOwlUgpBYOfM-B7NoV23CnF58",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["fractions","polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 2c",
        "question_ID":96,
      },
      {
        "question_img":"1Z2gv2GOrNhKt19xt8rvlbfWO0_UfaAZI",
        "hint_img":"",
        "answer_img":"1r3W-c_Fn45LeiuBFqv5l8_XN0G0YGBoS",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 2d",
        "question_ID":97,
      },
      {
        "question_img":"1xJHfnWx2eje0FrOcI1QXKa3jtSjSa6mr",
        "hint_img":"",
        "answer_img":"109Gc3v4p5iwRDX3TD3rGTt6amlMKuxJ7",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["powers"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 3a",
        "question_ID":98,
      },
      {
        "question_img":"1qIBbYRgM9dXiYmOeeSax6ympzWjJAg29",
        "hint_img":"",
        "answer_img":"1lvCBz9RDblHZsNbl-yPoc08R7OxeyvgJ",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["powers"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 3b",
        "question_ID":99,
      },
      {
        "question_img":"12P6phbdnRbp2wgF5W_PI_L3vXfBrzPAA",
        "hint_img":"",
        "answer_img":"1sVhoq3uEmaAv-m5W0cJ6V8cPR3cScv4g",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2020 - Question 3c",
        "question_ID":100,
      },





      {
        "question_img":"125rFgM9o9TweJr-l1Z2uRK0UP-J4PfUY",
        "hint_img":"",
        "answer_img":"1u_IeBdZWdSvSVzdGR3DBLeH6Iq4EE5um",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials","fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 1a",
        "question_ID":101,
      },
      {
        "question_img":"1zKvoS5PtgQOhJyrJdgB7EHn33764n532",
        "hint_img":"",
        "answer_img":"1QZh_OwDfYHNB9XsGAD2ptTMzqCr3muB-",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 1b",
        "question_ID":102,
      },
      {
        "question_img":"1OgWA9iNKL983tjpM4TYIYSa0OnPTrvBM",
        "hint_img":"",
        "answer_img":"1dgVQKTU30CCtT5a1eWM1vY1u1a8iAKd8",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","discriminant","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 1c",
        "question_ID":103,
      },
      {
        "question_img":"1RVPWoJx8MPvzAIkcb_GQYhhUgTnZa9Y_",
        "hint_img":"",
        "answer_img":"1ixkbON9WBOxyOUkUAIZiytM2X93hsqW-",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 1d",
        "question_ID":104,
      },
      {
        "question_img":"1ZaKbkxQHmtH3stOBpEel8FWpNb4yqohZ",
        "hint_img":"",
        "answer_img":"1uy9T6WXiGhxa7s0SP2AaYqVhWaLKtihp",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 1e",
        "question_ID":105,
      },
      {
        "question_img":"1HMYmsv2rLBcdHJnaHIYVjAhnCvoELUQC",
        "hint_img":"",
        "answer_img":"1R3eF7M8goeWYAb8f5sBvhGOKDxLjWiwf",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["powers"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 2a",
        "question_ID":106,
      },
      {
        "question_img":"1XJpeQwQHrfiY4Yq-A8cIGMJNRFBcHVHV",
        "hint_img":"",
        "answer_img":"18aUekZQZX6wu_LwWCJGGnf1EG5ASXOtD",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 2b",
        "question_ID":107,
      },
      {
        "question_img":"1pq_X7J0yncNhF7cx4zxUbyVz3PAsQ1cb",
        "hint_img":"",
        "answer_img":"1TUTksRhJlQ3UwGLiqo5VlFKkpb3wGNTh",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 2c",
        "question_ID":108,
      },
      {
        "question_img":"1nBgaP_ZTYOSjTirWyiOer2m8yVDxNbP9",
        "hint_img":"",
        "answer_img":"1q8FaUy78I2pzo8pKTx6klysJYLL15BS8",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 2d",
        "question_ID":109,
      },
      {
        "question_img":"1x4hgwvDrBgN69SkyLK1nkcuRohIjXGpu",
        "hint_img":"",
        "answer_img":"18HPXUv3eeOQSNuE2fr6Src88_C_PAEfv",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 2e",
        "question_ID":110,
      },
      {
        "question_img":"1COiBnHMcn-B1Jaf8CHyaA6vGwfZCCaN8",
        "hint_img":"",
        "answer_img":"1tnMsDILcB_cEK14IDrMTax_IfHLdeXsc",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 3a",
        "question_ID":111,
      },
      {
        "question_img":"1mUOE9fXllcQq16v6CggXPg1HcNQEM8su",
        "hint_img":"",
        "answer_img":"1cRV3k1iMj4NRFAL4guygflEY7InbFP4Y",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 3b",
        "question_ID":112,
      },
      {
        "question_img":"1GBsXBqgVEpcReEuqNHhMquxvhVK8jQ9M",
        "hint_img":"",
        "answer_img":"1r-r-v8fbJx_qTdfYJdbgra6DU2iDmsee",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["powers","fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 3c",
        "question_ID":113,
      },
      {
        "question_img":"1zrEp1C8KUFTsWKJbv55zs8t1b47jsB9I",
        "hint_img":"",
        "answer_img":"1YrftWhusUpZOYxYxvs1C98A_abWaI0Vt",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["applications","logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 3d",
        "question_ID":114,
      },
      {
        "question_img":"1JJa7dgO2WSqJv9HdFjeiO6lvYFefGOHh",
        "hint_img":"",
        "answer_img":"1M5OP6M7ixFa4YMrPIsOoG7xwI2CDcZGP",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["applications","polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2019 - Question 3e",
        "question_ID":115,
      },


      {
        "question_img":"1d9iKVsEgbqIq1mKl93bce_-Eh63uFZaO",
        "hint_img":"",
        "answer_img":"1OljtgF-5BWlQDnG3xEM6akhqZg37eXul",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["powers"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 1a",
        "question_ID":116,
      },
      {
        "question_img":"1rogC49XJnZvwkN21aiRAJ_Ohb3Ni7O3E",
        "hint_img":"",
        "answer_img":"1QpR1fcxtbgaQ8il4o6MHjxcfSV-uWGi9",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["powers, fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 1b",
        "question_ID":117,
      },
      {
        "question_img":"1QGZNNRufTnDQ7t-FUomsK-QwtMsMMhSA",
        "hint_img":"",
        "answer_img":"17bozZIOfCu_024e5UL2u2DKXsmjGy5Cd",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 1c",
        "question_ID":118,
      },
      {
        "question_img":"1xIRNx6646vLdbibfIdRhl74qx-9UHLRZ",
        "hint_img":"",
        "answer_img":"1G9ILUM4KtBxwEf4B8MwT7Vq386mKpIXr",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 1d",
        "question_ID":119,
      },
      {
        "question_img":"1SDivAokAu_aKI1RrumltWG87xHvPN_mu",
        "hint_img":"",
        "answer_img":"1R54Z2KR6uU3UcfarWkXF9aooPbmqtDYb",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","application"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 1e",
        "question_ID":120,
      },
      {
        "question_img":"17e1DYSl53b7wCcruFmmQ18KVIua8GlKn",
        "hint_img":"",
        "answer_img":"1IQizoeuXQNgPDsNNVXEk83gBXeMW3IhF",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 1f",
        "question_ID":121,
      },
      {
        "question_img":"1KW7pWvrrJzOS6mltNf5cK1K1GaputGkD",
        "hint_img":"",
        "answer_img":"1VDsv8Judl3oWlaVXLKM-tPTV5FI3KmnP",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 2a",
        "question_ID":122,
      },
      {
        "question_img":"1gF9CWUwtb3jegNpdgL-KJ5eX03cjIG5R",
        "hint_img":"",
        "answer_img":"1eIPsAKLeyxb0x-n16W6bEJTj5Hssh3XC",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 2b",
        "question_ID":123,
      },
      {
        "question_img":"1DFKuKhDhAggl0d1oYhcHBcZAHLRox4gS",
        "hint_img":"",
        "answer_img":"1E0wTtmeIYPpLFWJ1Tuocbhnw_VygXjYk",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["powers","fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 2c",
        "question_ID":124,
      },
      {
        "question_img":"1HBZmeUIT0MVH5Eh3-gt6VhTuxxwTJ-dy",
        "hint_img":"",
        "answer_img":"1l-Fs2wJuOuqus_duBLXGpFjqNTptk06p",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 2d",
        "question_ID":125,
      },
      {
        "question_img":"1o0Xxs4x5MLrgdHYYD0iWKwhYacD_vwCN",
        "hint_img":"",
        "answer_img":"1y_qp4NjySZ8QniwgJni9Xw_mriLgv8z0",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["logarithms","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 2e",
        "question_ID":126,
      },
      {
        "question_img":"1y5ArkxBfEj34SN8DVT-SJAO-wac5-dG1",
        "hint_img":"",
        "answer_img":"1jXQr2Omef8nSzyDyTPqFaqP1nSJ7Oafh",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 3a",
        "question_ID":127,
      },
      {
        "question_img":"1wDWyS91lFa1GMBl8N160rjXnZJdrwPGJ",
        "hint_img":"",
        "answer_img":"1vPfs5wq_XQ56-sliDnuDvIDl1GzAmrtE",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["polynomials","discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 3b",
        "question_ID":128,
      },
      {
        "question_img":"1_DaTjxHssyJ48YieXby2jNWJvkQ46981",
        "hint_img":"",
        "answer_img":"1G5rqtzzRni8ygzwZFXgaoQgfJ2CSHgXT",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 3c",
        "question_ID":129,
      },
      {
        "question_img":"1qyb5XXkVceAy8D2U1iyCu8Ycml27RV9e",
        "hint_img":"",
        "answer_img":"1tFSCtDJDxApuoV1qNQHp6HFTTTMFlBvS",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2018 - Question 3d",
        "question_ID":130,
      },
      


      {
        "question_img":"1VWapsMSLwRwn_SzRaRox4mdB-NVmTFE2",
        "hint_img":"",
        "answer_img":"1pZYp7Dzo-lRa9kvAXVvwmNyxCiIo9D_z",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["powers","fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 1a",
        "question_ID":131,
      },
      {
        "question_img":"1xkPfyxXQv56bvHtR1TDoEeGJTKOogNQg",
        "hint_img":"",
        "answer_img":"1CeX4FLv6imGWm1_u4d_gnCKJ-1bWo4To",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 1b",
        "question_ID":132,
      },
      {
        "question_img":"1Jm6ewT99ffZvaN22CxkjCT4oT90IIL-q",
        "hint_img":"",
        "answer_img":"18pXD6G-Dh3fTE9qR-djYuyxorlOouIV-",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 1c",
        "question_ID":133,
      },
      {
        "question_img":"1R7w1iHJxGOet7_G6rQi6klYq7lKSF8h3",
        "hint_img":"",
        "answer_img":"18-tmRoZmTh7mm-d1oymNMNKIWThjU6TE",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 1d",
        "question_ID":134,
      },
      {
        "question_img":"1nTbYbUUMGzwjCqDTTX0WQmioO_RlvOVU",
        "hint_img":"",
        "answer_img":"1n8DwxWp7LGbs7DAsW_C7Q1I4mjEECJEr",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 2a",
        "question_ID":135,
      },
      {
        "question_img":"1_UiiZkikyO8pbcr7iGmp_sQBSMA5Okl8",
        "hint_img":"",
        "answer_img":"1C3DlKoQL4qvghKgY23SrJ-TBRRFAGBdS",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 2b",
        "question_ID":136,
      },
      {
        "question_img":"1w_jX4HVLZMBjZfUfTuvnOFtDt9Xnw8hc",
        "hint_img":"",
        "answer_img":"1ByIEp1xIptDv95SiMy6SyYN68KOK7A18",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 2c",
        "question_ID":137,
      },
      {
        "question_img":"1cETAO6XV_GSe9dYx6Qizbtyil0jRlgdP",
        "hint_img":"",
        "answer_img":"1K3sXuXB3mahYEZdHiVKaI61bb4pSyt19",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["powers","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 2d",
        "question_ID":138,
      },
      {
        "question_img":"1NPkuoTIc_qiu9MXDO4PDh7PEcC2AVvh9",
        "hint_img":"",
        "answer_img":"1usCTDKmjc7JxB0Ol5IvU6e9h3PO92fvO",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["logarithms","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 2e",
        "question_ID":139,
      },
      {
        "question_img":"1Tk5y1b1JeST0xZ_VyoSgb0yxcnPLvWYF",
        "hint_img":"",
        "answer_img":"1bTUtz6FyGlUT6g2ZDQyBA4w1-p1L7IR5",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 3a",
        "question_ID":140,
      },
      {
        "question_img":"1CR9aEgT-_wIptDJQQ3HzofWZXlbWDiFJ",
        "hint_img":"",
        "answer_img":"1rGhrZ1jIQiYub7JqZWBvIqo8mIS6Ljy_",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 3b",
        "question_ID":141,
      },
      {
        "question_img":"1gtTSfcDWHoRW5prC1MSOh3n5gNwS0kLy",
        "hint_img":"",
        "answer_img":"1Db8g23vCtqn5yXa2kdiKMSzPIXux-bur",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 3c",
        "question_ID":142,
      },
      {
        "question_img":"1aiAWjXv2ci0EY50UfnBLgb7heXQf3Cnd",
        "hint_img":"",
        "answer_img":"1J2LhnFs0Xv6EbDE86WmdhnWQAt8rXRc8",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 3d",
        "question_ID":143,
      },
      {
        "question_img":"1asZ65zqvPPQsyr1VvnFsybSG4Z0Glxr-",
        "hint_img":"",
        "answer_img":"1_KRbK9uwzGq6HLcXJIxJvU5Kly-VXCkO",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["powers","discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2017 - Question 3e",
        "question_ID":144,
      },
      


      {
        "question_img":"165mJWbX0rVCpQvt0fV7ZREz5kTF_AhH5",
        "hint_img":"",
        "answer_img":"1Z5y_LGdo6XNOOVPzkyeFqW9sFu6q_c1r",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["powers","fractions"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 1a",
        "question_ID":145,
      },
      {
        "question_img":"1MW8orNVSgQR-jxXHal23cY3iNzzxBFiq",
        "hint_img":"",
        "answer_img":"1rjhnkw441JSaNHvrznFODPaPacmp1hlW",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 1b",
        "question_ID":146,
      },
      {
        "question_img":"15Xq_XUzKDgk0NvSW7fYxZwJRakfNFstE",
        "hint_img":"",
        "answer_img":"1AIslxDYmi8skxiRK3yhygVlw0IsV5H1f",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["polynomials","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 1c",
        "question_ID":147,
      },
      {
        "question_img":"1b4R5-mSTnIgSfIQcDhfqtH-_8GNPHgYP",
        "hint_img":"",
        "answer_img":"1zU1QMZoDP-paIkujHRrrrSLaWXFQHLEf",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 1d",
        "question_ID":148,
      },
      {
        "question_img":"1ek_TQci8n9F8SMxKoISAlrQdQO1fObU8",
        "hint_img":"",
        "answer_img":"1gh5objgUyrbjpkaZgtsOY91OX16utxe-",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 1e",
        "question_ID":149,
      },
      {
        "question_img":"1ViH71xa7THNL-rCw35mlyI-I0ik0ech9",
        "hint_img":"",
        "answer_img":"1RL-nfDgu6prsDtb7Op6N8VLTx2hk1vYU",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["discriminant"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 2a",
        "question_ID":150,
      },
      {
        "question_img":"1NQBsjOASTG3Hi1uCgqXRulP71CkA3X8l",
        "hint_img":"",
        "answer_img":"1OAaae4fbdGrVfhUtpn3CBDc3e5muGtrQ",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 2b",
        "question_ID":151,
      },
      {
        "question_img":"1_FBqrYuiQdFUeEV6sTB0VW-NHl8fJBm6",
        "hint_img":"",
        "answer_img":"1z2NgAzdy0Fdw-AQsOTwWuymwdRBr5P2c",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["logarithms","applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 2c",
        "question_ID":152,
      },
      {
        "question_img":"1Ou26grEVYF1kXjGLADTY9DIBqryXZUS-",
        "hint_img":"",
        "answer_img":"1js2PPYE80V00gBSeqXhp4j7GhK5A8n_h",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["logarithms","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 2d",
        "question_ID":153,
      },
      {
        "question_img":"1DeBvmjh7ZxIvQPJ7bol83rBCAhefL-sH",
        "hint_img":"",
        "answer_img":"1O3GBUwteZdZqr070_CZ38VwXTgqp4cho",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 2e",
        "question_ID":154,
      },
      {
        "question_img":"1C2cWCebJW_YJ46vfBHz2iAg4tqrGp6c_",
        "hint_img":"",
        "answer_img":"10x-kleT0_jlOpv_6ZxhFOXJiPSLgIUoE",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["polynomials"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 3a",
        "question_ID":155,
      },
      {
        "question_img":"1HSDCGBcNbSvy5cZyO5K-nBJmDvaPq9RD",
        "hint_img":"",
        "answer_img":"1EO7DyWiuA03WZw-9NmeHzbbQRCYOJCza",
        "video_answer_link":"",
        "difficulty":"Achieved",
        "topics":["logarithms"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 3b",
        "question_ID":156,
      },
      {
        "question_img":"1u4Nb0t02SO69Ke8lMuPF7LLbwhBPdoMW",
        "hint_img":"",
        "answer_img":"1AezE6zPSrI0wpibN50pBkQbRNJ4TWaAQ",
        "video_answer_link":"",
        "difficulty":"Merit",
        "topics":["other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 3c",
        "question_ID":157,
      },
      {
        "question_img":"18pTJnIYE9_QBjp9Wx82H4ATlvC8r81m4",
        "hint_img":"",
        "answer_img":"1z_kKUlrJ1ttd_rjao5HLly63UsveFuLZ",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["powers","other"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 3d",
        "question_ID":158,
      },
      {
        "question_img":"1S4t-MmptqqO29A3D4jZ05lJKC_F8kiP1",
        "hint_img":"",
        "answer_img":"1oQKrCzSmmcGgEGdvMJ-wASX4-5ueMcT2",
        "video_answer_link":"",
        "difficulty":"Excellence",
        "topics":["applications"],
        "origin":"NCEA Past Exam - Level 2 Algebra 2016 - Question 3e",
        "question_ID":159,
      },
      










      

      {
        "question_img":"1ohBisP880twEbtiPexxWioc8JKRZFgkQ",
        "hint_img":"",
        "answer_img":"1p-Uq15dueHPZSvWmja-lsYdabpsHHTjs",
        "video_answer_link":"",
        "difficulty":"Merit, Excellence, Excellence",
        "topics":["motion","pressure"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2016 - Question 1",
        "question_ID":160,
      },
      {
        "question_img":"1ebbgTsnVxyf8XT32jAlQliwosFBRE9G6",
        "hint_img":"",
        "answer_img":"16_Odpri3XpGs1HmkKSosEybobGpONGd7",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Excellence, Excellence",
        "topics":["motion","energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2016 - Question 2",
        "question_ID":161,
      },
      {
        "question_img":"16bH9bWR-IKMvpQ9v8p3xbBhhuID8UB5F",
        "hint_img":"",
        "answer_img":"1qj4WiFuSFQBga1Lwolv_54_ln9mlCRIg",
        "video_answer_link":"",
        "difficulty":"Merit, Achieved, Excellence, Excellence",
        "topics":["motion","energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2016 - Question 3",
        "question_ID":162,
      },

      {
        "question_img":"18ujoGjsiv3OCe8yKIpaZCyeI_otCdofx",
        "hint_img":"",
        "answer_img":"1wh-jTBXbAujL5N9G4es-yTA-2jO2mYbW",
        "video_answer_link":"",
        "difficulty":"Merit, Merit, Excellence, Excellence",
        "topics":["motion","energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2017 - Question 1",
        "question_ID":163,
      },
      {
        "question_img":"1PKbNl5f6gAhYcGXe7c3Wf0Jc23l-xsk5",
        "hint_img":"",
        "answer_img":"1f7bJfR148OadgEz62XMKNjjaGs3BWVWr",
        "video_answer_link":"",
        "difficulty":"Merit, Excellence, Excellence",
        "topics":["pressure"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2017 - Question 2",
        "question_ID":164,
      },
      {
        "question_img":"1QoH22X0C4FhnQctAwcwm2pd9B5RmUPQs",
        "hint_img":"",
        "answer_img":"1czgVRgsHBWloUQMpeNT04-nkheEKJmuR",
        "video_answer_link":"",
        "difficulty":"Merit, Merit, Excellence, Excellence",
        "topics":["motion","energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2017 - Question 3",
        "question_ID":165,
      },


      {
        "question_img":"1XK39niXPiJfMYHRKa_l8GwzT3adww2iA",
        "hint_img":"",
        "answer_img":"1YFjfBrg8vlZLXGrWd8Jo2vz9LUjjt0l8",
        "video_answer_link":"",
        "difficulty":"Merit, Achieved, Merit, Excellence, Excellence",
        "topics":["motion","pressure"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2018 - Question 1",
        "question_ID":166,
      },
      {
        "question_img":"13O8-xPxUnr58StjjmN20-LpHiKwvltjJ",
        "hint_img":"",
        "answer_img":"1Ztds9JRKo2TsX1388lvAxVNUsDVA8nHH",
        "video_answer_link":"",
        "difficulty":"Achieved, Excellence, Excellence",
        "topics":["motion","energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2018 - Question 2",
        "question_ID":167,
      },
      {
        "question_img":"1s9FogxFASHfdNfRo2ndjdv7Mu0h5F1II",
        "hint_img":"",
        "answer_img":"13l5flb7iVqLb89Aj4lVMSFx5rTBabNm7",
        "video_answer_link":"",
        "difficulty":"Excellence, Excellence, Excellence",
        "topics":["pressure","energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2018 - Question 3",
        "question_ID":168,
      },


      {
        "question_img":"1fS8qNZD8lWEOaTazGs2F0-2YC7NRsl7U",
        "hint_img":"",
        "answer_img":"1YGYOgO1lKbO70jXKBiT3P2pQAyhnXbSJ",
        "video_answer_link":"",
        "difficulty":"Achieved, Achieved, Excellence, Excellence",
        "topics":["motion"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2019 - Question 1",
        "question_ID":169,
      },
      {
        "question_img":"1pgR-uQ3bjV8UqerKG5EEwGn5u_56dVIR",
        "hint_img":"",
        "answer_img":"1i6iV9brEnZSo4JqYQR8qbMESvBgMs2xv",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Excellence, Excellence, Merit",
        "topics":["pressure"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2019 - Question 2",
        "question_ID":170,
      },
      {
        "question_img":"1pa-e8efUv4QyJ4wJb96elAYr9lHNocrZ",
        "hint_img":"",
        "answer_img":"158f-JGstEK9FzLbtW56lGLMYZS6-TJ0Y",
        "video_answer_link":"",
        "difficulty":"Merit, Achieved, Excellence, Excellence",
        "topics":["motion","energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2019 - Question 3",
        "question_ID":171,
      },

      {
        "question_img":"1gLzf27tccwyc9z1X7CWq1kNxAOjjPskQ",
        "hint_img":"",
        "answer_img":"1ALG9qvOKCZJ_MBuUhnghbX-NIH_2LJ5K",
        "video_answer_link":"",
        "difficulty":"Achieved, Achieved, Achieved, Excellence, Excellence",
        "topics":["motion"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2020 - Question 1",
        "question_ID":172,
      },
      {
        "question_img":"1cYDlMVnNyHlnX1-t9sMwewHY4A0uxkKp",
        "hint_img":"",
        "answer_img":"147gunpugSoU_n7ibuD7VbFQ7_jWW0ZJE",
        "video_answer_link":"",
        "difficulty":"Excellence, Excellence, Excellence",
        "topics":["energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2020 - Question 2",
        "question_ID":173,
      },
      {
        "question_img":"1hv2uM1RzTG0YNGMpVbmAV9a9sKrSTzxd",
        "hint_img":"",
        "answer_img":"1Zocs3V_R1B7kZwaKHT0JLqNtdS-iqTCd",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Achieved, Excellence, Excellence",
        "topics":["pressure"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2020 - Question 3",
        "question_ID":174,
      },

      {
        "question_img":"1OhLCSIYwCwXeHmGLJfhPBnS39xUzhel_",
        "hint_img":"",
        "answer_img":"1Xfi58ZOE7vJrMFDlwwGvA4dgpKcNtfU6",
        "video_answer_link":"",
        "difficulty":"Achieved, Achieved, Excellence, Excellence, Excellence",
        "topics":["motion","pressure"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2021 - Question 1",
        "question_ID":175,
      },
      {
        "question_img":"10KxKxe14mzvcX0M3Z-l1n2oinMYwTK_1",
        "hint_img":"",
        "answer_img":"1q2hhpO6gseXYmJsWt2-aqOVqU1q3wdDr",
        "video_answer_link":"",
        "difficulty":"Merit, Excellence, Excellence",
        "topics":["energy"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2021 - Question 2",
        "question_ID":176,
      },
      {
        "question_img":"1KO9o8rPuutLzkBelEEZq8hMbNJoMElLh",
        "hint_img":"",
        "answer_img":"1VyUuPSNXqd9YhVVhAzasyTWYUzr89dRj",
        "video_answer_link":"",
        "difficulty":"Achieved, Excellence, Excellence",
        "topics":["motion"],
        "origin":"NCEA Past Exam - Level 1 Mechanics 2021 - Question 3",
        "question_ID":177,
      },




      {
        "question_img":"1Qj12LJDGhOApOnF6JOwmpa1OeJQCzwd7",
        "hint_img":"",
        "answer_img":"1C5guc1Z9rIt9oKwbhEuCYoLtaTMzPIQY",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Excellence, Merit",
        "topics":["electrostatics"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2016 - Question 1",
        "question_ID":178,
      },
      {
        "question_img":"1ZjmwZlK_iFJtOKfN5_Cx0D9ZFx1vclB9",
        "hint_img":"",
        "answer_img":"1b79aBFcT5aJdjLulU2JGP336WVkhx0Sh",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["DC Circuits"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2016 - Question 2",
        "question_ID":179,
      },
      {
        "question_img":"17A5FRPC2QmjCA2OCFSjEmAZmkvHgWrPd",
        "hint_img":"",
        "answer_img":"1HJgGO1lY6h1-rS27-lFVB13H2U7oi8jo",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["electromagnetism"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2016 - Question 3",
        "question_ID":180,
      },
      {
        "question_img":"1M_96H4-lHypPA_Rga7KQB-iVDzYqHs-M",
        "hint_img":"",
        "answer_img":"1Uo_AfYlEPdhUfxQKJjViADMF6C-OU5Yy",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["electrostatics"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2017 - Question 1",
        "question_ID":181,
      },
      {
        "question_img":"1nopeQPXFinkENowLxHjswR3MLEeWRyD0",
        "hint_img":"",
        "answer_img":"1OyHcMQw0dl0ZHvWg8VANkHTmiBqn3vGV",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["DC Circuits"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2017 - Question 2",
        "question_ID":182,
      },
      {
        "question_img":"1_20f7sHt4SPeayt7jZfizk05lcUMGZ4M",
        "hint_img":"",
        "answer_img":"1xJUb3n1Hgx19zrw1WzsWBrTzyBHkXzjq",
        "video_answer_link":"",
        "difficulty":"Merit, Achieved, Excellence, Excellence",
        "topics":["electromagnetism"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2017 - Question 3",
        "question_ID":183,
      },
      {
        "question_img":"1Tes8AkjBwzbFAYOBVwbLp-2lbP637PJX",
        "hint_img":"",
        "answer_img":"1QBxFguIds5rgEcAnwIkG_tcpLVubTGNG",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Excellence, Excellence",
        "topics":["electrostatics"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2018 - Question 1",
        "question_ID":184,
      },
      {
        "question_img":"1fG6RKRSldO5eZj61WuA6gbO5UCLkCJB-",
        "hint_img":"",
        "answer_img":"1_vloJ3HRp4jb-pnjzpUdu6iMOQ4gzRxY",
        "video_answer_link":"",
        "difficulty":"Achieved, Achieved, Merit, Excellence",
        "topics":["DC Circuits"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2018 - Question 2",
        "question_ID":185,
      },
      {
        "question_img":"1tSKEWb450QhPOimmJ1GPjfhv0XUnphS1",
        "hint_img":"",
        "answer_img":"1JehS876Pcg1fcoYiCvB7gteaKImkXm-v",
        "video_answer_link":"",
        "difficulty":"Merit, Merit, Achieved, Excellence",
        "topics":["electromagnetism"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2018 - Question 3",
        "question_ID":186,
      },
      {
        "question_img":"1dWirNDvdTurJn9MKCj4EfwGyo43dAJVF",
        "hint_img":"",
        "answer_img":"1kytlBqrxdaiuIR_yIyt6-8PDx78-s6x9",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Excellence, Merit",
        "topics":["electrostatics"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2019 - Question 1",
        "question_ID":187,
      },
      {
        "question_img":"1mRwdyX24S2fS4IdkOxmNzsZEmF9uBiyX",
        "hint_img":"",
        "answer_img":"1gP1GTtQ2nvT56GuCkdb87UjotjPGbyv0",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["DC Circuits"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2019 - Question 2",
        "question_ID":188,
      },
      {
        "question_img":"1btClUqnmBZeWWDCYfXJ1OMZXS0oTIRLJ",
        "hint_img":"",
        "answer_img":"10hVQnh5kj5UdwP2joJP9BY4VKcQGBX6D",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["electromagnetism"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2019 - Question 3",
        "question_ID":189,
      },
      {
        "question_img":"1Qvp9MsljdyPvweNT3PK_muYUVx7g2tos",
        "hint_img":"",
        "answer_img":"12uz1U7i1DPBBWW0AUwguI6IpCdf1EDAr",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["electrostatics"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2020 - Question 1",
        "question_ID":190,
      },
      {
        "question_img":"1Q-T7s4E5xPsBLFVQZKrajA95FPyugt74",
        "hint_img":"",
        "answer_img":"1e6-iN_w2pYyimYmu6JwoyO51zDGwOg0K",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Excellence, Merit",
        "topics":["DC Circuits"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2020 - Question 2",
        "question_ID":191,
      },
      {
        "question_img":"1Pr0YZahCWH8_Huo_kV7v7-FKNViwd6zT",
        "hint_img":"",
        "answer_img":"1kbcXKiIGrNWuQp-xa0X-QpfII_7BnjoB",
        "video_answer_link":"",
        "difficulty":"Achieved, Excellence, Merit, Excellence",
        "topics":["electromagnetism"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2020 - Question 3",
        "question_ID":192,
      },
      {
        "question_img":"1W-cPAiMVp9yLN-nemNoExdGEIRuhPheS",
        "hint_img":"",
        "answer_img":"1wxRWti4Hmhl-wtIigJp9oIDb0G0f7ucG",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["electrostatics"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2021 - Question 1",
        "question_ID":193,
      },
      {
        "question_img":"1_mA03XOYzl-7KSCNuFQD1imPaISVZ_90",
        "hint_img":"",
        "answer_img":"1tHnKS4BxwkAxnM70wJE8Iyf8yQgeXiJ2",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["DC Circuits"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2021 - Question 2",
        "question_ID":194,
      },
      {
        "question_img":"1drjw1PHWubauj6ZJtJDjPlq3oK5ko5jo",
        "hint_img":"",
        "answer_img":"1xAtj5cqQkaHY6ta6_YgxEqXDxv1jTStk",
        "video_answer_link":"",
        "difficulty":"Achieved, Merit, Merit, Excellence",
        "topics":["electromagnetism"],
        "origin":"NCEA Past Exam - Level 1 Electricity and Magnetism 2021 - Question 3",
        "question_ID":195,
      },




   
  ]


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  






  
  
  
  
  
  
  
  
  

var questionlist_length = Object.keys(questionlist).length;

// Question Lists
// Level - Standard 
// Ex. Level 2 Calculus question list
const all_questionlists = {
  // Level 2 Calculus
  "L2_Calculus_All": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78],
  "L2_Calculus_2021": [0,1,2,3,4,5,6,7,8,9],
  "L2_Calculus_2020": [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
  "L2_Calculus_2019": [25,26,27,28,29,30,31,32,33,34,35,36,37],
  "L2_Calculus_2018": [38,39,40,41,42,43,44,45,46,47,48,49,50,51],
  "L2_Calculus_2017": [52,53,54,55,56,57,58,59,60,61,62,63,64,65],
  "L2_Calculus_2016": [66,67,68,69,70,71,72,73,74,75,76,77,78],
  
  "L2_Calculus_Achieved": [0,7,10,11,15,17,20,23,25,31,38,43,48,49,52,57,62],
  "L2_Calculus_Merit": [1,3,4,6,8,12,13,16,18,21,22,27,30,33,35,39,40,44,46,50,53,54,58,59,63],
  "L2_Calculus_Excellence": [2,5,9,14,19,24,26,28,29,32,3436,37,41,42,45,47,51,55,56,60,61,64,65],

  "L2_Calculus_Differentiation": [4,3,2,1,0,10,11,12,15,17,19,21,23,24,26,27,28,29,30,32,35,36,37,38,39,41,42,43,44,47,49,50,51,52,54,55,56,57,58,59,60,61,65,66,68,70,71,72,73,74,75,],
  "L2_Calculus_Equation_Of_Tangent": [0,1,12,23,26,29,37,51,53,55,59,60,67,72],
  "L2_Calculus_Integration": [8,7,6,5,13,14,18,20,22,31,33,34,40,45,46,48,62,63,64,69,76,77,78],
  "L2_Calculus_Sketching_Functions": [8,3,15,18,30,33,43,46,57,63,71,77],
  "L2_Calculus_Describing_Graphs": [16,19,28,32,40,41,47,56,58,61,68,70,75],
  "L2_Calculus_Kinematics": [7,5,14,17,34,35,44,45,54,64,78],
  "L2_Calculus_Applications": [2,9,21,24,27,36,39,42,49,50,65,74],


  // Level 2 Algebra
  "L2_Algebra_All": [79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159],
  "L2_Algebra_2021": [79,80,81,82,83,84,85,86,87,88,89],
  "L2_Algebra_2020": [90,91,92,93,94,95,96,97,98,99,100],
  "L2_Algebra_2019": [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115],
  "L2_Algebra_2018": [116,117,118,119,120,121,122,123,124,125,126,127,128,129,130],
  "L2_Algebra_2017": [131,132,133,134,135,136,137,138,139,140,141,142,143,144],
  "L2_Algebra_2016": [145,146,147,148,149,150,151,152,153,154,155,156,157,158,159],

  "L2_Algebra_Achieved": [79,83,86,87,90,91,94,101,106,111,112,116,117,119,122,123,127,135,140],
  "L2_Algebra_Merit": [80,81,84,88,96,98,99,102,107,108,118,124,128,129,131,132,136,137,141,143],
  "L2_Algebra_Excellence": [82,85,89,92,93,95,97,100,103,104,105,109,110,113,114,115,120,121,125,126,130,133,134,138,139,142,144],

  "L2_Algebra_Logarithms": [85,94,95,111,112,114,122,123,126,135,136,137,139,151,152,153,156],
  "L2_Algebra_Powers": [79,98,99,106,113,116,117,124,131,138,144,145,158],
  "L2_Algebra_Polynomials": [80,81,82,87,90,91,92,93,96,97,100,101,102,103,104,105,109,110,115,120,125,127,128,129,130,133,134,140,146,147,148,155],
  "L2_Algebra_Discriminant": [81,89,103,105,128,130,141,142,144,149,150],
  "L2_Algebra_Fractions": [83,84,96,101,107,113,117,118,124,131,132,143,145],
  "L2_Algebra_Applications": [85,86,88,89,92,93,97,100,102,109,114,115,120,125,126,133,134,138,152,154,159],
  "L2_Algebra_Other": [82,88,103,104,108,110,119,121,139,147,153,157,158],

  
  

  // Level 1 Algebra (MCAT)



  // Level 1 Tables Equations and Graphs





  // Level 1 Mechanics
  "L1_Mechanics_All":[160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177],
  "L1_Mechanics_2021":[175,176,177],
  "L1_Mechanics_2020":[172,173,174],
  "L1_Mechanics_2019":[169,170,171],
  "L1_Mechanics_2018":[166,167,168],
  "L1_Mechanics_2017":[163,164,165],
  "L1_Mechanics_2016":[160,161,162],

  "L1_Mechanics_Motion":[160,161,162,163,165,166,167,169,171,172,175,177],
  "L1_Mechanics_Pressure":[160,164,166,168,170,174,175],
  "L1_Mechanics_Energy":[161,162,163,165,167,168,171,173,176],

  

  // Level 1 Electricity and Magnetism
  "L1_Electricity_and_Magnetism_All":[178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195],
  "L1_Electricity_and_Magnetism_2021":[193,194,195],
  "L1_Electricity_and_Magnetism_2020":[190,191,192],
  "L1_Electricity_and_Magnetism_2019":[187,188,189],
  "L1_Electricity_and_Magnetism_2018":[184,185,186],
  "L1_Electricity_and_Magnetism_2017":[181,182,183],
  "L1_Electricity_and_Magnetism_2016":[178,179,180],

  "L1_Electricity_and_Magnetism_Electrostatic":[193,190,187,184,181,178],
  "L1_Electricity_and_Magnetism_DC_Circuits":[194,191,188,185,182,179],
  "L1_Electricity_and_Magnetism_Electromagnetism":[195,192,189,186,183,180],



}





// var all_questions_correct_flag = [0,0,0,0,0,0,0,0,0,0]

// TO DO: store question correct flag in local storage
// let all_questions_correct_flag = new Array(questionlist_length)
// for (var i = 0; i < questionlist.length(); i++) questionlist.length()[i] = 0;


let selected_questionlist = []

let questionHTML = {
  "questionHTML": "",
  "hintHTML": "",
  "answerHTML":"",
  "videoHTML":"",
  "detailsHTML":""
}

window.addEventListener("load", myInit, true); function myInit(){
  initUserData()
  initLoadQuestions()
}

// on page load, initialise local storage if not already initialised from last session
function initUserData(){

  // all questions correct flag initialisation
  let all_questions_correct_flag_temp = new Array(questionlist_length)

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

  document.getElementById("question").innerHTML = "<img src=https://drive.google.com/uc?export=view&id=" + questiondata.question_img + " class=\"img-fluid mx-auto d-block\">"
  
  let topicdata = ""
  for (let i = 0; i < questiondata.topics.length; i++){
    topicdata += questiondata.topics[i] 
    if(i < questiondata.topics.length-1){
      topicdata += ", "
    }
  }
  loadQuestions()

  questionHTML["hintHTML"]="<img src=https://drive.google.com/uc?export=view&id=" + questiondata.hint_img + " class=\"img-fluid\">"
  questionHTML["answerHTML"]="<img src=https://drive.google.com/uc?export=view&id=" + questiondata.answer_img + " class=\"img-fluid\">"
  questionHTML["videoHTML"]="<iframe width=100% height=\"720\"  src=\"https://www.youtube.com/embed/" + questiondata.video_answer_link + "\"></iframe>"
  questionHTML["detailsHTML"]= "<p>Difficulty: " + questiondata.difficulty + "</p><p>Topics: "+ topicdata + "</p><p>Origin: " + questiondata.origin + "</p><p>Question ID: " + questiondata.question_ID + "</p>"
  
  showNone()

}

// Stores the selected question list in local storage for access by loadQuestions function. 
// This value is selected when the user clicks on a link such as L2 Calculus -> Calculus -> Achieved
// It then loads the question page
function updateQuestionPage(selected_questionlist_name){
  localStorage['selected_questionlist_name'] = selected_questionlist_name; 
  localStorage['selected_question_number'] = 0; 
  window.location="/questions.html"
}



function showNone(){
  document.getElementById("display_area").innerHTML=""
}

function showHint(){
  document.getElementById("display_area").innerHTML=questionHTML["hintHTML"]
  document.getElementById("display_area").innerHTML+="<div class=\"d-grid gap-2\"><button type=\"button\" class=\"btn d-block text-center\" onclick=\"showNone()\"><img src=\"/resources/chevron-up.svg\" alt=\"^\"></button></div>"
}

function showAnswer(){
  document.getElementById("display_area").innerHTML=questionHTML["answerHTML"]
  document.getElementById("display_area").innerHTML+="<div class=\"d-grid gap-2\"><button type=\"button\" class=\"btn d-block text-center\" onclick=\"showNone()\"><img src=\"/resources/chevron-up.svg\" alt=\"^\"></button></div>"
}

function showVideo(){
  document.getElementById("display_area").innerHTML=questionHTML["videoHTML"]
  document.getElementById("display_area").innerHTML+="<div class=\"d-grid gap-2\"><button type=\"button\" class=\"btn d-block text-center\" onclick=\"showNone()\"><img src=\"/resources/chevron-up.svg\" alt=\"^\"></button></div>"
}

function showDetails(){
  document.getElementById("display_area").innerHTML=questionHTML["detailsHTML"]
  document.getElementById("display_area").innerHTML+="<div class=\"d-grid gap-2\"><button type=\"button\" class=\"btn d-block text-center\" onclick=\"showNone()\"><img src=\"/resources/chevron-up.svg\" alt=\"^\"></button></div>"
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


