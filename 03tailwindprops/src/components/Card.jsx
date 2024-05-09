/* eslint-disable react/prop-types */
import {
    GiAbstract020,
    GiAbstract024,
    GiAbstract041,
    GiAbstract104,
} from "react-icons/gi";

function Card1({ heading, description, icon, className }) {
    return (
        <div className={`flex gap-4 rounded-xl shadow-sm p-6 ${className}`}>
            <div className="min-w-max">{icon}</div>
            <div className="space-y-2">
                <h3 className="text-[22px] font-semibold">{heading}</h3>
                <p className="leading-8 text-gray-500 font-normal">{description}</p>
            </div>
        </div>
    );
}

function Card1Presentation() {
    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 bg-white p-3 sm:p-8">
            <Card1
                className="bg-[#765e7f]"
                heading="Heading"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                icon={<GiAbstract020 size="2.5rem" className="text-[#7f7f7f]" />}
            />
            <Card1
                className="bg-[#bdb193]"
                heading="Heading"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                icon={<GiAbstract024 size="2.5rem" className="text-[#f5be34]" />}
            />
            <Card1
                className="bg-[#ff8989]"
                heading="Heading"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                icon={<GiAbstract041 size="2.5rem" className="text-[#fd3b62]" />}
            />
            <Card1
                className="bg-[#2da8ff]"
                heading="Heading"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                icon={<GiAbstract104 size="2.5rem" className="text-[#c2c2c2]" />}
            />
        </div>
    );
}

export { Card1Presentation };
