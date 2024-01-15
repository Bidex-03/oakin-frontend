const API_URL = "https://oakin-backend.onrender.com/api"

// fucntion to get all the CATEGORIES
export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`);

    if (!res.ok) {
      throw Error(`Failed to fetch categories: ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow the error for better debugging
  }
}

// function to get all the PRODUCTS under a CATEGORY
export async function getProductsByCategoryID(categoryId) {
  try {
    const res = await fetch(`${API_URL}/products/category/${categoryId}`);

    if (!res.ok) {
      throw Error(`Failed to fetch products by their ID`);
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching products by their ID:", error);
    throw error; // Rethrow the error for better debugging
  }
}


