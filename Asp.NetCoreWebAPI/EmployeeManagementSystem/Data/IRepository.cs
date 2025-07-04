﻿namespace EmployeeManagementSystem.Data
{
    public interface IRepository<T> where T : class
    {
        Task<List<T>> GetAll();
        Task<T> FindByIdAsync(int id);
        Task AddASync(T entity);
        void Update(T entity);
        Task DeleteAsync(int id);
         Task<int> SaveChangesAsync();

       
    }
}
