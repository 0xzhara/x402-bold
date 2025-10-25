export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  return new Response(
    JSON.stringify({
      x402Version: 1,
      accepts: [
        {
          version: "1.0",
          scheme: "exact",
          network: "base",
          assetType: "token",
          asset: "USDC",
          // gunakan smallest unit (6 desimal untuk USDC di Base)
          minAmountRequired: "500000", 
          maxAmountRequired: "500000",
          resource: "https://x402-bold.vercel.app/api/resource",
          description: "Resource using USDC payment via x402 protocol.",
          mimeType: "application/json",
          payTo: "0x95843f83F1D9Dd717d8C4Fe8BC94C51acaee1Cac",
          maxTimeoutSeconds: 120,
          outputSchema: {
            input: {
              type: "http",
              method: "POST",
              bodyType: "json",
              bodyFields: {
                amount: {
                  type: "string",
                  required: true,
                  description: "The amount of USDC to send (in smallest unit)",
                },
                sender: {
                  type: "string",
                  required: true,
                  description: "The address of the sender",
                },
              },
            },
            output: {
              message: "Payment received successfully",
              status: "success",
            },
          },
          extra: {
            note: "x402 resource",
          },
        },
      ],
      payer: "0x95843f83F1D9Dd717d8C4Fe8BC94C51acaee1Cac",
    }),
    {
      status: 402,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
