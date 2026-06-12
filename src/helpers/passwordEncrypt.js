'use strict';

import crypto from 'node:crypto';

const loopCount = 10_000,
      charCount = 32,
      encType = 'sha512';

const hashPassword = (password) => {
  return crypto
    .pbkdf2Sync(password, process.env.SECRET_KEY, loopCount, charCount, encType)
    .toString('hex');
};

export default hashPassword;
