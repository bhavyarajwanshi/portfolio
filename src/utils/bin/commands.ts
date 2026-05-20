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
  return 'Opening Shadow Ops Terminal repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my workspace terminal!
More about me:
'sumfetch'       - short telemetry summary.
'projects'       - active engineering breakdown.
'certifications' - cloud credentials and badges.
'publications'   - peer-reviewed engineering research.
'achievements'   - corporate recognition and milestones.
'resume'         - download my latest engineering resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  const link = document.createElement('a');
  link.href = config.resume_url; // Points to /Bhavya_Resume.pdf
  link.download = 'Bhavya_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  return 'Downloading resume...';
};

// Core Projects Breakdown
export const projects = async (args: string[]): Promise<string> => {
  return `\n⚙️  <b>[ENGINEERING HIGHLIGHTS]</b>
--------------------------------------------------------------------------------------
• <b>Self-Service Monitoring Automation Platform (Bosch)</b>
  - Engineered a centralized aggregator dashboard utilizing Node.js.
  - Connected directly with the Icinga REST API to aggregate distributed infrastructure telemetry.
  - Programmed backend server scripts to automatically generate operational SLA reports.
  - Streamlined operational audits for the IAOC team, creating a unified real-time view.

• <b>Kubernetes App Deployment and Monitoring Platform</b>
  - Containerized a full-stack environment by authoring modular, layered Dockerfiles.
  - Established a local testing sandbox using Rancher Desktop (k3s).
  - Engineered an automated GitHub Actions CI/CD pipeline for image compilation and pushing.
  - Deployed a full monitoring stack using Helm; evaluated resource bottlenecks via k9s and kubectl.
`;
};

// Sumfetch Profile Dashboard Links Local Reference File
import sumfetchCmd from './sumfetch';

