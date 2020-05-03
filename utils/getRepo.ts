import fetch from 'node-fetch';

import { getRepoQuery } from './getRepoQuery';

type ReturnValue = { readme: string|null };

const defaultReturnValue: ReturnValue = {
  readme: null,
};

export const getRepo = async (repository?: string): Promise<ReturnValue> => {
  if (!repository) {
    return defaultReturnValue;
  }

  try {
    const response = await fetch(
      'https://api.github.com/graphql',
      {
        method: 'POST',
        headers: {
          Authorization: `bearer ${process.env.NEXT_APP_GH_TOKEN}`,
        },
        body: JSON.stringify({
          query: getRepoQuery('bodgingbear', repository),
        }),
      },
    );

    const data = await response.json();

    return {
      readme: data?.data?.organization?.repository?.readme?.text || null,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return defaultReturnValue;
  }
};
