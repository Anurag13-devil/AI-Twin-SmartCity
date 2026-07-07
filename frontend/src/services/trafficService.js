const BASE_URL = "http://127.0.0.1:8000";

export async function getDashboardSummary() {
  const response = await fetch(`${BASE_URL}/dashboard`);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return await response.json();
}