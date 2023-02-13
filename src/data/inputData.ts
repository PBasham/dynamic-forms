export const dynamicInputsData: {
    question_id: number | null
    question: string | null
    value_type: string | null
    line_item_description: string | null
    qb_product_sku: string | null
    scale_multiplier: number | null
    question_number: number | null
}[] = [
    {
        question_id: 1,
        question: "How much data are you currently storing in {system}?",
        value_type: "dropdown",
        line_item_description: "For the migration of {amount} GB of data",
        qb_product_sku: "DM - 1",
        scale_multiplier: null,
        question_number: 4,
    },
    {
        question_id: 2,
        question: "Are your files stored in TIF format?",
        value_type: "yes_no_idk",
        line_item_description: "Fee for tif requirement",
        qb_product_sku: "TF - 1",
        scale_multiplier: 0.15,
        question_number: 5,
    },
    {
        question_id: 3,
        question: "What is the name of the system your business is currently using?",
        value_type: "dropdown",
        line_item_description: null,
        qb_product_sku: null,
        scale_multiplier: null,
        question_number: 1,
    },
    {
        question_id: 4,
        question: "Is your data hosted at your office or in the cloud?",
        value_type: "dropdown",
        line_item_description: null,
        qb_product_sku: null,
        scale_multiplier: null,
        question_number: 3,
    },
    {
        question_id: 5,
        question: "Do you utilize document meta data in your current system?  ,If so :are you looking to transfer this information to your new , system ? ",
        value_type: "yes_no_idk",
        line_item_description: "Fee for metadata transfer",
        qb_product_sku: "MP - 1",
        scale_multiplier: 0.2,
        question_number: 6,
    },
    {
        question_id: 6,
        question: "Do you utilize document annotations in your current ,system?  If so:are you looking to transfer this information to your new , system ? ",
        value_type: "yes_no_idk",
        line_item_description: "Fee for annotation requirement",
        qb_product_sku: "AT - 1",
        scale_multiplier: 0.1,
        question_number: 7,
    },
    {
        question_id: 7,
        question: "Have you already started scanning into your document system?",
        value_type: "yes_no_idk",
        line_item_description: "Fee for already scanned to EFC",
        qb_product_sku: "NF - 1",
        scale_multiplier: 0.1,
        question_number: 8,
    },
    {
        question_id: 8,
        question: "Will users continue scanning documents into {system} during ,the extraction/migration process?",
        value_type: "yes_no_idk",
        line_item_description: "Fee for scanning to EFC while migration occurs",
        qb_product_sku: "GF - 1",
        scale_multiplier: 0.2,
        question_number: 9,
    },
    {
        question_id: 9,
        question: "Are you looking to clean up your current data in {system} ,before or after extracting and/or migrating it?",
        value_type: "yes_no_idk",
        line_item_description: "Fee for data scrubbing",
        qb_product_sku: "DS - 1",
        scale_multiplier: 0.25,
        question_number: 10,
    },
    {
        question_id: 10,
        question: "Have you chosen a new system to transfer to?",
        value_type: "yes_no_idk",
        line_item_description: null,
        qb_product_sku: null,
        scale_multiplier: null,
        question_number: 2,
    },
]

// dd_id,question_id,label,value

export const dropdownData: {dd_id: number, question_id: number, label: string, value: string}[] = [

    {
        dd_id: 1,
        question_id: 3,
        label: "Alchemy",
        value: "Alchemy"
    },
    {
        dd_id: 2,
        question_id: 3,
        label: "Alfresco",
        value: "Alfresco"
    },
    {
        dd_id: 3,
        question_id: 3,
        label: "ApplicationExtender",
        value: "ApplicationExtender"
    },
    {
        dd_id: 4,
        question_id: 3,
        label: "DocStar",
        value: "DocStar"
    },
    {
        dd_id: 5,
        question_id: 3,
        label: "DocStar Eclipse",
        value: "DocStar Eclipse"
    },
    {
        dd_id: 6,
        question_id: 3,
        label: "DocuWare",
        value: "DocuWare"
    },
    {
        dd_id: 7,
        question_id: 3,
        label: "ImageWare",
        value: "ImageWare"
    },
    {
        dd_id: 8,
        question_id: 3,
        label: "InfoRouter",
        value: "InfoRouter"
    },
    {
        dd_id: 9,
        question_id: 3,
        label: "Intact",
        value: "Intact"
    },
    {
        dd_id: 10,
        question_id: 3,
        label: "LaserFiche",
        value: "LaserFiche"
    },
    {
        dd_id: 11,
        question_id: 3,
        label: "Paperless",
        value: "Paperless"
    },
    {
        dd_id: 12,
        question_id: 3,
        label: "PaperSave",
        value: "PaperSave"
    },
    {
        dd_id: 13,
        question_id: 3,
        label: "Sharepoint",
        value: "Sharepoint"
    },
    {
        dd_id: 14,
        question_id: 3,
        label: "Treeno",
        value: "Treeno"
    },
    {
        dd_id: 15,
        question_id: 3,
        label: "My system is not listed",
        value: "textInput"
    },
    {
        dd_id: 16,
        question_id: 4,
        label: "In The Office",
        value: "OnPremise"
    },
    {
        dd_id: 17,
        question_id: 4,
        label: "In The Cloud",
        value: "InCloud"
    },
    {
        dd_id: 18,
        question_id: 1,
        label: "0-50 GB",
        value: "50"
    },
    {
        dd_id: 19,
        question_id: 1,
        label: "50-100 GB",
        value: "100"
    },
    {
        dd_id: 20,
        question_id: 1,
        label: "100-250 GB",
        value: "250"
    },
    {
        dd_id: 21,
        question_id: 1,
        label: "250-500 GB",
        value: "500"
    },
    {
        dd_id: 22,
        question_id: 1,
        label: "500-1000 GB",
        value: "1000"
    },
    {
        dd_id: 23,
        question_id: 1,
        label: "1000 or Greater GB",
        value: "1500"
    },
    {
        dd_id: 24,
        question_id: 1,
        label: "I don't know",
        value: "0"
    },

]