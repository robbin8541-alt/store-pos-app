window.STORE_BRAND_CONFIG = {
  brandName: "החנות שלי",
  tagline: "מערכת ניהול קופה, עובדים וסניפים",
  logoUrl: "logo.png",
  appIconUrl: "app-icon.jpg",
  primaryColor: "#ea580c",
  accentColor: "#0284c7",
  vatRate: 0.18,
  defaultOpeningFloat: 500,
  defaultMonthlyTarget: 75000,
  defaultCutoffHour: 8,
  multiBranchEnabled: true,
  defaultBranches: [
    { id: "main", name: "סניף ראשי", registers: ["קופה 1"], lat: "", lng: "", radiusMeters: 150 }
  ],
  // מתגי ברירת מחדל — הבעלים יכול להדליק או לכבות כל אחד מהם בלחיצה
  modules: {
    eodClosing: true,
    cashCalculator: true,
    splitPayments: true,
    pettyCash: true,
    attendanceGps: true,
    shiftSchedule: true,
    shiftClaiming: true,
    shiftHandover: true,
    announcements: true,
    shortagesAndFaults: true,
    suppliersAndCatalog: true,
    bankDeposits: true,
    expenses: true,
    payrollCalculator: true,
    accountantExport: true,
    offlineQueue: true
  },
  // מתג ברירת מחדל להצגת סטטיסטיקות בכל הסניפים או סניף ספציפי
  defaultBranchView: "ALL" // "ALL" או מזהה סניף ספציפי
};
scriptUrl: "[https://script.google.com/macros/s/AKfycbyuHKs-w1Vngfw6Vu4V5SqXSJ4oaKqqIRCmpLCfXDE-etrYq3acKHBKKn16ebES2gp6/exec](https://script.google.com/macros/s/AKfycbyuHKs-w1Vngfw6Vu4V5SqXSJ4oaKqqIRCmpLCfXDE-etrYq3acKHBKKn16ebES2gp6/exec)"