export const sumfetch = async (args: string[]): Promise<string> => {
  return sumfetchCmd(args);
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

// Interactive Virtual Directories 
export const ls = async (args: string[]): Promise<string> => {
  return `achievements/         certifications/       projects/             publications/\nBhavya_Resume.pdf     iaoc_dashboard.pbi    k3s_deployment.yaml   crypto_bank_ms.pdf`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Directory navigation locked. Access shortcuts directly via interactive commands.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Certifications Section
export const certifications = async (args?: string[]): Promise<string> => {
  return `\n🛡️  <b>[PROFESSIONAL CREDENTIALS]</b>
--------------------------------------------------------------------------------------
• <b>Google Cloud Associate Cloud Engineer (ACE)</b> 
  - Verification: https://www.credly.com/badges/e084b047-79f6-4743-a2e4-28c29d19bb66
• <b>Google Cloud Provider - Digital Leader</b> 
  - Verification: https://www.credly.com/badges/23e1be38-33de-44e5-8b5d-f54a58c8954
• <b>Google Cloud Generative AI Leader</b> 
  - Verification: https://www.credly.com/badges/12ebd4ba-b721-4ddb-ad85-c2876e4baec4
• <b>Kestra Fundamentals Certification</b>
  - Core Workflow Automation and Pipeline Orchestration.
• <b>Godot 101 – Game Engine Foundations</b>
  - Structural Game Engine Foundations.
`;
};

// Peer-Reviewed Research Publications Section 
export const publications = async (args?: string[]): Promise<string> => {
  return `\n📚  <b>[PEER-REVIEWED RESEARCH PUBLICATIONS]</b>
--------------------------------------------------------------------------------------
• <b>Crypto Bank: Cryptocurrency Wallet Based on Blockchain</b>
  - Published in the <i>Recent Trends in Image Processing and Pattern Recognition</i> journal by <b>Springer</b> (January 2024).
  - Index and Abstract: https://www.springerprofessional.de/en/crypto-bank-cryptocurrency-wallet-based-on-blockchain/26673536
`;
};

// Corporate Milestones and Awards Section
export const achievements = async (args?: string[]): Promise<string> => {
  return `\n🏆  <b>[MILESTONES & RECOGNITION]</b>
--------------------------------------------------------------------------------------
• <b>Bravo Award, Bosch GBSW (Jun 2025)</b> 
  - Recognized for building a Power BI dashboard automating team reporting and enhancing monitoring visibility for IAOC.
• <b>Ace Performer, Bosch GBSW (Dec 2024)</b> 
  - Awarded for developing robust monitoring API scripts that reduced manual workload by 40%.
• <b>Bravo Award, Bosch GBSW (Aug 2024)</b> 
  - Received for rapid cloud technical upskilling and securing official GCP certifications.
• <b>DEI Ambassador, Bosch GBSW</b> 
  - Commended for promoting workplace inclusivity and actively contributing to organizational diversity initiatives.
`;
};

// Live System Monitoring Process Readout (Monochromatic Standard)
export const top = async (args: string[]): Promise<string> => {
  const loadAvg = (Math.random() * (1.80 - 0.45) + 0.45).toFixed(2);
  const memUsed = Math.floor(Math.random() * (6200 - 5800) + 5800);
  const cpuK3s = (Math.random() * (12.5 - 4.1) + 4.1).toFixed(1);
  const cpuDd = (Math.random() * (5.2 - 1.8) + 1.8).toFixed(1);

  return `\n⚙️ <b>[TSUKUYOMI-CORE SYSTEM METRICS]</b>
--------------------------------------------------------------------------------------
Tasks: <b>42 total</b>,   1 running,  41 sleeping,   0 stopped,   0 zombie
%Cpu(s): <b> ${cpuK3s}%</b> us,  <b>1.2%</b> sy,  0.0% ni, <b>91.4%</b> id,  0.0% wa,  0.0% hi
MiB Mem : <b>16384.0 total</b>,  9842.1 free,  <b>${memUsed}.9 used</b>,  6541.0 buff/cache

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
 1024 bhavya    20   0 4128412 842104 124212 S   <b>${cpuK3s}</b>  5.1   12:44.12 k3s-engine
 2048 bhavya    20   0 2104812 512104  94212 S   <b>${cpuDd}</b>  3.1    4:18.05 datadog-agent
 4096 bhavya    20   0  842104 124212  42112 S   0.8  0.8    0:55.21 icinga2-core
 8192 bhavya    20   0   42112   4212   1212 R   0.2  0.0    0:00.04 htop-telemetry
--------------------------------------------------------------------------------------
👁️ <i>Type 'top' or 'htop' again to refresh active resource utilization threads.</i>
`;
};

// High-Fidelity Colorized Interactive Telemetry View
export const htop = async (args: string[]): Promise<string> => {
  const cpuVal1 = Math.floor(Math.random() * (45 - 20) + 20);
  const cpuVal2 = Math.floor(Math.random() * (60 - 35) + 35);
  const memVal = Math.floor(Math.random() * (75 - 55) + 55);

  const drawBar = (percent: number, colorClass: string) => {
    const totalBars = 30;
    const filledBars = Math.round((percent / 100) * totalBars);
    const emptyBars = totalBars - filledBars;
    return `[<span class="${colorClass}">${'|'.repeat(filledBars)}</span>${'.'.repeat(emptyBars)} <span class="text-white">${percent}%</span>]`;
  };

  return `
  <span class="text-green-400">1</span>  ${drawBar(cpuVal1, 'text-green-500 font-bold')}   <span class="text-green-400">Tasks:</span> 42 total, 1 running
  <span class="text-green-400">2</span>  ${drawBar(cpuVal2, 'text-blue-500 font-bold')}   <span class="text-green-400">Load average:</span> 0.52 0.41 0.35 
  <span class="text-green-400">Mem</span>${drawBar(memVal, 'text-yellow-500 font-bold')}  <span class="text-green-400">Uptime:</span> 14 days, 03:22:11

  <span class="bg-neutral-800 text-white px-1 font-bold">  PID USER      PRI  NI  VIRT   RES   SHR S  CPU% MEM%   TIME+  Command         </span>
 1024 bhavya     20   0 4128M  842M  124M S  ${(cpuVal1 * 0.2).toFixed(1)}  5.1  12:44.12 k3s-engine
 2048 bhavya     20   0 2104M  512M   94M S  ${(cpuVal2 * 0.1).toFixed(1)}  3.1   4:18.05 datadog-agent
 4096 bhavya     20   0  842M  124M   42M S   0.8  0.8   0:55.21 icinga2-core
 8192 bhavya     20   0  412M   42M   12M R   0.2  0.2   0:00.04 htop-dashboard

  <span class="text-neutral-400 font-bold">F1</span>Help  <span class="text-neutral-400 font-bold">F2</span>Setup <span class="text-neutral-400 font-bold">F3</span>Search <span class="text-neutral-400 font-bold">F4</span>Filter <span class="text-neutral-400 font-bold">F5</span>Tree  <span class="text-neutral-400 font-bold">F6</span>Sort  <span class="text-neutral-400 font-bold">F9</span>Kill  <span class="text-neutral-400 font-bold">F10</span>Quit
`;
};

// Virtual File Inspection Engine
export const cat = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return "Usage: cat [filename]. Example: cat k3s_deployment.yaml";
  }

  const filename = args[0].toLowerCase();

  if (filename === 'k3s_deployment.yaml') {
    return `\n<span class="text-neutral-500"># Source: local k3s testing environment sandbox</span>
<span class="text-blue-400">apiVersion</span>: apps/v1
<span class="text-blue-400">kind</span>: Deployment
<span class="text-blue-400">metadata</span>:
  <span class="text-blue-400">name</span>: tsukuyomi-core-deployment
  <span class="text-blue-400">labels</span>:
    <span class="text-blue-400">app</span>: telemetry-aggregator
<span class="text-blue-400">spec</span>:
  <span class="text-blue-400">replicas</span>: 3
  <span class="text-blue-400">selector</span>:
    <span class="text-blue-400">matchLabels</span>:
      <span class="text-blue-400">app</span>: telemetry-aggregator
  <span class="text-blue-400">template</span>:
    <span class="text-blue-400">metadata</span>:
      <span class="text-blue-400">labels</span>:
        <span class="text-blue-400">app</span>: telemetry-aggregator
    <span class="text-blue-400">spec</span>:
      <span class="text-blue-400">containers</span>:
      - <span class="text-blue-400">name</span>: aggregator-backend
        <span class="text-blue-400">image</span>: bhavya/tsukuyomi-aggregator:latest
        <span class="text-blue-400">ports</span>:
        - <span class="text-blue-400">containerPort</span>: 8080
`;
  }

  if (filename === 'crypto_bank_ms.pdf' || filename === 'bhavya_resume.pdf' || filename === 'iaoc_dashboard.pbi') {
    return `Cannot dump raw binary execution blocks into text viewport. Please use the interactive '<span class="text-cyan-400">resume</span>' or shortcut linking modules to manage structural document downloads.`;
  }

  return `cat: ${args[0]}: No such file or directory in records system context.`;
};

