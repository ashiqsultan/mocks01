# React Boilerplate (Vite, Tailwind, TypeScript, ESLint, Prettier)

## Usage

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   ```

2. **Optional: Remove Git History**
   If you want to start fresh, you can remove the `.git` directory:
   ```bash
   rm -rf .git
   ```
   > ⚠️ **Important:** If you remove the `.git` directory, make sure to run `yarn install` or `npm install` afterwards to properly set up Husky pre-commit hooks.
3. **Install Dependencies**
   Run the following command to install the project dependencies:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```

### Dont Forget to Edit

- Update the title in `index.html` file
- Update the name , description and author in `package.json` file
- Update the `public/manifest.webmanifest` file
- Update the `public/favicon.svg` file
- Atlast update this `README.md` file 😀

### Development

To start the development server, run:

```bash
yarn run dev
```

Then, visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/) in your browser. The generated files will be available in the `dist` directory, ready to be served.

### Deploying on Netlify

To deploy your application on Netlify:

1. Go to [Netlify](https://app.netlify.com/start).
2. Select your repository.
3. Follow the prompts, and your app will be live in a minute!

### Issues

If you encounter any issues, particularly with Husky, please check the following:

- Ensure that the pre-commit hooks are set up correctly.
- Consult the Husky documentation for troubleshooting tips.
