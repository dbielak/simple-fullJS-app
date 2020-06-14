import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import ReCAPTCHA from 'react-google-recaptcha';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import iconSet from '../helpers/selection.json';
import IcomoonReact from 'icomoon-react';

import Tooltip from '@material-ui/core/Tooltip';

import Info from '@material-ui/icons/InfoOutlined';

import styles from '../styles/helpers';

const select = ({ classes, field, label, children, tooltip, disabled, form: { touched, errors, setFieldValue } }) => (
  <FormControl className={classes.wrapper}>
    <TextField
      {...field}
      className="select"
      label={label}
      id={field.name}
      error={touched[field.name] && errors[field.name] ? true : false}
      select
      disabled={disabled}
      fullWidth
      selected={field.value}
      onChange={e => setFieldValue(field.name, e.target.value)}>
      {children.map(option => (
        <MenuItem key={option.props.value} value={option.props.value}>
          {option.props.children}
        </MenuItem>
      ))}
    </TextField>
    {tooltip && (
      <Tooltip title={tooltip} aria-label={field.name}>
        <Info className={classes.infoIconStyle} />
      </Tooltip>
    )}
    {touched[field.name] && errors[field.name] && <FormHelperText className={classes.textHelper}>{errors[field.name]}</FormHelperText>}
  </FormControl>
);
const renderSelectField = withStyles(styles)(select);

const textField = ({
  classes,
  field,
  label,
  disabled,
  postfix,
  type,
  count,
  tooltip,
  placeholder,
  form: {
    touched,
    errors,
    setFieldValue,
    initialValues: { companyEmail }
  }
}) => (
  <div>
    <FormControl className={classes.width100}>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <Input
        {...field}
        disabled={disabled}
        id={field.name}
        name={field.name}
        placeholder={placeholder}
        type={type}
        fullWidth
        error={touched[field.name] && errors[field.name] ? true : false}
        onChange={e => setFieldValue(field.name, type === 'text' || type === 'email' || !type ? e.target.value : Number(e.target.value))}
        endAdornment={postfix && <InputAdornment position="end">{String(postfix).toUpperCase()}</InputAdornment>}
      />
      {tooltip && (
        <Tooltip title={tooltip} aria-label={field.name}>
          <Info className={classes.infoIconStyle} />
        </Tooltip>
      )}
      {count && (
        <div className={classes.counter}>
          {field.value.length} / {count}
        </div>
      )}
      {touched[field.name] && errors[field.name] && <FormHelperText className={classes.textHelper}>{errors[field.name]}</FormHelperText>}
    </FormControl>
  </div>
);
const renderTextField = withStyles(styles)(textField);

const textAreaField = ({ classes, field, label, type, disabled, form: { touched, errors, setFieldValue } }) => (
  <div>
    <FormControl className={classes.width100}>
      <InputLabel className={classes.inputLabel} htmlFor={field.name}>
        {label}
      </InputLabel>
      <Input
        {...field}
        id={field.name}
        name={field.name}
        type={type}
        disabled={disabled === 1 ? true : false}
        multiline={true}
        disableUnderline
        rows={5}
        className={`${classes.areaField} ${touched[field.name] && errors[field.name] && classes.textAreaError}`}
        error={touched[field.name] && errors[field.name] ? true : false}
        onChange={e => setFieldValue(field.name, e.target.value)}
      />
      {touched[field.name] && errors[field.name] && <FormHelperText className={classes.textHelper}>{errors[field.name]}</FormHelperText>}
    </FormControl>
  </div>
);
const renderTextAreaField = withStyles(styles)(textAreaField);

const checkbox = ({ classes, field, label, children, form: { touched, errors, setFieldValue } }) => (
  <>
    <FormControlLabel
      control={
        <Checkbox
          {...field}
          color="secondary"
          checked={field.value === 'yes' ? 'checked' : null}
          onChange={e => setFieldValue(field.name, field.value === 'no' ? 'yes' : 'no')}
          value={field.value}
        />
      }
      label={children}
    />
    {touched[field.name] && errors[field.name] && <FormHelperText className={classes.checkboxTextHelper}>{errors[field.name]}</FormHelperText>}
  </>
);
const renderCheckbox = withStyles(styles)(checkbox);

const radioGroup = ({ classes, field, children, form: { values, setFieldValue } }) => {
  const result = children.map(child => {
    return (
      <label key={child.name} className={classes.radioWrapper}>
        <div className={`tech ${classes.iconWrapper} ${child.value} ${values.technology === child.value && 'clicked'}`}>
          <IcomoonReact iconSet={iconSet} color="#fff" size={child.normalSize} icon={child.value} />
        </div>
        <p className={classes.radioDesc}>{child.name}</p>
        <input className={classes.hide} type="radio" name={field.name} value={child.value} onChange={e => setFieldValue(field.name, child.value)} />
      </label>
    );
  });

  return result;
};
const renderRadioGroup = withStyles(styles)(radioGroup);

const checkboxGroup = ({ field, children, onChange }) => {
  const result = children.map(child => {
    return (
      <label key={child.value}>
        <img src={`/icons/${child.value}.png`} alt={child.label} />
        <input style={{ visibility: 'hidden' }} type="checkbox" name={field.name} value={child.value} onChange={e => onChange(e.target.value)} />
      </label>
    );
  });

  return result;
};
const renderCheckboxGroup = withStyles(styles)(checkboxGroup);

const benefits = ({ classes, field, children, onChange, form: { values } }) => {
  const result = children.map(child => {
    let color;
    if (values.benefits.includes(child.value)) {
      color = '#f44336';
    } else {
      color = '#607D8B';
    }

    return (
      <Grid key={child.value} className={classes.benefitsWrapper} item xs={6} sm={3} md={2}>
        <Button className={classes.width100} key={child.value} onClick={() => onChange(child.value)}>
          <div className={classes.bIconWrapper}>
            <IcomoonReact iconSet={iconSet} color={color} size={22} icon={child.value} />
            <span className={classes.bTitle}>{child.label}</span>
          </div>
        </Button>
      </Grid>
    );
  });

  return result;
};
const renderBenefits = withStyles(styles)(benefits);

const captcha = ({ classes, field, form: { touched, errors, setFieldValue } }) => (
  <>
    <ReCAPTCHA sitekey="6Ld-Qp0UAAAAACo2R4ne2oJ0B7AP_CSBCcEod6aN" onChange={() => setFieldValue('captcha', true)} />
    {touched['applyEmail'] && <FormHelperText className={classes.captchaInfo}>{errors[field.name]}</FormHelperText>}
  </>
);
const renderCaptcha = withStyles(styles)(captcha);

export {
  renderSelectField,
  renderTextField,
  renderTextAreaField,
  renderCheckbox,
  renderRadioGroup,
  renderCheckboxGroup,
  renderBenefits,
  renderCaptcha
};
