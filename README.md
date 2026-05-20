🚀 I just launched my interactive, terminal-based portfolio live to production! 

The open-source template I used, LiveTerm by Vincent Wu (built on Next.js 12, TypeScript, and Tailwind CSS), was originally designed to be a "5-minute project" where you only touch a simple config.json file. 

But when you try to push boundaries, deployment loops rarely play nice. I ended up bypassing the basic settings entirely to deep-engineer the core codebase and infrastructure:

🎨 UI Customization & Layout Overrides:
- The original repository relies entirely on global Tailwind cascading configurations. When it clashed with my theme, I manually wrote inline JavaScript style blocks directly into the DOM layer to completely lock down a sleek, industrial dark aesthetic.
- Bypassed the standard text headers by directly embedding a custom, natively animated, spinning crimson Sharingan SVG element into the terminal window bar layout.
- Rewrote the binary files (`commands.ts`) to add customized operational commands, real-time metric screens (`htop`), and system dashboard engines (`sumfetch`).

⚙️ Upgrading Legacy Dependencies:
- The base template was built on legacy package structures that kept tripping up on modern strict compiler arguments. I stepped in to clean out old definitions, re-mapped the package trees, and securely upgraded the compiler rules to align with modern TypeScript 5.

🤖 Overhauling the CI/CD Pipeline (The Real Battle):
- The default automated GitHub Actions runner (`actions/configure-pages`) was forcefully overwriting my Next.js paths in the cloud, resulting in an empty build directory and a frustrating 404 screen.
- I refactored the pipeline's `.yml` workflow script to turn off automated file generation (`generator_config_file: false`), ensuring my environment rules took absolute priority.
- Because Next.js 12 handles static building completely differently than newer versions, I re-wired the cloud compilation scripts to execute a raw static export loop (`next build && next export`), forcing the system to write a physical `index.html` straight into the artifact root.

What started as a simple configuration project turned into a great deep-dive into compiler flags, static asset distribution logic, and cloud automation.

👉 Give it a spin here: https://bhavyarajwanshi.github.io/portfolio/
📂 Dive into the code matrix: [PASTE YOUR REPOSITORY LINK HERE]

Huge credit to Vincent Wu for providing an incredible open-source baseline layer! 

#NextJS #TypeScript #GitHubActions #CICD #DevOps #SoftwareEngineering #WebDevelopment #Portfolio #ProblemSolving
