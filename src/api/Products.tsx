const url = " http://localhost:3000/products";

// ------------------- getAllProducts ---------------
async function getAllProducts() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: { error: unknown }) {
    console.error(error.message);
  }
}

export { getAllProducts };
