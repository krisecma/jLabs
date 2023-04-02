import { NetworkError } from "./errors";

export async function get(baseUrl, path) {
  const resource = baseUrl.concat(path);

  try {
    const respnse = await fetch(resource);

    if (!respnse.ok) {
      throw new NetworkError(respnse.statusText);
    }

    return await respnse.json();
  } catch (error) {
    console.log(error);
    if (error instanceof SyntaxError) {
      alert(
        `It seems that the resource: ${resource} did response with malformed json format.`
      );
    }
    if (error instanceof NetworkError) {
      alert(error.name);
    }
  }
}
