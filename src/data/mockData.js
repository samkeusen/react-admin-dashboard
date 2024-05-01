import { tokens } from "../theme";

export const mockDataIAM = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    phoneNumber: "(665)121-5454",
    type: "user",
    policyName: "AdminAccess",
    permissionLevel: "admin",
    associatedResources: ["All Resources"],
    cloudProvider: "AWS",
    lastAccessTime: "2024-02-01",
    mfaEnabled: true,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    phoneNumber: "(421)314-2288",
    type: "user",
    policyName: "ManagerAccess",
    permissionLevel: "manager",
    associatedResources: ["VM Instances", "Storage Buckets"],
    cloudProvider: "Azure",
    lastAccessTime: "2024-01-28",
    mfaEnabled: false,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    phoneNumber: "(422)982-6739",
    type: "user",
    policyName: "ReadOnlyAccess",
    permissionLevel: "user",
    associatedResources: ["Database Instances"],
    cloudProvider: "GCP",
    lastAccessTime: "2024-02-02",
    mfaEnabled: true,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    phoneNumber: "(921)425-6742",
    type: "user",
    policyName: "AdminAccess",
    permissionLevel: "admin",
    associatedResources: ["All Resources"],
    cloudProvider: "AWS",
    lastAccessTime: "2024-01-15",
    mfaEnabled: true,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    phoneNumber: "(421)445-1189",
    type: "user",
    policyName: "UserAccess",
    permissionLevel: "user",
    associatedResources: ["Compute Instances"],
    cloudProvider: "Azure",
    lastAccessTime: "2024-01-20",
    mfaEnabled: false,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    phoneNumber: "(232)545-6483",
    type: "user",
    policyName: "ManagerAccess",
    permissionLevel: "manager",
    associatedResources: ["Network Services", "Storage Services"],
    cloudProvider: "GCP",
    lastAccessTime: "2024-01-30",
    mfaEnabled: true,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    phoneNumber: "(543)124-0123",
    type: "user",
    policyName: "UserAccess",
    permissionLevel: "user",
    associatedResources: ["Serverless Functions"],
    cloudProvider: "AWS",
    lastAccessTime: "2024-02-03",
    mfaEnabled: false,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    phoneNumber: "(222)444-5555",
    type: "user",
    policyName: "ReadOnlyAccess",
    permissionLevel: "user",
    associatedResources: ["Cloud SQL Databases"],
    cloudProvider: "GCP",
    lastAccessTime: "2024-01-25",
    mfaEnabled: true,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    phoneNumber: "(444)555-6239",
    type: "user",
    policyName: "AdminAccess",
    permissionLevel: "admin",
    associatedResources: ["All Resources"],
    cloudProvider: "Azure",
    lastAccessTime: "2024-01-18",
    mfaEnabled: false,
  },  
];

export const mockDataCloudResources = [
  {
    resourceId: "vm-101",
    resourceName: "WebServer-1",
    resourceType: "VM Instance",
    cloudProvider: "AWS",
    region: "us-east-1",
    status: "Running",
    cpuUtilization: "25%",
    memoryUtilization: "60%",
    costEstimate: "$100/month",
    tags: ["production", "web"],
  },
  {
    resourceId: "sb-201",
    resourceName: "DataStorage-1",
    resourceType: "Storage Bucket",
    cloudProvider: "GCP",
    region: "europe-west1",
    status: "Available",
    storageUsed: "150GB",
    costEstimate: "$20/month",
    tags: ["backup", "media"],
  },
  {
    resourceId: "db-301",
    resourceName: "CustomerDB",
    resourceType: "Database Instance",
    cloudProvider: "Azure",
    region: "eastus",
    status: "Running",
    databaseSize: "500GB",
    costEstimate: "$250/month",
    tags: ["customer-data", "sql"],
  },
  {
    resourceId: "vm-102",
    resourceName: "AnalyticsServer",
    resourceType: "VM Instance",
    cloudProvider: "AWS",
    region: "us-west-2",
    status: "Stopped",
    cpuUtilization: "N/A",
    memoryUtilization: "N/A",
    costEstimate: "$0/month",
    tags: ["analytics", "gpu"],
  },
  {
    resourceId: "fn-401",
    resourceName: "ImageProcessingFunction",
    resourceType: "Serverless Function",
    cloudProvider: "GCP",
    region: "asia-northeast1",
    status: "Idle",
    invocationCount: "1000/day",
    costEstimate: "$5/month",
    tags: ["serverless", "image-processing"],
  },
  {
    resourceId: "vm-103",
    resourceName: "DevTest-1",
    resourceType: "VM Instance",
    cloudProvider: "Azure",
    region: "centralus",
    status: "Running",
    cpuUtilization: "10%",
    memoryUtilization: "30%",
    costEstimate: "$50/month",
    tags: ["development", "testing"],
  },
  {
    resourceId: "sb-202",
    resourceName: "LogStorage",
    resourceType: "Storage Bucket",
    cloudProvider: "AWS",
    region: "eu-central-1",
    status: "Available",
    storageUsed: "500GB",
    costEstimate: "$50/month",
    tags: ["logs", "archive"],
  },
  {
    resourceId: "db-302",
    resourceName: "AnalyticsDB",
    resourceType: "Database Instance",
    cloudProvider: "GCP",
    region: "us-central1",
    status: "Running",
    databaseSize: "1TB",
    costEstimate: "$300/month",
    tags: ["analytics", "big-data"],
  },
  {
    resourceId: "fn-402",
    resourceName: "PaymentGatewayFunction",
    resourceType: "Serverless Function",
    cloudProvider: "Azure",
    region: "northcentralus",
    status: "Active",
    invocationCount: "5000/day",
    costEstimate: "$15/month",
    tags: ["serverless", "finance"],
  },
];

