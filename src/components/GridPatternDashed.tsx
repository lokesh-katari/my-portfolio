"use client";

import { cn } from "@/lib/utils";
import GridPattern from "../components/GridPatterns";
import StarBorder from "./StartBorder";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import "aos/dist/aos.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import XIcon from "@mui/icons-material/X";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";
import { SplitText } from "./SplitText";
import GradientText from "./GradientText";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#4F46E5",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
  },
}));

// Animation variants only for hero section
const heroContentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

export function GridPatternDashed() {
  const { theme } = useTheme();
  const colors =
    theme === "dark"
      ? ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]
      : ["#ffaa40", "#9c40ff", "#ffaa40"];

  return (
    <div className="border-none  flex size-full items-center justify-center  overflow-hidden rounded-lg  bg-background ">
      <Toaster
        reverseOrder={false}
        toastOptions={{
          style: {
            border: "1px solid #4F46E5",
            padding: "16px",
            color: "#FFFFFF",
            backgroundColor: "#000000",
          },
        }}
      />
      <p className="z-10  ">
        <div className="text-center px-4 max-w-3xl">
          <motion.div variants={heroContentVariants} className="space-y-7 ">
            <motion.div
              variants={heroContentVariants}
              className="text-2xl md:text-3xl flex  items-center justify-start   gap-x-3"
            >
              {/* <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}> */}
              <SplitText
                text="Hello"
                className="text-3xl   md:text-[45px] pt-2"
                delay={300}
              />
              {/* </LinearGradient> */}
              <span className="inline-block animate-wave">👋</span>
            </motion.div>

            <motion.div
              variants={heroContentVariants}
              className="text-4xl lg:text-8xl md:text-7xl   md:w-full flex items-baseline md:gap-x-3  gap-x-2 lg:w-max sm:w-max   text-center "
            >
              <span className=" "> I&apos;m </span>
              <GradientText
                colors={colors}
                // Custom gradient colors
                animationSpeed={8} // Custom animation speed in seconds
                showBorder={false} // Show or hide border
                className="p-1" // Add one or more custom classes
              >
                Lokesh Katari
              </GradientText>
            </motion.div>
            <motion.div
              variants={heroContentVariants}
              className="text-md md:text-3xl    md:mx-auto px-4 sm:px-6 md:px-8 max-w-xl sm:max-w-2xl md:max-w-3xl"
            >
              A software engineer / Developer
            </motion.div>

            <motion.div
              variants={heroContentVariants}
              className="flex justify-center items-center text-gray-400 text-md md:text-2xl    md:mx-auto px-4 sm:px-6 md:px-8 max-w-xl sm:max-w-2xl md:max-w-3xl"
            >
              <MapPin className="mr-2 h-5 w-5" />
              <span className="pt-1 ml-1">
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                  In
                </span>
                <span className="bg-gradient-to-r from-white to-green-500 text-transparent bg-clip-text">
                  dia
                </span>
              </span>
            </motion.div>

            <motion.div
              variants={heroContentVariants}
              className="flex justify-center space-x-8  "
            >
              {[
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/lokesh-katari",
                  title: "LinkedIn",
                },
                {
                  icon: Github,
                  link: "https://github.com/lokesh-katari",
                  title: "GitHub",
                },
                {
                  icon: XIcon,
                  link: "https://twitter.com/lokeshkatari921",
                  title: "Twitter",
                },
                {
                  icon: Mail,
                  link: "mailto:your.email@example.com",
                  title: "Email",
                },
              ].map((social, index) => (
                <BootstrapTooltip
                  key={index}
                  title={social.title}
                  placement="top"
                  arrow
                >
                  <motion.a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-700  dark:text-gray-300 hover:text-white transition-colors"
                  >
                    <social.icon strokeWidth={1.9} className="h-6 w-6" />
                  </motion.a>
                </BootstrapTooltip>
              ))}
            </motion.div>

            <motion.div variants={heroContentVariants} className="inline-block">
              <StarBorder>
                <div className="">
                  <div className="font-mono flex items-center space-x-4 ">
                    <span className="">npx lokeshkatari</span>
                    <BootstrapTooltip
                      title="Copy command"
                      placement="top"
                      arrow
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={async () => {
                          await navigator.clipboard.writeText(
                            "npx your-portfolio"
                          );
                          toast("Command copied ✨", {
                            position: "top-right",
                            style: {
                              backgroundColor: "#000000",
                              color: "#FFFFFF",
                            },
                          });
                        }}
                        className=" hover:text-white transition-colors"
                      >
                        <ContentCopyIcon />
                      </motion.button>
                    </BootstrapTooltip>
                  </div>
                </div>
              </StarBorder>
            </motion.div>

            {/* Scroll indicator */}
            {/* <motion.div
              variants={heroContentVariants}
              className=" bottom-8  transform -translate-x-1/2 "
              animate={{
                y: [0, 10, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="text-gray-400 text-sm">Scroll to explore</div>
              <div className="mt-2 h-6 w-0.5 bg-gray-400 mx-auto"></div>
            </motion.div> */}
          </motion.div>
        </div>
      </p>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
