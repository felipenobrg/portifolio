import { useTranslation } from "react-i18next";
import {
  ButtonsContainer,
  CardContainer,
  DescriptionProject,
  GitHubButton,
  TechnologiesContainer,
  TextAboutProjectContainer,
  VisitButton,
} from "./styles";
import { ArrowSquareOut } from "phosphor-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export interface ProjectCardProps {
  projectId: string;
  imgSrc: string;
  title: string;
  description: string;
  technology1: string;
  technology2: string;
  technology3: string;
  technology4: string;
  urlProject: string;
  githubUrl?: string;
}

export function ProjectCard({
  imgSrc,
  title,
  technology1,
  technology2,
  technology3,
  technology4,
  urlProject,
  githubUrl,
}: ProjectCardProps) {
  const { t } = useTranslation()
  return (
    <CardContainer>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <TextAboutProjectContainer>
        <DescriptionProject>
          <h1>{title}</h1>
          <p>{t("Projects.projectsDescription1")}</p>
        </DescriptionProject>
        <TechnologiesContainer>
          <p>{technology1}</p>
          <p>{technology2}</p>
          <p>{technology3}</p>
          <p>{technology4}</p>
        </TechnologiesContainer>
        <ButtonsContainer>
        <VisitButton href={urlProject}>
          {" "}
          <ArrowSquareOut size={24} />
          <p>{t("Projects.projectsButtonName")}</p>
        </VisitButton>
        <GitHubButton href={urlProject}>
          <p><GitHubLogoIcon href={githubUrl} />GitHub</p>
        </GitHubButton>
        </ButtonsContainer>
      </TextAboutProjectContainer>
    </CardContainer>
  );
}
