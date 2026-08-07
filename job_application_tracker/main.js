/**
 * TODO:
 * 1. Add tracker status -- applied, received call, cleared interviews, received offer
 */

// data source:https://github.com/Kaustubh-Natuskar/moreThanFAANGM/tree/main
const ORG_LIST = [
  "Accenture",
  "Accolite software",
  "Accord software",
  "Adobe",
  "Able",
  "Abstract",
  "Acko",
  "Accredible",
  "Activision Blizzard",
  "Affinidi",
  "Agile Solutions",
  "Agnikul Cosmos",
  "Airbase",
  "Airbnb",
  "Airbus",
  "Airtel x labs",
  "Ajio",
  "Akamai",
  "Alibaba Group",
  "Alstom",
  "Alpha-grep",
  "Alphonso",
  "Amadeus labs",
  "Amagi",
  "AMD",
  "Amazon",
  "Amdocs",
  "American express",
  "Amway",
  "Angelone",
  "Analog Devices",
  "Ansys",
  "Apna",
  "App Dynamics",
  "Appen",
  "Appfolio",
  "Apple",
  "AppInventiv",
  "Applied Materials",
  "Aptiv",
  "AQR",
  "Arcesium",
  "Arista Networks",
  "Aryaka networks",
  "Asteria Aerospace Ltd",
  "ASML",
  "Athena Health",
  "Atlan",
  "Atlassian",
  "Automatic Data Processing",
  "Auzmor",
  "Avail finance",
  "Avalara",
  "Avaya",
  "Axis Bank",
  "Barclays",
  "Bain & Co",
  "BARC India",
  "bankbazaar",
  "Bazaarvoice",
  "BCG",
  "Bellatrix Aerospace",
  "Benchmark",
  "Better",
  "BharatPe",
  "Bidgely",
  "BigBasket",
  "Billdesk",
  "bitdefender",
  "bitly",
  "BlackBuck",
  "Blackrock",
  "blackberry",
  "Blinkit",
  "Block Inc",
  "Bloomberg LP",
  "BlueJeans",
  "blueorigin",
  "Bluestacks",
  "BMC software",
  "BNY Mellon",
  "Boeing",
  "Booking.com",
  "Bosch",
  "Bottemline Technologies",
  "Bounce",
  "Box",
  "Brahmastra Aerospace",
  "Browser stack",
  "Broadcom",
  "BukuWarung",
  "ByteDance",
  "Cadence",
  "Capillary",
  "Capital One",
  "CarDekho",
  "Careem",
  "CarWale",
  "Cashfree",
  "Cimpress",
  "Celigo",
  "Citi Bank",
  "Cerner",
  "Chargebee",
  "Checkout.com",
  "Chronus",
  "Cisco",
  "Citadel",
  "Citadel Securities",
  "Citrix",
  "Classplus",
  "ClearGlass",
  "Cleartrip",
  "Cloudera",
  "cloudflare",
  "Codenation innovation labs",
  "CodeParva Technologies Pvt Ltd",
  "CodingNinjas",
  "Cognizant",
  "CoinBase",
  "CoinDCX",
  "Coinswitch kuber",
  "Commvault",
  "Continental",
  "Contra",
  "Coupang",
  "Cradlepoint",
  "Cred",
  "Credit Suisse",
  "Crestron",
  "Crowdstrike",
  "CSS Corp",
  "cure.fit",
  "Cvent",
  "DailyHunt",
  "Dashlane",
  "Databricks",
  "Dataminr",
  "DBS",
  "D. E. Shaw & Co.",
  "DealShare",
  "Delhivery",
  "Dell",
  "Deutsche Bank",
  "Dhruva Space",
  "Dialpad",
  "Directi",
  "digit",
  "digitalocean",
  "Discord",
  "Discovery inc",
  "Disney",
  "dolby",
  "DoorDash",
  "doximity",
  "DP World",
  "DRDO",
  "Dream11",
  "droom",
  "Dropbox",
  "Druva",
  "Dukaan",
  "Dunzo",
  "duo",
  "DuPont",
  "dynatrace",
  "EA Games",
  "eBay",
  "Enfussion",
  "Envestnet Yoodlee",
  "Epam",
  "Epic Games",
  "Ericsson",
  "Eurofins",
  "Equinix",
  "EXL Healthcare",
  "Expedia",
  "EY",
  "EyeROV",
  "F5",
  "factset",
  "FamPay",
  "Fidelity investments",
  "FireEye inc",
  "Fischer Jordan",
  "fiserv",
  "Flexport",
  "Flipkart",
  "FlyFin",
  "fincover",
  "Fractal",
  "Frappe Technologies",
  "FreeCharge",
  "Freshworks",
  "Furlenco",
  "fyle",
  "Fico",
  "Fujitsu",
  "Gartner",
  "Garuda Aerospace private Ltd",
  "GeeksForGeeks",
  "GE",
  "GE Healthcare",
  "GeekyAnts",
  "Genpact",
  "Ghost",
  "Github",
  "Gitlab",
  "Glass Door",
  "GoDaddy",
  "GoDigit",
  "Godrej Aerospace",
  "Gojek",
  "Goldman Sachs",
  "Google",
  "Go Pro",
  "Global Logic",
  "Grab",
  "Grafana",
  "Gravitont Rading",
  "Groupon",
  "Grofers",
  "Groww",
  "Groq",
  "Hackerearth",
  "HackerRank",
  "Hashedin",
  "Hashnode",
  "HBO",
  "HCL Tech",
  "HDFC Bank",
  "HealthAsyst",
  "Healthify me",
  "HERE",
  "Hexagone",
  "Hotstar",
  "Honeywell",
  "HP",
  "HSBC Bank",
  "Hub Spot",
  "Huggingface",
  "5ire",
  "IAC",
  "IBM",
  "IdeaForge",
  "IHS Markit",
  "Impact Analytics",
  "Indeed",
  "India Mart",
  "Infor",
  "Informatica",
  "Infospoke",
  "Inmobi",
  "Innovaccer",
  "Intel",
  "Intellika",
  "Intuit",
  "IP Infusion",
  "ISRO",
  "iQuanti",
  "Jaguar",
  "Jar",
  "Jio",
  "JM Financial",
  "JP Morgan",
  "Juniper networks",
  "Jupiter money",
  "Juspay",
  "Jumbotail",
  "Kantar",
  "Kesari bharat",
  "Keyence",
  "Keyvalue",
  "Khatabook",
  "khoros",
  "KLA Tencor",
  "Koch",
  "Kotak Mahindra Bank",
  "LambdaTest",
  "Lam Research",
  "Land rover",
  "Lenskart",
  "Lenovo",
  "Leap Finance",
  "Level AI",
  "Licious",
  "Liebherr",
  "LinkedIn",
  "LogicFruit",
  "Logicmonitor",
  "Lowe's companies, inc",
  "Magicpin",
  "MakeMyTrip",
  "Mastercard",
  "Mastery",
  "Mathworks",
  "Maq Software",
  "McKinsey",
  "Media.net",
  "Meta",
  "Meesho",
  "Memory",
  "Micron",
  "Microsoft",
  "MindTickle",
  "MobiKwik",
  "Molbio Diagnostics",
  "Morgan Stanley",
  "Mount talent",
  "MPL",
  "MTX",
  "Multiverse Software",
  "Myntra",
  "Nagarro",
  "NASDAQ",
  "National instruments",
  "NatWest Group",
  "navi",
  "NCR Corporation",
  "NetApp",
  "Netcracker",
  "Netflix",
  "Netmeds",
  "Nike",
  "Ninjacart",
  "Nokia",
  "nurture.farm",
  "Nutanix",
  "Nvidia",
  "Nykaa",
  "Ninjacart",
  "Obvious",
  "Ocrolus",
  "Ola",
  "Olx",
  "OneCard",
  "Oneplus",
  "Oracle",
  "OYO",
  "Observe.ai",
  "Open AI",
  "OpenText",
  "Optum",
  "Optym",
  "Palo Alto Networks",
  "Park+",
  "Paypal",
  "Paytm",
  "PayU",
  "Pazo",
  "PeopleStrong",
  "persistent systems",
  "PharmEasy",
  "Phillips",
  "Phonepe",
  "Playment",
  "Planful",
  "Polygon Technology",
  "postman",
  "Practo",
  "priceline",
  "Principal",
  "Privado.ai",
  "Providence Healthcare",
  "Protegrity",
  "Proximity Labs",
  "Prodapt",
  "Publicis Sapient",
  "PubMatic",
  "Qualcomm",
  "Quantiphi",
  "QuickSell",
  "Quora",
  "Ramp",
  "Razorpay",
  "Red hat",
  "Reelo",
  "Reprise",
  "Rippling",
  "Rivigo",
  "Rocket Companies",
  "Rockstar Games",
  "Rubrik",
  "Roku",
  "Saavan",
  "Sabre corporation",
  "SalaryBox",
  "Salesforce",
  "Samsung",
  "SAP",
  "Schneider Electric",
  "SearchApi",
  "SendinBlue",
  "SerpApi",
  "ServiceNow",
  "Shaadi.com",
  "ShareChat",
  "Shell",
  "Shiprocket",
  "Shipsy",
  "Shopee",
  "Shopify",
  "Siemens",
  "Siemens Healthineers",
  "Sigmoid",
  "SkillVertex",
  "Skyroot Aerospace",
  "Sling Media",
  "Smith Detection",
  "Sony",
  "Spinny",
  "Sprinklr",
  "Squadstack",
  "Stripe",
  "Sureify",
  "Swiggy",
  "Synopsys",
  "Target",
  "TATA Advanced Sysytems Ltd",
  "TATA nexarc",
  "TE Connectivity",
  "TEK Systems",
  "Tekion corp",
  "Tencent",
  "Tesla",
  "TestingBot",
  "Teradata",
  "Texas Instruments",
  "TSMC",
  "ThoughtSpot",
  "ThoughtWorks",
  "Topcoder",
  "Toptal",
  "tower research capital",
  "Treebo Hotels",
  "Turvo",
  "Twilio",
  "Twitter",
  "Uber",
  "Ubisoft",
  "Udaan",
  "Ultimate Kronos Group",
  "unacadamy",
  "Unicommerce",
  "Unisys",
  "Upgrad",
  "Upstox",
  "Upwork",
  "Urban company",
  "Valuefy",
  "Viasat",
  "Vicara",
  "Visa",
  "Vmware",
  "Vogo",
  "Walmart",
  "Warner Bros.",
  "Wells Fargo",
  "Western Digital",
  "Whatfix",
  "Wooqer",
  "worldQuant",
  "Xiaomi",
  "Xicom Technologies",
  "Yahoo",
  "yellow.ai",
  "yugabyte",
  "Yulu Bikes",
  "YeasiTech",
  "Zepto",
  "zerodha",
  "Zeta",
  "ZivaMe",
  "zoho",
  "Zomato",
  "ZoomCar",
  "ZS",
  "1 mg",
  "3i Infotech",
  "4i Apps",
  "314e Corporation",
  "[24]7.ai"
]

