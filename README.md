
# Meal Planner Application

## Overview
This Meal Planner application helps users plan their meals by providing suggestions based on the day of the week, utilizing the TheMealDB API to fetch diverse and exciting meal recommendations.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Challenges and Solutions](#challenges-and-solutions)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Features
- Meal suggestions based on the day of the week
- Integration with TheMealDB API
- User-friendly interface for meal planning
- Dynamic recipe recommendations as well as ingredients.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- A modern web browser

## Installation

### Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Justine-bc/meal-planner.git
   cd meal-planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```
   REACT_APP_MEAL_DB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Docker Deployment (Optional)
1. Build the Docker image:
   ```bash
   docker build -t meal-planner .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 meal-planner
   ```

## Usage
1. Open the application in your web browser
2. Select the day of the week
3. Browse meal suggestions
4. Click on a meal to view detailed recipe information

## API Reference
- **TheMealDB API**: [Official Documentation](https://www.themealdb.com/api.php)
  - Endpoints used:
    - `/filter.php`: Retrieve meals by category
    - `/lookup.php`: Get detailed recipe information

## Deployment
### Web Server Deployment
1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `build` folder to your web server

### Load Balancer Configuration
- Ensure your load balancer is configured to distribute traffic across multiple server instances
- Use health check endpoints to monitor application availability

## Challenges and Solutions
During development, we encountered and resolved the following challenges:
- **API Rate Limiting**: Implemented caching mechanism to reduce API calls
- **Responsive Design**: Used CSS media queries to ensure mobile compatibility
- **State Management**: Utilized React hooks for efficient state management

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security Considerations
- Never commit sensitive information like API keys to version control
- Use environment variables for configuration
- Implement proper error handling and input validation

## Acknowledgements
- [TheMealDB](https://www.themealdb.com/) for providing the meal data API
- [React](https://reactjs.org/) for the web application framework
- [Axios](https://axios-http.com/) for API requests

## Contact
Your Name - Justine UMUHOZA

Mail to - u.justine@alustudent.com

Project Link - https://github.com/Justine-abc/meal-planner
