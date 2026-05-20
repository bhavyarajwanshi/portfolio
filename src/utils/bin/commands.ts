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
'certifications' - cloud credentials & badges.
'publications'   - peer-reviewed engineering research.
'achievements'   - corporate recognition & milestones.
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

// Core Projects Breakdown [cite: 20, 21, 27]
export const projects = async (args: string[]): Promise<string> => {
  return `\n⚙️  <b>[ENGINEERING HIGHLIGHTS]</b>
--------------------------------------------------------------------------------------
• <b>Self-Service Monitoring Automation Platform (Bosch)</b> [cite: 21, 22]
  - Engineered a centralized aggregator dashboard utilizing Node.js[cite: 24].
  - Connected directly with the Icinga REST API to aggregate distributed infrastructure telemetry[cite: 14, 24].
  - Programmed backend server scripts to automatically generate operational SLA reports[cite: 25].
  - Streamlined operational audits for the IAOC team, creating a unified real-time view[cite: 26, 44].

• <b>Kubernetes App Deployment & Monitoring Platform</b> [cite: 27]
  - Containerized a full-stack environment by authoring modular, layered Dockerfiles[cite: 29].
  - Established a local testing sandbox using Rancher Desktop (k3s)[cite: 29].
  - Engineered an automated GitHub Actions CI/CD pipeline for image compilation and pushing[cite: 30].
  - Deployed a full monitoring stack using Helm; evaluated resource bottlenecks via k9s and kubectl[cite: 32].
`;
};

// Sumfetch Profile Dashboard [cite: 4, 7, 11]
export const sumfetch = async (args: string[]): Promise<string> => {
  const currentDateTime = new Date().toLocaleString('en-US', { 
    hour12: true,
    timeZoneName: 'short'
  });

  return `
                    .II.                    ⚙️ <b>${config.name}</b> @ tsukuyomi-core
                   ,llll,                   ---------------------------------------
                  .llllll.                  🚀 <b>Role</b>        : DevOps & Observability Engineer [cite: 4]
                 .llllllll.                 ☁️ <b>Focus</b>       : Kubernetes, Cloud Optimization, FinOps [cite: 4]
                 il!!!!!!li                 🏢 <b>Current</b>     : BGSW (Bosch Global Software Tech) [cite: 11]
    ;IIlllIIi;;. :il!!!!li:..;;iIIlllII;    🛠️ <b>Stack</b>       : GCP, Docker, k3s, Terraform, Helm, Datadog [cite: 7, 8]
     IllIIlll!l,llll,  ,llll,l!lllIIllI     📈 <b>Metrics</b>     : -35% MTTR | -40% Workload via API 
     .Ill:   ..,l;.;IIII;.;l,..   :llI.     🌀 <b>System Time</b> : ${currentDateTime}
       illI.       ,;ii;,       .Illi       ---------------------------------------
        ;l!!i        ;;        ;!!l;         <b>Email</b>       : ${config.email}
          :,Il:.   ;IIII;   .:lI,:           <b>GitHub</b>      : github.com/${config.social.github}
          :,Il:iI: ;IIII; :Ii:lI,:.          <b>LinkedIn</b>    : linkedin.com/in/${config.social.linkedin}
        ;l!!i.;iIIi  ;;  iIIi;.i!!l;        ---------------------------------------
       illl!!l;.:II.    .II;.;l!!llli       👁️ <i>tsukuyomi-core status: online</i>
     .Illlll!!I:l;.,    ,.;l:I!!lllllI.     ❯_ <b>System</b>      : > S H A D O W O P S
     Illlllll!!,llli    ;lll,l!lllllllI     
    ;IIlllIIi;;. :il.   li:..;;iiIlllII;    
                 il!;  :!li                 
                 .lll  lll.                 
                  .llIill.                  
                   ,llll,                   
                    .II.                    
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

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
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

export const vi = async (args: string[]): Promise<string> => {
  return `Woah, you still use 'vi'? Just try 'vim'.`;
};

// Certifications Section [cite: 4, 34]
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
  - Core Workflow Automation & Pipeline Orchestration.
• <b>Godot 101 – Game Engine Foundations</b>
  - Structural Game Engine Foundations.
`;
};

// Peer-Reviewed Research Publications Section 
export const publications = async (args?: string[]): Promise<string> => {
  return `\n📚  <b>[PEER-REVIEWED RESEARCH PUBLICATIONS]</b>
--------------------------------------------------------------------------------------
• <b>Crypto Bank: Cryptocurrency Wallet Based on Blockchain</b> [cite: 36]
  - Published in the <i>Recent Trends in Image Processing and Pattern Recognition</i> journal by <b>Springer</b> (January 2024)[cite: 36].
  - Index & Abstract: https://www.springerprofessional.de/en/crypto-bank-cryptocurrency-wallet-based-on-blockchain/26673536 [cite: 36]
`;
};

// Corporate Milestones and Awards Section [cite: 42, 44, 46, 47, 48]
export const achievements = async (args?: string[]): Promise<string> => {
  return `\n🏆  <b>[MILESTONES & RECOGNITION]</b>
--------------------------------------------------------------------------------------
• <b>Bravo Award, Bosch GBSW (Jun 2025)</b> [cite: 44]
  - Recognized for building a Power BI dashboard automating team reporting & enhancing visibility for IAOC[cite: 44].
• <b>Ace Performer, Bosch GBSW (Dec 2024)</b> [cite: 46]
  - Awarded for developing robust monitoring API scripts that reduced manual workload by 40%[cite: 15, 46].
• <b>Bravo Award, Bosch GBSW (Aug 2024)</b> [cite: 48]
  - Received for rapid cloud technical upskilling and securing official GCP certifications[cite: 48].
• <b>DEI Ambassador, Bosch GBSW</b> [cite: 47]
  - Commended for promoting workplace inclusivity and actively contributing to organizational diversity initiatives[cite: 47].
`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied: With great power comes... a classic rickroll.`;
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