export const validateText = value => {
  let error;

  if (!value || value === '') {
    error = 'This field is required';
  } else if (['admin', 'null', 'god'].includes(value)) {
    error = 'Nice try!';
  }

  return error;
};

export const validateEmail = value => {
  let error;

  if (!value) {
    error = 'E-mail is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Wrong e-mail address';
  }

  return error;
};

export const validateUrl = value => {
  let error;

  if (value) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );
    if (!pattern.test(value)) {
      error = 'Wrong URL';
    }
  }

  return error;
};

export const validateApplyText = value => {
  let error;

  if (value) {
    let url = null;
    let email = null;

    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );

    if (pattern.test(value)) {
      url = true;
    }

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      email = true;
    }

    if (!email && !url) {
      error = 'Write e-mail or link';
    }
  } else {
    error = 'This field is required';
  }

  return error;
};

export const validateLawText = value => {
  let error;

  if (value) {
    if (value.indexOf('_______') > -1) {
      error = 'Please fill this field _______';
    }
  } else {
    error = 'Law note is required';
  }

  return error;
};

export const validateCheckbox = value => {
  let error;

  if (!value || value === 'no') {
    error = 'Rules confirmation is required';
  }

  return error;
};

export const validateSize = value => {
  let error;

  if (value) {
    var pattern = new RegExp('[a-zA-Z]');

    if (pattern.test(value)) {
      error = 'Accept chars: 0-9 < > = -';
    }
  }

  return error;
};
