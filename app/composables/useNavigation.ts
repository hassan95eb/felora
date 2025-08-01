import { useState, useAsyncData } from "#app";

interface NavLink {
  title: string;
  path: string;
  sub_links?: NavLink[];
}

interface NavContent {
  nav_links: NavLink[];
}

export const useNavigation = async () => {
  const navigationLinks = useState<NavContent | null>("nav-links", () => null);

  if (!navigationLinks.value) {
    const { data } = await useAsyncData<NavContent | null>(
      "nav-links",
      async () => {
        const content = await queryContent("/links").findOne();
        return content as unknown as NavContent;
      }
    );

    if (data.value) {
      navigationLinks.value = data.value;
    }
  }

  return navigationLinks;
};
