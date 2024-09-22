"use client"
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavbarInProps {
  toggleMenu: () => void;
}

interface NavLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode; // Allows passing in an optional icon
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, icon }) => {
  return (
    <a href={href} className="block hover:text-secondary hover:underline">
      {text} {icon && <span className="inline-block text-sm">{icon}</span>}
    </a>
  );
};

const navLinks = [
  {
    name: "About",
    content: (
      <>
        <h1 className="innerh1">General Information</h1>
        <NavLink href="#" text="University Profile" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="Vision, Mission and Core Values"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Quality Policy Statement"
          icon={<ArrowUpRight />}
        />
        <NavLink href="#" text="History" icon={<ArrowUpRight />} />
        <NavLink href="#" text="The TSU Logo" icon={<ArrowUpRight />} />
        <NavLink href="#" text="TSU Hymn" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Mandate and Function" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Charter" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Virtual Campus Tour" icon={<ArrowUpRight />} />
        <br />
        <h1 className="innerh1">Other</h1>
        <NavLink href="#" text="Board Regents" icon={<ArrowUpRight />} />
      </>
    ),
  },
  {
    name: "Admission",
    content: (
      <div>
        <h1 className="innerh1">Getting Admitted</h1>
        <NavLink href="#" text="Freshmen Students" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Transferees" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Foreign Students" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="Graduate Studies Students"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="School of Law Students"
          icon={<ArrowUpRight />}
        />
        <NavLink href="#" text="Shifters" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Second Courser" icon={<ArrowUpRight />} />
        <h1>Online Services</h1>
        <NavLink
          href="#"
          text="Cross Enrollees, Special Students and Returnees"
          icon={<ArrowUpRight />}
        />
      </div>
    ),
  },
  {
    name: "Administration",
    content: (
      <div>
        <h1 className="innerh1">Offices</h1>
        <NavLink
          href="#"
          text="Office of the Vice President for Administration and Finance"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Administration Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Business Affairs and Auxiliary Services Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Facilities Development and Management Office"
          icon={<ArrowUpRight />}
        />
        <NavLink href="#" text="Finance Office" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="Human Resource Development and Management Office"
          icon={<ArrowUpRight />}
        />
        <br />
        <h1 className="innerh1">Other Information</h1>
        <NavLink href="#" text="Facilities" icon={<ArrowUpRight />} />
      </div>
    ),
  },
  {
    name: "Academics",
    content: (
      <div>
        <h1 className="innerh1">Offices</h1>
        <NavLink
          href="#"
          text="Office of the Vice President for Academic Affairs"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Admission and Registration Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Student Affairs Services"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Alumni Affairs Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="National Service Training Program Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Library Management Services"
          icon={<ArrowUpRight />}
        />
        <br />
        <h1 className="innerh1">Other Information</h1>
        <NavLink href="#" text="Colleges" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="Student Organizations"
          icon={<ArrowUpRight />}
        />
        <NavLink href="#" text="Student Publications" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Academic Programs" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Academic Calendar" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Online Resources" icon={<ArrowUpRight />} />
        <br />
        <h1 className="innerh1">Event & Activities</h1>
        <NavLink
          href="#"
          text="Alumni Events and Announcements"
          icon={<ArrowUpRight />}
        />
        <br />
        <h1 className="innerh1">Portal</h1>
        <NavLink href="#" text="Library Portal" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="UMAP Student Connection Online (USCO) system"
          icon={<ArrowUpRight />}
        />
      </div>
    ),
  },
  {
    name: "Research & Extension",
    content: (
      <div>
        <h1 className="innerh1">Offices</h1>
        <NavLink
          href="#"
          text="Office of the Vice President for Research and Extension Services"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Office of University Research Development"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Office of the University Extension Services"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Gender and Development"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Technology Development Transfer and Commercialization Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Research Ethics Review Committee"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Food Technology and Research Center"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Publications & News Letters"
          icon={<ArrowUpRight />}
        />
        <br />
        <h1 className="innerh1">Publication & Newsletter</h1>
        <NavLink href="#" text="The Porch" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="The Development Chronicle"
          icon={<ArrowUpRight />}
        />
        <NavLink href="#" text="Create" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Inquest" icon={<ArrowUpRight />} />
      </div>
    ),
  },
  {
    name: "Planning & Quality Assurance",
    content: (
      <div>
        <h1 className="innerh1">Offices</h1>
        <NavLink href="#" text="Offices" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="Office of the Vice President for Planning and Quality Assurance"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Planning, Performance Monitoring and Evaluation Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Pollution Control and Safety Unit"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Quality Assurance Office"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Quality Management System Unit"
          icon={<ArrowUpRight />}
        />
        <br />
        <h1 className="innerh1">News & Events</h1>
        <NavLink href="#" text="VPPQA News" icon={<ArrowUpRight />} />
        <NavLink href="#" text="VPPQA Events" icon={<ArrowUpRight />} />
        <br />
        <h1 className="innerh1">Other Information</h1>
        <NavLink
          href="#"
          text="Status of Program Accreditation"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Compilation of Safety Protocols"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Certificates of Program Compliance"
          icon={<ArrowUpRight />}
        />
        <br />
        <h1 className="innerh1">Enrollment Policies</h1>
        <NavLink
          href="#"
          text="Policy on Non-Environmentally Acceptable Products"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Declaration of Tarlac State University as Smoke Free University"
          icon={<ArrowUpRight />}
        />
        <NavLink href="#" text="No Smoking Policy" icon={<ArrowUpRight />} />
      </div>
    ),
  },
  {
    name: "International Affairs",
    content: (
      <div className="innerh1">
        <NavLink
          href="#"
          text="International Affairs Information"
          icon={<ArrowUpRight />}
        />
      </div>
    ),
  },
  {
    name: "Alumni",
    content: (
      <div className="innerh1">
        <NavLink href="#" text="Alumni Information" icon={<ArrowUpRight />} />
      </div>
    ),
  },
  {
    name: "Portals",
    content: (
      <div>
        <h1 className="innerh1">Portals</h1>
        <NavLink href="#" text="Student Portal" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Library Portal" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="Scholarship Application"
          icon={<ArrowUpRight />}
        />
        <NavLink href="#" text="Student Manual" icon={<ArrowUpRight />} />
        <NavLink href="#" text="MS Teams For Student" icon={<ArrowUpRight />} />
        <br />
        <h1 className="innerh1">Faculty</h1>
        <NavLink href="#" text="Faculty Portal" icon={<ArrowUpRight />} />
        <NavLink href="#" text="ESMO-PMERS" icon={<ArrowUpRight />} />
        <NavLink href="#" text="Faculty Manual" icon={<ArrowUpRight />} />
        <NavLink href="#" text="MS Teams For Faculty" icon={<ArrowUpRight />} />
        <br />
        <h1 className="innerh1">Employee</h1>
        <NavLink href="#" text="Employee Portal" icon={<ArrowUpRight />} />
        <NavLink
          href="#"
          text="Clearance Application"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Online Leave Application"
          icon={<ArrowUpRight />}
        />
        <NavLink
          href="#"
          text="Automated Evaluation System for Non Teaching Personnel"
          icon={<ArrowUpRight />}
        />
        <br />
        <h1 className="innerh1">Other </h1>
        <NavLink href="#" text="Online Payment" icon={<ArrowUpRight />} />
      </div>
    ),
  },
];

const NavbarIn: React.FC<NavbarInProps> = ({ toggleMenu }) => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLinkClick = (linkName: string) => {
    setSelectedLink(linkName);
  };

  const selectedContent = navLinks.find(
    (link) => link.name === selectedLink
  )?.content;

  return (
    <motion.div
      className="fixed inset-0 bg-foreground bg-opacity-80 z-50 flex items-center px-5 py-16"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <button
        className="absolute top-0 right-0 text-background text-5xl hover:bg-primary cursor-pointer h-28 w-32 flex items-center justify-center"
        onClick={toggleMenu}
      >
        &times;
      </button>
      <nav className="text-background grid grid-cols-3 w-full h-full overflow-auto">
        <div className="col-span-1 max-h-full overflow-auto  border-r-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="block py-2 px-4 hover:underline text-xl md:text-6xl font-times cursor-pointer"
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="col-span-2 max-h-full overflow-auto p-10">
          {selectedContent}
        </div>
      </nav>
    </motion.div>
  );
};

export default NavbarIn;
