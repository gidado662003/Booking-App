export default async function handler(req, res) {
  const { npi } = req.query; // Get NPI from query params

  const url = `https://us-doctors-and-medical-professionals.p.rapidapi.com/search_npi?npi=${npi}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "81983f5d47msha14ead0339e27fcp1cd22bjsnc99f76dac064",
        "X-RapidAPI-Host":
          "us-doctors-and-medical-professionals.p.rapidapi.com",
      },
    });

    const data = await response.json();

    // Log the response data to the console
    console.log("API Response Data:", data);

    // Send data back to the client
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
}
