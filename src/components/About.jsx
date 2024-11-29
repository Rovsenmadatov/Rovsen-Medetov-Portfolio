const aboutItems = [
    {
        label: 'Project done',
        number: 25
    },
    {
        label: 'Years of experience',
        number: 3
    }
];


const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
                    <p className="text-zinc-300 mb-4 font-semibold md:mb-8 md:text-xl md:max-w-[80ch] ">
                        I am <span className="text-blue-400">Rovsen Medetov</span>, an 19 year old front-end developer from Baku, Azerbaijan. With over three years of experience in the field, I am currently at an intermediate level and actively working to improve my skills further. Throughout this journey, I have taken on responsibilities as a team leader and worked on various freelance projects, gaining valuable experience.
                        <br />
                        I have a strong interest in modern JavaScript technologies and enjoy exploring new frameworks to enhance my development capabilities. My analytical mindset and attention to detail help me approach challenges effectively and deliver quality results.
                        <br />
                        Driven by a passion for learning and growth, I aim to become a highly skilled front-end developer and contribute to meaningful projects that make a difference.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">
                                        {label}
                                    </p>
                                </div>
                            ))
                        }

                        <img src="/images/logo.svg" alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
