import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Container = styled('div')({
  width: '80%',
  margin: 'auto',
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  // borderRadius: '15px',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How we determine whether a food is healthy or not?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We utilizes a comprehensive database of nutritional information and health metrics to analyze the nutritional value of different foods. We take into account factors such as calories, macronutrients, vitamins, and minerals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What type of foods does the website cover?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our database includes a wide range of foods, including fruits, vegetables, grains, dairy products, meats, and packaged/processed foods. We strive to provide a diverse selection to cater to various dietary preferences.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Are there any personalized recommendations based on individual dietary needs?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, our website provides personalized recommendations based on user preferences, dietary restrictions, and health goals. Users can input their profile information to receive tailored suggestions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>How accurate is the calorie information on the website?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We strive for accuracy by sourcing information from reputable databases and food manufacturers. However, it's essential to note that actual calorie content may vary based on factors such as cooking methods and specific product variations.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default CustomizedAccordions;
