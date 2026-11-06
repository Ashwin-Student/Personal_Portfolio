export interface SkillItem {
  name: string;
  level: number;
  category: 'os' | 'network' | 'cloud' | 'security';
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Network Security' | 'DevSecOps' | 'SysAdmin' | 'Cloud Infra' | 'Threat Defense';
  summary: string;
  description: string;
  architectureHighlights: string[];
  techStack: string[];
  codeSnippetTitle: string;
  codeSnippet: string;
  codeLanguage: string;
  metrics: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  badgeColor: 'blue' | 'teal' | 'cyan';
  skillsCovered: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  metric?: string;
}

export interface ToolOrLanguageItem {
  id: string;
  name: string;
  type: 'language' | 'security-tool' | 'devops-tool' | 'monitoring-tool';
  proficiency: 'Advanced' | 'Proficient' | 'Intermediate';
  experienceYears?: string;
  useCase: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ashwin Debre",
    title: "IT Infrastructure & System Security Engineer",
    subtitles: [
      "IT Infrastructure & System Security Engineer",
      "Enterprise Network & Zero-Trust Architect",
      "DevSecOps & CI/CD Pipeline Automation",
      "Linux Kernel Hardening & Active Directory Admin",
      "SOC & SIEM Threat Defense (Wazuh / Splunk)"
    ],
    pitch: "Architecting zero-trust networks, automated DevSecOps pipelines, and hardened cloud infrastructure. CDAC ITISS Engineer.",
    location: "Pune / Mumbai, India (Open to Remote & Global)",
    email: "ashvindebre@gmail.com",
    phone: "+91 98765 43210",
    availability: "Immediate Joiner",
    socials: {
      github: "https://github.com/ashwindebre",
      linkedin: "https://linkedin.com/in/ashwindebre",
      medium: "https://medium.com/@ashwindebre",
      twitter: "https://twitter.com/ashwindebre"
    },
    stats: [
      { label: "Lab Hours", value: "450+" },
      { label: "Hardened Networks", value: "18" },
      { label: "CIS Playbooks", value: "12" },
      { label: "Uptime SLA", value: "99.9%" }
    ]
  },

  about: {
    lead: "Building resilient systems and automating zero-trust security postures.",
    bio: [
      "CDAC ITISS graduate with intensive hands-on experience in enterprise Linux administration, multi-site network fabrics, firewall engineering (pfSense/Fortinet), and container security orchestration. Focused on reproducible Infrastructure as Code and uncompromising defense-in-depth."
    ],
    corePrinciples: [
      {
        title: "Zero-Trust Architecture",
        desc: "Identity-aware access, mutual TLS, and dynamic micro-segmentation at every layer."
      },
      {
        title: "Infrastructure as Code",
        desc: "Version-controlled, auditable environments automated via Terraform and Ansible."
      },
      {
        title: "Defensive Telemetry",
        desc: "Real-time log ingestion and proactive incident response with Wazuh and Elastic Stack."
      }
    ]
  },

  skillsCategories: [
    {
      id: "os",
      title: "Operating Systems & Systems Administration",
      subtitle: "Enterprise Linux distributions, Windows Server forests, and kernel-level hardening",
      skills: [
        { name: "Red Hat Enterprise Linux (RHEL 9 / 8)", level: 92, category: "os" as const, description: "SELinux enforcing policies, PAM authentication, firewalld, systemd services, LVM storage management.", tags: ["RHEL", "CentOS", "Rocky"] },
        { name: "Ubuntu / Debian Server Administration", level: 90, category: "os" as const, description: "Kernel tuning, SSH hardening, systemd security, automated unattended-upgrades.", tags: ["Ubuntu", "Debian", "SysAdmin"] },
        { name: "Windows Server 2022 & Active Directory", level: 86, category: "os" as const, description: "Multi-domain forests, Group Policy Objects (GPOs), LAPS, DNS, DHCP, Kerberos armoring.", tags: ["AD DS", "GPO", "Kerberos"] },
        { name: "Bash & Shell Automation Scripting", level: 88, category: "os" as const, description: "Automated audit scripts, log rotation, cron daemon management, system health monitors.", tags: ["Bash", "Shell", "CLI"] },
        { name: "System Hardening & CIS Benchmarks", level: 90, category: "os" as const, description: "Automated remediation to CIS Level 1 & 2 standards, Lynis audits, file integrity monitoring.", tags: ["CIS", "Lynis", "Compliance"] },
        { name: "Virtualization & Hypervisors", level: 88, category: "os" as const, description: "VMware ESXi, Proxmox VE, KVM / QEMU, snapshot lifecycles, virtual switch configuration.", tags: ["Proxmox", "ESXi", "KVM"] }
      ]
    },
    {
      id: "network",
      title: "Networking & Defensive Security",
      subtitle: "Routing protocols, stateful firewalls, packet analysis, and intrusion prevention",
      skills: [
        { name: "TCP/IP Protocol Suite & Switching", level: 95, category: "network" as const, description: "Subnetting (VLSM/CIDR), VLANs (802.1Q), STP, Trunking, LACP link aggregation.", tags: ["TCP/IP", "VLAN", "Switching"] },
        { name: "Routing Protocols (OSPF, BGP, RIP)", level: 88, category: "network" as const, description: "Dynamic routing tables, route redistribution, metric calculation, WAN gateway failover.", tags: ["OSPF", "BGP", "Cisco"] },
        { name: "Firewalls (pfSense, OPNsense, FortiGate)", level: 92, category: "network" as const, description: "Stateful inspection, NAT/PAT rules, multi-WAN load balancing, DMZ traffic isolation.", tags: ["pfSense", "OPNsense", "Firewalls"] },
        { name: "VPN Architectures (WireGuard & IPsec)", level: 90, category: "network" as const, description: "Site-to-site IPsec tunnels, IKEv2 cryptography, high-throughput WireGuard mesh networks.", tags: ["WireGuard", "IPsec", "VPN"] },
        { name: "Packet Inspection & Protocol Analysis", level: 92, category: "network" as const, description: "Wireshark deep packet inspection, TCP handshake anomaly diagnosis, tshark scripting.", tags: ["Wireshark", "Tshark", "Analysis"] },
        { name: "IDS / IPS & NIDS (Snort, Suricata)", level: 86, category: "network" as const, description: "Signature rule creation, heuristic alert triage, inline threat prevention filtering.", tags: ["Snort", "Suricata", "IDS"] }
      ]
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure & DevSecOps",
      subtitle: "Containers, orchestration, IaC provisioning, and automated vulnerability scanning",
      skills: [
        { name: "Docker & Container Security", level: 90, category: "cloud" as const, description: "Rootless containers, multi-stage minimal builds, seccomp profiles, read-only rootfs.", tags: ["Docker", "Containers", "DevSecOps"] },
        { name: "Kubernetes (K8s) Cluster Administration", level: 85, category: "cloud" as const, description: "RBAC policies, NetworkPolicies, Helm charts, ingress controllers, node management.", tags: ["Kubernetes", "Helm", "K8s"] },
        { name: "Terraform (Infrastructure as Code)", level: 86, category: "cloud" as const, description: "Declarative cloud provisioning, state management, modular VPCs, automated plan tests.", tags: ["Terraform", "IaC", "HCL"] },
        { name: "Ansible Configuration Management", level: 88, category: "cloud" as const, description: "Idempotent playbooks, YAML automation, inventory roles, CIS hardening automation.", tags: ["Ansible", "Automation", "YAML"] },
        { name: "AWS Cloud Architecture (VPC, IAM, EC2)", level: 85, category: "cloud" as const, description: "Zero-privilege IAM roles, private subnets, NAT gateways, security groups, CloudWatch.", tags: ["AWS", "VPC", "Cloud"] },
        { name: "CI/CD Security Gates & Scanning", level: 84, category: "cloud" as const, description: "GitHub Actions, Trivy static container scanning, SonarQube quality gates, GitGuardian.", tags: ["CI/CD", "Trivy", "DevSecOps"] }
      ]
    },
    {
      id: "security",
      title: "SOC Operations & Threat Hunting",
      subtitle: "SIEM log ingestion, incident response, vulnerability scanning, and threat intelligence",
      skills: [
        { name: "Wazuh SIEM & Elastic Stack (ELK)", level: 88, category: "security" as const, description: "Agent deployment, custom XML decoder rules, Sysmon event correlation, Kibana dashboards.", tags: ["Wazuh", "ELK", "SIEM"] },
        { name: "Vulnerability Scanning (Nessus & Nmap)", level: 92, category: "security" as const, description: "Credentialed scans, CVE risk prioritization, NSE custom scripts, attack surface discovery.", tags: ["Nmap", "Nessus", "CVE"] },
        { name: "MITRE ATT&CK Framework Mapping", level: 86, category: "security" as const, description: "TTP mapping, defense coverage evaluation, adversary technique simulation.", tags: ["MITRE", "TTPs", "ThreatIntel"] },
        { name: "Incident Response Playbooks", level: 85, category: "security" as const, description: "Containment procedures, memory dump extraction (Volatility), live forensic triage.", tags: ["DFIR", "Forensics", "Playbooks"] }
      ]
    }
  ] as Array<{ id: string; title: string; subtitle: string; skills: SkillItem[] }>,

  projects: [
    {
      id: "zero-trust-mesh",
      title: "Zero-Trust Multi-Site Hybrid Network & WireGuard Mesh",
      category: "Network Security" as const,
      summary: "High-security simulated multi-branch enterprise topology featuring stateful pfSense perimeter firewalls, automated WireGuard cryptographic mesh tunnels, and 802.1X FreeRADIUS dynamic VLAN assignment.",
      description: "Designed and implemented a 4-tier network architecture replicating an enterprise headquarters, remote branch office, and cloud DMZ. Implemented mutual public-key encryption tunnels using WireGuard with sub-second failover. Configured centralized user authentication via 802.1X with dynamic VLAN isolation based on user role and device posture.",
      architectureHighlights: [
        "Headquarters core switch with isolated Management, Employee, and DMZ VLANs (802.1Q).",
        "Dual pfSense firewall cluster configured for CARP high availability and CARP VIP sync.",
        "WireGuard site-to-site cryptographic mesh routing encrypted over public simulated WAN.",
        "FreeRADIUS server enforcing 802.1X authentication and Dynamic VLAN Assignment (DVA)."
      ],
      techStack: ["pfSense", "WireGuard", "FreeRADIUS", "VLAN 802.1Q", "OSPF", "Wireshark", "Syslog"],
      metrics: "Sub-20ms WAN transit, zero-packet loss failover, 100% encrypted inter-site traffic",
      codeSnippetTitle: "wireguard-mesh-conf.sh",
      codeLanguage: "bash",
      codeSnippet: `#!/usr/bin/env bash
# WireGuard Enterprise Site-to-Site Interface Configuration
set -euo pipefail

WG_IF="wg0"
WG_PORT=51820
HQ_SUBNET="10.100.0.1/24"
PRIVATE_KEY="/etc/wireguard/keys/server.key"

echo "[*] Generating ephemeral tunnel parameters..."
mkdir -p /etc/wireguard/keys && chmod 700 /etc/wireguard/keys
if [[ ! -f "$PRIVATE_KEY" ]]; then
    wg genkey | tee "$PRIVATE_KEY" | wg pubkey > /etc/wireguard/keys/server.pub
fi

cat <<EOF > /etc/wireguard/\${WG_IF}.conf
[Interface]
Address = \${HQ_SUBNET}
ListenPort = \${WG_PORT}
PrivateKey = $(cat "$PRIVATE_KEY")
SaveConfig = false

# PostUp Firewall Rules for NAT & Forwarding
PostUp = iptables -A FORWARD -i %i -j ACCEPT
PostUp = iptables -A FORWARD -o %i -m state --state RELATED,ESTABLISHED -j ACCEPT
PostDown = iptables -D FORWARD -i %i -j ACCEPT

# Peer 1: Branch Office A (VLAN 30 Interconnect)
[Peer]
PublicKey = 4A7kF9mK...BranchAPubKey...=
AllowedIPs = 10.100.0.2/32, 192.168.20.0/24
Endpoint = 203.0.113.15:51820
PersistentKeepalive = 25
EOF

systemctl enable --now "wg-quick@\${WG_IF}"
echo "[+] WireGuard Enterprise Tunnel \${WG_IF} is ACTIVE and hardened."`,
      githubUrl: "https://github.com/ashwindebre/zerotrust-wireguard-mesh"
    },
    {
      id: "hardened-k8s-devsecops",
      title: "Hardened Kubernetes Cluster with Automated DevSecOps Pipeline",
      category: "DevSecOps" as const,
      summary: "Production-ready bare-metal 3-node Kubernetes cluster orchestrated with Cilium eBPF network security, Trivy automated container scanning, and HashiCorp Vault secrets management in CI/CD.",
      description: "Deployed an unmanaged bare-metal Kubernetes cluster on Ubuntu 22.04 LTS servers. Replaced standard iptables kube-proxy with Cilium eBPF to achieve deep Layer 7 network policy enforcement and real-time Hubble flow observability. Integrated GitHub Actions CI/CD with automated image vulnerability gates (blocking CVEs > 7.0) and runtime rootless container execution.",
      architectureHighlights: [
        "Cilium eBPF CNI eliminating kube-proxy iptables bottlenecks while enforcing L3/L4/L7 policies.",
        "HashiCorp Vault cluster integrated via Kubernetes ServiceAccount Token Volume Projection.",
        "Automated CI/CD pipeline blocking images with critical vulnerabilities via Trivy scanner.",
        "Pod Security Admission (PSA) enforcing 'Restricted' profile preventing privilege escalation."
      ],
      techStack: ["Kubernetes", "Cilium eBPF", "Docker", "Trivy", "HashiCorp Vault", "GitHub Actions", "Helm"],
      metrics: "0 critical CVEs in production, 100% rootless container compliance, sub-millisecond eBPF packet routing",
      codeSnippetTitle: "cilium-l7-zerotrust-policy.yaml",
      codeLanguage: "yaml",
      codeSnippet: `apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: secure-backend-zero-trust
  namespace: production
spec:
  endpointSelector:
    matchLabels:
      app: core-api-service
  ingress:
  - fromEndpoints:
    - matchLabels:
        app: ingress-gateway
    toPorts:
    - ports:
      - port: "8443"
        protocol: TCP
      rules:
        http:
        - method: "GET"
          path: "/api/v1/healthz"
        - method: "POST"
          path: "/api/v1/telemetry"
  egress:
  - toEndpoints:
    - matchLabels:
        app: postgresql-database
    toPorts:
    - ports:
      - port: "5432"
        protocol: TCP
  - toFQDNs:
    - matchName: "vault.internal.corp"
    toPorts:
    - ports:
      - port: "8200"
        protocol: TCP`,
      githubUrl: "https://github.com/ashwindebre/hardened-k8s-devsecops"
    },
    {
      id: "wazuh-siem-threat-hunting",
      title: "Enterprise SIEM & SOC Threat Hunting Lab (Wazuh + ELK)",
      category: "Threat Defense" as const,
      summary: "Distributed security telemetry platform monitoring 20+ Windows and Linux endpoints with MITRE ATT&CK correlation rules, automated Sysmon triage, and instant Python webhook response playbooks.",
      description: "Architected a full-featured Security Operations Center (SOC) testbed using Wazuh 4.7 and Elasticsearch. Configured Windows Sysmon with the SwiftOnSecurity configuration schema to detect LSASS memory dumping, process hollowing, and lateral movement. Built custom Python daemon scripts that auto-quarantine rogue IP addresses via local IPTables when brute-force threshold is breached.",
      architectureHighlights: [
        "Centralized Wazuh Server & Indexer cluster handling 4,000+ events per second (EPS).",
        "Sysmon XML configuration capturing Event ID 1 (Process Create) & Event ID 10 (ProcessAccess).",
        "Automated incident remediation daemon parsing alerts and dropping malicious subnets.",
        "Kibana dashboard visualizer mapping ongoing adversary activity directly to MITRE ATT&CK techniques."
      ],
      techStack: ["Wazuh SIEM", "Elasticsearch", "Sysmon", "Logstash", "Kibana", "Python", "MITRE ATT&CK"],
      metrics: "4,000+ EPS ingestion capacity, <3 second alert trigger latency, 100% automated brute-force IP ban",
      codeSnippetTitle: "wazuh_auto_responder.py",
      codeLanguage: "python",
      codeSnippet: `#!/usr/bin/env python3
"""
Wazuh Active Response Script: Automated Endpoint Isolation
Triggers upon MITRE ATT&CK T1110 (Brute Force) or T1003 (OS Credential Dumping)
"""
import sys
import json
import subprocess
import logging

logging.basicConfig(filename="/var/log/active-response.log", level=logging.INFO)

def isolate_ip(target_ip: str):
    logging.info(f"[*] Executing defensive drop rule for IP: {target_ip}")
    cmd = ["iptables", "-I", "INPUT", "1", "-s", target_ip, "-j", "DROP"]
    try:
        subprocess.run(cmd, check=True)
        logging.info(f"[+] Successfully isolated malicious IP {target_ip} in kernel table.")
    except subprocess.CalledProcessError as exc:
        logging.error(f"[-] Failed to apply IPTables block: {exc}")

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        alert = json.loads(input_data)
        rule_id = alert.get("rule", {}).get("id")
        src_ip = alert.get("data", {}).get("srcip")

        if src_ip and rule_id:
            isolate_ip(src_ip)
    except Exception as e:
        logging.error(f"Error parsing Wazuh alert payload: {e}")`,
      githubUrl: "https://github.com/ashwindebre/wazuh-threat-hunting-lab"
    },
    {
      id: "ad-forest-hardening",
      title: "Active Directory Forest Hardening & Tiered Administration",
      category: "SysAdmin" as const,
      summary: "Enterprise Microsoft Active Directory Forest redesign implementing Microsoft's ESAE (Enhanced Security Administrative Environment) Tier-0/1/2 administrative model and Kerberos armoring.",
      description: "Re-engineered a vulnerable dual-domain Active Directory structure into a fortified enterprise environment. Enforced Local Administrator Password Solution (LAPS) across all member servers and workstations, eliminated NTLMv1 authentication in favor of Kerberos with AES-256 encryption, deployed Protected Users security group, and audited Kerberoasting attack paths using BloodHound.",
      architectureHighlights: [
        "Tiered administrative partitioning: Tier 0 (Domain Controllers/PKI), Tier 1 (Servers), Tier 2 (Workstations).",
        "Group Policy Objects enforcing CIS Microsoft Windows Server 2022 Benchmark Level 1.",
        "Microsoft LAPS managing randomized 24-character local passwords with automated rotation.",
        "Credential Guard and Virtualization-Based Security (VBS) preventing mimikatz LSASS extraction."
      ],
      techStack: ["Windows Server 2022", "Active Directory DS", "GPO", "PowerShell", "LAPS", "BloodHound", "Kerberos"],
      metrics: "Eliminated 100% of pass-the-hash attack vectors between tiers; reduced BloodHound shortest attack paths to 0",
      codeSnippetTitle: "Audit-KerberosArmoring.ps1",
      codeLanguage: "powershell",
      codeSnippet: `# Active Directory Hardening: Enforce AES-256 and Disable Legacy NTLMv1
Import-Module ActiveDirectory

Write-Host "[*] Auditing User Accounts for Kerberos AES Encryption Support..." -ForegroundColor Cyan

$VulnerableAccounts = Get-ADUser -Filter {Enabled -eq $true} -Properties UserAccountControl, msDS-SupportedEncryptionTypes |
    Where-Object { ($_.msDS-SupportedEncryptionTypes -band 0x18) -eq 0 }

foreach ($Account in $VulnerableAccounts) {
    Write-Warning "[-] Account $($Account.SamAccountName) lacks AES128/AES256 Kerberos support! Remediation in progress..."
    Set-ADUser -Identity $Account.DistinguishedName -Replace @{'msDS-SupportedEncryptionTypes'=28}
}

Write-Host "[+] Enforcing Protected Users Group membership for Tier-0 Accounts..." -ForegroundColor Green
$Tier0Admins = Get-ADGroupMember -Identity "Enterprise Admins"
foreach ($Admin in $Tier0Admins) {
    Add-ADGroupMember -Identity "Protected Users" -Members $Admin -Confirm:$false
}
Write-Host "[+] AD Security Baselines applied successfully." -ForegroundColor Green`,
      githubUrl: "https://github.com/ashwindebre/active-directory-hardening"
    },
    {
      id: "iac-cis-automation",
      title: "Multi-Cloud Infrastructure as Code with CIS Benchmark Hardening",
      category: "Cloud Infra" as const,
      summary: "Modular Terraform engine and Ansible roles provisioning secure, immutable multi-tier AWS environments compliant with CIS Rocky Linux 9 and Ubuntu 22.04 security standards.",
      description: "Authored end-to-end Infrastructure as Code automation that provisions an AWS VPC with strict non-overlapping CIDRs, private bastion host subnets, and immutable state storage with S3 and DynamoDB locks. Configured automated Ansible playbooks enforcing 180+ individual CIS Benchmark checks including AIDE file integrity, auditd rules, and kernel sysctl parameters.",
      architectureHighlights: [
        "Terraform state files cryptographically encrypted with AWS KMS and protected with DynamoDB state locks.",
        "Zero public IPv4 addresses on application tiers; strictly egress via redundant NAT Gateways.",
        "Ansible roles automating SSH protocol hardening (disabling root login, enforcing ed25519 keys).",
        "Nightly GitHub Actions workflow testing infrastructure drift and automated tfsec vulnerability scan."
      ],
      techStack: ["Terraform", "Ansible", "AWS VPC", "Rocky Linux", "Auditd", "tfsec", "GitOps"],
      metrics: "180+ automated CIS controls, 100% automated cloud teardown/setup in < 6 minutes",
      codeSnippetTitle: "main-vpc-hardened.tf",
      codeLanguage: "hcl",
      codeSnippet: `# Terraform AWS Hardened Enterprise Subnet Structure
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

resource "aws_vpc" "enterprise_core" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "vpc-cyber-core-prod"
    Environment = "production"
    Compliance  = "CIS-v2.0"
  }
}

resource "aws_default_security_group" "default" {
  vpc_id = aws_vpc.enterprise_core.id
  # Drop all inbound and outbound default traffic
}

resource "aws_flow_log" "vpc_traffic_audit" {
  iam_role_arn    = aws_iam_role.flow_logs_role.arn
  log_destination = aws_cloudwatch_log_group.vpc_audit.arn
  traffic_type    = "ALL"
  vpc_id          = aws_vpc.enterprise_core.id
}`,
      githubUrl: "https://github.com/ashwindebre/terraform-cis-cloud-infra"
    },
    {
      id: "honeynet-threat-intel",
      title: "Distributed HoneyNet & Automated Threat Intelligence Sensor",
      category: "Threat Defense" as const,
      summary: "Medium-interaction SSH & Telnet Cowrie honeypots deployed across cloud nodes capturing live threat actor payloads, aggregating attack metrics into an interactive dashboard, and piping IOCs to MISP.",
      description: "Deployed containerized Cowrie and Dionaea honeypot sensors across three geographical regions. Captured credentials, malicious binaries, and reconnaissance scans from active botnets. Built automated pipeline converting extracted attacker IPs and binary SHA-256 hashes into STIX/TAXII format and streaming them to a private MISP threat sharing instance.",
      architectureHighlights: [
        "Isolated honeypot sandbox preventing lateral container escape via Docker seccomp profiles.",
        "Real-time packet capture (PCAP) triggered on new TCP connection and stored in secured S3 bucket.",
        "Attacker session replay generation recreating exact keystrokes typed by unauthorized actors.",
        "Automated notification bridge pushing high-fidelity alerts to Discord and Telegram channels."
      ],
      techStack: ["Cowrie", "Dionaea", "MISP", "Docker", "Python", "Telegram Bot API", "Suricata"],
      metrics: "50,000+ brute-force attempts analyzed, 340+ unique malware samples cataloged",
      codeSnippetTitle: "misp_threat_uploader.py",
      codeLanguage: "python",
      codeSnippet: `#!/usr/bin/env python3
"""
HoneyNet to MISP Threat Intelligence Pipeline
Parses Cowrie JSON session logs and auto-creates IOC Events
"""
import json
import hashlib
from pymisp import PyMISP, MISPEvent, MISPAttribute

MISP_URL = "https://misp.cyberlab.internal"
MISP_KEY = "SECRET_API_KEY_LOADED_FROM_VAULT"

def submit_ioc(ip_address: str, payload_hash: str = None):
    misp = PyMISP(MISP_URL, MISP_KEY, ssl=False)
    event = MISPEvent()
    event.info = f"Automated HoneyNet Ingestion: Cowrie SSH Probe from {ip_address}"
    event.distribution = 0  # Your organization only
    event.threat_level_id = 2  # Medium

    attr_ip = MISPAttribute()
    attr_ip.type = 'ip-src'
    attr_ip.value = ip_address
    attr_ip.comment = 'Detected brute-force scanner on port 2222'
    event.add_attribute(**attr_ip)

    if payload_hash:
        attr_hash = MISPAttribute()
        attr_hash.type = 'sha256'
        attr_hash.value = payload_hash
        event.add_attribute(**attr_hash)

    result = misp.add_event(event)
    print(f"[+] Event successfully cataloged in MISP: ID {result['Event']['id']}")`,
      githubUrl: "https://github.com/ashwindebre/honeynet-threat-intel"
    }
  ] as ProjectItem[],

  education: [
    {
      degree: "Post Graduate Diploma in IT Infrastructure, Systems & Security (ITISS)",
      institution: "Centre for Development of Advanced Computing (CDAC ACTS)",
      period: "2024 - 2025",
      location: "Pune, Maharashtra, India",
      grade: "Distinction / Top Tier Cohort",
      description: "Premier specialized post-graduate diploma focused on enterprise networking, high-availability system administration, defensive cybersecurity, and cloud automation.",
      highlights: [
        "Rigorous 900+ hours of hands-on laboratory curriculum in enterprise switching, routing, and defensive firewalls.",
        "Advanced modules in Linux/Windows Server hardening, Public Key Infrastructure (PKI), and Active Directory design.",
        "Practical training in Cloud Computing (AWS/OpenStack), DevSecOps pipelines, and container security orchestration.",
        "Hands-on Cyber Forensics, incident response playbooks, ethical hacking, and penetration testing methodologies."
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      institution: "State University / College of Engineering",
      period: "2020 - 2024",
      location: "India",
      grade: "First Class with Distinction (8.4 CGPA)",
      description: "Foundational computer science degree focusing on operating systems, computer networks, distributed systems, algorithms, and database management.",
      highlights: [
        "Core focus on Computer Networks, Operating Systems, Cryptography, and Distributed Systems.",
        "Final Year Capstone Project: Secure Decentralized Identity and Access Management.",
        "Head of Technical Events for the University Cyber Club, mentoring 100+ junior students."
      ]
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "rhcsa",
      name: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      issueDate: "2024",
      credentialId: "RHCSA-2409-1829",
      verificationUrl: "https://www.redhat.com/en/services/certification/rhcsa",
      badgeColor: "blue" as const,
      skillsCovered: ["LVM Configuration", "SELinux Enforcing", "Systemd Services", "User Management & ACLs", "Network Configuration"]
    },
    {
      id: "security-plus",
      name: "CompTIA Security+ (SY0-701)",
      issuer: "CompTIA",
      issueDate: "2024",
      credentialId: "COMP00102938472",
      verificationUrl: "https://www.comptia.org/certifications/security",
      badgeColor: "teal" as const,
      skillsCovered: ["Threats & Vulnerabilities", "Cryptographic Protocols", "Identity & Access Management", "Incident Response", "Security Architecture"]
    },
    {
      id: "aws-saa",
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issueDate: "2024",
      credentialId: "AWS-SAA-8392019",
      verificationUrl: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      badgeColor: "cyan" as const,
      skillsCovered: ["VPC Multi-AZ Design", "IAM Security Policies", "S3 Lifecycle & KMS", "Route 53 & CloudFront", "High-Availability Compute"]
    },
    {
      id: "ccna",
      name: "Cisco Certified Network Associate (CCNA 200-301)",
      issuer: "Cisco Systems",
      issueDate: "2023",
      credentialId: "CSCO13948291",
      verificationUrl: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
      badgeColor: "blue" as const,
      skillsCovered: ["IP Routing (OSPF/Static)", "VLANs & 802.1Q", "Spanning Tree Protocol (STP)", "ACLs & NAT", "WLAN Security"]
    },
    {
      id: "fortinet-nse3",
      name: "Fortinet NSE 3 Network Security Associate",
      issuer: "Fortinet",
      issueDate: "2024",
      credentialId: "FTNT-NSE3-99482",
      verificationUrl: "https://training.fortinet.com/",
      badgeColor: "teal" as const,
      skillsCovered: ["Next-Gen Firewalls (NGFW)", "Secure SD-WAN", "Zero Trust Network Access (ZTNA)", "Security Fabric"]
    }
  ] as CertificationItem[],

  achievements: [
    {
      id: "ach-1",
      title: "1st Runner-Up — National Cyber Defense CTF (Blue Team)",
      category: "Competition",
      date: "Oct 2024",
      organization: "National Cyber Security League",
      description: "Defended simulated critical infrastructure network against red-team APT actors for 8 continuous hours. Hardened 12 Linux & Windows nodes, mitigated 3 zero-day exploits, and preserved 98.4% uptime.",
      metric: "Top 2 out of 140+ participating engineering teams"
    },
    {
      id: "ach-2",
      title: "Open-Source Creator: 'Ansible-CIS-Hardener' Tool",
      category: "Open Source",
      date: "Aug 2024",
      organization: "GitHub Community",
      description: "Engineered an idempotent automated Ansible playbook suite that hardens RHEL 8/9 and Ubuntu servers to CIS Level 2 compliance in under 120 seconds.",
      metric: "160+ GitHub Stars & 40+ Forks"
    },
    {
      id: "ach-3",
      title: "Published Technical Article: 'Zero Trust Micro-Segmentation in Hybrid Clouds'",
      category: "Publication",
      date: "Nov 2024",
      organization: "Medium Tech Publication / Dev.to",
      description: "Authored an in-depth 3,000-word architectural paper covering eBPF-driven network filtering, Cilium policies, and zero-trust identity federation in multi-tenant environments.",
      metric: "5,000+ reads & featured on DevOps weekly digest"
    },
    {
      id: "ach-4",
      title: "CDAC ITISS Infrastructure High-Availability Lab Deployment",
      category: "Engineering Impact",
      date: "Dec 2024",
      organization: "CDAC Training Center",
      description: "Spearheaded the design and deployment of a virtualized Proxmox VE cluster supporting 60+ concurrent students for hands-on network penetration testing and SIEM ingestion labs.",
      metric: "Zero cluster downtime during 3-month testing cycle"
    },
    {
      id: "ach-5",
      title: "TryHackMe & Hack The Box Competitive Rank: Top 4%",
      category: "Skills Mastery",
      date: "Ongoing",
      organization: "TryHackMe / HackTheBox",
      description: "Completed 120+ hands-on challenge rooms specializing in Network Hardening, Linux Privilege Escalation, Active Directory enumeration, and Forensics triage.",
      metric: "Ranked in Top 4% globally with 45+ Blue Team badges"
    }
  ] as AchievementItem[],

  languagesAndTools: [
    // Programming & Scripting Languages
    {
      id: "lang-python",
      name: "Python",
      type: "language" as const,
      proficiency: "Advanced" as const,
      experienceYears: "3+ Years",
      useCase: "Security automation scripts, Scapy packet dissection, PyMISP integration, REST API consumers, socket programming.",
      tags: ["Scapy", "PyMISP", "Paramiko", "Requests", "Sockets"]
    },
    {
      id: "lang-bash",
      name: "Bash / Shell",
      type: "language" as const,
      proficiency: "Advanced" as const,
      experienceYears: "4+ Years",
      useCase: "Linux system automation, automated CIS audit scripts, cron scheduled tasks, log parsing with awk/sed/grep.",
      tags: ["Automation", "Cron", "Sed/Awk", "Linux CLI"]
    },
    {
      id: "lang-powershell",
      name: "PowerShell",
      type: "language" as const,
      proficiency: "Proficient" as const,
      experienceYears: "2+ Years",
      useCase: "Active Directory user administration, GPO auditing, Windows Event log parsing, automated server configuration.",
      tags: ["Active Directory", "GPO", "Windows Server", "CLI"]
    },
    {
      id: "lang-go",
      name: "Go (Golang)",
      type: "language" as const,
      proficiency: "Intermediate" as const,
      experienceYears: "1+ Year",
      useCase: "Building lightweight concurrency-first networking tools, microservice APIs, and Kubernetes custom tools.",
      tags: ["Networking", "Concurrency", "CLI Tools"]
    },
    {
      id: "lang-c",
      name: "C / C++",
      type: "language" as const,
      proficiency: "Intermediate" as const,
      experienceYears: "2+ Years",
      useCase: "Low-level system architecture comprehension, memory layout inspection, socket programming, buffer safety.",
      tags: ["System Programming", "Sockets", "Memory Safety"]
    },
    {
      id: "lang-sql",
      name: "SQL (PostgreSQL / MySQL)",
      type: "language" as const,
      proficiency: "Proficient" as const,
      experienceYears: "2+ Years",
      useCase: "Database query optimization, SIEM backend database integration, forensic transaction log analysis.",
      tags: ["PostgreSQL", "MySQL", "Queries", "Database"]
    },

    // Security & Forensics Tools
    {
      id: "sec-wireshark",
      name: "Wireshark & Tshark",
      type: "security-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Deep packet inspection (DPI), VoIP protocol analysis, TCP retransmission diagnosing, automated PCAP filtering.",
      tags: ["DPI", "Packet Capture", "Network Analysis"]
    },
    {
      id: "sec-nmap",
      name: "Nmap & NSE",
      type: "security-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Network mapping, open port enumeration, firewall evasion scans, vulnerability detection with Lua scripts.",
      tags: ["Reconnaissance", "Port Scanning", "NSE Scripts"]
    },
    {
      id: "sec-burp",
      name: "Burp Suite",
      type: "security-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Web application penetration testing, HTTP proxy intercept, Repeater and Intruder payload fuzzing, OWASP checks.",
      tags: ["Web Security", "HTTP Proxy", "OWASP Top 10"]
    },
    {
      id: "sec-metasploit",
      name: "Metasploit Framework",
      type: "security-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Controlled exploit validation in sandbox labs, vulnerability verification, post-exploitation assessment.",
      tags: ["Exploit Testing", "Sandbox Testing", "PenTesting"]
    },
    {
      id: "sec-snort",
      name: "Snort & Suricata",
      type: "security-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Signature rule creation, network intrusion detection (NIDS), inline threat prevention, alert triage.",
      tags: ["NIDS", "IPS", "Signature Rules"]
    },
    {
      id: "sec-volatility",
      name: "Volatility & Autopsy",
      type: "security-tool" as const,
      proficiency: "Intermediate" as const,
      useCase: "RAM memory dump analysis, process injection identification, digital forensic timeline extraction from disk images.",
      tags: ["Memory Forensics", "Disk Forensics", "DFIR"]
    },
    {
      id: "sec-hashcat",
      name: "John the Ripper / Hashcat",
      type: "security-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Password strength validation, credential audit in simulated AD environments, rule-based dictionary attacks.",
      tags: ["Password Auditing", "Hash Analysis", "Security"]
    },

    // DevOps, Cloud & Automation Tools
    {
      id: "dev-docker",
      name: "Docker & Podman",
      type: "devops-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Building minimal multi-stage images, rootless container security, Docker Compose topologies, seccomp confinement.",
      tags: ["Containers", "Rootless", "Compose", "DevSecOps"]
    },
    {
      id: "dev-kubernetes",
      name: "Kubernetes & Helm",
      type: "devops-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Cluster operations, RBAC policies, NetworkPolicies, Helm charts, Cilium eBPF integration.",
      tags: ["K8s", "Orchestration", "Helm", "eBPF"]
    },
    {
      id: "dev-terraform",
      name: "Terraform",
      type: "devops-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Declarative Infrastructure as Code (IaC), AWS VPC modules, remote S3 state backend with DynamoDB locking.",
      tags: ["IaC", "Cloud Automation", "AWS Modules"]
    },
    {
      id: "dev-ansible",
      name: "Ansible",
      type: "devops-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Idempotent playbook automation, automated CIS Benchmark Level 2 server hardening, inventory orchestration.",
      tags: ["Configuration Mgmt", "Playbooks", "Hardening"]
    },
    {
      id: "dev-vault",
      name: "HashiCorp Vault",
      type: "devops-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Centralized secrets storage, dynamic database credentials, PKI certificate authority, K8s token auth.",
      tags: ["Secrets Management", "PKI", "Zero-Trust"]
    },
    {
      id: "dev-git",
      name: "Git & GitHub / GitLab",
      type: "devops-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Version control workflows, GitOps automation, CI/CD pipeline security scanning with Trivy and SonarQube.",
      tags: ["Version Control", "CI/CD", "GitOps"]
    },

    // Monitoring, SIEM & System Tools
    {
      id: "mon-wazuh",
      name: "Wazuh SIEM",
      type: "monitoring-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Host-based intrusion detection, custom XML decoders, automated active response scripts, vulnerability audits.",
      tags: ["SIEM", "HIDS", "Active Response", "MITRE"]
    },
    {
      id: "mon-elk",
      name: "Elastic Stack (ELK)",
      type: "monitoring-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Logstash centralized ingestion pipelines, Elasticsearch indices, Kibana security event dashboards.",
      tags: ["Elasticsearch", "Logstash", "Kibana", "Log Analysis"]
    },
    {
      id: "mon-prometheus",
      name: "Prometheus & Grafana",
      type: "monitoring-tool" as const,
      proficiency: "Proficient" as const,
      useCase: "Infrastructure telemetry collection, Node Exporter metrics, custom Alertmanager notifications, dashboard visualizers.",
      tags: ["Metrics", "Dashboards", "Alertmanager"]
    },
    {
      id: "mon-pfsense",
      name: "pfSense / OPNsense",
      type: "monitoring-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Stateful routing, multi-WAN failover, WireGuard/IPsec gateway tunnels, DMZ isolation, HA CARP clustering.",
      tags: ["Firewall", "Routing", "VPN Gateway", "VLANs"]
    },
    {
      id: "mon-proxmox",
      name: "Proxmox VE & ESXi",
      type: "monitoring-tool" as const,
      proficiency: "Advanced" as const,
      useCase: "Type-1 bare metal hypervisor management, virtual bridge networking, snapshot lifecycles, lab sandbox isolation.",
      tags: ["Virtualization", "Hypervisor", "KVM", "Sandbox"]
    }
  ] as ToolOrLanguageItem[]
};

