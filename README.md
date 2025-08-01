# Dabala Senior High School Website

A modern, responsive website for Dabala Senior High School built with .NET 9 Blazor Auto (WebAssembly and Server).

## 🏫 About

This website provides comprehensive information about Dabala Senior High School (DABASCO), including admission procedures, school facilities, student life, and contact information. The design is inspired by modern educational websites and features a professional, user-friendly interface.

## ✨ Features

### 🎨 Design & User Experience
- **Modern Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Professional Color Scheme** - Teal (#008080) and Orange (#ff8c00) color palette
- **Interactive Elements** - Hover effects, smooth transitions, and animations
- **Font Awesome Icons** - Professional icons throughout the interface

### 📱 Pages & Content
- **Home Page** - Hero slider, core values, admission information, news, and projects
- **About Us** - School history, mission, vision, facilities, and leadership
- **Admission** - Requirements, procedures, online application form, and fees
- **Contacts** - Contact information, visiting hours, contact form, and location
- **PTA** - Parent-Teacher Association information, executive committee, and activities
- **Student Life** - Campus activities, sports, cultural events, and facilities

### 🔧 Technical Features
- **Blazor Auto Mode** - Hybrid WebAssembly and Server rendering for optimal performance
- **Interactive Components** - All pages use InteractiveAuto render mode
- **Progressive Web App (PWA)** - Service worker and manifest for offline capabilities
- **Contact Form** - Interactive form with validation and submission handling
- **Component-Based Architecture** - Modular, maintainable code structure
- **CSS Isolation** - Scoped styles for each component
- **Responsive Grid Layouts** - Modern CSS Grid and Flexbox
- **Form Validation** - Client-side validation with data annotations

## 🚀 Getting Started

### Prerequisites
- .NET 9.0 SDK or later
- Visual Studio 2022 or VS Code

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DabalaSeniorHighSchool
   ```

2. **Restore dependencies**
   ```bash
   dotnet restore
   ```

3. **Build the project**
   ```bash
   dotnet build
   ```

4. **Run the application**
   ```bash
   dotnet run
   ```

5. **Open in browser**
   Navigate to `http://localhost:5143`

## 🏗️ Project Structure

```
DabalaSeniorHighSchool/
├── Components/
│   ├── Layout/
│   │   ├── MainLayout.razor          # Main layout with navigation
│   │   └── MainLayout.razor.css      # Layout styles
│   ├── Pages/
│   │   ├── Home.razor                # Home page
│   │   ├── About.razor               # About us page
│   │   ├── Admission.razor           # Admission page
│   │   ├── Contacts.razor            # Contact page
│   │   ├── PTA.razor                 # PTA page
│   │   ├── StudentLife.razor         # Student life page
│   │   └── *.razor.css               # Page-specific styles
│   ├── App.razor                     # Root component
│   └── Routes.razor                  # Routing configuration
├── wwwroot/
│   ├── images/                       # Image assets
│   ├── app.css                       # Global styles
│   └── favicon.png                   # Site favicon
├── Program.cs                        # Application entry point
├── DabalaSeniorHighSchool.csproj     # Project file
└── DabalaSeniorHighSchool.sln        # Solution file
```

## 🎨 Design System

### Colors
- **Primary Teal**: #008080 (Navigation, headings, links)
- **Accent Orange**: #ff8c00 (Buttons, highlights, separators)
- **Background**: #f9f9f9 (Light gray background)
- **Text**: #333 (Dark gray for readability)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold, teal color
- **Body Text**: Regular weight, dark gray

### Components
- **Cards**: White background with subtle shadows
- **Buttons**: Rounded corners with hover effects
- **Forms**: Clean input fields with focus states
- **Navigation**: Fixed header with smooth scrolling

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with side-by-side content)
- **Tablet**: 768px - 1199px (Adjusted grid layouts)
- **Mobile**: < 768px (Stacked layout, mobile navigation)

## 🔧 Configuration

### Development
- **Environment**: Development
- **Port**: 5143 (configurable in launchSettings.json)
- **HTTPS**: Enabled for secure development

### Production
- **Environment**: Production
- **Error Handling**: Custom error pages
- **HSTS**: Enabled for security

## 📝 Content Management

The website content is managed through Razor components. To update content:

1. **Text Content**: Edit the corresponding `.razor` files
2. **Images**: Add images to `wwwroot/images/` directory
3. **Styles**: Modify the corresponding `.razor.css` files
4. **Navigation**: Update `MainLayout.razor` for menu changes

## 🚀 Deployment

### Local Development
```bash
dotnet run
```

### Production Build
```bash
dotnet publish -c Release
```

### Docker (Optional)
```bash
docker build -t dabala-school .
docker run -p 8080:80 dabala-school
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Dabala Senior High School. All rights reserved.

## 📞 Contact

For questions or support regarding this website:
- **School Email**: dabalaseniorhigh@gmail.com
- **Phone**: (+233) 0540306405
- **Address**: Box TS 33, Dabala, Volta Region, Ghana

---

**Built with ❤️ for Dabala Senior High School** 