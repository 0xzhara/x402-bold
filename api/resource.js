export default function handler(req, res) {
  res.status(200).json({
    x402Version: 1,
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "0.05",
        resource: "https://x402-base-demo.vercel.app/api/resource",
        description: "Test-but-real Base Network resource (deployed on Vercel)",
        payer: "0x6C159C881BE4Afa3194Cd8CB8F3555444916C684"
      }
    ]
  });
}
