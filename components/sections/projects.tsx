import { Container } from "../container";
import { MotionUp, ProjectCard } from "../animations";
import { SmallGridBackground } from "../bg-patterns";

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

                    <div className="mt-10">
                        <ProjectCard/>
                    </div>
                </MotionUp>
            </Container>
        </SmallGridBackground>
    );
}