const LS_KEY = "simple-job-application-tracker-data";

// initializes html fields, sets default values and binds to function where needed
function initHtmlFields() {

    // initialize datalist for autocomplete
    let datalist = document.getElementById("organisations");
    for(const org of ORG_LIST) {
        let dataItem = document.createElement("option");
        dataItem.setAttribute("value", org);
        datalist.appendChild(dataItem);
    }

    // set default value(today's date) on applied on field
    document.getElementById("application-date").valueAsDate = new Date();

    // listen for form submit events
    document.getElementById("main-form").addEventListener("submit", formSubmitHandler);

    // import-export data
    document.getElementById("import-data").addEventListener("click", importData);
    document.getElementById("export-data").addEventListener("click", exportData);
}

// exports full data 
function exportData(event) {
    let a = document.createElement("a");
    let file = new Blob([JSON.stringify(getApplicationData())], {type: "text/plain"});
    a.href = URL.createObjectURL(file);
    a.download = LS_KEY  + "_" + new Date().getTime() + ".json";
    a.click();
}

// import data
// overides existing data with imported data
function importData(event) {
    let file = event.target.files[0];

    if(!file) return;

    let reader = new FileReader();

    reader.onload = (e) => {
        let data = JSON.parse(e.target.result);
        data.applications = mergeApplicationList(data.applications);
        setApplicationData(data);
    }

    reader.readAsText(file);

    function mergeApplicationList(newApplications) {
        let currentApplications = getApplicationData().applications;

        for(let newApplication of newApplications) {

            // TODO: Use Set to store applications so time complexity of match op can be reduced to O(1);
            if(!currentApplications.some(application => application.jobId === newApplication.jobId)) {
                console.log("adding new ");
                console.log(newApplication);
                currentApplications.push(newApplication);
            }
        }

        return currentApplications;
    }
}

