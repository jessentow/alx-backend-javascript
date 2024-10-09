interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: 'Anthony',
  lastName: 'Ntow',
  age: 16,
  location: 'Accra',
};

const student_2: Student = {
  firstName: 'Aleeya',
  lastName: 'Arthur',
  age: 20,
  location: 'Dansoman',
};

const StudentList = [student_1, student_2];

const tbl = document.createElement('table');
const bdy = document.createElement('tbody');

StudentList.forEach((std) => {
  const rw = document.createElement('tr');
  const fname = document.createElement('td');
  const lc = document.createElement('td');
  fname.textContent = std.firstName;
  lc.textContent = std.location;
  rw.appendChild(fname);
  rw.appendChild(lc);
  bdy.appendChild(rw);
});

tbl.appendChild(bdy);
document.body.appendChild(tbl);
