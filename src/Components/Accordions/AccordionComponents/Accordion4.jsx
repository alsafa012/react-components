import { useState } from 'react';

const accordionData = [{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing? This is my new', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-red-500', colorBorder: 'border-red-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'}];
    const Accordion4 = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
           <div className="w-fit mx-auto min-h-[300px] flex shadow-md overflow-hidden">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button onClick={() => handleToggle(idx)} className={`h-full w-fit flex items-end pb-10 bg-white border-b-8 ${_.colorBorder} shadow-[2px_2px_5px_#00000083]`}>
                            <div className={`w-16 h-16 text-white ${_.colorBg} relative flex items-center justify-center`}>
                                <span className={`w-0 h-0 ${_.colorBorder} border-r-[60px] border-b-[60px] rounded-lg border-r-transparent absolute rotate-[225deg] left-8 -z-50`}></span>0{idx + 1}
                            </div>
                        </button>
                        {/* container */}
                        <div className={`grid place-content-center  ${isActive === idx ? 'w-56 px-5 opacity-1 scale-1' : 'w-0 opacity-0 scale-0'} text-black duration-300 ease-in-out`}>
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Accordion4;