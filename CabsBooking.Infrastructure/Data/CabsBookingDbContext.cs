using System;
using System.Collections.Generic;
using System.Text;
using CabsBooking.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CabsBooking.Infrastructure.Data
{
    public class CabsBookingDbContext : DbContext
    {
        public CabsBookingDbContext(DbContextOptions<CabsBookingDbContext> options) : base(options)
        {

        }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Cab> Cabs { get; set; }
        public DbSet<BookingHistory> BookingHistories { get; set; }
        public DbSet<Place> Places { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Booking>(ConfigureBooking);
            modelBuilder.Entity<BookingHistory>(ConfigureHistory);
            modelBuilder.Entity<Cab>(ConfigureCab);
            modelBuilder.Entity<Place>(ConfigurePlace);
        }

        private void ConfigurePlace(EntityTypeBuilder<Place> builder)
        {
            builder.HasKey(p => p.PlaceId);
            builder.Property(p => p.PlaceName).HasMaxLength(30);
            builder.HasMany(p => p.BookingsFrom).WithOne(b => b.From).HasForeignKey(b => b.FromPlace).OnDelete(DeleteBehavior.Restrict);
            builder.HasMany(p => p.BookingsTo).WithOne(b => b.To).HasForeignKey(b => b.ToPlace).OnDelete(DeleteBehavior.Restrict);
            builder.HasMany(p => p.HistoriesFrom).WithOne(bh => bh.From).HasForeignKey(bh => bh.FromPlace).OnDelete(DeleteBehavior.Restrict);
            builder.HasMany(p => p.HistoriesTo).WithOne(bh => bh.To).HasForeignKey(bh => bh.ToPlace).OnDelete(DeleteBehavior.Restrict);
        }

        private void ConfigureCab(EntityTypeBuilder<Cab> builder)
        {
            builder.ToTable("CabTypes");
            builder.HasKey(c => c.CabTypeId);
            builder.Property(c => c.CabTypeName).HasMaxLength(30);
            builder.HasMany(c => c.Bookings).WithOne(b => b.Cab).HasForeignKey(b => b.CabTypeId);
            builder.HasMany(c => c.Histories).WithOne(bh => bh.Cab).HasForeignKey(bh => bh.CabTypeId);
        }

        private void ConfigureHistory(EntityTypeBuilder<BookingHistory> builder)
        {
            builder.ToTable("Bookings_history");
            builder.HasKey(bh => bh.Id);
            builder.Property(bh => bh.Email).HasMaxLength(50);
            builder.Property(bh => bh.BookingTime).HasMaxLength(5);
            builder.Property(bh => bh.PickupAddress).HasMaxLength(200);
            builder.Property(bh => bh.LandMark).HasMaxLength(30);
            builder.Property(bh => bh.PickupTime).HasMaxLength(5);
            builder.Property(bh => bh.ContactNo).HasMaxLength(25);
            builder.Property(bh => bh.Status).HasMaxLength(30);
            builder.Property(bh => bh.Comp_time).HasMaxLength(5);
            builder.Property(bh => bh.Feedback).HasMaxLength(1000);

        }

        private void ConfigureBooking(EntityTypeBuilder<Booking> builder)
        {
            builder.HasKey(b => b.Id);
            builder.Property(b => b.Email).HasMaxLength(50);
            builder.Property(b => b.BookingTime).HasMaxLength(5);
            builder.Property(b => b.PickupAddress).HasMaxLength(200);
            builder.Property(b => b.LandMark).HasMaxLength(30);
            builder.Property(b => b.PickupTime).HasMaxLength(5);
            builder.Property(b => b.ContactNo).HasMaxLength(25);
            builder.Property(b => b.Status).HasMaxLength(30);
        }
    }
}
