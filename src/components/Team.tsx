'use client';
import { ReactElement, useState } from "react";
import { data, Member } from "../../constant/index";
import Image from "next/image";
import github from "../../public/github.svg";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";
import MemberPhotoWall from "./PhotoWall";


export default function TeamMember(): ReactElement {
    const [selectedYear, setSelectedYear] = useState<string>(
        Object.keys(data)[0]
    );
    return (
        <div id="team-member" className="max-w-[90vw] md:max-w-[1200px] mx-auto mt-28 mb-12">
            <MemberPhotoWall/> 
            <div className="flex items-center gap-[3vw]">
                {Object.keys(data).map((year) => (
                    <div
                        key={year}
                        className={`w-36 border-2 border-blue-500 text-center rounded-3xl transition duration-500 ease-in-out cursor-pointer font-Jost text-l font-medium leading-[3.5rem] text-blue-500 ${selectedYear === year ? 'text-white bg-blue-500' : 'text-blue-500 bg-white'}`}
                        onClick={() => setSelectedYear(year)}
                    >
                        {year}
                    </div>
                ))}
            </div>
            <h2 className="text-3xl text-gray-700 font-bold my-12">Member Introduction</h2>
            <div className="flex items-center justify-between flex-wrap gap-[3vw]">
                {data[selectedYear].members.map((member, key) => (
                    <div key={key} className={`flex w-[35rem] h-[min(21.5rem,50vw)] items-center justify-between rounded-[20px] border-b-4 shadow-md ${key % 3 === 0 ? 'border-b-5 border-google-red' : key % 3 === 1 ? 'border-b-5 border-google-green' : 'border-b-5 border-google-yellow'} hover:border-[5px] hover:border-[#ea4336|#34a852|#faab00] transition duration-300`}>
                        <img
                            className="w-[32.5%] h-[60%]"
                            src={member.photo}
                            alt="ERROR"
                        />
                        <div className="flex flex-col w-[50%] h-[70%] justify-between">
                            <p className="h-[10%] mb-0 font-medium text-[1rem]">{member.name}</p>
                            <p className="h-[10%] mb-0 font-medium text-[1rem]">{member.jobTitle}</p>
                            <p className="h-[10%] mb-0 font-medium text-[1rem]">{member.department}</p>
                            <p className="font-normal">{member.introduction}</p>
                            <div className="flex h-[15%] gap-[1.5rem]">
                                <a href={member.instagram} target="_blank">
                                    <Image
                                        src={instagram}
                                        alt="ERROR"
                                        className="w-[1.75rem] h-[1.75rem]"
                                    />
                                </a>
                                <a href={member.github} target="_blank">
                                    <Image
                                        src={github}
                                        alt="ERROR"
                                        className="w-[1.75rem] h-[1.75rem]"
                                    />
                                </a>
                                <a href={member.linkedin} target="_blank">
                                    <Image
                                        src={linkedin}
                                        alt="ERROR"
                                        className="w-[1.75rem] h-[1.75rem]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
