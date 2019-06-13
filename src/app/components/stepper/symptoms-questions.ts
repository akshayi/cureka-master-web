export default {
    'symptoms-Questions': {
        'Questions': [
            {
                name: 'sore-throat-1',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    }
                ],
                id: 1,
                question: 'How long have you been having a sore-throat ?',
                type: 'DropDown',
                options: [
                    ' Start Today',
                    'Day Ago',
                    '2 Day Ago',
                    '3 Day Ago',
                    '4 Day Ago',
                    '5 Day Ago',
                    '6 Day Ago',
                    'A Week Ago',
                    'A Month Ago',
                    'Longer Then Month'
                ]
            },
            {
                name: 'sore-throat-2',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    }
                ],
                id: 2,
                question: 'Do you have a cough?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'sore-throat-3',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    }
                ],
                id: 3,
                question: 'Do you have inflamed tonsils (check by looking in the mirror and sticking you tongue out as far as possible)',
                type: 'Radio',
                value: false,
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'sore-throat-4',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    }
                ],
                id: 4,
                question: 'Do you have inflamed lymph nodes (Push the left and right sight of your throat - answer yes if it hurts)',
                type: 'Radio',
                value: false,
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'sore-throat-5',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    }
                ],
                id: 5,
                question: 'Do you feel feverish?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'sore-throat-6',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    }
                ],
                id: 6,
                question: 'Do you feel pain when you swallow food / saliva? ',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'runny-nose-1',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 7,
                question: 'How long have you been having a runny nose?',
                type: 'DropDown',
                options: [
                    ' Start Today',
                    'Day Ago',
                    '2 Day Ago',
                    '3 Day Ago',
                    '4 Day Ago',
                    '5 Day Ago',
                    '6 Day Ago',
                    'A Week Ago',
                    'A Month Ago',
                    'Longer Then Month'
                ]
            },
            {
                name: 'runny-nose-2',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 8,
                question: 'Do you have any phlegm in your nasal discharge',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ],
                related: 9

            },
            {
                name: 'runny-nose-3',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 9,
                question: 'Do you have yellow phelgm or white phelgm ?',
                type: 'Radio',
                options: [
                    { key: 'yellow', value: false },
                    { key: 'white', value: false },
                    { key: 'Colorless', value: false }
                ],
                dependent: true,
                isDisplay: false,
                dependentID: 8
            },
            {
                name: 'runny-nose-4',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 10,
                question: 'Is your nasal discharge salty to taste?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ],
                related: 11
            },
            {
                name: 'runny-nose-5',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 11,
                question: 'Have you recently sustained a head injury ?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ],
                dependent: true,
                dependentID: 10
            },
            {
                name: 'runny-nose-6',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 12,
                question: 'Have you been exposed to pollen or fine dust recently?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'runny-nose-7',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 13,
                question: 'Does your nose hurt / feel irritated ?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'runny-nose-8',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 14,
                question: 'Is there blood in your nasal discharge?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'runny-nose-9',
                symptoms: [
                    {
                        id: 2,
                        value: 'runny-nose'
                    }
                ],
                id: 15,
                question: 'Does your ear hurt when you blow your nose?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'cough-1',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 16,
                question: 'How long have you been having a cough?',
                type: 'DropDown',
                options: [
                    ' Start Today',
                    'Day Ago',
                    '2 Day Ago',
                    '3 Day Ago',
                    '4 Day Ago',
                    '5 Day Ago',
                    '6 Day Ago',
                    'A Week Ago',
                    'A Month Ago',
                    'Longer Then Month'
                ]
            },
            {
                name: 'cough-2',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 17,
                question: 'How old are you?',
                type: 'DropDown',
                options: [
                    '3-14 Year',
                    '15-44 Year',
                    'Above 45 Year Old'
                ]
            },
            {
                name: 'cough-3',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 18,
                question: 'Is your cough dry? Or do you have a lot of phelgm when you cough?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'cough-4',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 19,
                question: 'Is your throat swollen or painful?',
                type: 'Radio',
                options: [
                    { key: 'yellow', value: false },
                    { key: 'white', value: false }
                ]
            },
            {
                name: 'cough-5',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 20,
                question: 'Do you have a fever?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'cough-6',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 21,
                question: 'Do you have inflamed tonsils ?(check by looking in the mirror and sticking you tongue out as far as possible)',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'cough-7',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 22,
                question: 'Do you have inflamed lymph nodes ? (Push the left and right sight of your throat - answer yes if it hurts) ',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'cough-8',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 23,
                question: 'Does your chest hurt when you cough?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ],
                related: 24
            },
            {
                name: 'cough-9',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 24,
                question: 'How much does it hurt from a scale of light / mild to very?',
                type: 'DropDown',
                options: [
                    'Light',
                    'Mild',
                    'Very PainFull'
                ],
                dependent: true,
                dependentID: 23
            },
            {
                name: 'cough-10',
                symptoms: [
                    {
                        id: 3,
                        value: 'cough'
                    }
                ],
                id: 25,
                question: 'Have you had any unexpected weight loss in the past 3-6 months?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'fever-1',
                symptoms: [
                    {
                        id: 4,
                        value: 'fever'
                    }
                ],
                id: 26,
                question: 'How long have you been feeling feverish ?',
                type: 'DropDown',
                options: [
                    ' Start Today',
                    'Day Ago',
                    '2 Day Ago',
                    '3 Day Ago',
                    '4 Day Ago',
                    '5 Day Ago',
                    '6 Day Ago',
                    'A Week Ago',
                    'A Month Ago',
                    'Longer Then Month'
                ]
            },
            {
                name: 'fever-2',
                symptoms: [
                    {
                        id: 4,
                        value: 'fever'
                    }
                ],
                id: 27,
                question: 'Does the fever occur recurringly, e.g mornings, afternoons or evenings?',
                type: 'Radio',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ],
                related: 28
            },
            {
                name: 'fever-3',
                symptoms: [
                    {
                        id: 4,
                        value: 'fever'
                    }
                ],
                id: 28,
                question: 'What time of the day does your fever return?',
                type: 'DropDown',
                options: [
                    'Morning',
                    'AfterNoon',
                    'Evening',
                    'Nights'
                ],
                dependent: true,
                dependentID: 27
            },
            {
                name: 'fever-4',
                symptoms: [
                    {
                        id: 4,
                        value: 'fever'
                    }
                ],
                id: 29,
                question: 'Do you get cold sweats?',
                type: 'Radio',
                options: [
                    { key: 'yellow', value: false },
                    { key: 'white', value: false }
                ]
            },
            {
                name: 'common-1',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    },
                    {
                        id: 2,
                        value: 'runny-nose'
                    },
                    {
                        id: 3,
                        value: 'cough'
                    },
                    {
                        id: 4,
                        value: 'fever'
                    }
                ],
                id: 30,
                question: 'Are you allergic to any medication?',
                type: 'Free-Text',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            },
            {
                name: 'common-2',
                symptoms: [
                    {
                        id: 1,
                        value: 'sore-throat'
                    },
                    {
                        id: 2,
                        value: 'runny-nose'
                    },
                    {
                        id: 3,
                        value: 'cough'
                    },
                    {
                        id: 4,
                        value: 'fever'
                    }
                ],
                id: 31,
                question: 'Have you already consumed any medication?',
                type: 'Free-Text',
                options: [
                    { key: 'yes', value: false },
                    { key: 'no', value: false }
                ]
            }
        ]
    }
};