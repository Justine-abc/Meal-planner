# Meal Planner Application

This application helps users plan their meals by providing suggestions based on the day of the week. It uses the [TheMealDB API](https://www.themealdb.com/) to fetch meal data.

## Features
- Fetches meals based on the selected day.
- Displays meal images, names, and links to recipes.
- Simple and intuitive user interface.

## How to Run Locally
1. Clone this repository:
   ```bash
   git clone <your-repo-url>

   ### **2. Deploy the Application**

#### **Prepare for Deployment**
1. **Set up a deployment server**:
   Use the provided servers (`Web01`, `Web02`, and `Lb01`) for deployment.

2. **Install required software**:
   - **Nginx or Apache** for serving your files.
   - **Git** for pulling your repository.

3. **Package your application**:
   Place your `index.html`, `style.css`, and `script.js` in a deployable directory, such as `/var/www/meal-planner`.

---

#### **Deploy on Web Servers**
1. **Clone your repository on both Web01 and Web02**:
   ```bash
   git clone <your-repo-url> /var/www/meal-planner
Set up Nginx/Apache: For Nginx, create a configuration file like /etc/nginx/sites-available/meal-planner:

nginx
Copy code
server {
    listen 80;
    server_name <server-ip-or-domain>;

    root /var/www/meal-planner;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}