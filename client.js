// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function calculateEmployeeBonuses( employees ) {  
  // your logic here
  return employees.map((employee)=> {
    //all the checks
    let bonusPercentage = 0;

    if (employee.reviewRating <= 2) {
      bonusPercentage = 0
    } else if (employee.reviewRating === 3) {
      bonusPercentage = .04;
    } else if (employee.reviewRating === 4) {
      bonusPercentage = .06;
    } else if (employee.reviewRating === 5) {
      bonusPercentage = .10;
    }

    if (employee.annualSalary > 65000) {
      bonusPercentage -= .01;
    }

    if ( employee.employeeNumber.length === 4) {
      bonusPercentage += .05;
    }

    if (bonusPercentage < 0 ) {
      bonusPercentage = 0
    }

    if (bonusPercentage > .13) {
      bonusPercentage = .13
    }

    const totalBonus = Math.round(Number(employee.annualSalary)*bonusPercentage)
  
    return {name: employee.name, bonusPercentage: bonusPercentage, totalCompensation: Number(employee.annualSalary) + totalBonus, totalBonus: totalBonus}
  })
}

const newEmployeesWithBonus = calculateEmployeeBonuses(employees);


// Function to dynamically populate the table
function populateTable() {
  const tableBody = document.getElementById('tableBody');

  // Loop through the employee data and create table rows
  newEmployeesWithBonus.forEach(employee => {
      const row = document.createElement('tr');

      // Create table cells for each employee property
      const nameCell = document.createElement('td');
      nameCell.textContent = employee.name;

      const bonusCell = document.createElement('td');
      bonusCell.textContent = `$${employee.totalBonus.toLocaleString()}`;

      const compensationCell = document.createElement('td');
      compensationCell.textContent = `$${employee.totalCompensation.toLocaleString()}`;

      // Append cells to the row
      row.appendChild(nameCell);
      row.appendChild(bonusCell);
      row.appendChild(compensationCell);

      // Append row to the table body
      tableBody.appendChild(row);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  populateTable();
});
