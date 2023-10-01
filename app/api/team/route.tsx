const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function GET() {
  await delay(2000);
  return new Response("OK");
}
