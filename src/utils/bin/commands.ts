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
  return 'Opening Hokage Terminal repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my workspace terminal!
More about me:
'sumfetch' - short telemetry summary.
'resume'   - my latest engineering resume.`;
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

// Sumfetch Profile Dashboard with ASCII Side-by-Side Art
export const sumfetch = async (args: string[]): Promise<string> => {
  const currentDateTime = new Date().toLocaleString('en-US', { 
    hour12: true,
    timeZoneName: 'short'
  });

  return `
                    .II.                    ⚙️ <b>${config.name}</b> @ tsukuyomi-core
                   ,llll,                   ---------------------------------------
                  .llllll.                  🚀 <b>Role</b>        : DevOps & Observability Engineer
                 .llllllll.                 ☁️ <b>Focus</b>       : Kubernetes, Cloud Optimization, SRE
                 il!!!!!!li                 🏢 <b>Current</b>     : Platform Engineering Core (Bosch)
    ;IIlllIIi;;. :il!!!!li:..;;iIIlllII;    🛠️ <b>Stack</b>       : Docker, k3s, Terraform, Helm, Python
     IllIIlll!l,llll,  ,llll,l!lllIIllI     🌀 <b>System Time</b> : ${currentDateTime}
     .Ill:   ..,l;.;IIII;.;l,..   :llI.     ---------------------------------------
       illI.       ,;ii;,       .Illi        <b>Email</b>       : ${config.email}
        ;l!!i        ;;        ;!!l;         <b>GitHub</b>      : github.com/${config.social.github}
          :,Il:.   ;IIII;   .:lI,:           <b>LinkedIn</b>    : linkedin.com/in/${config.social.linkedin}
          :,Il:iI: ;IIII; :Ii:lI,:.         ---------------------------------------
        ;l!!i.;iIIi  ;;  iIIi;.i!!l;        👁️ <i>tsukuyomi-core status: online</i>
       illl!!l;.:II.    .II;.;l!!llli       ❯_ <b>System</b>      : > H O K A G E T E R M
     .Illlll!!I:l;.,    ,.;l:I!!lllllI.     
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

export const ls = async (args: string[]): Promise<string> => {
  return `architecture_map.ascii\ncloud_finops_audit.csv\nkubernetes_handbook.md\nobservability_telemetry.log`;
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

export const Certifications = async (args?: string[]): Promise<string> => {
  return `Google Cloud Associate Cloud Engineer
          Google Cloud Cloud Digital Leader
          Godot 101 – Game Engine Foundations
          Google Cloud Generative AI Leader
          `;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied: With great power comes... a classic rickroll.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
    ▗▄▄▖ ▗▖ ▗▖ ▗▄▖ ▗▖  ▗▖▗▖  ▗▖▗▄▖     ▗▄▄▖  ▗▄▖    ▗▖▗▖ ▗▖ ▗▄▖ ▗▖  ▗▖ ▗▄▄▖▗▖ ▗▖▗▄▄▄▖
    ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌  ▐▌ ▝▚▞▘▐▌ ▐▌    ▐▌ ▐▌▐▌ ▐▌   ▐▌▐▌ ▐▌▐▌ ▐▌▐▛▚▖▐▌▐▌   ▐▌ ▐▌  █  
    ▐▛▀▚▖▐▛▀▜▌▐▛▀▜▌▐▌  ▐▌  ▐▌ ▐▛▀▜▌    ▐▛▀▚▖▐▛▀▜▌   ▐▌▐▌ ▐▌▐▛▀▜▌▐▌ ▝▜▌ ▝▀▚▖▐▛▀▜▌  █  
    ▐▙▄▞▘▐▌ ▐▌▐▌ ▐▌ ▝▚▞▘   ▐▌ ▐▌ ▐▌    ▐▌ ▐▌▐▌ ▐▌▗▄▄▞▘▐▙█▟▌▐▌ ▐▌▐▌  ▐▌▗▄▄▞▘▐▌ ▐▌▗▄█▄▖

Type 'help' to see the list of available operational commands.
Type 'sumfetch' to display system summary dashboard.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Hokage Terminal source code.
`;
};