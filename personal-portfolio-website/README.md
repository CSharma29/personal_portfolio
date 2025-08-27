# personal-portfolio

This project is a personal portfolio web application built with React and TypeScript. It showcases the user's work, skills, and projects in a visually appealing manner.

## Project Structure

The project is organized as follows:

- **public/index.html**: The main HTML file that serves as the entry point for the web application. It includes a root div where the React app will be rendered.
- **src/App.tsx**: The main component of the application that sets up routing and includes other components such as the Header and Home page.
- **src/index.tsx**: The entry point for the React application that renders the App component into the root div of the index.html file.
- **src/components/Header.tsx**: A functional component that displays the navigation and branding for the portfolio.
- **src/pages/Home.tsx**: A functional component that serves as the landing page of the portfolio, showcasing the user's work and skills.
- **src/styles/App.css**: Contains the CSS styles for the application, including layout and design for the components.
- **src/types/index.ts**: Exports TypeScript interfaces and types used throughout the application, providing type safety for props and state.
- **package.json**: Configuration file for npm, listing dependencies, scripts, and metadata for the project.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options and files to include in the compilation.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- Responsive design
- Easy navigation
- Showcase of projects and skills
- Built with TypeScript for type safety

## License

This project is licensed under the MIT License.