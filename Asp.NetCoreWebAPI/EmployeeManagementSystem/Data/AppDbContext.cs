using EmployeeManagementSystem.Entity;
using Microsoft.EntityFrameworkCore;
namespace EmployeeManagementSystem.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> option)
                : base(option)
        {

        }
        public DbSet<Employee> Employees {get;set;}
        public DbSet<Department> Departments {get;set;}
    }
}
