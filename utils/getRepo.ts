import { GH_TOKEN } from "./env";

import { getRepoQuery } from "./getRepoQuery";

type ReturnValue = { readme: string | null };

const defaultReturnValue: ReturnValue = {
  readme: null,
};

export const getRepo = async (repository?: string): Promise<ReturnValue> => {
  if (!repository) {
    return defaultReturnValue;
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GH_TOKEN}`,
      },
      body: JSON.stringify({
        query: getRepoQuery("bodgingbear", repository),
      }),
    });

    // TODO:
    const data = (await response.json()) as any;
    console.log(data);

    return {
      readme: data?.data?.organization?.repository?.readme?.text || null,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return defaultReturnValue;
  }
};
