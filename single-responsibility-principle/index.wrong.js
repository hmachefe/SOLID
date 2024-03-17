// violates SRP, because the class has extra responsibility.

class Employee {

    // own Resonsibility
    CalculateSalary() {
        return 10000;
    }

    // own Resonsibility
    GetDepartment() {
        return "IT";
    }

    // Extra Resonsibility
    Save() {
        // Save Employee to the database
    }
    
}
