const canUseEmojiDomain = (
  userAgent,
) => {
  let useEmojiDomain = /^((?!chrome).)*safari/i.test(userAgent);

  if (userAgent.indexOf('CriOS') > -1) {
    useEmojiDomain = false;
  }

  return useEmojiDomain;
};

export default canUseEmojiDomain;
