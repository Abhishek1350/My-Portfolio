import { Container } from "../container";
import { MotionUp, ProjectCard } from "../animations";
import { SmallGridBackground } from "../bg-patterns";


const projects = [
    {
        title: "Free Games Hub",
        img: "https://cdn.sanity.io/images/y178r8ab/production/5933cfd9b21d92c48c57272648203199851d246d-1764x926.png?fit=max&auto=format",
        description:
            "Explore a world of free PC games and browser-based fun at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
        liveUrl: "https://www.freegameshub.fun",
        gitUrl: "https://github.com/abhishek1350",
        techStack: ["NextJS", "NextUI", "TailwindCSS", "TypeScript"],
    },
    {
        title: "DOGE INU",
        img: "https://cdn.sanity.io/images/y178r8ab/production/af233932d4dc9ba7a7dd6700e79278577cab2620-1902x914.png?fit=max&auto=format",
        description:
            "A community driven meme token on Dogechain! DINU was made to unleash the creativity and full potential of the DOGE community.",
        liveUrl: "https://dogeinu.dog",
        techStack: ["ReactJS", "TailwindCSS", "TypeScript"],
    },
    {
        title: "My Portfolio",
        img: "https://cdn.sanity.io/images/y178r8ab/production/da0932dc9508cfedb39af25ae07a710cdf5d978e-1896x921.png?fit=max&auto=format",
        description:
            "My personal portfolio, built with NextJS, TypeScript and Sanity CMS",
        liveUrl: "https://www.imabhishek.online",
        gitUrl: "https://github.com/abhishek1350",
        techStack: ["NextJS", "TailwindCSS", "TypeScript"],
    },
];

export function Projects() {
    return (
        <SmallGridBackground className="py-20">
            <Container>
                <MotionUp delay={0.2}>
                    <div className="flex justify-center relative z-20">
                        <div className="flex  items-center">
                            <span className="w-24 h-[2px] bg-slate-800"></span>
                            <h6 className="bg-slate-900 w-fit font-bold text-3xl text-blue-100 p-2 px-5 rounded-md">
                                A small selection of recent projects
                            </h6>
                            <span className="w-24 h-[2px] bg-slate-800"></span>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </MotionUp>
            </Container>
        </SmallGridBackground>
    );
}
