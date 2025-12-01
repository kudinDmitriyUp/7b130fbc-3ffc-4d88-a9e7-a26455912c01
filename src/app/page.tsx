"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, BarChart3, BookOpen, Briefcase, DollarSign, Globe, Handshake, Lightbulb, Star, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Guglielmo Noya"
          button={{
            text: "Contact",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Senior Executive Leader in Global ICT & Telecom"
          description="30+ years driving strategic transformation, M&A operations, and business growth across Europe, USA, and Latin America. C-Level expertise in corporate finance, general management, and private equity advisory."
          tag="SVP - Head of Latin America"
          tagIcon={Briefcase}
          buttons={[
            {
              text: "View Experience",
              href: "experience"
            },
            {
              text: "Get in Touch",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607732213-xkldobbk.jpg",
              imageAlt: "Executive portrait"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607732933-t994n9f2.jpg",
              imageAlt: "Corporate environment"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607733794-z37agnlp.jpg",
              imageAlt: "Business leadership"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Career Overview"
          description="A distinguished executive career spanning three decades in telecom and ICT, with proven expertise in organizational leadership, financial strategy, and international business development."
          tag="30+ Years Experience"
          tagIcon={Award}
          bulletPoints={[
            {
              title: "Global Leadership",
              description: "C-Level executive experience across Europe, USA, and Latin America with major carriers and infrastructure companies",
              icon: Globe
            },
            {
              title: "Financial Strategy",
              description: "Deep expertise in corporate finance, M&A transactions, business restructuring, and financial planning",
              icon: BarChart3
            },
            {
              title: "Operational Excellence",
              description: "Former COO and CFO roles at TIM Brasil, Telecom Personal, and Entel PCS managing complex operations",
              icon: Zap
            },
            {
              title: "Strategic Investments",
              description: "Business Angel and founder with successful startup investments and venture advisory experience",
              icon: TrendingUp
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607732933-t994n9f2.jpg"
          imageAlt="Professional office environment"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardThree
          title="Key Executive Roles"
          description="Strategic leadership positions that defined career trajectory and industry impact"
          tag="Career Highlights"
          tagIcon={Briefcase}
          features={[
            {
              id: "01",
              title: "SVP - Head of Latin America",
              description: "APWireless Infrastructure Partners - Leading regional strategy and infrastructure development since 2021",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607733794-z37agnlp.jpg"
            },
            {
              id: "02",
              title: "Group Head of M&A",
              description: "Telecom Italia - Oversaw major mergers and acquisitions strategy for telecommunications giant (2010-2014)",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607734789-09luhd4k.jpg"
            },
            {
              id: "03",
              title: "CFO & COO",
              description: "TIM Brasil & Global Telecom Companies - Led financial planning and operational excellence in major markets",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607735521-71ztgsmc.jpg"
            },
            {
              id: "04",
              title: "Founder & Managing Partner",
              description: "Fair Winds Consulting - Founded boutique advisory for business development and M&A transactions (2017-2021)",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607733794-z37agnlp.jpg"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
        />
      </div>

      <div id="expertise" data-section="expertise">
        <MetricCardThree
          title="Core Expertise"
          description="Proven capabilities across key business domains"
          tag="Specializations"
          tagIcon={Star}
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Leadership",
              value: "30+ Years"
            },
            {
              id: "2",
              icon: DollarSign,
              title: "Finance",
              value: "Multi-Billion"
            },
            {
              id: "3",
              icon: Globe,
              title: "Markets",
              value: "3 Continents"
            },
            {
              id: "4",
              icon: Handshake,
              title: "Board Roles",
              value: "Multiple"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
        />
      </div>

      <div id="education" data-section="education">
        <SplitAbout
          title="Education & Languages"
          description="Advanced business education with multilingual fluency enabling effective international operations and stakeholder engagement"
          tag="Academic Foundation"
          tagIcon={BookOpen}
          bulletPoints={[
            {
              title: "MBA - ISDA",
              description: "Master's Degree in Business Administration with scholarship (1989-1990)",
              icon: Award
            },
            {
              title: "Master's - Sapienza University",
              description: "Mechanical Engineering degree - 110 summa cum laude from Rome's premier university",
              icon: Lightbulb
            },
            {
              title: "Multilingual Proficiency",
              description: "Native Italian, Full professional English, Portuguese, and Spanish - enabling seamless international engagement",
              icon: Globe
            },
            {
              title: "Continuous Learning",
              description: "Commitment to professional development and industry expertise across ICT, finance, and business strategy",
              icon: Target
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607736197-6plw3l9n.jpg"
          imageAlt="Learning and development"
          imagePosition="left"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Interested in discussing business opportunities, advisory roles, or strategic partnerships? Reach out directly."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "your@email.com",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Your Company",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your inquiry...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764607732213-xkldobbk.jpg"
          imageAlt="Professional contact"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Profile",
              items: [
                {
                  label: "Experience",
                  href: "experience"
                },
                {
                  label: "Education",
                  href: "education"
                },
                {
                  label: "Skills",
                  href: "expertise"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/guglielmo-noya"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Info",
              items: [
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms",
                  href: "/terms"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Guglielmo Noya. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}