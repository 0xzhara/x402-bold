// force rebuild 2025-10-25
export default function handler(req, res) {
  res.status(402).json({
    x402Version: 1,
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "0.5",
        resource: "https://x402-bold.vercel.app/api/resource",
        description: "Resource using USDC payment via x402 protocol.",
        mimeType: "application/json",
        payTo: "0x95843f83F1D9Dd717d8C4Fe8BC94C51acaee1Cac",
        maxTimeoutSeconds: 120,
        asset: "USDC",
        outputSchema: {
          input: {
            type: "http",
            method: "POST",
            bodyType: "json",
            bodyFields: {
              amount: {
                type: "string",
                required: true,
                description: "The amount of USDC to send"
              },
              sender: {
                type: "string",
                required: true,
                description: "The address of the sender"
              }
            }
          },
          output: {
            message: "Payment received successfully",
            status: "success"
          }
        },
        extra: {
          note: "x402 resource"
        }
      }
    ],
    payer: "0x95843f83F1D9Dd717d8C4Fe8BC94C51acaee1Cac"
  });
}
