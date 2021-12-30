const KEY = "24105351-e5a7df18b28acbe554309b74d";

export default async function pixabayApi(query, page = 1) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const jsonResponse = await response.json();

    if (!response.ok) throw Error("Something went wrong. Try again ");

    if (!jsonResponse.totalHits)
      throw Error(`Sorry, I can't find "${query}". Please, type again`);

    return jsonResponse;
  } catch (error) {
    return error.message;
  }
}
