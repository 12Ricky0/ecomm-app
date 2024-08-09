// next.config.mjs

import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
    enabledEnv: "development",
});

const nextConfig = {
    output: "standalone"
};

export default withAutoCert(nextConfig);

