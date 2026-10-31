"use client";

import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

const defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ==========================================================================
   SIGNATURE THEME ICONS (BOOK ↔ BRAIN)
   ========================================================================== */

/**
 * Literary Open Book Icon
 * Delicately crafted open volume with spine, page spreads, and center ribbon bookmark.
 */
export function BookThemeIcon({
  size = 24,
  strokeWidth = 1.75,
  className = "",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      {...defaultProps}
      strokeWidth={strokeWidth}
      className={`transition-transform duration-300 ${className}`}
      {...props}
    >
      {/* Book Covers and Pages */}
      <path d="M4 19.5v-13A2.5 2.5 0 0 1 6.5 4H12v15.5H6.5A2.5 2.5 0 0 0 4 22" />
      <path d="M20 19.5v-13A2.5 2.5 0 0 0 17.5 4H12v15.5h5.5A2.5 2.5 0 0 1 20 22" />
      {/* Page detail lines */}
      <path d="M7 8h3" opacity="0.65" />
      <path d="M7 11.5h3" opacity="0.65" />
      <path d="M14 8h3" opacity="0.65" />
      <path d="M14 11.5h3" opacity="0.65" />
      {/* Center ribbon marker */}
      <path d="M12 4v7l1.5-1 1.5 1V4" fill="currentColor" fillOpacity="0.25" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Cybernetic Neural Brain Icon
 * Sophisticated digital brain with cerebral lobes and pulsing interconnected synaptic nodes.
 */
export function BrainThemeIcon({
  size = 24,
  strokeWidth = 1.75,
  className = "",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      {...defaultProps}
      strokeWidth={strokeWidth}
      className={`transition-transform duration-300 ${className}`}
      {...props}
    >
      {/* Left hemisphere contour */}
      <path d="M9.5 5A4 4 0 0 0 5 9a3.5 3.5 0 0 0 .5 4 4 4 0 0 0 0 4 3.5 3.5 0 0 0 4 2" />
      {/* Right hemisphere contour */}
      <path d="M14.5 5A4 4 0 0 1 19 9a3.5 3.5 0 0 1-.5 4 4 4 0 0 1 0 4 3.5 3.5 0 0 1-4 2" />
      {/* Central neural fissure */}
      <path d="M12 4.5v15" strokeDasharray="1.5 1.5" />
      {/* Synaptic nodes & bridges */}
      <circle cx="9" cy="9" r="1.25" fill="currentColor" />
      <circle cx="15" cy="9" r="1.25" fill="currentColor" />
      <circle cx="8" cy="14" r="1.25" fill="currentColor" />
      <circle cx="16" cy="14" r="1.25" fill="currentColor" />
      <circle cx="12" cy="11" r="1.2" fill="currentColor" />
      <path d="M9 9l3 2 3-2" opacity="0.75" />
      <path d="M8 14l4-3 4 3" opacity="0.75" />
    </svg>
  );
}

/* ==========================================================================
   NAVIGATION & SECTION MARKS
   ========================================================================== */

export function HomeIcon({ size = 20, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
      <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
    </svg>
  );
}

export function AboutIcon({ size = 20, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <path d="M18 4l2 2-2 2" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

export function CreationsIcon({ size = 20, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
      <path d="M10 6.5h4" strokeDasharray="1 1" />
      <path d="M6.5 10v4" strokeDasharray="1 1" />
      <path d="M17.5 10v4" strokeDasharray="1 1" />
      <path d="M10 17.5h4" strokeDasharray="1 1" />
    </svg>
  );
}

export function OdysseyIcon({ size = 20, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="12,7 14.5,11.5 19,12 14.5,12.5 12,17 9.5,12.5 5,12 9.5,11.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function WritingIcon({ size = 20, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
      <path d="M4 17l3 3" opacity="0.5" />
    </svg>
  );
}

export function ContactIcon({ size = 20, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75" />
      <path d="M2.25 6.75l9.75 6.75 9.75-6.75" />
      <rect x="2.25" y="4.5" width="19.5" height="15" rx="2" />
    </svg>
  );
}

/* ==========================================================================
   SKILLS & COMPETENCY ICONS
   ========================================================================== */

/** AI & Data Science Icon: Neural Network Cluster */
export function SkillsAIIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <circle cx="6" cy="6" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="6" cy="18" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="18" cy="6" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="18" cy="18" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.25" />
      <path d="M8.2 7.5l2 2.5" />
      <path d="M8.2 16.5l2-2.5" />
      <path d="M15.8 7.5l-2 2.5" />
      <path d="M15.8 16.5l-2-2.5" />
      <path d="M6 8.5v7" strokeDasharray="1 1" />
      <path d="M18 8.5v7" strokeDasharray="1 1" />
    </svg>
  );
}

/** Full Stack Web Icon: Layers of Front & Back Code */
export function SkillsWebIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 8l-2 2 2 2" />
      <path d="M17 8l2 2-2 2" />
      <path d="M13 7.5l-2 5" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

/** Databases & Cloud Icon: Tiered Storage Cylinders */
export function SkillsDatabaseIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor" fillOpacity="0.15" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      <circle cx="8" cy="12" r="0.75" fill="currentColor" />
      <circle cx="8" cy="18" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** Programming & Embedded Tech Icon: Hardware IC Chip & Logic */
export function SkillsProgrammingIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.1" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
      <path d="M2 9h4" />
      <path d="M2 15h4" />
      <path d="M18 9h4" />
      <path d="M18 15h4" />
      <path d="M9 2v4" />
      <path d="M15 2v4" />
      <path d="M9 18v4" />
      <path d="M15 18v4" />
    </svg>
  );
}

