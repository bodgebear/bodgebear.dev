import { ResolvingMetadata } from "next";

export async function generateGameMetadata(
  pageMetadata: GamePageMetadata,
  parent: ResolvingMetadata,
) {
  const { title } = await parent;

  return {
    title: !title
      ? pageMetadata.name
      : `${pageMetadata.name} | ${title.template ?? title.absolute}`,
  };
}
