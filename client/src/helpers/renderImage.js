import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternateOutlined';
import styles from '../styles/renderImage';

function renderImageField(props) {
  const { classes } = props;

  const handleFileChange = e => {
    if (!e.target.files) {
      return;
    }

    let file = e.target.files[0];

    const data = new FormData();
    data.append('file', file);

    fetch(`${process.env.REACT_APP_SERVER_URL}/upload`, { method: 'POST', body: data })
      .then(async res => {
        if (res.status === 200) {
          return await res.json();
        }
      })
      .then(res => {
        if (res) {
          var img = new Image();
          img.addEventListener(
            'load',
            () => {
              props.form.setFieldValue('companyLogo', res.file);
            },
            false
          );
          img.src = `${process.env.REACT_APP_IMAGES_URL}/${res.file}`;
        }
      });
  };

  return (
    <label className={`${classes.wrapper}`} htmlFor="companyLogo">
      {props.form.values.companyLogo ? (
        <img src={`${process.env.REACT_APP_IMAGES_URL}/${props.form.values.companyLogo}`} alt="LOGO" className={classes.image} />
      ) : (
        <div className={classes.addLogoWrapper}>
          <AddPhotoAlternate
            color={`${props.form.errors.companyLogo && props.form.touched.companyLogo ? 'secondary' : 'disabled'}`}
            className={classes.logoIcon}
          />
          <span className={`${classes.logoText} ${props.form.errors.companyLogo && props.form.touched.companyLogo && classes.imageError}`}>
            Add logo
          </span>
        </div>
      )}
      <input id="companyLogo" name="companyLogo" type="file" onChange={handleFileChange} className={classes.hide} />
    </label>
  );
}

export default withStyles(styles)(renderImageField);