/** Tools & Engineering Workflows: Precision Caliper & Compass */
export function SkillsToolsIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="currentColor" fillOpacity="0.1" />
      <circle cx="7" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

/** Leadership, Research & Governance: Academic Pediment / Temple */
export function SkillsLeadershipIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <polygon points="12,3 2,8 22,8" fill="currentColor" fillOpacity="0.15" />
      <path d="M4 8v10" />
      <path d="M9 8v10" />
      <path d="M15 8v10" />
      <path d="M20 8v10" />
      <path d="M2 18h20" />
      <path d="M1 21h22" />
    </svg>
  );
}

/* ==========================================================================
   LEARNING ODYSSEY CHAPTER MARKS
   ========================================================================== */

/** Explores: Astrolabe / Celestial Discovery Compass */
export function OdysseyExploresIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="16,8 13.5,13.5 8,16 10.5,10.5" fill="currentColor" fillOpacity="0.25" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Projects: Dynamic Blueprint & Bolt of Creation */
export function OdysseyProjectsIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

/** Certifides: Classical Scroll / Parchment with Seal */
export function OdysseyCertifidesIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="9 3 9 7 15 7 15 3" />
      <circle cx="12" cy="13" r="3" fill="currentColor" fillOpacity="0.2" />
      <path d="M10.5 15.5L9 18l3-1 3 1-1.5-2.5" />
    </svg>
  );
}

/** College Life: Mortarboard & Lyceum Arch */
export function OdysseyCollegeIcon({ size = 24, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <polygon points="12,3 2,8 12,13 22,8" fill="currentColor" fillOpacity="0.2" />
      <path d="M6 10.5v5c0 2.2 2.7 4 6 4s6-1.8 6-4v-5" />
      <path d="M22 8v8" />
      <circle cx="22" cy="16.5" r="1" fill="currentColor" />
    </svg>
  );
}

/* ==========================================================================
   INTERACTIVE, DOCUMENT & UI CONTROLS
   ========================================================================== */

export function DocumentResumeIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 16, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function ArrowDownIcon({ size = 16, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ArrowUpIcon({ size = 16, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export function CloseIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function MenuIcon({ size = 20, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function SearchIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function FilterIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

/** Artistic Gift Book Icon */
export function BookGiftIcon({ size = 28, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M4 19.5v-14A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M9 3v8l2-1.5 2 1.5V3" fill="currentColor" fillOpacity="0.35" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* ==========================================================================
   CONTACT & SOCIAL CHANNELS
   ========================================================================== */

export function EmailIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 8.5c.3-.3.6-.3.9 0l1.2 1.2c.3.3.3.6 0 .9l-.6.6c-.2.2-.2.5 0 .8 1 1.4 2.2 2.6 3.6 3.6.3.2.6.2.8 0l.6-.6c.3-.3.6-.3.9 0l1.2 1.2c.3.3.3.6 0 .9-.5.6-1.3 1-2.1.8-2.6-.5-5-2-6.8-3.8-1.8-1.8-3.3-4.2-3.8-6.8-.2-.8.2-1.6.8-2.1z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function PhoneIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function LocationIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GitHubIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function XTwitterIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M4 4l6.5 7.5L4 20h2.5l5.2-6 4.8 6H20l-6.8-7.9L19.5 4H17l-4.7 5.4L7.8 4H4z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

export function SparklesIcon({ size = 18, strokeWidth = 1.75, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...defaultProps} strokeWidth={strokeWidth} className={className} {...props}>
      <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}
