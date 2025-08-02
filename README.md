# Felora

A portfolio photography website built with Nuxt.js. This project showcases stunning photography collections, features a responsive gallery, and provides an elegant platform for photographers to display their work. Built with Nuxt.js for fast performance, SEO optimization, and a smooth user experience.

## How It Works

- **Dynamic Navigation Header:**  
  The navigation header is generated dynamically based on a content file (`content/links.json`). This allows you to update navigation links (including sub-links) without changing the code.

- **Composable for Navigation Data:**  
  The `useNavigation` composable fetches and caches navigation data from the content file. Components can use this composable to access navigation links reactively.

- **Content-Driven Structure:**  
  Navigation structure is defined in a JSON file, making it easy to manage and localize.

## Updating Navigation

1. **Edit Navigation Links:**  
   Open `content/links.json` and update the `nav_links` array. You can add, remove, or modify links and sub-links as needed.

2. **Automatic Update:**  
   The header component will automatically reflect any changes made to the navigation content file, with no need to restart the server or modify Vue components.

3. **Using the Composable:**  
   To access navigation links in a component, import and call the `useNavigation` composable:

   ```js
   import { useNavigation } from "~/composables/useNavigation";
   const navigationData = await useNavigation();
   ```

4. **Rendering Navigation:**  
   The header iterates over `navigationData.nav_links` to render the navigation menu.

## Example Navigation Structure

```json
{
  "nav_links": [
    {
      "title": "صفحه اصلی",
      "path": "/"
    },
    {
      "title": "گالری",
      "path": "/gallery",
      "sub_links": [
        {
          "title": "عکاسی پرتره",
          "path": "/gallery/portrait"
        },
        {
          "title": "عکاسی طبیعت",
          "path": "/gallery/nature"
        }
      ]
    },
    {
      "title": "درباره ما",
      "path": "/about"
    }
  ]
}
```
