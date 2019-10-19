/* global navigator */
import absoluteUrl from 'next-absolute-url';

import canUseEmojiDomain from './canUseEmojiDomain';
import redirect from './redirect';

const emojiOrigin = 'https://xn--rihx924p.ws';
const normalOrigin = 'https://bodgingbear.dev';

const emojiurlifier = (req, res) => {
  const { origin } = absoluteUrl(req);
  if (
    process.env.NODE_ENV === 'production'
    && (origin === emojiOrigin || origin === normalOrigin)
  ) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    const canUseEmoji = canUseEmojiDomain(userAgent);

    if (canUseEmoji && origin !== emojiOrigin) {
      redirect(res, emojiOrigin);
      return true;
    } if (!canUseEmoji && origin !== normalOrigin) {
      redirect(res, normalOrigin);
      return true;
    }
  }

  return false;
};

export default emojiurlifier;
