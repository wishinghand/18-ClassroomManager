using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Classroom.API.Models;

namespace Classroom.API.Infrastructure
{
    public class ClassroomDataContext : DbContext
    {
        public ClassroomDataContext() : base("ClassroomManager")
        {

        }

        public IDbSet<Assignment> Assignments { get; set; }
        public IDbSet<Project> Projects { get; set; }
        public IDbSet<Student> Students { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //compound key
            modelBuilder.Entity<Assignment>()
                        .HasKey(a => new { a.StudentId, a.ProjectId });

            //project has many assignments
            modelBuilder.Entity<Project>()
                        .HasMany(p => p.Assignments)
                        .WithRequired(a => a.Project)
                        .HasForeignKey(a => a.ProjectId);

            //student has many assignments
            modelBuilder.Entity<Student>()
                        .HasMany(s => s.Assignments)
                        .WithRequired(a => a.Student)
                        .HasForeignKey(a => a.StudentId);
        }
    }
}