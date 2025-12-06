# Employee Management System

A full-stack web application to manage employees and departments, with secure login and role-based access.

##  Technologies Used:

- Frontend: Angular  
- Backend: ASP.NET Core Web API  
- Database: SQL Server  
- Auth: JWT (JSON Web Token)

##  Features:

- Employee & Department CRUD operations  
- Role-based Authentication (Admin, Employee)  
- Profile Management with Image Upload  
- Search, Filter & Pagination

##  How to Run:

### Backend (ASP.NET Core)
1. Open `Asp.NetCoreWebAPI/EmployeeManagementSystem.sln` in Visual Studio  
2. Set the project as Startup  
3. Update `appsettings.json` with your SQL Server connection string  
4. Run the project  

### Frontend (Angular)
1. Navigate to `AngularFrontend` folder  
2. Run `npm install`  
3. Start the app with `ng serve`  

##  Default Credentials:

### Admin
- **Email:** `admin@test.com`  
- **Password:** `12345`  

### Employee
- **Email:** `emp1@gmail.com`  
- **Password:** `12345`

### Future Implementations

 **1. Leave Management Module**
- Employees can apply for leaves.
- Managers can approve or reject leave requests.
- Leave balance tracking and leave history.
- Email notification for approvals/rejections.

 **2. Attendance Management**
- Daily attendance marking.
- Monthly attendance reports.
- Integration with biometric systems for auto-attendance.

 **3. Payroll Management**
- Automatic salary calculation.
- Leave deductions, overtime, and bonuses.
- Generate downloadable salary slips (PDF).

 **4. Dashboard with Analytics**
- Overview of total employees, departments, and active users.
- Department-wise employee distribution chart.
- Monthly employee joining trends (Bar/Line charts).
- Recent activity logs (employee added/updated).



