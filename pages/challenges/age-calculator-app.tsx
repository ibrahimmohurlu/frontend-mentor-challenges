import Image from "next/image";
import { useState } from "react";

export default function AgeCalculatorApp() {

    const [calculatedAge, setCalculatedAge] = useState({ day: "", month: "", year: "" });

    return <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-800 font-poppins">
        <div className="flex flex-col rounded-xl min-w-[800px] rounded-br-[80px] bg-white p-16">

            {/* input section */}
            <div className="flex flex-row gap-8 ">
                <div className="flex flex-col w-32 gap-2">
                    <label htmlFor="day" className="text-base font-bold  text-gray-400 uppercase">day</label>
                    <input id="day" name="day" placeholder="DD" type="text" className="text-[32px] px-4 py-2 font-bold border border-age-calculator-app-purple focus:outline-none rounded-lg" />
                </div>

                <div className="flex flex-col w-32 gap-2">
                    <label htmlFor="month" className="text-base font-bold  text-gray-400 uppercase">month</label>
                    <input id="month" name="month" placeholder="MM" type="text" className="text-[32px] px-4 py-2 font-bold border border-age-calculator-app-purple focus:outline-none rounded-lg" />
                </div>

                <div className="flex flex-col w-32 gap-2">
                    <label htmlFor="year" className="text-base font-bold  text-gray-400 uppercase">year</label>
                    <input id="year" name="year" placeholder="YYYY" type="text" className="text-[32px] px-4 py-2 font-bold border border-age-calculator-app-purple focus:outline-none rounded-lg" />
                </div>

            </div>

            {/* divider and button section */}
            <div className="flex flex-row w-full justify-center items-center">
                <div className="w-full h-[1px] bg-gray-300" />
                <div>
                    <button className="relative flex w-24 h-24 rounded-full hover:bg-black hover:text-white bg-age-calculator-app-purple items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
                    </button>
                </div>
            </div>

            {/* calculated age section */}
            <div className="flex flex-col text-8xl">
                <p className="font-extrabold italic">
                    <span className="text-age-calculator-app-purple italic">{calculatedAge.year ? calculatedAge.year : "- -"}</span> years
                </p>
                <p className="font-extrabold italic">
                    <span className="text-age-calculator-app-purple italic">{calculatedAge.month ? calculatedAge.month : "- -"}</span> months
                </p>
                <p className="font-extrabold italic">
                    <span className="text-age-calculator-app-purple italic">{calculatedAge.day ? calculatedAge.day : "- -"}</span> days
                </p>
            </div>

        </div>
    </div>
}