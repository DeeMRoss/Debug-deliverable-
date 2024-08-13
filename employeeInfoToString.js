// These two functions are broken in some way...
// What went wrong? What needs to be fixed?
// How do we know if it's fixed or not?
// Hint: using a console.log may be useful...

export function employeeInfoToString(employee) {
    // Corrected function call
    let full_name = generateFullName(employee.first_name, employee.middle_name, employee.last_name);

    // Added space before "Salary"
    return `${full_name}
Department: ${employee.department} | Salary: ${employee.salary}`;
}

function generateFullName(first_name, middle_name, last_name) {
    // Improved spacing handling
    return `${first_name}${middle_name ? " " + middle_name + " " : " "}${last_name}`;
}

