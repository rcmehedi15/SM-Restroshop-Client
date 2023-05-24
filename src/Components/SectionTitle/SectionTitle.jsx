import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <div className="mx-auto text-center md:w-4/12 my-8">
                <p className="text-[#393950] mb-2"> --- {subHeading} --- </p>
                <h3  className="text-3xl text-[#332FD0]  uppercase border-y-4 rounded-md py-4">{heading}</h3>
            </div>
        </>
    );
};

export default SectionTitle;