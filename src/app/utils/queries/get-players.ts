"use server"
const baseUrl = 'https://basketball-head.p.rapidapi.com';

export const fetchPlayerData = async (firstName: string, lastName: string) => {

  const url = `${baseUrl}/players/search`;
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': process.env.API_WEB_KEY as string,
      'x-rapidapi-host': 'basketball-head.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pageSize: 100,
      firstname: firstName,
      lastname: lastName
    })
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    console.log('result--->', result)
      return result;
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
};


