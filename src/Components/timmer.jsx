import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiAmazon, SiGithub, SiGoogle, SiMeta, SiTwitch } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { div } from "framer-motion/client";

export const Todo = () => {

  // useEffect(() => {
  // }, []);
  return (
    <div>
        <h1 className="text-3xl font-bold p-2 text-center"> Days Left</h1>
    <section className="grid grid-cols-3 content-center justify-evenly p-4 gap-2 md:gap-4 md:p-4">
      <LogoRolodex
        items={[]}
        DELAY_IN_MS={1000*360}
        time = 'hour'
      />
      <LogoRolodex
        items={[]}
        DELAY_IN_MS={1000*60}
        time = 'min'
      />
      <LogoRolodex
        items={[]}
        DELAY_IN_MS={1000}
        time = 'sec'
      />
    </section>
    </div>
  );
};



const LogoRolodex = ({ items, DELAY_IN_MS, time }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);
  const today = new Date();
  const sec = today.getSeconds();
  const min = today.getMinutes();
  const hour = today.getHours();
  const TRANSITION_DURATION_IN_SECS = 1;
  const current = time==='sec' ? sec : time==='min' ? min : time==='hour' ? hour : time
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 w-full h-28 md:h-44 md:w-60 shrink-0 rounded-xl border border-green-800 bg-green-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          <div key={1}
          className={twMerge(
            "grid h-20 w-20 text-2xl md:h-36 md:w-52 place-content-center rounded-lg bg-green-700 md:text-6xl text-neutral-50")}
        >
          {current}
        </div>
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
         <div key={1}
          className={twMerge(
            "grid h-20 w-20 text-2xl md:h-36 md:w-52 place-content-center rounded-lg bg-green-700 md:text-6xl text-neutral-50")}
        >
          {current}
        </div>
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-green-800"
      />
    </div>
    </div>
  );
};


export default Todo;