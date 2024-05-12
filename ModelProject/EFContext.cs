﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelProject
{
    public class EFContext : IdentityDbContext<IdentityUser, IdentityRole, string>
    {
        public EFContext() { }




        public EFContext(DbContextOptions<EFContext> options)
            : base(options) { }

        private const string connectiostring = "Server=OUJ9ZLKN53\\SQLEXPRESS;Database=ForCRUDAngular;Trusted_Connection=True;TrustServerCertificate=True";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectiostring);
        }

        public DbSet<Product> Products { get; set; }
    }
}
