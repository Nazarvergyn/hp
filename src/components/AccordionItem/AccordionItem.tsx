import "./styles.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled(Accordion)({
  background: "transparent",
  boxShadow: "none",
  borderRadius: 0,
  borderBottom: "1px solid #3D3F45",
  padding: 0,
  margin: 0,
  "&:last-of-type": {
    borderRadius: 0,
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  padding: 0,
  margin: 0,
  display: "flex",
});

const StyledAccordionDetails = styled(AccordionDetails)({
  padding: 0,
  margin: 0,
  display: "flex",
});

const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
  color: "#FFFFFF",
});

interface Props {
  // expanded?: number | boolean;
  index: number;
  title: string;
  description: string;
}

const AccordionItem: React.FC<Props> = ({
  // expanded,
  index,
  title,
  description,
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={index * 150}>
      <StyledAccordion
      // expanded={expanded === accordion}
      // onClick={() => handleChange(accordion)}
    >
      <StyledAccordionSummary
        expandIcon={<StyledExpandMoreIcon />}
        aria-controls="accordion"
        id="accordion"
      >
        <h4 className="text-baseText text-lg sm:text-xl font-semibold leading-[160%]">
          {title}
        </h4>
      </StyledAccordionSummary>

      <StyledAccordionDetails>
        <span className="mb-3 sm:mb-4 md:mb-6 text-[rgba(213,214,215,0.88)] text-xs sm:text-sm leading-[150%]">
          {description}
        </span>
      </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default AccordionItem;