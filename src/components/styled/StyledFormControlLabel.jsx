import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const labelStyles = {
  root: {
    color: 'black',
  },
  label: {
    fontWeight: '700',
    lineHight: 'normal',
  },
};

const StyledFormControlLabel = withStyles(labelStyles)(FormControlLabel);
export default StyledFormControlLabel;
