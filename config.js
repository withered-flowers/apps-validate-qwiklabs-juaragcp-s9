// List of quests to complete
// Fetch from https://goo.gle/juaragcp
const LIST_OF_QUESTS = [
  "Automating Infrastructure on Google Cloud with Terraform",
  "Build a Website on Google Cloud",
  "Build and Secure Networks in Google Cloud",
  "Cloud Architecture: Design, Implement, and Manage",
  "Create and Manage AlloyDB Databases",
  "Create and Manage Cloud Resources",
  "Create ML Models with BigQuery ML",
  "Deploy and Manage Cloud Environments with Google Cloud",
  "Deploy to Kubernetes in Google Cloud",
  "Engineer Data in Google Cloud",
  "Ensure Access & Identity in Google Cloud",
  "Exploring Data with Looker",
  "Google Cloud Solutions I: Scaling Your Infrastructure",
  "Google Kubernetes Engine Best Practices: Security",
  "Implement DevOps in Google Cloud",
  "Insights from Data with BigQuery",
  "Measure Site Reliability using Cloud Operations Suite",
  "Optimize Costs for Google Kubernetes Engine",
  "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
  "Perform Foundational Infrastructure Tasks in Google Cloud",
  "Securing your Network with Cloud Armor",
  "Serverless Firebase Development",
  "Set Up and Configure a Cloud Environment in Google Cloud",
];

// Date Range from Start to Finish
// [0] = Start Date
// [1] = Finish Date
// Format in yyyy-mm-dd
const DATE_RANGE = ["2023-05-09", "2023-06-04"];

// Tiers to finish the quest
// e.g.
// [6, 10, 14]
// Tier 1 = 6 Quests to Complete
// Tier 2 = 10 Quests to Complete
// Tier 3 = 14 Quests to Complete
const TIERS = [10, 16];

// DOM Object for holding the Qwiklabs Profile Name
const QWIKLABS_NAME = "h1.ql-headline-1";

// DOM Object for holding the Qwiklabs Quest Name
const QS_QUEST_NAME = "span.ql-subhead-1.l-mts";

// DOM Object for holding the Qwiklabs Quest Date of Completion
const QS_QUEST_DAY_OF_COMPLETION = "span.ql-body-2.l-mbs";

module.exports = {
  LIST_OF_QUESTS,
  DATE_RANGE,
  QWIKLABS_NAME,
  QS_QUEST_NAME,
  QS_QUEST_DAY_OF_COMPLETION,
  TIERS,
};
