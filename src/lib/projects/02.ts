import type { CaseStudyProject } from "@/lib/types";

export const project02: CaseStudyProject = {
  id: "02",
  tag: "PRODUCT DESIGN",
  title: "HRM - VIBE CODING",
  description: "A full-stack HR management web application designed and built using AI-assisted development (Vibe Coding) to digitize paper timesheets, leave requests, and expense claims.",
  type: "WEB APP",
  featured: true,
  image: "/projects/02/hero.png",
  role: "UX/UI Designer (Sole Designer and System Architect)",
  timeline: "1 Month (Feb 2026 – Mar 2026)",
  tools: ["Agentic AI", "Next.js 16", "React 19", "MUI v7", "TypeScript", "PostgreSQL", "Prisma"],
  sections: [
    {
      type: "text-group",
      heading: "Overview",
      paragraphs: [
        "Personal project built to address active organizational inefficiencies. Responsive web application (desktop and mobile) built entirely with AI-assisted development (vibe coding).",
        "Scale: 60+ screens · 300+ components · 7 functional modules.",
      ],
    },
    {
      type: "bullet-list",
      heading: "The Problem",
      items: [
        "Inflexible Attendance Tracking: Staff were required to manually sign a paper timesheet at the physical office. For field personnel traveling directly to client sites in the morning, clocking in was physically impossible, resulting in unrecorded working hours and inaccurate timesheets.",
        "Delayed Leave Request Routing: Requesting leave required printing a physical form, walking it to a supervisor for a signature, and physically delivering it to HR. If a supervisor was off-site or occupied, requests remained stalled.",
        "Vulnerable Expense Management: Expenses required out-of-pocket payments followed by manual paper logging. The delay between transaction and filing often led to lost physical receipts and late reimbursements.",
      ],
    },
    {
      type: "text-group",
      heading: "The Approach",
      paragraphs: [
        "As a designer, rather than producing static mockups, I used AI-assisted development (vibe coding) to construct a working application.",
        "Under this model, the designer operates as the architect and product manager, defining user flows, database structures, interface layouts, and edge-case behavior. The AI executes the code generation. This direct feedback loop allowed for immediate usability testing against real-world database records, shifting the focus from visual representation to operational correctness.",
      ],
    },
    {
      type: "bullet-list",
      heading: "What I Designed",
      items: [
        "To serve distinct users without cluttering the interface, the platform implements role-based progressive disclosure. Regular employees access personal tracking modules, while managers and administrative personnel access high-density dashboard panels, approval queues, and organization configuration systems.",
        "Employee View: Dashboard (Personal) · Attendance: Clock In/Out, History, OT Request, Schedule Change · Leave: Request, History · Expenses: New Expense, Drafts, History · Support Tickets · My Requests · Profile",
        "HR / Admin View: Dashboard (Personal + HR + Finance) · Attendance: Daily Monitoring (All Staff), Analytics & Reporting, OT / Holiday-Work Config · Approvals Hub: HR (Leave, OT, Schedule), Finance (Expenses), IT (Support Tickets) · Employee Management · Organization Analytics · Settings (20+ config pages)",
      ],
    },
    {
      type: "numbered-list",
      heading: "Key Design Decisions",
      items: [
        {
          label: "Attendance Verification and Location Tracking",
          body: "Designed to eliminate check-in constraints for off-site workers while maintaining security parameters:",
          subitems: [
            {
              label: "Contextual Work Modes",
              body: "Staff choose between Office, WFH, or Offsite check-ins.",
            },
            {
              label: "Haversine Geofencing",
              body: "When selecting the Office mode, the device compares GPS coordinates against registered office locations using Haversine distance calculations. If the user is outside the radius, the system redirects them to log specific site details.",
            },
            {
              label: "Bangkok Time Zone Normalization",
              body: "To prevent shifts and clock-in errors caused by client-side time-zone variations, the system normalizes all server interactions to Asia/Bangkok time (ICT) using UTC-date boundaries.",
            },
            {
              label: "SWR-Based Session Synchronization",
              body: "Implemented SWR (Stale-While-Revalidate) cache pooling on the client to instantly synchronize check-in and checkout states across multiple devices, preventing dual-session conflicts.",
            },
          ],
        },
        {
          label: "Dashboard Interface",
          body: "An adaptive hub tailored to specific operational roles:",
          subitems: [
            {
              label: "Employee View",
              body: "Displays real-time shift status, available leave balances, personal request status logs, and immediate actions.",
            },
            {
              label: "HR and Administrative View",
              body: "Features live attendance monitors, pending approval notifications grouped by domain, and departmental KPI visualizations.",
            },
            {
              label: "IT Support View",
              body: "Displays ticket tracking pipelines and incoming resolution queues.",
            },
            {
              label: "Lazy-Loaded Modules",
              body: "Heavy components and tabs load dynamically to minimize initial page load latency and database queries.",
            },
          ],
        },
        {
          label: "Leave Request Workflow",
          body: "Replaced physical forms with an automated policy engine:",
          subitems: [
            {
              label: "Automatic Leave Balances",
              body: "The dashboard dynamically displays remaining quotas, eliminating manual calculations and HR queries.",
            },
            {
              label: "Thai Labor Law Guardrails",
              body: "The interface enforces local statutory policies, including gender-based leave type configurations, probation periods, career-level rules, and tenure milestones.",
            },
          ],
        },
        {
          label: "Expense Capture",
          body: "Designed to prevent receipt loss with a draft-first mobile lifecycle:",
          subitems: [
            {
              label: "Immediate Logging",
              body: "Employees capture a receipt and categorize it immediately, saving it locally as a draft.",
            },
            {
              label: "Floating Bulk Actions",
              body: "A floating contextual bulk-action bar appears upon selecting multiple draft cards, calculating totals dynamically and enabling single-click batch submission.",
            },
            {
              label: "Automated Mileage Calculations",
              body: "Vehicle reimbursement inputs auto-calculate financial amounts by multiplying entered travel distances by configured organizational rates.",
            },
          ],
        },
        {
          label: "Consolidated Approvals Hub",
          body: "A centralized system to manage pending organizational actions:",
          subitems: [
            {
              label: "Categorized Queues",
              body: "Approvals are separated into HR (leave, overtime, shifts), Finance (expenses), and IT (support requests).",
            },
            {
              label: "Batch Action Controls",
              body: "HR managers can select multiple requests to approve or reject them in a single action, reducing administrative overhead.",
            },
          ],
        },
      ],
    },
    {
      type: "text-group",
      heading: "Design System",
      paragraphs: [
        "Thai-First Localization: The application was built from the ground up to support Thai operational requirements. Interface text uses natural Thai terminology matching standard business language. The system implements th-TH-u-ca-gregory locale parameters for currency symbols (฿) and Buddhist calendar date formats.",
        "Custom MUI Registry and Styling: Built using Material UI v7 component configurations with custom theme overrides. A styled theme registry implements custom CSS overrides to maintain styling consistency across input fields, select menus, and datetime pickers in both light and dark modes. The layout transitions from structured desktop side-sheets to mobile bottom-sheet drawers, utilizing minimum 48px interactive touch targets.",
      ],
    },
    {
      type: "bullet-list",
      heading: "Build Process & Quality Control",
      items: [
        "Codebase Statistics: 467 files, approximately 80,000 lines of code, and 60 database models. Built entirely using AI-assisted development (vibe coding) under strict engineering guidelines.",
        "Modular Architecture: Business logic isolated into src/features/{domain} structures, dividing Server Actions (mutations) and Prisma queries (reads) to maintain clean separation of concerns.",
        "Automated Verification: Unit and integration tests using Jest and React Testing Library. Security-focused tests cover NextAuth configuration, route guards, API endpoint permissions, and OTP generation.",
      ],
    },
    {
      type: "numbered-list",
      heading: "Challenges & Constraints",
      items: [
        {
          label: "Timezone Synchronization and Shift Splits",
          subitems: [
            {
              label: "The Challenge",
              body: "Employees logging shifts near midnight or from traveling devices created fragmented attendance rows, shifting dates in the database when using standard UTC string serialization.",
            },
            {
              label: "The Solution",
              body: "Implemented localized date-key helper functions (toBangkokDateOnly and isoStringToDateKey) that isolate local Thai time calculations, bypassing direct UTC timezone shifts at the database transaction layer.",
            },
          ],
        },
        {
          label: "Dark Mode Input Inconsistencies in MUI X Pickers",
          subitems: [
            {
              label: "The Challenge",
              body: "Native MUI X date pickers and select menus displayed broken backgrounds and unreadable text in dark mode due to conflicting style sheets and global overrides.",
            },
            {
              label: "The Solution",
              body: "Registered custom theme augmentations inside the theme configuration, forcing text fields and pickers to adopt theme token variables with strict CSS priority overrides.",
            },
          ],
        },
        {
          label: "Stale Attendance States across Devices",
          subitems: [
            {
              label: "The Challenge",
              body: "Users logging out on mobile devices still saw active sessions on open desktop browser tabs, leading to data collisions.",
            },
            {
              label: "The Solution",
              body: "Integrated SWR-based data fetching for live attendance sessions, triggering immediate component revalidation upon window focus to force device state parity.",
            },
          ],
        },
      ],
    },
    {
      type: "text-group",
      heading: "Business & User Impact",
      paragraphs: [
        "The application replaces manual paper operations with a centralized digital infrastructure, enabling real-time attendance verification, automated calculation of leaves and overtime, and cross-departmental approval workflows.",
      ],
    },
    {
      type: "pull-quote",
      text: "467 files. 80,000+ lines of code. 60 database models. Zero lines written by hand. This is what happens when design leads and AI builds.",
    },
    {
      type: "image-grid",
      heading: "Screenshots",
      images: [
        { src: "/projects/02/hero.png", alt: "HRM dashboard with role-adaptive views", caption: "Role-adaptive dashboard: employee view with attendance, requests, and events" },
        { src: "/projects/02/detail-1.png", alt: "HRM approvals and leave management screens", caption: "Leave requests and approvals hub: multi-step paper process replaced with a single-screen digital flow" },
      ],
    },
    {
      type: "learnings",
      heading: "What I Learned",
      items: [
        "Compassionate Design with Safe Defaults: Edge cases like forgotten checkouts should be managed gracefully. The implementation of the retrospective auto-checkout corrected records through helper notifications rather than strict penalties, creating a more cooperative user experience.",
        "Immediate Prototyping Shortens Feedback Loops: Building functional React and Next.js applications directly from specifications allows designers to perform usability tests on complex databases early, catching structural flow issues that static mockups omit.",
        "Localization Goes Beyond Language: Designing for a specific region involves accommodating distinct calendar systems, formatting conventions, and local employment policies at the base level of the application architecture.",
      ],
    },
    {
      type: "bullet-list",
      heading: "What I'd Improve Next",
      items: [
        "Visual RBAC Auditor — Create an administrative screen to visually display and manage scoped role-permission overrides instead of auditing direct database tables.",
        "Integrated Payout Workflow — Introduce a dedicated reimbursement status workflow in the approvals dashboard to close the payment lifecycle for approved expenses.",
        "Explicit IT Scope Permission Matrix — Transition IT ticket visibility logic from basic department codes to a custom-defined permission access matrix.",
      ],
    },
  ],
};
