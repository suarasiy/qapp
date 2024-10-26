export const dynamic = "force-static";

export const GET = async () => {
  const res = await fetch("https://api.alquran.cloud/v1/surah", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return Response.json(data);
};
