import Image from "next/image";
import React from "react";
import { FaLocationDot, FaPhone, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-background py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        <div className="flex items-center md:items-start ">
          <Image
            src="/logo/tsu-logo.webp"
            width={80}
            height={80}
            alt="Tarlac State University Logo"
          />
          <h1 className="text-2xl font-semibold mt-2 text-center md:text-left ml-5">
            Tarlac State <br /> University
          </h1>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-md space-y-2 text-secondary">
            <li>
              <Link
                href="https://www.tsu.edu.ph/privacy/data-privacy-notice/"
                target="_blank"
              >
                Data Privacy Notice
              </Link>
            </li>
            <li>
              <Link href="https://www.foi.gov.ph/">FOI Portal</Link>
            </li>
            <li>
              <Link
                href="https://www.tsu.edu.ph/good-governance/transparency-seal/"
                target="_blank"
              >
                Transparency Seal
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tsu.edu.ph/good-governance/citizen-s-charter/"
                target="_blank"
              >
                Citizen's Charter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tsu.edu.ph/opportunities/bid-opportunities/"
                target="_blank"
              >
                Bid Opportunities
              </Link>
            </li>
            <li>
              <Link href="https://www.tsu.edu.ph/publications/" target="_blank">
                Publications
              </Link>
            </li>
            <li>
              <Link href="https://imoc.tsu.edu.ph/" target="_blank">
                I.M.O.C.
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tsu.edu.ph/opportunities/job-opening/"
                target="_blank"
              >
                Careers @ TSU
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tsu.edu.ph/contact-us/telephone-directory/"
                target="_blank"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="https://www.tsu.edu.ph/news/" target="_blank">
                News
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tsu.edu.ph/downloads/for-faculty-and-personnel/"
                target="_blank"
              >
                Download
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
          <div className="flex gap-4 items-center my-3">
            <FaLocationDot size={23} className="" />
            <p>
              Tarlac State University, Romulo Boulevard, San Vicente, Tarlac
              City, Tarlac, 2300, Philippines
            </p>
          </div>
          <div className="flex gap-4 items-center my-3">
            <FaPhone size={23} className="" />
            <p>Phone: +63 45 606-8123</p>
          </div>
          <div className="flex gap-4 items-center my-3">
            <MdEmail size={23} className="" />
            <p>Email: helpdesk@tsu.edu.ph</p>
          </div>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookSquare size={50} className="text-secondary" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaSquareXTwitter size={50} className="text-secondary" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={50} className="text-secondary" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutubeSquare size={50} className="text-secondary" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-lg">
        <p>&copy; 2024 Tarlac State University. All rights reserved.</p>
        <div className="text-sm mt-2 space-x-4 text-secondary">
          <Link href="https://www.tsu.edu.ph/legal/" target="_blank">
            Legal
          </Link>
          <Link href="https://www.tsu.edu.ph/privacy/" target="_blank">
            Privacy
          </Link>
          <Link href="https://www.tsu.edu.ph/terms-of-service/" target="_blank">
            Terms of Service
          </Link>
          <Link href="https://www.tsu.edu.ph/accessibility/" target="_blank">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
