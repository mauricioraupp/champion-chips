"use client";

import { motion, HTMLMotionProps } from "framer-motion";

export const MotionHeader = (props: HTMLMotionProps<"header">) => <motion.header {...props} />;
export const MotionSection = (props: HTMLMotionProps<"section">) => <motion.section {...props} />;
export const MotionNav = (props: HTMLMotionProps<"nav">) => <motion.nav {...props} />;