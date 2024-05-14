interface User {
  id: number;
  name: string;
}

function myObj2(user: User): string {
  // Assuming the function returns a string representation of the user
  return `User ID: ${user.id}, Name: ${user.name}`;
}

// Example usage:
console.log(myObj2({ id: 23, name: "Riyad" }));
