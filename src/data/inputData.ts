export const arrFormInputs: {
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
    {
        question_id: 11,
        question: "Are we adding a new question?",
        value_type: "yes_no_idk",
        line_item_description: null,
        qb_product_sku: null,
        scale_multiplier: null,
        question_number: 12,
    },
]