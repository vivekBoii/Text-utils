import React, { useState } from 'react'

function Textform(props) {
  const [input,setInput] = useState("");
  const [output,setOutput] = useState("");
  const [closeModal,setcloseModal] = useState(false);
  const [customStyle,setcustomStyle] = useState({});
  let countLen=0;

  const removePunc = () =>{
    setOutput(input.replace(/[.,\/#!$%^@&*;:{}=\-_`~()?"'<>]/g, ''));
  }

  const senetenceCase = () =>{
    let array = input.split(".");
    array = array.map(element => element.charAt(0).toUpperCase() + element.slice(1));
    setOutput(array.join("."));
    setcustomStyle({});
  }

  const addBold = () =>{
    setOutput(input);
    setcustomStyle({fontWeight: 'bold',})
  }

  const talic = () =>{
    setOutput(input);
    setcustomStyle({ fontStyle: 'italic',})
  }

  const underline = () =>{
    setOutput(input);
    setcustomStyle({textDecoration: 'underline',})
  }

  const Strikethrough = () =>{
    setOutput(input);
    setcustomStyle({textDecoration: 'line-through',})
  }

  const countLength = () =>{
    let array = input.split(" ");
    for (let i = 0; i < array.length; i++) {
        if(array[i].length!=0){
            countLen++;
        }
    }
    return countLen;
  }

  const handleCopyClick = async() => {
    if(output.length!=0){
        try {
            await navigator.clipboard.writeText(output);
            setcloseModal(!closeModal)
          } catch (err) {
            
          }
    }
  };

    return (
        <div className={props.mode?"bg-[#1C1A1C] pb-10":"bg-[#efb2c7] pb-10"}>
            <section className="xl:mx-0 2xl:mx-36 pt-10">
                <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                    <div className="container mx-auto">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="mt-12 lg:mt-0">
                                <h1 className={props.mode?"mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl":"mb-12 text-5xl font-bold tracking-tight text-[#f04984] md:text-6xl xl:text-7xl"}>
                                Are you ready for <br /><span className={props.mode?"text-[hsl(218,81%,75%)]":"text-blue-600"}>Best Online Tool?</span>
                                </h1>
                                <p className={props.mode?"mb-10 text-md xl:text-lg text-[hsl(218,81%,95%)]":"mb-10 text-md xl:text-lg text-black"}>
                                    One Stop Solution to All Text Formatting that you need , It have what you need Uppercase , Lowercase , Remove Puncutation and Many more what are wating for try it now ?
                                </p>
                                <div className="flex md:order-2 justify-center lg:justify-start">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                                </div>
                            </div>  
                            <div className="mb-12 lg:mb-0">
                                <img className='' src="./rocket.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className= 'py-0 lg:py-10 w-full'>
                <h1 className={props.mode?'text-white text-4xl sm:text-5xl font-bold lg:my-10':'text-black text-4xl sm:text-5xl font-bold lg:my-10'}>Welcome to TextUtils</h1>
                <section className="md:mx-10 lg:mx-36 2xl:mt-10">
                <div className="px-4 lg:px-6 lg:py-12 text-center md:px-12 lg:text-left">
                    <div className="container mx-auto"></div>
                        <div className="grid gap-12 lg:grid-cols-2">
                            <div className="mt-12 lg:mt-0">
                                <textarea id="message1" rows="15" className={props.mode?"text-white block w-full p-2.5 text-sm text-gray-900 bg-[#252425] rounded-lg border focus:ring-blue-500 focus:border-blue-500 border-gray-600 ":"text-black block w-full p-2.5 text-sm placeholder-black bg-[#f282a9] rounded-lg border border-pink-300 focus:outline-none"} value={input} onChange={(event)=>{setInput(event.target.value)}} placeholder="Input Text Here...."></textarea>
                            </div>  
                            <div className="mb-12 lg:mb-0">
                                <textarea id="message2" rows="15" style={customStyle} className={props.mode?"text-white block w-full p-2.5 text-sm text-gray-900 bg-[#252425] rounded-lg border focus:ring-blue-500 focus:border-blue-500 border-gray-600 ":"text-black block w-full p-2.5 text-sm placeholder-black bg-[#f282a9] rounded-lg border border-pink-300 focus:outline-none"} value={output} onChange={(event)=>{setOutput(event.target.value)}} placeholder="Output Text Here...."></textarea>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mx-4 sm:mx-10 md:mx-24 lg:mx-48 mb-10 flex gap-10 flex-wrap justify-center">
                    <div className="flex md:order-2">
                        <p className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700">Number of Words : {countLength()} | Number of Alphabet : {input.replace(/[.,\/#!$%^@&*;:{}=\-_`~()?"'<> ]/g, '').length}</p>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={handleCopyClick} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Copy Text</button>
                    </div>
                    {/* modal  */}
                    <div id="popup-modal" tabIndex="-1" style={{ display:closeModal? 'block':'none',}}  className="fixed top-0 left-0 right-0 hidden z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative left-1/2 translate-x-[-50%] w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button onClick={()=>{setcloseModal(!closeModal)}} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-6 text-center">
                                    <svg className="mx-auto mb-4 text-black w-12 h-12 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <h3 className="text-lg font-normal text-black dark:text-white">Text Copied to Clipboard</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal  */}
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setInput(output)}} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Make Output as Input</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setInput("")}} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear Text</button>
                    </div>
                </section>
                <section className="mx-4 sm:mx-10 md:mx-24 lg:mx-48 flex gap-10 flex-wrap justify-center">
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setOutput(input.toUpperCase()); setcustomStyle({});}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Uppercase</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setOutput(input.toLowerCase()); setcustomStyle({});}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lowercase</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={removePunc} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove Puncutation</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setOutput(input.replace(/[ ]/g,'')); setcustomStyle({});}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove Spaces</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={senetenceCase} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sentence Case</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={addBold} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bold</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={talic} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Italic</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={underline} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Underline</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={Strikethrough} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Strikethrough</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setOutput(input.replace(/[[\]{}()]/g,'')); setcustomStyle({});}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove Brackets</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setOutput(input.replace(/[ ]/g,'😍')); setcustomStyle({});}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Emoji</button>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setOutput(input.replace(/\s+/g,' ')); setcustomStyle({});}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove Extra Spaces</button>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Textform