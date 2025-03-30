# Shriram Vasudevan's Personal Website

A minimalist personal website built with Next.js and Tailwind CSS.

## Features

- Home page with current status/activities
- Projects page with image cards and technology tags
- Contact page with links to social profiles
- Responsive design with clean, minimalist aesthetic
- Dark mode by default

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Adding Projects

To add a new project, edit the `projects` array in `src/pages/projects.js`:

```javascript
const projects = [
  {
    title: 'your project title',
    description: 'brief description of your project',
    image: '/your-image.jpg', // Place image in public folder
    link: 'https://example.com/project',
    technologies: ['tech1', 'tech2', 'tech3']
  },
  // Add more projects here
]
```

### Updating Personal Information

Update your personal information in:
- `src/pages/index.js` - For the home page content
- `src/pages/contact.js` - For contact information
- `src/components/Layout.js` - For social media links in the footer

### Adding Profile Image

Place your profile image in the public folder and name it `profile.jpg`, or update the image source in `src/pages/index.js`.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