export const mockCommitments = [
  {
    txId: "aws123",
    platform: "Amazon Web Services",
    startDate: "2023-09-09",
    endDate: "2024-09-09",
    totalCost: 7200000,
    spentCost: 2676230,
    notes: "AWS Enterprise Agreement for 1 year",
  },
  {
    txId: "azure456",
    platform: "Microsoft Azure",
    startDate: "2023-03-15",
    endDate: "2026-03-15",
    totalCost: 4600000,
    spentCost: 1873760,
    notes: "Azure Enterprise Agreement for 3 years",
  },
  {
    txId: "gcp789",
    platform: "Google Cloud",
    startDate: "2023-02-10",
    endDate: "2024-09-10",
    totalCost: 3600000,
    spentCost: 1473762,
    notes: "Google Enterprise Agreement for 1 year",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "AWS",
    color: tokens("dark").redAccent[200],
    data: [
      { x: "Jan", y: 320000 },
      { x: "Feb", y: 300000 },
      { x: "Mar", y: 340000 },
      { x: "Apr", y: 290000 },
      { x: "May", y: 320000 },
      { x: "Jun", y: 310000 },
      { x: "Jul", y: 340000 },
      { x: "Aug", y: 290000 },
      { x: "Sep", y: 320000 },
      { x: "Oct", y: 310000 },
      { x: "Nov", y: 340000 },
      { x: "Dec", y: 290000 },
    ],
  },
  {
    id: "Google",
    color: tokens("dark").blueAccent[300],
    data: [
      { x: "Jan", y: 140000 },
      { x: "Feb", y: 310000 },
      { x: "Mar", y: 150000 },
      { x: "Apr", y: 140000 },
      { x: "May", y: 150000 },
      { x: "Jun", y: 140000 },
      { x: "Jul", y: 150000 },
      { x: "Aug", y: 140000 },
      { x: "Sep", y: 150000 },
      { x: "Oct", y: 140000 },
      { x: "Nov", y: 150000 },
      { x: "Dec", y: 140000 },
    ],
  },
  {
    id: "Azure",
    color: tokens("dark").greenAccent[500],
    data: [
      { x: "Jan", y: 50000 },
      { x: "Feb", y: 52000 },
      { x: "Mar", y: 54000 },
      { x: "Apr", y: 50000 },
      { x: "May", y: 53000 },
      { x: "Jun", y: 55000 },
      { x: "Jul", y: 52000 },
      { x: "Aug", y: 50000 },
      { x: "Sep", y: 53000 },
      { x: "Oct", y: 55000 },
      { x: "Nov", y: 52000 },
      { x: "Dec", y: 50000 },
    ],
  },
];

export const mockBarData = [
  {
    provider: "Google Cloud",
    Total: 270000,
    color: "hsl(229, 70%, 50%)",
  },
  {
    provider: "AWS",
    Total: 450000,
    color: "hsl(97, 70%, 50%)",
  },
  {
    provider: "Azure",
    Total: 95000,
    color: "hsl(72, 70%, 50%)",
  }
];

// Infastructure location test data

export const mockGeographyData = [
  // AWS Resources
  { id: "aws-1", provider: "AWS", resourceType: "VM", lat: 37.7749, lng: -122.4194, region: "USA" },
  { id: "aws-2", provider: "AWS", resourceType: "Database", lat: 50.1109, lng: 8.6821, region: "Germany" },
  { id: "aws-3", provider: "AWS", resourceType: "Storage", lat: -33.8688, lng: 151.2093, region: "Australia" }, 

  // Azure Resources
  { id: "azure-1", provider: "Azure", resourceType: "VM", lat: 1.3521, lng: 103.8198, region: "Singapore" },
  { id: "azure-2", provider: "Azure", resourceType: "Database", lat: 52.3676, lng: 4.9041, region: "Netherlands" },
  { id: "azure-3", provider: "Azure", resourceType: "Storage", lat: 34.0522, lng: -118.2437, region: "USA" },

  // GCP Resources
  { id: "gcp-1", provider: "GCP", resourceType: "VM", lat: 35.6895, lng: 139.6917, region: "Japan" },
  { id: "gcp-2", provider: "GCP", resourceType: "Database", lat: 55.7558, lng: 37.6173, region: "Russia" },
  { id: "gcp-3", provider: "GCP", resourceType: "Storage", lat: -23.5505, lng: -46.6333, region: "Brazil" },
];