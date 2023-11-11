"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";


const Contact = () => {
  const [numberInput, setNumberInput] = React.useState(250);
  const [option, setOption] = React.useState('number');
  const [dummyText, setDummyText] = React.useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [hasMounted, setHasMounted] = React.useState(false);


  const generateDummyText = (numberInput: number, option: string) => {
   
    if (option === 'number') {
      return 'Your number-based dummy text here...';
    } else if (option === 'word') {
      return 'Your word-based dummy text here...';
    } else if (option === 'character') {
      return 'Your character-based dummy text here...';
    } else {
      return '';
    }
  };


  React.useEffect(() => {
    const newText = generateDummyText(numberInput, option);
    setDummyText(newText);
  }, [numberInput, option]);

  const reset = () => {
    setDummyText('');
  };

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
             

              <div className="5 mb-7">
              <label className="5 mb-7">
          Number Input:
          <input
            type="number"
            value={numberInput}
            onChange={(e) => setNumberInput(parseInt(e.target.value))}
          />
        </label>
              </div>
              <div className="5 mb-7">
              <label>
            Options:
            <label>
              <input
                type="radio"
                value="number"
                checked={option === 'number'}
                onChange={() => setOption('number')}
              />
              Number
            </label>
            <label>
              <input
                type="radio"
                value="word"
                checked={option === 'word'}
                onChange={() => setOption('word')}
              />
              Word
            </label>
            <label>
              <input
                type="radio"
                value="character"
                checked={option === 'character'}
                onChange={() => setOption('character')}
              />
              Character
            </label>
          </label>
              </div>
            
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-shiraj-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
             

             
                
                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Generated dummy text will appear here"
                    rows={5}
                    ref={textAreaRef}
          value={dummyText}
          onChange={() => {}}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                    onClick={reset}
                  >
                    Reset
                  
                  </button>
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                   Select All
                  
                  </button>
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                  >
                    Copy to clipBoard
                 
                  </button>
                </div>
              
            </motion.div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
