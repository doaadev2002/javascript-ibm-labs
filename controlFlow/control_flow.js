// Step 2: If-else statement
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

// Step 3: Nested if-else statement
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

// Step 4: Switch Statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator Access";
        break;
    case "manager":
        userCategory = "Manager Access";
        break;
    case "subscriber":
        userCategory = "Subscriber Content Access";
        break;
    default:
        userCategory = "Unknown User Category";
}
console.log("User Category:", userCategory);

// Step 5: Ternary Operator
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);