// Streamlined Banner Output
export const banner = (args?: string[]): string => {
  return `
    ▗▄▄▖ ▗▖ ▗▖ ▗▄▖ ▗▖  ▗▖▗▖  ▗▖▗▄▖     ▗▄▄▖  ▗▄▖    ▗▖▗▖ ▗▖ ▗▄▖ ▗▖  ▗▖ ▗▄▄▖▗▖ ▗▖▗▄▄▄▖
    ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌  ▐▌ ▝▚▞▘▐▌ ▐▌    ▐▌ ▐▌▐▌ ▐▌   ▐▌▐▌ ▐▌▐▌ ▐▌▐▛▚▖▐▌▐▌   ▐▌ ▐▌  █  
    ▐▛▀▚▖▐▛▀▜▌▐▛▀▜▌▐▌  ▐▌  ▐▌ ▐▛▀▜▌    ▐▛▀▚▖▐▛▀▜▌   ▐▌▐▌ ▐▌▐▛▀▜▌▐▌ ▝▜▌ ▝▀▚▖▐▛▀▜▌  █  
    ▐▙▄▞▘▐▌ ▐▌▐▌ ▐▌ ▝▚▞▘   ▐▌ ▐▌ ▐▌    ▐▌ ▐▌▐▌ ▐▌▗▄▄▞▘▐▙█▟▌▐▌ ▐▌▐▌  ▐▌▗▄▄▞▘▐▌ ▐▌▗▄█▄▖

Type 'help' to see the list of available operational commands.
Type 'sumfetch' to display system summary dashboard.
`;
};