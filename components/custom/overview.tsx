import { motion } from "framer-motion";
import Link from "next/link";

import { LogoOpenAI, MessageIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border rounded-lg p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <MessageIcon />
        </p>
        <p>
          {"Yo, welcome to the chat zone! It's like, type words, hit send, and BOOM—stuff happens. This thing just *works*, okay? You don't even need to know why. Magic."}
        </p>
        <p>
          {"If you're curious (why tho), go ahead and check"}{" "}
          <Link
            className="text-blue-500 dark:text-blue-400"
            href="https://youtube.com/watch?v=zjkBMFhNj_g"
            target="_blank"
          >
            how llms work
          </Link>
          , but like, only if you wanna be extra about it.
        </p>
      </div>
    </motion.div>
  );
};
