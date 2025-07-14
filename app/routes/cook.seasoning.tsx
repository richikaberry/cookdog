import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs ) => {
  const url = new URL(request.url);
  const cookdog = url.searchParams.get("input[]");
  
  if (!cookdog) {
    return new Response("Cookdog is required", { status: 400 });
  }

  // Here you can process the cookdog data as needed
  // For now, we just return a simple response
  return new Response(`Received cookdog: ${cookdog}`);
}


export default function seasoning() {
 const cookdog = useLoaderData<typeof loader>();
 console.log("Cookdog data:", cookdog);
  return (
    <div>
      <label className="text-[#dc143c] mx-10">seasoning</label>
    </div>
  )
}