function formSubmitHandler(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let orgName = formData.get("org-name");
    let isReferral = formData.get("is-referral");
    let applicationDate = formData.get("application-date");
    let jobId = formData.get("job-id");
    let jobDescription = formData.get("job-description");

    let data = {
        orgName: JSON.stringify(orgName).slice(1, -1),
        isReferral: isReferral,
        applicationDate: applicationDate,
        jobId: JSON.stringify(jobId).slice(1, -1),
        jobDescription: JSON.stringify(jobDescription).slice(1, -1)
    };

    saveJobApplication(data);
}

function saveJobApplication(applicationData) {
    let data = getApplicationData();
    data.applications.push(applicationData);
    setApplicationData(data);
}

function getApplicationData() {
    let data = localStorage.getItem(LS_KEY);
    if(data != null) {
        return JSON.parse(data);
    }

    return { applications: [] };
}

function setApplicationData(data) {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function renderStats() {
    let data = getApplicationData();

    let total = data.applications.length;
    let totalReferral = data.applications.filter(i => i.isReferral).length;
    let totalNonReferral = total - totalReferral;
    let lastAppliedJob = data.applications.reduce((prev, current) =>
        prev && prev.applicationDate > current.applicationDate ? prev : current
    );
    let firstAppliedJob = data.applications.reduce((prev, current) => 
        prev && prev.applicationDate < current.applicationDate ? prev : current
    );

    let statsSummary = document.getElementById("stats-summary");

    let totalNode = document.createElement("li");
    totalNode.innerText = "Total : " + total;

    let referralNode = document.createElement("li");
    referralNode.innerText = "Referrals : " + totalReferral;

    let nonReferrallNode = document.createElement("li");
    nonReferrallNode.innerText = "Non Referrals : " + totalNonReferral;

    let lastAppliedNode = document.createElement("li");
    lastAppliedNode.innerText = "Last Applied On : " + lastAppliedJob.applicationDate;

    let firstAppliedNode = document.createElement("li");
    firstAppliedNode.innerText = "Last Applied On : " + firstAppliedJob.applicationDate;

    statsSummary.appendChild(totalNode);
    statsSummary.appendChild(referralNode);
    statsSummary.appendChild(nonReferrallNode);
    statsSummary.appendChild(lastAppliedNode);
    statsSummary.appendChild(firstAppliedNode);
}

window.onload = () => {
    initHtmlFields();
    renderStats();
}