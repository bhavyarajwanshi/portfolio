// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  let c = '';
  const allCommands = Object.keys(bin).sort();
  
  for (let i = 1; i <= allCommands.length; i++) {
    if (i % 5 === 0) {
      c += allCommands[i - 1] + '\n';
    } else {
      c += allCommands[i - 1].padEnd(15, ' ');
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary dashboard.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my workspace terminal!
More about me:
'sumfetch' - short telemetry summary.
'resume'   - my latest engineering resume.
'notes'    - my cloud-native engineering handbook.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Core Projects Breakdown
export const projects = async (args: string[]): Promise<string> => {
  return `[ENGINEERING HIGHLIGHTS]
- <b>Telemetry Aggregator Engine</b>: Connected distributed multi-cloud nodes with central analytics pipelines.
- <b>Workload Automation Playbooks</b>: Automated cluster operational checks, saving ~15% on redundant system runs.
- <b>Infrastructure Analytics Dashboard</b>: Designed a unified visibility layout tracking performance and platform health metrics.`;
};

// Sumfetch Profile Dashboard
export const sumfetch = async (args: string[]): Promise<string> => {
  return `⚙️ <b>${config.name}</b> @ infra-ops
----------------------------------------
🚀 <b>Role</b>: DevOps & Observability Engineer
☁️ <b>Focus</b>: Kubernetes, Cloud Optimization, Enterprise Telemetry
🏢 <b>Current</b>: Platform Engineering Core (Bosch)
🛠️ <b>Stack</b>: Docker, k3s, Terraform, Helm, Bash, Git, Python
📓 <b>Notes</b>: Type 'notes' to view technical handbooks
🚀 <b>Topology</b>: Type 'arch' to view metrics data flow`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest! 
While this interface runs completely on open-source pipelines, you can support my engineering work here:
- Paypal  : https://paypal.me/bhavyarajwanshi
- Patreon : https://patreon.com/bhavyarajwanshi
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `architecture_map.ascii\ncloud_finops_audit.csv\nkubernetes_handbook.md\nobservability_telemetry.log`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Directory navigation locked. Access folders directly by typing 'notes [category]' or 'arch'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Woah, you still use 'vi'? Just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is classic, but have you tried 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim' is configurations heaven. Excellent taste.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `M-x butterfly`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied: With great power comes... a classic rickroll.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
█████        ███                       ███████████                                   
░░███        ░░░                       ░█░░░███░░░█                                   
 ░███        ████  █████ █████  ██████ ░   ░███  ░   ██████  ████████  █████████████  
 ░███       ░░███ ░░███ ░░███  ███░░███    ░███     ███░░███░░███░░███░░███░░███░░███ 
 ░███        ░███  ░███  ░███ ░███████     ░███    ░███████  ░███ ░░░  ░███ ░███ ░███ 
 ░███      █ ░███  ░░███ ███  ░███░░░      ░███    ░███░░░   ░███      ░███ ░███ ░███ 
 ███████████ █████  ░░█████   ░░██████     █████   ░░██████  █████     █████░███ █████
░░░░░░░░░░░ ░░░░░    ░░░░░     ░░░░░░     ░░░░░     ░░░░░░  ░░░░░     ░░░░░ ░░░ ░░░░░ 

Type 'help' to see the list of available operational commands.
Type 'sumfetch' to display system summary dashboard.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the GitHub source code.
`;
};

// Engineering Handbooks Subsystem
export const notes = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return `Available Engineering Handbooks:
- kubernetes    : Local k3s sandbox cluster setup & manifests
- observability : Multi-cloud API integration & telemetry
- finops        : Log-ingestion usage-based chargeback models

Usage: type 'notes [category]' (e.g., 'notes kubernetes')`;
  }

  const category = args[0].toLowerCase();
  if (category === 'kubernetes') {
    return `[KUBERNETES HANDBOOK]
* Sandbox Environment: Constructed a local testing sandbox running Rancher Desktop (k3s).
* Declarative Orchestration: Authored native Kubernetes YAML manifests (Deployments, Services) to handle container scheduling.
* CLI Management: Streamlined state audits and pod debugging workflows via k9s and kubectl inside the terminal.`;
  }
  if (category === 'observability') {
    return `[OBSERVABILITY PIPELINES]
* Telemetry Streams: Engineered secure API connections between Icinga and multi-cloud nodes utilizing AWS IAM credentials.
* Alert Aggregation: Re-architected integration links across Grafana, Icinga, and New Relic stacks to drop MTTR by 35%.`;
  }
  if (category === 'finops') {
    return `[FINOPS & METRIC OPTIMIZATION]
* Chargeback Auditing: Tracked tenant logging metrics to build usage-based cost-allocation spreadsheets.
* Cost Avoidance: Truncated dead or duplicate data pipelines to slash total SaaS billing overhead by ~15%.`;
  }

  return `Handbook category '${category}' not found. Type 'notes' to see all categories.`;
};

// Visual Network Topology
export const arch = async (args: string[]): Promise<string> => {
  return `[INFRASTRUCTURE TELEMETRY TOPOLOGY]

  +-----------------------+      +------------------------+
  |    AWS Cloud Layers   |      |   Azure Virtual Mach   |
  |  (IAM Credentials)    |      |  (Auth Token Access)   |
  +-----------+-----------+      +-----------+------------+
              |                              |
              +--------------+---------------+
                             | (REST API Stream)
                             v
               +---------------------------+
               |  Icinga Aggregator Core   |
               +-------------+-------------+
                             |
                             v
               +---------------------------+
               | Grafana / Datadog Stack   |
               |   [35% MTTR Reduction]    |
               +---------------------------+`;
};