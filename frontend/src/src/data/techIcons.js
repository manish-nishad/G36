// techIcons.js
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiAmazonwebservices,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiCisco,
  SiDocker,
  SiKubernetes,
  SiFirebase,
} from "react-icons/si";

import { FaNetworkWired, FaShieldAlt, FaCloud } from "react-icons/fa";
import { MdVpnLock, MdOutlineSecurity } from "react-icons/md";

export const techIcons = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  AWS: SiAmazonwebservices,

  Python: SiPython,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,

  Cisco: SiCisco,
  Firewall: FaShieldAlt,
  VPN: MdVpnLock,
  "Active Directory": FaNetworkWired,

  "IP Cameras": MdOutlineSecurity,
  NVR: FaNetworkWired,
  "Cloud Storage": FaCloud,
  "AI Analytics": MdOutlineSecurity,

  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: FaCloud,

  "React Native": SiReact,
  Firebase: SiFirebase,
};
