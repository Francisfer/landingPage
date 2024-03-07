async function fetchData(url) {
  try {
    const response = await fetch(url); // Asynchronously fetch data from the URL
    if (!response.ok) {
      throw new Error("Network response was not ok"); // Throw an error if the response is not successful
    }
    const data = await response.json(); // Asynchronously parse the JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors that occur during the fetching process
    throw error; // Re-throw the error to be caught by the caller
  }
}

const abr = 2;
console.log(`Hello, the number that i have create is ${abr}`);

console.log("why the fuck does this works now");
console.log("why the fuck does this works now");
